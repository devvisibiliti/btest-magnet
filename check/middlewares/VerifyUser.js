import jwt from "jsonwebtoken";

const VerifyUser = (req, res, next) => {
  const token = req.cookies.auth;

  if (!token) {
    return res.status(401).json({ message: "unauthenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "unauthenticated" });
  }
};

export default VerifyUser;
