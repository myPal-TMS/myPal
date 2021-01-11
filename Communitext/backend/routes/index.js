const db = require("../DB_mod");
const { Category } = db.models;
const { check, validationResult } = require("express-validator");
/**
 * Express Web Framework module
 * @requires express
 */
const express = require("express");

/**
 * Express Router
 * @method Router
 */
const router = express.Router();


/**
 * Router for retrieving current Category
 * @method GET
 * @function authenticateUser - Get the user credentials 
 * @param {express.resquest}
 * @param {express.response}
 * @returns {Promise} from authenticateUser function. If resolve it will respond with the current user information in JSON format.
 */
router.get("/users", authenticateUser, async (req, res) => {
  const user = await User.findOne({
    where: { id: req.currentUser.id },
    attributes: [
      "id",
      "firstName",
      "lastName",
      "emailAddress",
    ]
  });
  if (user) {
    res.status(200).json({ user });
  } else {
    const error = new Error("Ops! Sorry, There is a problem in the server!");
    next(error);
  }
});


/**
 * Router for creating a new user
 * @method POST
 * @param {express.resquest}
 * @param {express.response}
 * @param {express.next}
 * @returns {Promise} If resolve it will create a new user and store it in the database. If it throws, find validation errors and print messages.
 */
router.post(
  "/users",
  [
    check("firstName")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please fill in your First Name'),
    check("lastName")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please fill in your Last Name'),
    check("emailAddress")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please fill in your Email Address')
      .isEmail()
      .withMessage('Please provide a valid Email Address')
      .custom( async value => {
        if(value) {
          const user = await User.findOne({
            where: { emailAddress: value }
          });
          if (user) {
            throw new Error('E-mail already in use');
          } else {
            return true;
          }
        }
      }),
    check("password")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please fill in a Password'),
    check("passwordConfirmation")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please Confirm your Password')
      .custom((value, { req }) => {
        // Only attempt to compare the `password` and `passwordConfirmation`
        // fields if they have values.
        if (value && req.body.password && value !== req.body.password) {
          throw new Error(
            "Password Confirmation doesn't match"
          );
        }
        // Return `true` so the default "Invalid value" error message
        // doesn't get returned
        return true;
      })
  ],
  async (req, res, next) => {
    // Attempt to get the validation result from the Request object.
    const errors = validationResult(req);

    // If there are validation errors...
    if (!errors.isEmpty()) {
      // Get a list of error messages.
      const errorMessages = errors.array().map(error => error.msg);

      // Return the validation errors to the client.
      errors.status = 400;
      errors.error = "Bad Request";
      errors.message = errorMessages;
      next(errors);
    } else {
      // Get the user from the request body.
      const user = req.body;

      // Hash the new user's password.
      user.password = bcryptjs.hashSync(user.password);
      try {
        await User.create({
          firstName: user.firstName,
          lastName: user.lastName,
          emailAddress: user.emailAddress,
          password: user.password
        });

        res.status(201).location('/').end();
      } catch (error) {
          next(error);
      }
    }
  }
);


module.exports = router;
