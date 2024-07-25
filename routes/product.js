const express = require('express');
const router = express.Router();
const { fetcher, create, update, remove } = require("../controller/productController")
/* GET users listing. */
router.get('/', fetcher);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);
module.exports = router;
