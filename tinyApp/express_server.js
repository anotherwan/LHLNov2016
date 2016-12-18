'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bcrypt = require('bcrypt')
const cookieSession = require('cookie-session')
const PORT = process.env.PORT || 3000
const CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const cookieParser = require('cookie-parser')
// app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  // maxAge: 24 * 60 * 60 * 1000
}))


let generateRandomString = function (length, chars) {
  let result = ''
  for (let i = length; i > 0; i--) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return result
}

app.set('view engine', 'ejs')

let urlDatabase = {
  'b2xVn2': {
    longURL: 'http://www.lighthouselabs.ca',
    user_id: 'user_123'
  },
  '9sm5xK': {
    longURL: 'http://www.google.com',
    user_id: 'user_456',
  },
  'fcXZaS': {
    longURL: 'http://localhost:8080/urls/fcXZaS',
    user_id: 'user_789'
  }
}

let usersDatabase = {
  'user_123':
  {
    id: 'user_123',
    email: 'user@example.com',
    password: bcrypt.hashSync('123', 10)
  },

  'user_456':
  {
    id: 'user_456',
    email: 'user2@example.com',
    password: bcrypt.hashSync('456', 10)
  }
}

app.get('/', (req, res) => {
  let checkThisUserID = req.session['user_id']
  if (!checkThisUserID){
    return res.redirect('/login')
  }
  let usersLinks = {}
  for (let shortURL in urlDatabase) {
    if (urlDatabase[shortURL]['user_id'] === checkThisUserID) {
      usersLinks[shortURL] = urlDatabase[shortURL]
    }
  }

  return res.render('urls_index', {
    urls: usersLinks,
    email: usersDatabase[checkThisUserID]['email']
  })
})


app.get('/urls/new', (req, res) => {
  if (!req.session['user_id']) {
    return res.redirect('/login')
  }
  return res.render('urls_new', {
    email: usersDatabase[req.session['user_id']]['email']
  })
})

app.post('/urls/new', (req, res) => {
  if (req.session['user_id'] !== usersDatabase[req.session['user_id']]['id']) {
    return res.redirect('/login')
  }
  urlDatabase[generateRandomString(6, CHARS)] = {
    longURL: req.body.longURL,
    user_id: req.session['user_id']
  }
  return res.redirect('/')
})

app.get('/urls/:shortURL', (req, res) => {
  if (!req.session['user_id']) {
    return res.redirect('/login')
  }
  if (urlDatabase[req.params.shortURL]['user_id'] !== req.session['user_id']) {
    return res.sendStatus(403)
  }
  return res.render('urls_show', {
    shortURL: req.params.shortURL,
    longURL: urlDatabase[req.params.shortURL]['longURL'],
    email: usersDatabase[req.session['user_id']]['email']
  })
})

app.get('/u/:shortURL', (req, res) => {
  let longURL = urlDatabase[req.params.shortURL]['longURL']
  return res.redirect(longURL)
})

app.get('/register', (req, res) => {
  return res.render('registration')
})

app.post('/register', (req, res) => {
  for (let user in usersDatabase) {
    if (req.body.email === user.email) {
      return res.sendStatus(400)
    } else if ((req.body.email.length === 0) || (req.body.password.length === 0)) {
      return res.sendStatus(400)
    }
  }
  let userRandomID = generateRandomString(8, CHARS)
  const hashed_password = bcrypt.hashSync(req.body.password, 10)
  usersDatabase[userRandomID] = {
    id: userRandomID,
    email: req.body.email,
    password: hashed_password
  }
  req.session['user_id'] = userRandomID
  return res.redirect('/')
})

app.get('/login', (req, res) => {
  return res.render('login')
})



app.post('/login', (req, res) => {
  const compareThisEmail = req.body.email
  const compareThisPassword = req.body.password
  let foundUser
  for (let userID in usersDatabase) {
    let user = usersDatabase[userID]
    if (user['email'] === compareThisEmail) {
      foundUser = user
    }
  }
  if (foundUser && bcrypt.compareSync(compareThisPassword, foundUser['password'])) {
    req.session.user_id = foundUser['id']
    return res.redirect('/')
  } else {
    return res.sendStatus(403)
  }
})

app.post('/logout', (req, res) => {
  // res.clearCookie('user_id')
  req.session.user_id = null
  return res.redirect('/')
})

app.post('/urls/:shortURL', (req, res) => {
  if (req.session['user_id'] !== usersDatabase[req.session['user_id']]['id']) {
    return res.redirect('/login')
  }
  if (urlDatabase[req.params.shortURL]['user_id'] !== req.session['user_id']) {
    return res.sendStatus(403)
  }
  urlDatabase[req.params.shortURL]['longURL'] = req.body.longURL
  return res.redirect('/')
})

app.post('/urls/:shortURL/delete', (req, res) => {
  if (req.session['user_id'] !== usersDatabase[req.session['user_id']]['id']) {
    return res.redirect('/login')
  }
  if (urlDatabase[req.params.shortURL]['user_id'] !== req.session['user_id']) {
    return res.sendStatus(403)
  }
  delete urlDatabase[req.params.shortURL]
  return res.redirect('/')
})



app.listen(PORT, () => {
  console.log(`Tiny App listening on port ${PORT}!`)
})
