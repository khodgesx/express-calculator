const express = require('express')
const app = express()

const PORT = 3000;



app.get("/calc/:num1/:num2", function(req,res){
    const result = parseInt(req.params.num1) + parseInt(req.params.num2)
    res.send(`The result is ${result}`)
})

// app.get('/someroute', (req, res) => {
//     console.log('req.query: ', req.query);
//     res.send('someroute accessed')
// })

app.get('/calcquery/:num1/:num2', (req, res) => {
    // res.json({params:req.params, query:req.query})
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    const operation = req.query.operation.toLowerCase();
    let result;
    if (operation === "add") {
        result = num1 + num2;
    }else if(operation === "subtract"){
        result = num1 - num2;
    }else if(operation === "multiply"){
        result = num1 * num2;
    } else if (operation === "divide") {
        result = num1 / num2;
    } else if (operation === "exponent") {
        result = num1 ** num2;
    }
    res.send(`The result is ${result}`)
});


app.listen(PORT, () => {
    console.log(`app is running on port:  ${PORT}`)
})



  