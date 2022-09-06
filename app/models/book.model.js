// kết nôi với DataBase để lấy data
const db = require('../common/connectDb');
const Book = function (book) {
  this.id = book.id;
  this.name = book.name;
  this.image = book.image;
  this.author_id = book.author_id;
};

// khi gọi get_all, chúng ta truyền vào một function, tức là cái 'result' là function params được truyền vào
Book.get_all = function (result) {
  // data đang được fake
  // const data = [
  //     {"id":1,"bookname":"book1","author":"author1"},
  //     {"id":2,"bookname":"book2","author":"author2"},
  //     {"id":3,"bookname":"book3","author":"author3"},
  //     {"id":4,"bookname":"book4","author":"author4"},
  // ];

  // Data được lấy từ database
  db.query('SELECT * FROM book', function (err, book) {
    if (err) {
      result(null);
    } else {
      result(book);
    }
  });

  // cái function đó sẽ dùng cái data được định nghĩa trong model để chạy, tức là function callback 'result' sẽ nhận cái params 'data' để chạy.
  // result(data);
};

Book.get_detail = function (id, result) {
  // const data = [
  //     {"id":1,"bookname":"book1","author":"author1"},
  //     {"id":2,"bookname":"book2","author":"author2"},
  //     {"id":3,"bookname":"book3","author":"author3"},
  //     {"id":4,"bookname":"book4","author":"author4"},
  // ];

  db.query(`SELECT * FROM book WHERE id = ${id} `, id, (err, res) => {
    //! res là cái được trả về
    if (err || book.length === 0) {
      console.log('err....', err);
      result(null);
      return;
    }
    if (res.length) {
      result(res[0]);
      return;
    }
    result({ data: [] });
  });
};

Book.create = function (data, result) {
  db.query('INSERT INTO book SET ?', data, (err, res) => {
    //! cái tham số data là cái dữ liệu lấy từ trên form nên nó không có id, khi insert xong thì nó trả cái 'book' đã được thêm vào database tức là cái 'res'
    if (err) {
      result(null);
    } else {
      result({ id: res.insertId, ...data });
    }
  });
};

Book.remove = function (id, result) {
  db.query(`DELETE FROM book WHERE id = ${id}`, id, (err, res) => {
    if (err) {
      result({ status: false, message: 'xóa không được bạn ơi!' });
    } else {
      result(`da xoa book có id: ${id}`);
    }
  });
};

Book.update = function (book, result) {
  db.query(
    'UPDATE book SET name=?, image=?, author_id=? WHERE id=?',
    [book.name, book.image, book.author_id, book.id],
    (err, res) => {
      if (err) {
        result({ status: false, message: 'update khong thanh cong' });
      } else {
        result({ status: true, message: 'update thanh cong', item: book });
      }
    }
  );
};

module.exports = Book;
