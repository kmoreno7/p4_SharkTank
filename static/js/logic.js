let data = d3.csv('data/sharktank_data.csv').then(function(data) {
    console.log(data);

    let genders = data.map(i => i["Entrepreneur Gender"]);
    let genderValues = [...new Set(genders)];

    var optionMenu = d3.select('#dropdown1')
    for (let i = 0; i < genderValues.length; i++) {
        option = document.createElement('option');
        option.text = genderValues[i];
        optionMenu.append('option')
        .attr('value', genderValues[i])
        .text(genderValues[i]);
    }
});

let data2 = d3.csv('data/sharktank_data.csv').then(function(data2) {

    let industries = data2.map(i => i.Industry);
    let industryValues = [...new Set(industries)];

    industryValues.sort(function(a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });

    var optionMenu = d3.select('#dropdown2')
    for (let i = 0; i < industryValues.length; i++) {
        option = document.createElement('option');
        option.text = industryValues[i];
        optionMenu.append('option')
        .attr('value', industryValues[i])
        .text(industryValues[i]);
    }
});

let data3 = d3.csv('data/sharktank_data.csv').then(function(data3) {

    let askAmount = data3.map(i => i.ASK_Amount);
    let askAmountValues = [...new Set(askAmount)];

    askAmountValues.sort((a, b) => {
    const aValue = Number(a.replace(/\D/g, ''));
    const bValue = Number(b.replace(/\D/g, ''));
  
    if (aValue < bValue) {
        return -1;
    } else if (aValue > bValue) {
        return 1;
    } else {
        return 0;
    }
    });
    
    var optionMenu = d3.select('#dropdown3')
    for (let i = 0; i < askAmountValues.length; i++) {
        option = document.createElement('option');
        option.text = askAmountValues[i];
        optionMenu.append('option')
        .attr('value', askAmountValues[i])
        .text(askAmountValues[i]);
    }
});

let data4 = d3.csv('data/sharktank_data.csv').then(function(data4) {

    let askEquity = data4.map(i => i.ASK_Equity);
    let askEquityValues = [...new Set(askEquity)];

    askEquityValues.sort((c, d) => {
    const cValue = Number(c.replace(/\D/g, ''));
    const dValue = Number(d.replace(/\D/g, ''));
      
    if (cValue < dValue) {
        return -1;
    } else if (cValue > dValue) {
        return 1;
    } else {
        return 0;
    }
    });

    var optionMenu = d3.select('#dropdown4')
    for (let i = 0; i < askEquityValues.length; i++) {
        option = document.createElement('option');
        option.text = askEquityValues[i];
        optionMenu.append('option')
        .attr('value', askEquityValues[i])
        .text(askEquityValues[i]);
    }
});

let data5 = d3.csv('data/sharktank_data.csv').then(function(data5) {

    let royalty = data5.map(i => i['Royalty Deal?']);
    let royaltyOption = [...new Set(royalty)];

    var optionMenu = d3.select('#dropdown5')
    for (let i = 0; i < royaltyOption.length; i++) {
        option = document.createElement('option');
        option.text = royaltyOption[i];
        optionMenu.append('option')
        .attr('value', royaltyOption[i])
        .text(royaltyOption[i]);
    }
});

let data6 = d3.csv('data/sharktank_data.csv').then(function(data6) {

    let loan = data6.map(i => i['Loan?']);
    let loanOption = [...new Set(loan)];

    var optionMenu = d3.select('#dropdown6')
    for (let i = 0; i < loanOption.length; i++) {
        option = document.createElement('option');
        option.text = loanOption[i];
        optionMenu.append('option')
        .attr('value', loanOption[i])
        .text(loanOption[i]);
    }
});

let data7 = d3.csv('data/sharktank_data.csv').then(function(data7) {

    let sharks = data7.map(i => i['# Sharks']);
    let sharksAmount = [...new Set(sharks)];

    sharksAmount.sort(function(a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });

    var optionMenu = d3.select('#dropdown7')
    for (let i = 0; i < sharksAmount.length; i++) {
        option = document.createElement('option');
        option.text = sharksAmount[i];
        optionMenu.append('option')
        .attr('value', sharksAmount[i])
        .text(sharksAmount[i]);
    }
});

let data8 = d3.csv('data/sharktank_data.csv').then(function(data8) {

    let sharkDollars = data8.map(i => i['$ per shark']);
    let perShark = [...new Set(sharkDollars)];

    perShark.sort((e, f) => {
    const eValue = Number(e.replace(/\D/g, ''));
    const fValue = Number(f.replace(/\D/g, ''));
      
    if (eValue < fValue) {
        return -1;
    } else if (eValue > fValue) {
        return 1;
    } else {
        return 0;
    }
    });

    var optionMenu = d3.select('#dropdown8')
    for (let i = 0; i < perShark.length; i++) {
        option = document.createElement('option');
        option.text = perShark[i];
        optionMenu.append('option')
        .attr('value', perShark[i])
        .text(perShark[i]);
    }
});