const express = require("express");
const { aesDecrypt, xorDeobfuscate } = require("../utils/cipher");
const router = express.Router();

router.post("/", (req, res) => {
    const { encryptedText, mode } = req.body;
    if (!encryptedText || !mode) return res.status(400).json({ error: "Missing parameters" });

    let decrypted;
    if (mode === "aes") decrypted = aesDecrypt(encryptedText);
    else if (mode === "xor") decrypted = xorDeobfuscate(encryptedText);
    else return res.status(400).json({ error: "Invalid mode" });

    res.json({ decrypted });
});

module.exports = router;
