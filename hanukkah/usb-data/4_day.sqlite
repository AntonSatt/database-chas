.mode box
.headers on
/*
Robert Morton │ 1999-07-08 │ 917-288-9635 │ Jamaica, NY 11435 tinder date likes buying PASTIRIES from noah's. 
Came by Robert by 5am with pastries that she just bought at noah's.

A few years back
Ok we have a BKY start of bakery items in the products.sky
lets see who bought cookies or very early 4 or 5am (got to his place at 5am).
Bought atleast 2 pastiries.

Renee Harmon - 607-231-3605

CREATE TABLE products (sku text,desc text,wholesale_cost decimal(10,2),dims_cm array);
CREATE TABLE customers (customerid integer,name text,address text,citystatezip text,birthdate text,phone text,timezone text,lat decimal(10,5),long decimal(10,5));
CREATE TABLE orders (orderid text,customerid text,ordered timestamp,shipped timestamp,total decimal(10,2),items array);
CREATE TABLE orders_items (orderid integer,sku text,qty integer,unit_price decimal(10,2));
*/

SELECT 
	customers.name,
	customers.phone,
	products.desc,
	orders.ordered,
	orders_items.qty
FROM 	customers
JOIN 	orders 		ON orders.customerid = customers.customerid
JOIN 	orders_items 	ON orders_items.orderid = orders.orderid
JOIN 	products	ON products.sku = orders_items.sku
WHERE
	SUBSTR(products.sku, 1, 3) = 'BKY'
	AND SUBSTR(orders.ordered, 12, 2) IN ('04', '05')
	AND orders_items.qty > 1
ORDER BY
	orders.ordered ASC
;	
