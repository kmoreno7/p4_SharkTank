import { logic } from './logic.js';

function predictProbabilityOfOffer() {
    const outputs = logic.outputs; // need help referencing logic.js in order to pull outputs array

    console.log(outputs);

    x0 = outputs[2];
    x1 = outputs[3];
    x2 = outputs[4];
    
    if (outputs[1] === 'Automotive') {
      x3 = 1;
    } else if (outputs[1] === 'Business Services') {
      x4 = 1;
    } else if (outputs[1] === 'Children / Education') {
      x5 = 1;
    } else if (outputs[1] === 'Fashion / Beauty') {
      x6 = 1;
    } else if (outputs[1] === 'Fitness / Sports / Outdoors') {
      x7 = 1;
    } else if (outputs[1] === 'Food and Beverage') {
      x8 = 1;
    } else if (outputs[1] === 'Green/CleanTech') {
      x9 = 1;
    } else if (outputs[1] === 'Health / Wellness') {
      x10 = 1;
    } else if (outputs[1] === 'Lifestyle / Home') {
      x11 = 1;
    } else if (outputs[1] === 'Media / Entertainment') {
      x12 = 1;
    } else if (outputs[1] === 'Pet Products') {
      x13 = 1;
    } else if (outputs[1] === 'Software / Tech') {
      x14 = 1;
    } else if (outputs[1] === 'Travel') {
      x15 = 1;
    } else if (outputs[1] === 'Uncertain / Other') {
      x16 = 1;
    }

    if (outputs[0] === 'Female') {
      x17 = 1;
    } else if (outputs[0] === 'Male') {
      x18 = 1;
    } else if (outputs[0] === "Mixed Team")
      x19 = 1;
    };

    const inputs = [x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, x19];
    const meanValues = [288964.211, 13.2273684, 3409019.26, 0.00842105263, 0.00631578947, 0.113684211, 0.155789474, 0.105263158, 0.183157895, 0.0105263158,
    0.0421052632, 0.187368421, 0.0210526316, 0.0610526316, 0.080, 0.0105263158, 0.0147368421, 0.225263158, 0.604210526, 0.170526316]
    const varianceValues = [109772767000, 52.2725141, 21608963400000, 0.00835013850, 0.00627590028, 0.100760111, 0.131519114, 0.0941828255, 0.149611080, 
    0.0104155125, 0.0403324100, 0.152261496, 0.0206094183, 0.0573252078, 0.07360, 0.0104155125, 0.0145196676, 0.174519668, 0.239140166, 0.141447091]

    // Scale X array with the same StandardScalar fitted .mean_ & sqrt(.var_) values
    const scaledX = [];
    for (let i = 0; i < inputs.length; i++) {
      const scaledValue = (inputs[i] - meanValues[i]) / Math.sqrt(varianceValues[i]);
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
    const linearPredictor = b0 + b1 * scaledX[0] + b2 * scaledX[1] + b3 * scaledX[2] + b4 * scaledX[3] + b5 * scaledX[4]
    + b6 * scaledX[5] + b7 * scaledX[6] + b8 * scaledX[7] + b9 * scaledX[8] + b10 * scaledX[9] + b11 * scaledX[10]
    + b12 * scaledX[11] + b13 * scaledX[12] + b14 * scaledX[13] + b15 * scaledX[14] + b16 * scaledX[15] + b17 * scaledX[16]
    + b18 * scaledX[17] + b19 * scaledX[18] + b20 * scaledX[19];

    const p = 1 / (1 + Math.exp(-linearPredictor));
  
    // Return predicted probability of offer
    // return p;

// let prediction = document.getElementById('prediction')
// prediction.innerHTML = `Prediction here: ${predictionOutput}`
