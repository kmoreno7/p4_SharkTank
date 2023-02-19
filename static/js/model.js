function predictProbabilityOfOffer(dropdownValues) {
    // Make X array from dropdownValues
    let X = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //  see X_train in Python
    
    console.log(list);

    X[0] = dropdownValues['Initial Asking Amount']
    X[1] = dropdownValues['Initial Equity Offered']
    X[2] = dropdownValues['Initial Valuation']
    
    if (dropdownValues.Industry === 'Automotive') {
      X[3] = 1;
    } else if (dropdownValues.Industry === 'Business Services') {
      X[4] = 1;
    } else if (dropdownValues.Industry === 'Children / Education') {
      X[5] = 1;
    } else if (dropdownValues.Industry === 'Fashion / Beauty') {
      X[6] = 1;
    } else if (dropdownValues.Industry === 'Fitness / Sports / Outdoors') {
      X[7] = 1;
    } else if (dropdownValues.Industry === 'Food and Beverage') {
      X[8] = 1;
    } else if (dropdownValues.Industry === 'Green/CleanTech') {
      X[9] = 1;
    } else if (dropdownValues.Industry === 'Health / Wellness') {
      X[10] = 1;
    } else if (dropdownValues.Industry === 'Lifestyle / Home') {
      X[11] = 1;
    } else if (dropdownValues.Industry === 'Media / Entertainment') {
      X[12] = 1;
    } else if (dropdownValues.Industry === 'Pet Products') {
      X[13] = 1;
    } else if (dropdownValues.Industry === 'Software / Tech') {
      X[14] = 1;
    } else if (dropdownValues.Industry === 'Travel') {
      X[15] = 1;
    } else if (dropdownValues.Industry === 'Uncertain / Other') {
      X[16] = 1;
    }

    if (dropdownValues.gender === 'Female') {
      X[17] = 1;
    } else if (dropdownValues.gender === 'Male') {
      X[18] = 1;
    } else if (dropdownValues.gender === "Mixed Team")
      X[19] = 1;
    };



    // Scale X array with the same StandardScalar fitted .mean_ & sqrt(.var_) values
    const scaledX = [];
    for (let i = 0; i < X.length; i++) {
      const scaledValue = (X[i] - meanValues[i]) / Math.sqrt(varianceValues[i]);
      scaledX.push(scaledValue);
    };
  
    // Calculate predicted probability of offer using logistic regression model
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

    // ...
    const linearPredictor = b0 + b1 * scaledX[0] + b2 * scaledX[1] + b3 * scaledX[2] + b4 * scaledX[0] + b5 * scaledX[1]
    + b6 * scaledX[2] + b7 * scaledX[0] + b8 * scaledX[1] + b9 * scaledX[2] + b10 * scaledX[0] + b11 * scaledX[1]
    + b12 * scaledX[2] + b13 * scaledX[0] + b14 * scaledX[1] + b15 * scaledX[2] + b16 * scaledX[0] + b17 * scaledX[1]
    + b18 * scaledX[2] + b19 * scaledX[1] + b20 * scaledX[2];

    const p = 1 / (1 + Math.exp(-linearPredictor));
  
    // Return predicted probability of offer
    return p;

let prediction = document.getElementById('prediction')
prediction.innerHTML = `Prediction here: ${predictionOutput}`