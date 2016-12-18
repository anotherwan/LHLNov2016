# class Person
#
#   def initialize(name)
#     @name = name
#   end
#
# end
#
# p = Person.new('L. Ron')
# puts p.name

class Person
  attr_reader :name
  def name
    @name
  end

  def

end

p = Person.new('L. Ron')
puts p.name
