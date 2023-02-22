# Do We Have a Deal? Can You Predict If A Company/Product Pitch Would Succeed in Shark Tank?  
With this project, our group was interested in looking into predicting the outcome of a pitch made on the popular TV show Shark Tank. After doing an initial search, we found an Excel spreadsheet with data from seasons 1-10 to run a machine learning analysis on.

## Visualization
We created an interactive webpage using HTML and Javascript, where a usere can filter by different pitch requirements. Once the pitch requirements are met and the page returns a probabilty of the likelihood an offer would be made. 

## What is the probability that you could strike a deal with a Shark?
Our initial question was can you predict the probability of striking a deal with a shark based on certain criteria? 

## Technology & Methodology
- Google Colab 
- HTML
- JavaScript
- CSS

## Flow Chart

![ETL-Project (1)](https://github.com/kmoreno7/p4_SharkTank/blob/main/images/p4_etl.png)

## Data
Source: Kaggle 

Our data contains the follwing the information: 
- Company Name
- Ask Amount
- Requested Equity 
- Company Valuation 
- If A Deal Was Made 
- Industry
- Entrepreneur Gender (Male, Female, Mixed)

## ETL

There was a lot of data for Shark Tank India on kaggle but not much for the US version. Thus, we decieded to us another source for our csv. After research we stumbled across many articles that cited halleteco as their source for Shark Tank data. Essentially this is a [spread sheet](https://docs.google.com/spreadsheets/d/1Lr0gi_QJB_JU0lBMjJ7WiBRxA0loml1FlM-KlmKsaEY/edit#gid=0) where halleteco captured 10 seasons worth of data for Shark Tank . By Far the largest and most complete dataset that we could find.

## Machine Learning
Our team decided that the best model to use for our desired effect was a logistic regression. A process of modeling the probability of a discrete outcome given an input variable. In other words given a series of inputs what is the likelihood of an event occuring. 

### Data Preprocessing
The first step was to create a dataframe that only had the columns we were tested for (Columns mentioned in "Data" section of this readme). Then we dropped all the rows that had no data for Ask Amount as the purpose of going on shark tank is to secure an investment. Thus no ask amount means not investment. All data was then converted to numberic as one cannot pass a string through a logistic regression. On the same note logistic regression can not use categorical data, so columns "Deal", "Industry", and "Entrepreneur Gender" were all turned into indicator variables using .get_dummies in pandas. 

The jupyter notebook file used for cleaning the data can be found [here](https://github.com/kmoreno7/p4_SharkTank/blob/main/data/Cleaning_SharkTank_Data.ipynb).

### How is Data Split Between Training and Testing Groups


The train-test split is used to evaluate the performance of a machine learning algorithm, and it is typically used for classification or regression problems. In our case it was for the regression. Testing and training splits the data into two subsets. The first is used to fit the model, and it is referred to as training. Our training data was the 'Deal_Yes' column. The second portion is applied to the machine learning model and used to make predictions and compared to the expected value. In which case were the columns "ASK_Amount",	"ASK_Equity" "ASK_Valuation" and all the industry columns. We use sklearn to assign training and testing values to our X and Y variables, therefore, splitting them. The test size will contain 25% of the values while the train size will contain 75% as per the default parameters.

The jupyter notebook file used for machine learning can be found [here](https://github.com/kmoreno7/p4_SharkTank/blob/main/sharktank_machine_learning.ipynb).

## Deploying to webpage.

we created a webpage that has five drop downs. These drop downs allow the user to select inputs for five categories that affect likilhood of a deal. Once all five categories have been selected the user can hit the submit button that. The webpage return a likihood of getting a deal in the form of a decimal. Below that are a few charts with additional information about Shark Tank stats. For example, the industry that gets the most deals is Health / Wellness, while Business Services get the least. Moreover when looking at gender, women tend to get the most deals made. 

The code for the webpage is only enough code to make the model run but a more sophisticaed version of this webpage would deploy the model on a cloud server were the inputs could be sent rather than having the model hard coded onto the Javascript file itself. 
