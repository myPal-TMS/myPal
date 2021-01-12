const express = require("express");
const router = express.Router();
const models = require("../model/model").models;
module.exports = router

/**
 * Router for retrieving all categories from the database
 * @method GET
 * @param {express.request}
 * @param {express.response}
 * @param {express.next}
 * @returns {Promise} If resolve it will respond with all categories in JSON format. If it throws, pass the error to the global error middleware.
 *
 */
router.get('/getCat',async (req,res ,next)=>{
    models.Category.findAll().then(fetchedData=> {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(fetchedData);

    })
})

router.get('/getSubcat', async (req,res) =>{

})




// module.exports = router;


