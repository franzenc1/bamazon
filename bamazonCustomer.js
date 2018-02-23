var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

  queryProducts();

function queryProducts() {
  connection.query("SELECT * FROM products", function(error, results, fields){
    for (var i = 0; i < results.length; i++) {
      console.log(results[i].item_id + " | " + results[i].product_name + " | " + results[i].price)
    }
  });

inquirer.prompt([
          {
            type: "input",
            message: "What is the item number you would like to buy?",
            name: "buyItem"
          },

          {
            type: "input",
            message: "How many would you like to buy?",
            name: "buyAmount"
          }
          ]);

    then(function(response){
            console.log(response)

            if (response.buyAmount > products[response.buyItem].stock_quantity){
              console.log("Insufficient Quantity!")}
            else {
                products[response.buyItem].stock_quantity - response.buyAmount;
               console.log("Your total cost is: " + (response.buyAmount * response.price)) 

              }
            });

}



