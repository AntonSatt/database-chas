.mode box
.headers on
/*
A few year back still. 
She sold/gave away to a woman in Staten Island, wearing a noah's market sweatshirt
the woman got 10 or eleven cats = buying lots of cat food.
Woman, staten island, noah's market sweatshirt, lots of cats.

CREATE TABLE products (sku text,desc text,wholesale_cost decimal(10,2),dims_cm array);
CREATE TABLE customers (customerid integer,name text,address text,citystatezip text,birthdate text,phone text,timezone text,lat decimal(10,5),long decimal(10,5));
CREATE TABLE orders (orderid text,customerid text,ordered timestamp,shipped timestamp,total decimal(10,2),items array);
CREATE TABLE orders_items (orderid integer,sku text,qty integer,unit_price decimal(10,2));
*/

SELECT 
	customers.name,
	customers.citystatezip,
	customers.phone,
	products.desc,
	orders_items.qty
FROM 	customers
JOIN	orders 		ON CAST(orders.customerid AS INTEGER) = customers.customerid
JOIN 	orders_items 	ON orders_items.orderid = CAST(orders.orderid AS INTEGER)
JOIN 	products 	ON products.sku = orders_items.sku
WHERE 
	SUBSTR(customers.citystatezip, 1, 13) = 'Staten Island'
	AND orders_items.qty > 2
	AND products.desc LIKE '%Cat%'
GROUP BY 
	customers.name
;
