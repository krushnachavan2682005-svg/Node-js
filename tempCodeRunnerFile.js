app.get("/dashboard", (req, res) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, "mysecretkey");
    res.json({ message: "Welcome to dashboard", user: verified });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }

});
