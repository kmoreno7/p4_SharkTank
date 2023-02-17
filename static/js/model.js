function predictProbabilityOfOffer(dropdownValues) {
    // Make X array from dropdownValues
    const X = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //  see X_train in Python
    if (dropdownValues.teamGender === 'Boy') {
        X[0] = 1;
    } else if 
  
    // Scale X array with the same StandardScalar fitted .mean_ & sqrt(.var_) values
    const scaledX = [];
    for (let i = 0; i < X.length; i++) {
      const scaledValue = (X[i] - meanValues[i]) / Math.sqrt(varianceValues[i]);
      scaledX.push(scaledValue);
    }
  
    // Calculate predicted probability of offer using logistic regression model
    const b0 = 2.08186377; // intercept coefficient
    const b1 = -0.12332179; // coefficient for first feature
    const b2 = -0.05705083; // coefficients for b2-b28
    const b3 = -0.10227162;
    const b4 = 1.45787102;
    const b5 = 2.51812118;
    const b6 = 2.20683939;
    const b7 = 1.76619086;
    const b8 = 1.69488506;
    const b9 = 1.86065528;
    const b10 = 1.08895858;
    const b11 = 1.30553467;
    const b12 = 0.20444403;
    const b13 = 0.0766768;
    const b14 = 0.15351856;
    const b15 = -0.34088604;
    const b16 = -0.3367533;
    const b17 = 0.18266493;
    const b18 = 0.07718583;
    const b19 = 0.26271284;
    const b20 = 0.02146857;
    const b21 = 0.01403449;
    const b22 = 0.19208892;
    const b23 = -0.05803648;
    const b24 = -0.10044296;
    const b25 = -0.06801242;
    const b26 = -0.06915345;
    const b27 = -0.18364362;
    const b28 = 0.31559769;

    // ...
    const linearPredictor = b0 + b1 * scaledX[0] + b2 * scaledX[1] + b3 * scaledX[2];
    const p = 1 / (1 + Math.exp(-linearPredictor));
  
    // Return predicted probability of offer
    return p;
  }

let prediction = document.getElementById('prediction')
prediction.innerHTML = `Prediction here: ${predictionOutput}`