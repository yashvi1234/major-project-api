const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/EducationLoan", (request, response) => {
    const EducationLoan = [
        ['1', 'HDFC', '9', 'https://www.hdfcbank.com/', '/assets/images/hdfc-logo.jpg'],
        ['2', 'Canara Bank', '11.35', 'https://canarabank.com/', '/assets/images/canara-bank-logo.png'],
        ['3', 'Kotak', '11.5', 'https://www.kotak.com/en/home.html', '/assets/images/kotak-logo.jpeg'],
        ['4', 'SBI', '8.30', 'https://www.onlinesbi.sbi/', '/assets/images/sbi-logo.png'],
        ['5', 'Bandhan Bank', '10.25', 'https://bandhanbank.com/', '/assets/images/bandhan-bank.jpeg'],
        ['6', 'Bank of Baroda', '8.65', 'https://www.bankofbaroda.in/', 'public\assets\images\bank-of-barods.jpeg'],
        ['7', 'Axis Bank', '15', 'https://www.axisbank.com/', '/assets/images/axis-bank-logo.png'],
        ['8', 'PNB', '10.25', 'https://www.pnbindia.in/', '/assets/images/pnblogo.jpeg'],
        ['9', 'HSBC', '9.25', 'https://www.hsbc.co.in/', '/assets/images/hsbc-logo.png'],
        ['10', 'ICICI', '9.85', 'https://www.icicibank.com/', '/assets/images/icici-logo.jpeg'],
        ['11', 'PNS', '9', 'https://punjabandsindbank.co.in/', '/assets/images/pns-logo.jpeg'],
        ['12', 'City Union Bank', '14', 'https://www.cityunionbank.com/', '/assets/images/city-union-bank-logo.jpeg']
    ];
    
    response.send(EducationLoan);
});

app.get("/PersonalLoan", (request, response) => {
    const PersonalLoan = [
            ['1', 'HDFC', '10.50', 'https://www.hdfcbank.com/', '/assets/images/hdfc-logo.jpg'],
            ['2', 'Canara Bank', '10.95', 'https://canarabank.com/', '/assets/images/canara-bank-logo.png'],
            ['3', 'Kotak', '10.50', 'https://www.kotak.com/en/home.html', '/assets/images/kotak-logo.jpeg'],
            ['4', 'SBI', '11.30', 'https://www.onlinesbi.sbi/', '/assets/images/sbi-logo.png'],
            ['5', 'Bandhan Bank', '4.00', 'https://bandhanbank.com/', '/assets/images/bandhan-bank.jpeg'],
            ['6', 'Bank of Baroda', '12.85', 'https://www.bankofbaroda.in/', '/assets/images/bank-of-baroda.jpeg'],
            ['7', 'Axis Bank', '10.65', 'https://www.axisbank.com/', '/assets/images/axis-bank-logo.png'],
            ['8', 'PNB', '10.40', 'https://www.pnbindia.in/', '/assets/images/pnblogo.jpeg'],
            ['9', 'HSBC', '9.75', 'https://www.hsbc.co.in/', '/assets/images/hsbc-logo.png'],
            ['10', 'ICICI', '10.80', 'https://www.icicibank.com/', '/assets/images/icici-logo.jpeg'],
            ['11', 'PNS', '10.40', 'https://punjabandsindbank.co.in/', '/assets/images/pns-logo.jpeg'],
            ['12', 'City Union Bank', '9.70', 'https://www.cityunionbank.com/', '/assets/images/city-union-bank-logo.jpeg']
          ];
    
    response.send(PersonalLoan);
});

