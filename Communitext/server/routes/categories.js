const db = require("../DB_mod");
const { Categories } = db.models;
const { check, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const authenticateUser = require("../auth");

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
 * Router for retrieving current user
 * @method GET
 * @function authenticateUser - Get the user credentials 
 * @param {express.resquest}
 * @param {express.response}
 * @returns {Promise} from authenticateUser function. If resolve it will respond with the current user information in JSON format.
 */
router.get("/categories", authenticateUser, async (req, res) => {
  const category = await Categories.findOne({
    where: { CategoryID: req.category.CategoryID },
    attributes: [
      "CategoryID",
      "catName",
      "images"
      
    ]
  });
  if (category) {
    res.status(200).json({ category });
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
  "/categories",
  [
    check("catName")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please fill in the category name'),
    check("CategoryID")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please fill in the category ID'),
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
      const category = req.body;

      // Hash the new user's password.
      category.CategoryID = bcryptjs.hashSync(category.CategoryID);
      try {
        await Categories.create({
          CategoryID: category.CategoryID,
          catName: category.catName,
          images: category.images

        });

        res.status(201).location('/').end();
      } catch (error) {
          next(error);
      }
    }
  }
);


module.exports = router;