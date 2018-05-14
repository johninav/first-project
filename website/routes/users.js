const express = require("express");
const router = express.Router();

const user = require("../controllers/user");

// Index a user
router.get("/userindex/:id?", user.list);

// Save user
router.post("/user", user.create);

// Edit a user
router.get("/user/:id?", user.edit);

// Update a user
router.put("/user/:id?", user.update);

// Delete a user
router.delete("/user/:id", user.delete);


module.exports = router;