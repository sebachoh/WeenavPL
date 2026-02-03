import pg from "pg";

export const pool = new pg.Pool({
    user: "sebastianruizzuluaga",
    host: "localhost",
    database: "basededatos",
    password: "123456",
    port: 5432,
});