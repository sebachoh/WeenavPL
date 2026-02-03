import { pool } from "../db.js";

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
