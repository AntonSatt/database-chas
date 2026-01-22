.mode box

SELECT Customer.FirstName, Customer.LastName, SUM(Invoice.Total)
FROM Customer
JOIN Invoice ON Customer.CustomerId = Invoice.CustomerId
GROUP BY Customer.CustomerId
ORDER BY SUM(Invoice.Total) DESC
LIMIT 3;

