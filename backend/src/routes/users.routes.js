import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

// router.get("/auth", (req, res) => {
//     res.send("Hello World!");
// });

// Users
router.get("/users", async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);
});

router.get("/users/me", (req, res) => {
    res.send("Utilisateur actuel");
});

router.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    if (rows.length === 0) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.json(rows);
});

router.post("/users", async (req, res) => {
    const data = req.body;
    const { rows } = await pool.query("INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING *", [data.name, data.email, data.password_hash]);

    return res.json(rows[0]);
});

router.put("/users/:id", async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query("UPDATE users SET name = $2, password_hash = $3 WHERE id = $1 RETURNING *", [id, req.body.name, req.body.password_hash]);

    if (rows.length === 0) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    return res.json(rows);
});

router.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    const { rowCount } = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);

    if (rowCount === 0) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    return res.status(204).json({ message: "Utilisateur supprimé" });
});

// // Boats
// router.get("/boats", (req, res) => {
//     res.send("Hello World!");
// });

// router.get("/boats/:id", (req, res) => {
//     res.send("Hello World!");
// });

// // Telemetry
// router.get("/telemetry", (req, res) => {
//     res.send("Hello World!");
// });

// router.post("/telemetry", (req, res) => {
//     res.send("Hello World!");
// });

// // Alerts
// router.get("/alerts", (req, res) => {
//     res.send("Hello World!");
// });

// router.get("/alerts/:boatId", (req, res) => {
//     res.send("Hello World!");
// });



export default router;
