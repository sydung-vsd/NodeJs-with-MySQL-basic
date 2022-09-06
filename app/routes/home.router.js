// để khai báo một router ta làm như sau:
// -trước tiên phải require express vào
// -sau đó khai báo biến router=express.Router()
// -định nghĩa router của mình
// -cuối cùng module.exports=router;

const express = require('express');
const _APP = require('../common/_APP');
const router = express.Router();

const JWT = require('../common/_JWT');

// để sử dụng các controller ta require chúng vào
// step1: require controller đã định nghĩa ở controller
// step2: mình cần dùng controller nào thì chấm controler đó
const homeController = require('../controllers/home.controller');

router.get('/', homeController.home);
//! thành phần truyền vào router là 'path' và một 'function'
router.get('/sendfile', homeController.sendFile);

router.get('/token', async (req, res) => {
  // check thông tin user được nhập từ form, và check cái user đó ở trên database nếu đúng thì lấy thông tin user đó, đồng thời trả về mã token theo phương thức make.
  const user = {
    name: 'admin',
    email: 'admin@gmail.com',
    password: 'admin'
  };
  const _token = await JWT.make(user);
  res.json({ token: _token });
});

router.get('/check_token', async (req, res) => {
  // sau này token sẽ lấy từ req lấy xuống (req.token), hiện tại dùng giá trị cứng
  // sau khi nhận được mã token rồi thì tiếp tục kiểm tra mã đó bằng phương thức check
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicGFzc3dvcmQiOiJhZG1pbiJ9LCJpYXQiOjE2NjI0NzgwNTIsImV4cCI6MTY2MjQ4MTY1Mn0.qlOA-7Wdaqz2t2TkHy_UC27df0KLcNwszJnrs8h231k';

    const data = await JWT.check(token);
    res.json({ data: data });
  } catch {
    res.status(401).json({ message: 'sai rồi bạn ơi' });
  }
});

module.exports = router;

/// Cách viết khác

// module.exports = function(router){
//     const homeController = require('../controllers/home.controller');

//     router.get('/', homeController.home);
//     router.get('/sendfile', homeController.sendFile);
// }

//! khi router gửi request nó sẽ gửi xuống controler trước, trong controler sẽ gọi các model
