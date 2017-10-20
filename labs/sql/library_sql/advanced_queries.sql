-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.
SELECT name, title
FROM authors
JOIN books ON authors.id = books.author_id
WHERE name = 'George R.R. Martin';

SELECT * FROM authors
JOIN books ON authors.id = books.author_id
WHERE UPPER(authors.name) = UPPER('George R.R. Martin')

-- Find all fields (book and author related) for all books written by Milan Kundera.
SELECT name, title
FROM authors
JOIN books ON authors.id = books.author_id
WHERE name = 'Milan Kundera';

-- Find all books written by an author from China or the UK.

SELECT * FROM authors
INNER JOIN authors ON books.author_id = authors.id
WHERE authors.nationality = 'China OR United Kingdom';

-- Find out how many books Albert Camus wrote.

-- Find out how many books were written by US authors.

-- Find all books written after 1930 by authors from Argentina.

-- Find all books written before 1980 by authors not from the US.

-- Find all authors whose names start with 'J'.

-- Find all books whose titles contain 'the'.

-- Find all authors who have written books with that start with the letter 'N'.
