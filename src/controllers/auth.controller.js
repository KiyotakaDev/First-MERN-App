import User from '../models/auth.model.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body
  
    const passwordHash = await bcrypt.hash(password, 12)
  
    const newUser = new User({
      username,
      email,
      password: passwordHash
    })
    const userSaved = await newUser.save()
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
