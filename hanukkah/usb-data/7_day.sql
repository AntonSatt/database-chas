.mode box
.headers on

/*
Clues: 
a cute guy
She dropped an item she bought, he got the same thing = they bought same item but different color.
They bought same item, which has a color, they swapped color. 

Check what item Sherri Long bought that got different colors. 
Check who else bought same item but different color the same day(around same time). 

CREATE TABLE products (sku text,desc text,wholesale_cost decimal(10,2),dims_cm array);
CREATE TABLE customers (customerid integer,name text,address text,citystatezip text,birthdate text,phone text,timezone text,lat decimal(10,5),long decimal(10,5));
CREATE TABLE orders (orderid text,customerid text,ordered timestamp,shipped timestamp,total decimal(10,2),items array);
CREATE TABLE orders_items (orderid integer,sku text,qty integer,unit_price decimal(10,2));
*/

SELECT 
	customers.name AS name,
	customers.phone AS phone,
	products.desc AS desc,
	orders.ordered AS date
FROM customers
JOIN orders USING (customerid)
JOIN orders_items USING (orderid)
JOIN products USING (sku)

--WHERE	name LIKE 'Sherri Long'
WHERE	desc REGEXP 'Jersey|Poster|Action Figure'
AND	date REGEXP '2018-12-31 12|2020-06-28 11|2021-10-07 14|2022-04-23 14'
AND	desc LIKE '%Poster%'
AND	date LIKE '%2018-12-31 12:26%'
--AND	name LIKE '%Carlos%'

ORDER BY date
;


