CREATE TABLE bamazon;

USE bamazon;

CREATE TABLE Products (
	item_id INTEGER NOT NULL,
	product_name varchar(50) NOT NULL,
	department_name varchar (50) NOT NULL,
	price DECIMAL(4,2) NOT NULL,
	stock_quantity INTEGER(10) NOT NULL
);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (
	19823,
	'Microwave',
	'Kitchen',
	19.99,
	50
	);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (
	37472,
	'coffee table',
	'Home Furnishing',
	89.99,
	10
	);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (
	13728,
	'TV',
	'Electronics',
	50.00,
	10
	);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (
	57382,
	'sandals',
	'Shoes',
	8.99,
	23
	);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (
	99827,
	'Football',
	'Sports',
	11.99,
	8
	);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (
	37272,
	"men's watch",
	'Accessories',
	52.99,
	20
	);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (
	27373,
	'Grill',
	'Patio & Garden',
	73.00,
	5
	);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (
	27364,
	'Tooth Brush',
	'Personal Care',
	1.99,
	26
	);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (
	19823,
	'Food & Beverage',
	'Cereal',
	6.99,
	10
	);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (
	48273,
	'Beauty',
	'Mascara',
	14.99,
	55
	);


