let salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
}

let companySalesData = [
  {
    name: 'Telus',
    province: 'BC',
    sales: [ 100, 200, 400 ]
  },
  {
    name: 'Bombardier',
    province: 'AB',
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: 'Telus',
    province: 'SK',
    sales: [ 500, 100 ]
  }
]

function salesTaxReport (salesData, taxRates) {
  let salesReport = {}

  salesData.forEach(singleSalesData => {
    let tempSalesSum = 0
    // console.log(singleSalesData['name'])
    // console.log(singleSalesData['province'])
    // console.log(singleSalesData['sales'])
    singleSalesData['sales'].forEach(sale => {
      tempSalesSum += sale
    })

    let tempTotalTaxes = tempSalesSum * (taxRates[singleSalesData['province']])
    // console.log(totalTaxes)
    let tempCompanyName = singleSalesData['name']
    if (!salesReport.hasOwnProperty(tempCompanyName)) {
      salesReport[tempCompanyName] = {
        totalSales: tempSalesSum,
        totalTaxes: tempTotalTaxes
      }
    } else {
      let newTotalSales = salesReport[tempCompanyName]['totalSales'] + tempSalesSum
      let newTotalTaxes = salesReport[tempCompanyName]['totalTaxes'] + tempTotalTaxes

      salesReport[tempCompanyName] = {
        totalSales: newTotalSales,
        totalTaxes: newTotalTaxes
      }

    }
  })

  return salesReport
}



console.log(salesTaxReport(companySalesData, salesTaxRates))