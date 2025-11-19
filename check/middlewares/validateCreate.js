export function validateCreate(req, res, next) {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Title and description required" });
  }
  next();
}
