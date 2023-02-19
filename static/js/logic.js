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
    
    const filteredAskAmountValues = askAmountValues.filter((value) => {
        return value !== "";
    });

    var optionMenu = d3.select('#dropdown3')
    for (let i = 0; i < filteredAskAmountValues.length; i++) {
        option = document.createElement('option');
        option.text = filteredAskAmountValues[i];
        optionMenu.append('option')
        .attr('value', filteredAskAmountValues[i])
        .text(filteredAskAmountValues[i]);
    };
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

    const filteredAskEquityValues = askEquityValues.filter((value) => {
        return value !== "";
    });

    var optionMenu = d3.select('#dropdown4')
    for (let i = 0; i < filteredAskEquityValues.length; i++) {
        option = document.createElement('option');
        option.text = filteredAskEquityValues[i];
        optionMenu.append('option')
        .attr('value', filteredAskEquityValues[i])
        .text(filteredAskEquityValues[i]);
    }
});

let data5 = d3.csv('data/sharktank_data.csv').then(function(data5) {

    let valuation = data5.map(i => i['ASK_Valuation']);
    let valuationValues = [...new Set(valuation)];

    valuationValues.sort((e, f) => {
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

    const filteredValuationValues = valuationValues.filter((value) => {
        return value !== "";
    });

    var optionMenu = d3.select('#dropdown5')
    for (let i = 0; i < filteredValuationValues.length; i++) {
        option = document.createElement('option');
        option.text = filteredValuationValues[i];
        optionMenu.append('option')
        .attr('value', filteredValuationValues[i])
        .text(filteredValuationValues[i]);
    }
});

// select form 
let form = document.getElementById("dropdownChoices");

// add eventlistener that executes when submit button pressed
form.addEventListener("submit", function(event) {
    // prevent default behavior of submit - aka stop page from reloading
    // Ref: https://wesbos.com/javascript/05-events/prevent-default-and-form-events
    event.preventDefault();

    // executes this code instead of default behavior
    let outputs = document.getElementById('dropdown3').value;
    console.log(outputs);

    // insert model parameters into array and pass into function that returns prediction
    // model_array= [];
    // predictionOutput = predictProbabilityOfOffer(model_array)

    // place holder until function created and code above is used
    predictionOutput = 0.84

    // insert prediction into HTML
    let prediction = document.getElementById('prediction')
    prediction.innerHTML = `Prediction here: ${predictionOutput}`
});














// function gatherValues(){
//     console.log('text')
//     let form = document.getElementById("dropdownChoices");
//     console.log(form)

//     form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     let outputs = document.getElementById('dropdown3').value
//     console.log(outputs)
// })};







// var runModel = d3.select('#runPrediction')

// function logistic_prediction(X):
//     let p = 1 / 1 + 2.71**(-1*(intercept + coef*X[0] + ...)
//     return 'deal' if p >.5 else 'no deal'