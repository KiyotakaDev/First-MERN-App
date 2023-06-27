import jwt from 'jsonwebtoken'
import { config as dotenv } from 'dotenv'

dotenv()
const SECRET_TOKEN = process.env.SECRET_TOKEN

export const authRequired = (req, res, next) => {
  try {
    const { token } = req.cookies

    if (!token) return res.status(400).json({ message: "Invalid credentials" })
    jwt.verify(token, SECRET_TOKEN, (err, user) => {
      if (err) return res.status(400).json({ message: "Invalid credentials" })
      // Creating a new property in req and aasigning user's value (req.propertyName = value)
      req.user = user
    })
    next()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}