const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

/// nên tách các routes ra để chúng vào một thư mục routes
// ------CÁCH GỌI ĐẾN CÁC ROUTES--------
// -step1: require cái file router vào ( const homeRouter=require('./routes/home.router.js'))
// -step2: dùng app.use để định nghĩa đường dẫn

const homeRouter = require('./app/routes/home.router');
const bookRouter = require('./app/routes/book.router');
const _AuthMiddleWare = require('./app/common/_AuthMiddleWare');

//! cách viết khác
// require('./app/routes/home.router')(app);
// require('./app/routes/book.router')(app);

app.use('/', homeRouter);
//! app.use nhận vào 'path và một 'route'
// những router bỏ sau middleware thì sau khi check và được thông qua ở middleware thì mới có thể vào được các router đó
app.use(_AuthMiddleWare.isAuth);
// những router phía dưới đều được check , và hợp lệ thì ms nhảy vào
app.use('/book', bookRouter);

app.listen(3000, 'localhost', () => {
  console.log('server running on PORT 3000...');
});
