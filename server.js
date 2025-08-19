const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
const SECRET_KEY = "aufamap-secret";
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Baca data users & ODP
let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
let odpData = JSON.parse(fs.readFileSync("odpData.json", "utf-8"));

// Middleware verifikasi token
function verifyToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "Token tidak ada" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Token tidak valid" });
    req.user = user;
    next();
  });
}

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const foundUser = users.find(u => u.username === username);
  if (!foundUser) return res.status(400).json({ message: "User tidak ditemukan" });

  const isPasswordValid = bcrypt.compareSync(password, foundUser.password);
  if (!isPasswordValid) return res.status(400).json({ message: "Password salah" });

  const token = jwt.sign({ id: foundUser.id, role: foundUser.role }, SECRET_KEY, { expiresIn: "2h" });
  res.json({ token, role: foundUser.role });
});

// Ambil semua titik ODP
app.get("/odp", (req, res) => {
  res.json(odpData);
});

// Tambah titik ODP (hanya admin)
app.post("/odp", verifyToken, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Hanya admin yang bisa menambah titik" });
  }
  const newODP = {
    id: odpData.length + 1,
    name: req.body.name,
    coords: req.body.coords
  };
  odpData.push(newODP);
  fs.writeFileSync("odpData.json", JSON.stringify(odpData, null, 2));
  res.json({ message: "ODP berhasil ditambahkan", data: newODP });
});

app.listen(PORT, () => {
  console.log(`Backend berjalan di http://localhost:${PORT}`);
});
