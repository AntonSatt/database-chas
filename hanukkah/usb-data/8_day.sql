.mode box
.headers on

/*
clues here: 
he owns an entire set of Noah’s collectibles

CREATE TABLE products (sku text,desc text,wholesale_cost decimal(10,2),dims_cm array);
CREATE TABLE customers (customerid integer,name text,address text,citystatezip text,birthdate text,phone text,timezone text,lat decimal(10,5),long decimal(10,5));
CREATE TABLE orders (orderid text,customerid text,ordered timestamp,shipped timestamp,total decimal(10,2),items array);
CREATE TABLE orders_items (orderid integer,sku text,qty integer,unit_price decimal(10,2));
*/

SELECT 	
	customers.name AS name,
	customers.phone AS phone,
	COUNT(customers.name) AS total_col_buys
FROM	customers
JOIN	orders USING (customerid)
JOIN	orders_items USING (orderid)
JOIN	products USING (sku)
WHERE	desc LIKE '%Noah%'
GROUP BY name
ORDER BY total_col_buys DESC

LIMIT 1

;
