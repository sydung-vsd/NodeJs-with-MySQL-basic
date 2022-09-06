let isAuth = async function (req, res, next) {
  let _JWT = require('../common/_JWT');
  let _token = req.headers.authorization;
  if (_token) {
    try {
      let authData = await _JWT.check(_token);
      //   khi đó cái request sẽ chứa cái biến auth, nên trong các router khác sẽ có thể sử dụng biến auth
      req.auth = authData;
      next();
    } catch (error) {
      res.send({ ...error, data: 'ma token khong hop le' });
    }
  } else {
    return res.send({ data: 'Ban chua gui kem ma token' });
  }
};

module.exports = {
  isAuth: isAuth
};
