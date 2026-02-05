CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE boats (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    model VARCHAR(255) CHECK (model IN ('KRONOS', 'ARION')),
    battery_capacity_kwh DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
);

CREATE TABLE telemetry (
    id SERIAL PRIMARY KEY,
    boat_id INTEGER NOT NULL,
    voltage DECIMAL(10,2) NOT NULL,
    current DECIMAL(10,2) NOT NULL,
    power_kw DECIMAL(10,2) NOT NULL,
    soc DECIMAL(10,2) NOT NULL,
    temperature DECIMAL(10,2) NOT NULL,
    speed DECIMAL(10,2) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_boat
        FOREIGN KEY (boat_id)
        REFERENCES boats(id)
        ON DELETE CASCADE
);

ALTER TABLE boats ADD COLUMN year INTEGER;