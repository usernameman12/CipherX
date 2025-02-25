const express = require("express");
const { aesEncrypt, xorObfuscate } = require("../utils/cipher");
const router = express.Router();

router.post("/", (req, res) => {
    const { text, mode } = req.body;
    if (!text || !mode) return res.status(400).json({ error: "Missing parameters" });

    let encrypted;
    if (mode === "aes") encrypted = aesEncrypt(text);
    else if (mode === "xor") encrypted = xorObfuscate(text);
    else return res.status(400).json({ error: "Invalid mode" });

    res.json({ encrypted });
});

module.exports = router;
    