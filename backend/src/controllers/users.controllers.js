import { pool } from "../db.js";

// Users Controllers

export const getUsers = async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM users");
    return res.json(rows);
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    if (rows.length === 0) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    return res.json(rows);
}

export const createUser = async (req, res) => {
    try {
        const data = req.body;
        const { rows } = await pool.query("INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING *", [data.name, data.email, data.password_hash]);

        return res.json(rows[0]);
    } catch (error) {
        console.log(error);
        if (error.code === "23505") {
            return res.status(400).json({ message: "L'utilisateur existe déjà" });
        }
        return res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query("UPDATE users SET name = $2, password_hash = $3 WHERE id = $1 RETURNING *", [id, req.body.name, req.body.password_hash]);

    if (rows.length === 0) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    return res.json(rows);
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const { rowCount } = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);

    if (rowCount === 0) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    return res.status(204).json({ message: "Utilisateur supprimé" });
}

// Boats Controllers

export const getBoats = async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM boats");
    return res.json(rows);
}

export const getBoatById = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM boats WHERE id = $1", [id]);

    if (rows.length === 0) {
        return res.status(404).json({ message: "Bateau non trouvé" });
    }
    return res.json(rows);
}

export const createBoat = async (req, res) => {
    try {
        const data = req.body;
        const { rows } = await pool.query("INSERT INTO boats (user_id, name, model, battery_capacity_kwh) VALUES ($1, $2, $3, $4) RETURNING *", [data.user_id, data.name, data.model, data.battery_capacity_kwh]);

        return res.json(rows[0]);
    } catch (error) {
        console.log(error);
        if (error.code === "23505") {
            return res.status(400).json({ message: "Le bateau existe déjà" });
        }
        return res.status(500).json({ message: "Erreur lors de la création du bateau" });
    }
}

export const updateBoat = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query("UPDATE boats SET name = $2, model = $3, battery_capacity_kwh = $4 WHERE id = $1 RETURNING *", [id, req.body.name, req.body.model, req.body.battery_capacity_kwh]);

    if (rows.length === 0) {
        return res.status(404).json({ message: "Bateau non trouvé" });
    }
    return res.json(rows);
}

export const deleteBoat = async (req, res) => {
    const { id } = req.params;
    const { rowCount } = await pool.query("DELETE FROM boats WHERE id = $1 RETURNING *", [id]);

    if (rowCount === 0) {
        ß
        return res.status(404).json({ message: "Bateau non trouvé" });
    }
    return res.status(204).json({ message: "Bateau supprimé" });
}

// Telemetry Controllers

