import { Router } from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/users.controllers.js";

const router = Router();

// router.get("/auth", (req, res) => {
//     res.send("Hello World!");
// }); partie authentification 

// Users Routes

// router.get("/users/me", (req, res) => {
//     res.send("Utilisateur actuel");
// }); il faut etre authentifié et ce partie est en cours de developpement hehehehe :) //

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

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
