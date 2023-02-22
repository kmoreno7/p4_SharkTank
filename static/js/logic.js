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
    outputs = []
    let output1 = document.getElementById('dropdown1').value;
    outputs.push(output1);
    let output2 = document.getElementById('dropdown2').value;
    outputs.push(output2);    
    let output3 = document.getElementById('dropdown3').value;
    output3 = Number(output3.replace(/[$,]/g, ""));
    outputs.push(output3);
    let output4 = document.getElementById('dropdown4').value;
    output4 = parseInt(output4).toFixed(3) / 100;
    outputs.push(output4);
    let output5 = document.getElementById('dropdown5').value;
    output5 = Number(output5.replace(/[$,]/g, ""));
    outputs.push(output5);
  
    console.log(outputs);
  
    x0 = outputs[2];
    x1 = outputs[3];
    x2 = outputs[4];
  
    if (outputs[1] === 'Automotive') {
        x3 = 1;
        x4 = 0;
        x5 = 0;
        x6 = 0;
        x7 = 0;
        x8 = 0;
        x9 = 0;
        x10 = 0;
        x11 = 0;
        x12 = 0;
        x13 = 0;
        x14 = 0;
        x15 = 0;
        x16 = 0;
      } else if (outputs[1] === 'Business Services') {
        x3 = 0;
        x4 = 1;
        x5 = 0;
        x6 = 0;
        x7 = 0;
        x8 = 0;
        x9 = 0;
        x10 = 0;
        x11 = 0;
        x12 = 0;
        x13 = 0;
        x14 = 0;
        x15 = 0;
        x16 = 0;
      } else if (outputs[1] === 'Children / Education') {
        x3 = 0;
        x4 = 0;
        x5 = 1;
        x6 = 0;
        x7 = 0;
        x8 = 0;
        x9 = 0;
        x10 = 0;
        x11 = 0;
        x12 = 0;
        x13 = 0;
        x14 = 0;
        x15 = 0;
        x16 = 0;
      } else if (outputs[1] === 'Fashion / Beauty') {
        x3 = 0;
        x4 = 0;
        x5 = 0;
        x6 = 1;
        x7 = 0;
        x8 = 0;
        x9 = 0;
        x10 = 0;
        x11 = 0;
        x12 = 0;
        x13 = 0;
        x14 = 0;
        x15 = 0;
        x16 = 0;
      } else if (outputs[1] === 'Fitness / Sports / Outdoors') {
        x3 = 0;
        x4 = 0;
        x5 = 0;
        x6 = 0;
        x7 = 1;
        x8 = 0;
        x9 = 0;
        x10 = 0;
        x11 = 0;
        x12 = 0;
        x13 = 0;
        x14 = 0;
        x15 = 0;
        x16 = 0;
      } else if (outputs[1] === 'Food and Beverage') {
        x3 = 0;
        x4 = 0;
        x5 = 0;
        x6 = 0;
        x7 = 0;
        x8 = 1;
        x9 = 0;
        x10 = 0;
        x11 = 0;
        x12 = 0;
        x13 = 0;
        x14 = 0;
        x15 = 0;
        x16 = 0;
      } else if (outputs[1] === 'Green/CleanTech') {
        x3 = 0;
        x4 = 0;
        x5 = 0;
        x6 = 0;
        x7 = 0;
        x8 = 0;
        x9 = 1;
        x10 = 0;
        x11 = 0;
        x12 = 0;
        x13 = 0;
        x14 = 0;
        x15 = 0;
        x16 = 0;
      } else if (outputs[1] === 'Health / Wellness') {
        x3 = 0;
        x4 = 0;
        x5 = 0;
        x6 = 0;
        x7 = 0;
        x8 = 0;
        x9 = 0;
        x10 = 1;
        x11 = 0;
        x12 = 0;
        x13 = 0;
        x14 = 0;
        x15 = 0;
        x16 = 0;
      } else if (outputs[1] === 'Lifestyle / Home') {
        x3 = 0;
        x4 = 0;
        x5 = 0;
        x6 = 0;
        x7 = 0;
        x8 = 0;
        x9 = 0;
        x10 = 0;
        x11 = 1;
        x12 = 0;
        x13 = 0;
        x14 = 0;
        x15 = 0;
        x16 = 0;
      } else if (outputs[1] === 'Media / Entertainment') {
        x3 = 0;
        x4 = 0;
        x5 = 0;
        x6 = 0;
        x7 = 0;
        x8 = 0;
        x9 = 0;
        x10 = 0;
        x11 = 0;
        x12 = 1;
        x13 = 0;
        x14 = 0;
        x15 = 0;
        x16 = 0;
      } else if (outputs[1] === 'Pet Products') {
        x3 = 0;
        x4 = 0;
        x5 = 0;
        x6 = 0;
        x7 = 0;
        x8 = 0;
        x9 = 0;
        x10 = 0;
        x11 = 0;
        x12 = 0;
        x13 = 1;
        x14 = 0;
        x15 = 0;
        x16 = 0;
      } else if (outputs[1] === 'Software / Tech') {
        x3 = 0;
        x4 = 0;
        x5 = 0;
        x6 = 0;
        x7 = 0;
        x8 = 0;
        x9 = 0;
        x10 = 0;
        x11 = 0;
        x12 = 0;
        x13 = 0;
        x14 = 1;
        x15 = 0;
        x16 = 0;
      } else if (outputs[1] === 'Travel') {
        x3 = 0;
        x4 = 0;
        x5 = 0;
        x6 = 0;
        x7 = 0;
        x8 = 0;
        x9 = 0;
        x10 = 0;
        x11 = 0;
        x12 = 0;
        x13 = 0;
        x14 = 0;
        x15 = 1;
        x16 = 0;
      } else if (outputs[1] === 'Uncertain / Other') {
        x3 = 0;
        x4 = 0;
        x5 = 0;
        x6 = 0;
        x7 = 0;
        x8 = 0;
        x9 = 0;
        x10 = 0;
        x11 = 0;
        x12 = 0;
        x13 = 0;
        x14 = 0;
        x15 = 0;
        x16 = 1;
    };
    
    if (outputs[0] === 'Female') {
        x17 = 1;
        x18 = 0;
        x19 = 0;
    } else if (outputs[0] === 'Male') {
        x17 = 0;
        x18 = 1;
        x19 = 0;
    } else if (outputs[0] === 'Mixed Team') {
        x17 = 0;
        x18 = 0;
        x19 = 1;
    };
  
    let inputs = [x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, x19];
    const meanValues = [288964.211, 13.2273684, 3409019.26, 0.00842105263, 0.00631578947, 0.113684211, 0.155789474, 0.105263158, 0.183157895, 0.0105263158,
    0.0421052632, 0.187368421, 0.0210526316, 0.0610526316, 0.080, 0.0105263158, 0.0147368421, 0.225263158, 0.604210526, 0.170526316]
    const varianceValues = [109772767000, 52.2725141, 21608963400000, 0.00835013850, 0.00627590028, 0.100760111, 0.131519114, 0.0941828255, 0.149611080, 
    0.0104155125, 0.0403324100, 0.152261496, 0.0206094183, 0.0573252078, 0.07360, 0.0104155125, 0.0145196676, 0.174519668, 0.239140166, 0.141447091]
  
    let scaledX = [];
    for (let i = 0; i < inputs.length; i++) {
      const scaledValue = (inputs[i] - meanValues[i]) / Math.sqrt(varianceValues[i]);
      scaledX.push(scaledValue);
    };
  
    const b0 = 0.3326039; // intercept coefficient
    const b1 = -0.07630718; // coefficient for first feature
    const b2 = -0.35676028; // coefficients for b2-b19
    const b3 = -0.12421937;
    const b4 = 0.41684977;
    const b5 = 0.03185517;
    const b6 = 0.03955223;
    const b7 = -0.26187454;
    const b8 = 0.02489356;
    const b9 = 0.03446122;
    const b10 = 0.11974947;
    const b11 = 0.02437165;
    const b12 = 0.08312125;
    const b13 = 0.10935225;
    const b14 = 0.02253039;
    const b15 = -0.05124994;
    const b16 = -0.17549381;
    const b17 = -0.14936309;
    const b18 = 0.09520573;
    const b19 = -0.08826022;
    const b20 = 0.00900906;
  
    let linearPredictor = b0 + b1 * scaledX[0] + b2 * scaledX[1] + b3 * scaledX[2] + b4 * scaledX[3] + b5 * scaledX[4]
    + b6 * scaledX[5] + b7 * scaledX[6] + b8 * scaledX[7] + b9 * scaledX[8] + b10 * scaledX[9] + b11 * scaledX[10]
    + b12 * scaledX[11] + b13 * scaledX[12] + b14 * scaledX[13] + b15 * scaledX[14] + b16 * scaledX[15] + b17 * scaledX[16]
    + b18 * scaledX[17] + b19 * scaledX[18] + b20 * scaledX[19];
  
    const p = 1 / (1 + Math.exp(-linearPredictor));
    console.log(p);
  
    let prediction = document.getElementById('prediction')
    prediction.innerHTML = `Prediction here: ${p.toFixed(3)}`
  });