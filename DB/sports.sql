DROP TABLE IF EXISTS sports_tb;

CREATE TABLE sports_tb (
 sport_id serial ,
 city varchar(40),
 sports_type varchar(40), 
 team_name varchar(40)
);

INSERT INTO sports_tb (city, sports_type, team_name) VALUES 
('Seattle', 'Football', 'Seahawks'),
('Pittsburgh', 'Football', 'Steelers'),
('Nashville', 'Hockey', 'Predators'),
('Washington DC', 'Baseball', 'Nationals');