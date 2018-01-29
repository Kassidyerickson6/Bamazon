var mysql = require("mysql");
var inquirer = require("inquirer");

// creates the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // username
  user: "root",

  // password
  password: "",
  database: "bamazon"
});


// Purchase function will prompt the user for the item/quantity they would like to purchase
function Purchase() {

	// this prompts the user to select an item using the item ID. 
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Enter the Item ID for the item you would like to purchase.',	
		},
		// this prompts the user to choose a quantity of the item.
		{
			type: 'input',
			name: 'quantity',
			message: 'How many would you like?',
		}
		//.then function makes sure that we have everything we need before moving on. Takes the user's answer in as a parameter.
	]).then(function(answer) {
		
		// variables created for the item and quantity which takes the user input, item_id, and quantity. 
		var item = answer.item_id;
		var quantity = answer.quantity;

		// Query db to confirm that the given item ID exists in the desired quantity. This selects from the product table with no WHERE coditions specified.
		var queryConfirm = 'SELECT * FROM products WHERE ?';

		connection.query(queryConfirm, {item_id: item}, function(err, data) {
			if (err) throw err;

			// If the user has selected an invalid item ID, data array will be empty

			if (data.length === 0) {
				console.log('Invalid Item ID. ');
				Inventory();

			} else {
				var productData = data[0];


				// If the quantity requested by the user is in stock
				if (quantity <= productData.stock_quantity) {
					console.log('Congratulations, the product you requested is in stock!');

					// Construct the updating query string
					var updateQueryConfirm = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;


					// Update the inventory
					connection.query(updateQueryConfirm, function(err, data) {
						if (err) throw err;

						console.log('Your oder has been placed! Your total is $' + productData.price * quantity);
	
						// End the database connection
						connection.end();
					})
				} else {
					console.log('Insufficient quantity!');

					Inventory();
				}
			}
		})
	})
}

// Inventory will retrieve the current inventory from the database and output it to the console
function Inventory() {


	// Construct the db query string
	queryConfirm = 'SELECT * FROM products';

	// Make the db query
	connection.query(queryConfirm, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].item_id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			strOut += 'Department: ' + data[i].department_name + '  //  ';
			strOut += 'Price: $' + data[i].price + '\n';

			console.log(strOut);
		}

	  	//Prompt the user for item/quantity they would like to purchase
	  	Purchase();
	})
}


function runBamazon() {

	// Display the available inventory
	Inventory();
}

// Run the application logic
runBamazon();