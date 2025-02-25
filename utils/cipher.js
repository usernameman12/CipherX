const crypto = require("crypto");

const AES_KEY = crypto.randomBytes(32);
const AES_IV = crypto.randomBytes(16);

function aesEncrypt(text) {
    const cipher = crypto.createCipheriv("aes-256-cbc", AES_KEY, AES_IV);
    return cipher.update(text, "utf8", "hex") + cipher.final("hex");
}

function aesDecrypt(encryptedText) {
    const decipher = crypto.createDecipheriv("aes-256-cbc", AES_KEY, AES_IV);
    return decipher.update(encryptedText, "hex", "utf8") + decipher.final("utf8");
}

function xorObfuscate(text) {
    const key = crypto.createHash("sha256").update(new Date().toISOString().slice(0, 16)).digest()[0];
    return Buffer.from(text).map(byte => byte ^ key).toString("hex");
}

function xorDeobfuscate(encryptedText) {
    const key = crypto.createHash("sha256").update(new Date().toISOString().slice(0, 16)).digest()[0];
    return Buffer.from(encryptedText, "hex").map(byte => byte ^ key).toString();
}

module.exports = { aesEncrypt, aesDecrypt, xorObfuscate, xorDeobfuscate };
