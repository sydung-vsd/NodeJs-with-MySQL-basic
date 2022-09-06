// muốn dùng model đã định nghĩa, chúng ta phải require nó vào
// step1: require model vào
const res = require('express/lib/response');
const Book = require('../models/book.model');

exports.list = (req, res) => {
  Book.get_all(data => {
    // hàm send nhận vào một object
    res.send({ data: data });
  });
};

exports.detail = (req, res) => {
  // để lấy được đúng sách theo resquest gửi lên ta bỏ req.params.id
  Book.get_detail(req.params.id, bookDetail => {
    res.send({ result: bookDetail });
  });
};

exports.add_book = function (req, res) {
  // data được nhận từ form, và do FE gửi lên
  const data = req.body;
  Book.create(data, function (response) {
    res.send({ result: response });
  });
};

exports.remove = function (req, res) {
  const id = req.params.id;
  Book.remove(id, function (response) {
    res.send({ result: response });
  });
};

exports.update = function (req, res) {
  const data = req.body;
  Book.update(data, function (response) {
    res.send({ result: response });
  });
};
