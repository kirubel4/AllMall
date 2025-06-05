import app from "./app";

const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
