const jwt = require('jsonwebtoken');
const _APP = require('./_APP');

// make => tạo mã token

let make = function (user) {
  return new Promise(function (resolve, reject) {
    // khi gặp lỗi ta dùng reject
    // khi thành công  ta dùng resolve
    //! jwt.sign({data:user}, 'screet',time,(err,token)=>{});
    // sign nhận vào 4 tham số: tham số thứ nhất là mọt object chưa data:user, tham số thứ 2 là một mã để khi mã hóa sẽ mã hóa theo, tham số thứ 3 là thời gian sống, tham số thứ 4 là một function(nếu phương thức sign thành công thì nó trả về mã token, còn lỗi thì trả về err)  những tham số này nên cấu hình ở một nơi khác khi nào cần thì lấy dùng. (file _APP.js)
    jwt.sign(
      { data: user },
      _APP.ACCESS_TOKEN,
      {
        algorithm: 'HS256', // cách mã hóa
        expiresIn: _APP.TOKEN_TIME_LIFE // time life
      },
      (err, _token) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(_token);
        }
      }
    );
  });
};

// check => xác thực mã đúng, sai, hết hạn

let check = function (token) {
  return new Promise((resolve, reject) => {
    // trong check dùng method verify() để check, verify nhận vào 3 tham số, tham số thứ nhất là mã token cần check, tham số thứ 2 là một mã để mã hóa, tham số thứ 3 là một call backfunction
    jwt.verify(token, _APP.ACCESS_TOKEN, function (err, data) {
      if (err) {
        return reject(err);
      } else {
        // data là cái tài khoản user được nhập ở make, và thêm cái thời gian tạo và thời gian hết hạn
        console.log(data);
        resolve(data);
      }
    });
  });
};

module.exports = {
  make: make,
  check: check
};
