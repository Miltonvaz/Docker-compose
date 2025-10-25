DO
$do$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'postgrest') THEN
      CREATE USER postgrest WITH ENCRYPTED PASSWORD 'postgres';
   END IF;
END
$do$;

DO
$do$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'Milton_Vazquez') THEN
      CREATE DATABASE "Milton_Vazquez" OWNER postgrest;
   END IF;
END
$do$;

GRANT ALL PRIVILEGES ON DATABASE "Milton_Vazquez" TO postgrest;

\c "Milton_Vazquez"

CREATE TABLE IF NOT EXISTS estudiantes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO estudiantes (name, description)
VALUES ('Milton Vazquez', 'Estudiante');
