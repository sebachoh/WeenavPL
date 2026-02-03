import { Router } from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getBoats,
    getBoatById,
    createBoat,
    updateBoat,
    deleteBoat,
    getTelemetry,
    getTelemetryByBoat,
    postTelemetry
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

// Boats
router.get("/boats", getBoats);
router.get("/boats/:id", getBoatById);
router.post("/boats", createBoat);
router.put("/boats/:id", updateBoat);
router.delete("/boats/:id", deleteBoat);

// Telemetry
router.get("/telemetry/:id", getTelemetryByBoat);
router.post("/telemetry", postTelemetry);


// Alerts
// router.get("/alerts", (req, res) => {
//     res.send("Hello World!");
// });

// router.get("/alerts/:boatId", (req, res) => {
//     res.send("Hello World!");
// });



export default router;
