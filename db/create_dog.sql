INSERT INTO dogBreed (name, activity_level, description)
VALUES
($1, $2, $3)
returning *;