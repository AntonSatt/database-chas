.mode box
.headers on
/*
Cousin = maybe same lastname? (Wilson) 
Shops every sale at noah's
clips every coupon at noah's. 
Loses money for noah's?
Maybe doesn't live in the same citystatezip as Nicole Wilson (Staten Island) because she need to use subway?

CREATE TABLE products (sku text,desc text,wholesale_cost decimal(10,2),dims_cm array);
CREATE TABLE customers (customerid integer,name text,address text,citystatezip text,birthdate text,phone text,timezone text,lat decimal(10,5),long decimal(10,5));
CREATE TABLE orders (orderid text,customerid text,ordered timestamp,shipped timestamp,total decimal(10,2),items array);
CREATE TABLE orders_items (orderid integer,sku text,qty integer,unit_price decimal(10,2));
*/

SELECT
	customers.name,
	customers.phone,
	SUM((orders_items.unit_price - products.wholesale_cost) * orders_items.qty) AS store_total_profit
FROM 	customers
JOIN	orders 		ON CAST(orders.customerid AS INTEGER) = customers.customerid
JOIN	orders_items 	ON orders_items.orderid = CAST(orders.orderid AS INTEGER)
JOIN	products 	ON products.sku = orders_items.sku
GROUP BY 
	customers.name
HAVING 	store_total_profit < -10
ORDER BY 
	store_total_profit ASC
;

-- notes, tried first to use WHERE but doesn't work with Aggregate Functions so learned to use HAVING instead that needs to be after GROUP By
