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

    let ask = data3.map(i => i.ASK_Amount);
    let askValues = [...new Set(ask)];

    askValues.sort((a, b) => {
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
    for (let i = 0; i < askValues.length; i++) {
        option = document.createElement('option');
        option.text = askValues[i];
        optionMenu.append('option')
        .attr('value', askValues[i])
        .text(askValues[i]);
    }
});