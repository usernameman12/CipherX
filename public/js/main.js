async function encrypt() {
    const text = document.getElementById("text").value;
    const mode = document.getElementById("mode").value;

    const res = await fetch("/api/encrypt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, mode }),
    });

    const data = await res.json();
    document.getElementById("result").innerText = data.encrypted || "Error!";
}

async function decrypt() {
    const encryptedText = document.getElementById("encryptedText").value;
    const mode = document.getElementById("mode").value;

    const res = await fetch("/api/decrypt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ encryptedText, mode }),
    });

    const data = await res.json();
    document.getElementById("result").innerText = data.decrypted || "Error!";
}
