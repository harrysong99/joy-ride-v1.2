// pull required dependencies
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// load input validation
const validateRegisterInput = require("../controllers/register");
const validateLoginInput = require("../controllers/login");
// load user functionalities
const userController = require("../controllers/userController");
// load user model
const User = require("../models/userModel");

// @route Get api/users/email/:email
// @desc Get user data
// @access Public
router.get("/email/:email", async (req, res) => {
  const email = req.params.email;
  console.log("request params: " + email);
  const createRes = await userController.getUserByEmail(email);
  return res.json(createRes);
});

// @route Get api/users/name
// @query name
// @desc Get user data
// @access Public
router.get("/", async (req, res) => {
  const name = req.query.name;
  console.log("request query: " + name);
  const createRes = await userController.getUserByName(name);
  return res.json(createRes);
});

// @route Get api/users/id/:id
// @query id
// @desc Get user data
// @access Public
router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  console.log("request params: " + id);
  const createRes = await userController.getUserById(id);
  return res.json(createRes);
});

// @route Get api/users/didSurvey/:id
// @desc Get user data
// @access Public
router.get("/didSurvey/:id", async (req, res) => {
  const userID = req.params.id;
  console.log("request params: " + userID);
  const createRes = await userController.getDidSurvey(userID);
  return res.json(createRes);
});

// @route Put api/users/location/:id/:location
// @desc update user data
// @access Public
router.put("/location/:id/:location", async (req, res) => {
  const userID = req.params.id;
  const location = req.params.location;
  console.log("request params: " + userID + ", " + location);
  const createRes = await userController.updateUserLocation(userID, location);
  return res.json(createRes);
});

// @route Put api/users/driver/:id/:driver
// @desc update user data
// @access Public
router.put("/driver/:id/:driver", async (req, res) => {
  const userID = req.params.id;
  const driver = req.params.driver;
  console.log("request params: " + userID + ", " + driver);
  const createRes = await userController.updateUserDriver(userID, driver);
  return res.json(createRes);
});

// @route Put api/users/serviceTime/:id/:serviceTime
// @desc update user data
// @access Public
router.put("/serviceTime/:id/:serviceTime", async (req, res) => {
  const userID = req.params.id;
  const serviceTime = req.params.serviceTime;
  console.log("request params: " + userID + ", " + serviceTime);
  const createRes = await userController.updateUserServiceTime(
    userID,
    serviceTime
  );
  return res.json(createRes);
});

// @route Put api/users/didSurvey/:id/:didSurvey
// @desc update user data
// @access Public
router.put("/didSurvey/:id/:didSurvey", async (req, res) => {
  const userID = req.params.id;
  const didSurvey = req.params.didSurvey;
  console.log("request params: " + userID + ", " + didSurvey);
  const createRes = await userController.updateDidSurvey(userID, didSurvey);
  return res.json(createRes);
});

// @route Put api/users/update
// @desc update user data
// @access Public
router.put("/update", async (req, res) => {
  const userData = req.body;
  console.log("request body: " + userData);
  const createRes = await userController.updateUser(userData);
  return res.json(createRes);
});

// @route Put api/users/everyDidSurvey
// @desc update user data
// @access Public
router.put("/everyDidSurvey", async (req, res) => {
  const createRes = await userController.updateEveryDidSurvey();
  return res.json(createRes);
});

// @route Delete api/users/:id
// @desc update user data
// @access Public
router.delete("/:id", async (req, res) => {
  const userID = req.params.id;
  console.log("request params: " + userID);
  const createRes = await userController.deleteUser(userID);
  return res.json(createRes);
});

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    console.log("unexpected error!: " + errors);
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        serviceTime: req.body.serviceTime,
        driver: req.body.driver,
        location: req.body.location,
        didSurvey: req.body.didSurvey,
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    console.log("unexpected error!: " + errors);
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
