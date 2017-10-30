CREATE TABLE dogBreeds {
    dogBreed_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    activity_level VARCHAR(20),
    description TEXT

};

CREATE TABLE catBreeds {
    catBreed_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    activity_level VARCHAR(20),
    description TEXT

};

CREATE TABLE rabbitBreeds {
    rabbitBreed_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    activity_level VARCHAR(20),
    description TEXT

};


-- Datatypes in SQL databases dictate what kind of information can be added to the database. It's important that each
-- entry to a database has its own key, so most databases will start with an id row. The term 'serial' tells SQL to generate a new
-- incrementing id number for every addition to the table. Primary key informs SQL that this id is intended to be the primary
-- identifier for each individual entry. I also used the varchar datatype to record textual information about the different animal
-- breeds. The parentheses next to varchar refers to how many characters you are willing to accept into the entry. This is good if you
-- do not want the user to be able to enter an excessive amount of characters. For my description row, I used the text datatype. The text datatype
-- gives the user liberty to enter as much as they would like, so hopefully my users will enter enthusiastic descriptions of each animal breed.
-- Integers and booleans are other common data types, among others.