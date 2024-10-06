const express = require('express');
const cors = require('cors');
const app = express();
const port = 3010;


app.use(cors());

app.get('/', (req, res) => {
 res.send("BD1.5 - Assignment 2")
});

//Calculate the Returns of the Stocks added
app.get('/calculate-returns', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = parseFloat(req.query.quantity);

  // Calculate the return value
  const returnValue = (marketPrice - boughtAt) * quantity;
  res.send(returnValue.toString());
});

// Endpoint 2: Calculate the Total Returns
app.get('/total-returns', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);

  // Calculate the total returns
  const totalReturnValue = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnValue.toString());
});

// Endpoint 3: Calculate the Return Percentage
app.get('/calculate-return-percentage', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);

  // Calculate the return percentage
  const returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

// Endpoint 4: Calculate the Total Return Percentage
app.get('/total-return-percentage', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);

  // Calculate the total return percentage
  const totalReturns = stock1 + stock2 + stock3 + stock4;
  const totalBoughtAt = (stock1 / (stock1 * 0.5)) + (stock2 / (stock2 * 0.5)) + (stock3 / (stock3 * 0.5)) + (stock4 / (stock4 * 0.5)); // Example boughtAt calculation
  const totalReturnPercentage = (totalReturns / totalBoughtAt) * 100;
  res.send(totalReturnPercentage.toString());
});

// Endpoint 5: Identify the Status of Stocks based on their Return Value
app.get('/status', (req, res) => {
  const returnPercentage = parseFloat(req.query.returnPercentage);

  // Determine if the stock is in profit or loss
  const status = returnPercentage > 0 ? 'Profit' : 'Loss';
  res.send(status);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
