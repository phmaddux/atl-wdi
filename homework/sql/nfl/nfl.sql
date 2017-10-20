
1)SELECT * FROM teams;
2)SELECT stadium, head_coach FROM teams;
3)SELECT head_coach FROM teams WHERE conference = 'AFC' AND division = 'South';
4)SELECT COUNT(*) FROM players;

5)SELECT name, head_coach FROM teams WHERE conference ='NFC' AND division ='North' OR conference='AFC' AND division='East';
6)SELECT name FROM players ORDER BY salary DESC LIMIT 50;
7)SELECT AVG(salary) FROM players;
8)SELECT name, position FROM players  WHERE salary > 10000000;

9)SELECT name FROM players ORDER BY salary DESC LIMIT 1;
10)SELECT name, position, salary FROM players  WHERE salary > 10000000 ORDER BY salary ASC;
11)SELECT AVG(salary) FROM players WHERE position='DE';
12)SELECT players.name, teams.name FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'Buffalo Bills'
13)SELECT AVG(players.salary) FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'New York Giants';
14) (I am unsure how to do this one)