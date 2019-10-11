const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
	res.send('Im in /routes/index.js!')
});

router.get("/test", (req, res) => {
	res.send('Im in /routes/index.js TEST!')
});

module.exports = router;
