.mode box
.headers on
/*
Cancer is the fourth sign of the zodiac, considered as governing the period from about June 22 to about July 22.
RAbbit years = 1999, 1987, 1975, 1963, 1951, 1939
Lives in the same area as  Joshua Peterson who lives in  Jamaica, NY 11435 

CREATE TABLE products (sku text,desc text,wholesale_cost decimal(10,2),dims_cm array);
CREATE TABLE customers (customerid integer,name text,address text,citystatezip text,birthdate text,phone text,timezone text,lat decimal(10,5),long decimal(10,5));
CREATE TABLE orders (orderid text,customerid text,ordered timestamp,shipped timestamp,total decimal(10,2),items array);
CREATE TABLE orders_items (orderid integer,sku text,qty integer,unit_price decimal(10,2));
*/ 

SELECT	DISTINCT
	customers.name,
	customers.birthdate AS bday,
	customers.phone,
	customers.citystatezip
FROM 	customers
WHERE
	SUBSTR(customers.birthdate, 1, 4) IN ('1939', '1951', '1963', '1975', '1987', '1999')
	AND SUBSTR(customers.birthdate, 6, 5) BETWEEN '06-22' AND '07-22'
	AND customers.citystatezip = 'Jamaica, NY 11435'
ORDER BY
	bday ASC
;
