INSERT INTO basket (users_id, films_id) VALUES
    ( (SELECT id from users WHERE first_name='Mickey'),     (SELECT id from films WHERE name='Deadpool') );
