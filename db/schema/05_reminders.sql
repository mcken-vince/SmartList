-- Drop and recreate Widgets table (Example)

DROP TABLE IF EXISTS reminder_types CASCADE;
CREATE TABLE reminder_types (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS reminders CASCADE;
CREATE TABLE reminders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  type_id INTEGER REFERENCES reminder_types(id),
  name VARCHAR(255) NOT NULL,
  image_link TEXT,
  description TEXT,
  url TEXT, 
  time DATE NOT NULL
);