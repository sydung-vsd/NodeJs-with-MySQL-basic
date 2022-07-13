// để khai báo một router ta làm như sau:
// -trước tiên phải require express vào
// -sau đó khai báo biến router=express.Router()
// -định nghĩa router của mình
// -cuối cùng module.exports=router;

const express = require('express');
const router = express.Router();

// để sử dụng các controller ta require chúng vào 
// step1: require controller đã định nghĩa ở controller
// step2: mình cần dùng controller nào thì chấm controler đó
const homeController = require('../controllers/home.controller');

router.get('/', homeController.home);
router.get('/sendfile', homeController.sendFile);

module.exports = router;

/// Cách viết khác

// module.exports = function(router){
//     const homeController = require('../controllers/home.controller');

//     router.get('/', homeController.home);
//     router.get('/sendfile', homeController.sendFile);
// }