app.get("/HomeLoan", (request, response) => {
    const HomeLoan = [
        ['1', 'HDFC', '8.70', 'https://www.hdfcbank.com/', '/assets/images/hdfc-logo.jpg'],
        ['2', 'Canara Bank', '6.90', 'https://canarabank.com/', '/assets/images/canara-bank-logo.png'],
        ['3', 'Kotak', '8.70', 'https://www.kotak.com/en/home.html', '/assets/images/kotak-logo.jpeg'],
        ['4', 'SBI', '8.50', 'https://www.onlinesbi.sbi/', '/assets/images/sbi-logo.png'],
        ['5', 'Bandhan Bank', '9.16', 'https://bandhanbank.com/', '/assets/images/bandhan-bank.jpeg'],
        ['6', 'Bank of Baroda', '8.65', 'https://www.bankofbaroda.in/', '/assets/images/bank-of-baroda.jpeg'],
        ['7', 'Axis Bank', '8.75', 'https://www.axisbank.com/', '/assets/images/axis-bank-logo.png'],
        ['8', 'PNB', '6.95', 'https://www.pnbindia.in/', '/assets/images/pnblogo.jpeg'],
        ['9', 'HSBC', '8.75', 'https://www.hsbc.co.in/', '/assets/images/hsbc-logo.png'],
        ['10', 'ICICI', '9.25', 'https://www.icicibank.com/', '/assets/images/icici-logo.jpeg'],
        ['11', 'PNS', '8.50', 'https://punjabandsindbank.co.in/', '/assets/images/pns-logo.jpeg'],
        ['12', 'City Union Bank', '8.25', 'https://www.cityunionbank.com/', '/assets/images/city-union-bank-logo.jpeg']
    ];
    
    response.send(HomeLoan);
});

app.get("/VehicleLoan", (request, response) => {
    const VehicleLoan = [
        ['1', 'HDFC', '7.50', 'https://www.hdfcbank.com/', '/assets/images/hdfc-logo.jpg'],
        ['2', 'Canara Bank', '8.70', 'https://canarabank.com/', '/assets/images/canara-bank-logo.png'],
        ['3', 'Kotak', '7.70', 'https://www.kotak.com/en/home.html', '/assets/images/kotak-logo.jpeg'],
        ['4', 'SBI', '8.65', 'https://www.onlinesbi.sbi/', '/assets/images/sbi-logo.png'],
        ['5', 'Bandhan Bank', '7.50', 'https://bandhanbank.com/', '/assets/images/bandhan-bank.jpeg'],
        ['6', 'Bank of Baroda', '8.85', 'https://www.bankofbaroda.in/', '/assets/images/bank-of-baroda.jpeg'],
        ['7', 'Axis Bank', '9.30', 'https://www.axisbank.com/', '/assets/images/axis-bank-logo.png'],
        ['8', 'PNB', '7.55', 'https://www.pnbindia.in/', '/assets/images/pnblogo.jpeg'],
        ['9', 'HSBC', '8', 'https://www.hsbc.co.in/', '/assets/images/hsbc-logo.png'],
        ['10', 'ICICI', '7.50', 'https://www.icicibank.com/', '/assets/images/icici-logo.jpeg'],
        ['11', 'PNS', '8.75', 'https://punjabandsindbank.co.in/', '/assets/images/pns-logo.jpeg'],
        ['12', 'City Union Bank', '12.25', 'https://www.cityunionbank.com/', '/assets/images/city-union-bank-logo.jpeg']
    ];
    
    response.send(VehicleLoan);
});

app.get("/GoldLoan", (request, response) => {
    const GoldLoan = [
        ['1', 'HDFC', '8.50', 'https://www.hdfcbank.com/', '/assets/images/hdfc-logo.jpg'],
        ['2', 'Canara Bank', '7.65', 'https://canarabank.com/', '/assets/images/canara-bank-logo.png'],
        ['3', 'Kotak', '8.00', 'https://www.kotak.com/en/home.html', '/assets/images/kotak-logo.jpeg'],
        ['4', 'SBI', '8.50', 'https://www.onlinesbi.sbi/', '/assets/images/sbi-logo.png'],
        ['5', 'Bandhan Bank', '8.75', 'https://bandhanbank.com/', '/assets/images/bandhan-bank.jpeg'],
        ['6', 'Bank of Baroda', '8.70', 'https://www.bankofbaroda.in/', '/assets/images/bank-of-baroda.jpeg'],
        ['7', 'Axis Bank', '17.00', 'https://www.axisbank.com/', '/assets/images/axis-bank-logo.png'],
        ['8', 'PNB', '9.25', 'https://www.pnbindia.in/', '/assets/images/pnblogo.jpeg'],
        ['9', 'HSBC', '10.50', 'https://www.hsbc.co.in/', '/assets/images/hsbc-logo.png'],
        ['10', 'ICICI', '8.99', 'https://www.icicibank.com/', '/assets/images/icici-logo.jpeg'],
        ['11', 'PNS', '9.25', 'https://punjabandsindbank.co.in/', '/assets/images/pns-logo.jpeg'],
        ['12', 'City Union Bank', '9.70', 'https://www.cityunionbank.com/', '/assets/images/city-union-bank-logo.jpeg']
    ];
    
    response.send(GoldLoan);
});