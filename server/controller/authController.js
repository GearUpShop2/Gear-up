const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');

exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate input using Joi
        const schema = Joi.object({
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });

        const { error } = schema.validate({ username, email, password });
        if (error) {
            return res.status(400).json({ message: "Validation error", error: error.details });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists");
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the new user to the database
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input using Joi
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });

        const { error } = schema.validate({ email, password });
        if (error) {
            return res.status(400).json({ message: "Validation error", error: error.details });
        }

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("User not found");
        }

        // Compare the provided password with the stored hashed password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send("Invalid password");
        }

        const token = jwt.sign(
            { _id: user._id, role: user.role },
            "your-secret-key",
            { expiresIn: "10h" }
          );
        res.cookie("accessToken", token, { httpOnly: true });

        res.json({  authToken: token ,role: user.role});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
exports.logins = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input using Joi
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });

        const { error } = schema.validate({ email, password });
        if (error) {
            return res.status(400).json({ message: "Validation error", error: error.details });
        }

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("User not found");
        }

        // Compare the provided password with the stored hashed password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send("Invalid password");
        }

        const token = jwt.sign(
            { _id: user._id, role: user.role },
            "your-secret-key",
            { expiresIn: "10h" }
          );
        res.cookie("accessToken", token, { httpOnly: true });

        res.json({  authToken: token ,role: user.role});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find({ isDeleted: false });
  
      if (!users || users.length === 0) {
        return res.status(404).json({ message: 'No active users found' });
      }
  
      res.json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};


  exports.softDeleteUser = async (req, res) => {
    try {
      const userId = req.params.userId;
  
      // Find the user by ID
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Soft delete the user by updating isDeleted to true
      user.isDeleted = true;
  
      // Save the updated user
      const updatedUser = await user.save();
  
      res.json({ message: 'User soft deleted successfully', user: updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };



  exports.getUserProfile = async (req, res) => {
    try {
      const userId = req.user._id; 
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const userProfile = {
        username: user.username,
        email: user.email,
      };
  
      res.json(userProfile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



  exports.editUserProfile = async (req, res) => {
    try {
      const userId = req.user._id; 
  
      const { username, email, newPassword } = req.body;
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.username = username || user.username;
      user.email = email || user.email;
  
      if (newPassword) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        user.password = hashedPassword;
      }
  
      const updatedUser = await user.save();
  
      const userProfile = {
        username: updatedUser.username,
        email: updatedUser.email,
      };
  
      res.json(userProfile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };