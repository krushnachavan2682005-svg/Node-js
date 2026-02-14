const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());

app.use(session({
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 } // 1 minute
}));

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "1234") {
    req.session.user = email;
    return res.json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// Protected Route
app.get("/dashboard", (req, res) => {
    
  console.log("Full Session Object:", req.session);
  if (!req.session.user) {
    return res.status(401).json({ message: "Please login first" });
  }

  res.json({ message: "Welcome " + req.session.user });
});

// Logout Route
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Logged out successfully" });
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
