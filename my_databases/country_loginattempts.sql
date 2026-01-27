-- This query shows what countries tries to login and how many times.
-- Using the anton_database.sql file/data.
SELECT 		Countries.Country, 
		COUNT(LoginAttempts.CountryId) 
FROM 		LoginAttempts 
JOIN 		Countries USING (CountryId) 
GROUP BY 	LoginAttempts.CountryId 
ORDER BY 	COUNT(LoginAttempts.CountryId) DESC
;
