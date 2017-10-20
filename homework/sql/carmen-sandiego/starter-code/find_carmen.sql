SELECT name FROM country WHERE region = 'Southern Europe' ORDER BY population ASC LIMIT 1;
Returns: Vatican City State

SELECT language FROM countrylanguage WHERE countrycode = 'VAT';
Returns: Language: Italian

SELECT * FROM countrylanguage WHERE language = 'Italian' ORDER BY percentage DESC;
Returns: A list of countries. Only Countrycode SMR is 100%

SELECT name FROM country WHERE code = 'SMR';
Reutrns: San Marino

SELECT name FROM city WHERE countrycode = 'SMR';
Returns: two cities

SELECT * FROM city WHERE name LIKE 'Serr%';
Returns: two cities in different countries

-- Commit: Halfway there.