const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book.controller');

router.get('/list', bookController.list);
router.get('/detail/:id', bookController.detail);
router.post('/add', bookController.add_book);
router.delete('/delete/:id', bookController.remove);
router.put('/update/:id', bookController.update);

module.exports = router;