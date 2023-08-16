\c yodlr

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id integer PRIMARY KEY,
    email text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    current_state text
);

INSERT INTO users (id, email, first_name, last_name, current_state)
VALUES
  (1, 'kyle@getyodlr.com', 'Kyle', 'White', 'active'),
  (2, 'jane@getyodlr.com', 'Jane', 'Stone', 'active'),
  (3, 'lilly@getyodlr.com', 'Lilly', 'Smith', 'pending'),
  (4, 'fred@getyodlr.com', 'Fred', 'Miles', 'pending'),
  (5, 'alex@getyodlr.com', 'Alexandra', 'Betts', 'pending');
