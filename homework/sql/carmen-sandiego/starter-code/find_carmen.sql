1
SELECT name FROM country WHERE region = 'Southern Europe' ORDER BY population ASC LIMIT 1;
Returns: Vatican City State

2
SELECT language FROM countrylanguage WHERE countrycode = 'VAT';
Returns: Language: Italian

3
SELECT * FROM countrylanguage WHERE language = 'Italian' ORDER BY percentage DESC;
Returns: A list of countries. Only Countrycode SMR is 100%

SELECT name FROM country WHERE code = 'SMR';
Reutrns: San Marino

4
SELECT name FROM city WHERE countrycode = 'SMR';
Returns: two cities

SELECT * FROM city WHERE name LIKE 'Serr%';
Returns: two cities in different countries

-- Commit: Halfway there.
5
SELECT capital FROM country WHERE code = 'BRA';
returns: 211

SELECT name FROM city WHERE id = '211';
returns: Brasï¿½lia 
-- (What?)

6
SELECT name FROM city WHERE name LIKE %Bras%
Returns Error
-- Not sure what went wrong