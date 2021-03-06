CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR (240),
    password VARCHAR (240),
    username UNIQUE VARCHAR (50),
    runs int
);

CREATE TABLE leaderboard (
    userusername VARCHAR(240) REFERENCES users(username),
    floors int,
    score int,
    death VARCHAR (360)
);

CREATE TABLE monsters (
    id SERIAL PRIMARY KEY,
    name VARCHAR (240),
    class VARCHAR (50),
    health INT,
    weaknesses VARCHAR (30),
    resistances VARCHAR (30),
    attack1name VARCHAR (120),
    attack1type VARCHAR (30),
    attack1damage INT,
    attack2name VARCHAR (120),
    attack2type VARCHAR (30),
    attack2damage INT,
    xpReward INT,
    scoreReward INT,
    username VARCHAR (240)
);