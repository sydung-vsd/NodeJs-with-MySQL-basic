const Book = function(book){
    this.id=book.id;
    this.name=book.name;
};

// khi goij get_all, chúng ta truyền vào một function
Book.get_all = function(result){
    const data = [
        {"id":1,"bookname":"book1","author":"author1"},
        {"id":2,"bookname":"book2","author":"author2"},
        {"id":3,"bookname":"book3","author":"author3"},
        {"id":4,"bookname":"book4","author":"author4"},
    ];
    // cái function đó sẽ dùng cái data được định nghĩa trogn model để chạy
    result(data);
}

Book.get_detail = function(getDetail){
    const data = [
        {"id":1,"bookname":"book1","author":"author1"},
        {"id":2,"bookname":"book2","author":"author2"},
        {"id":3,"bookname":"book3","author":"author3"},
        {"id":4,"bookname":"book4","author":"author4"},
    ];
    getDetail(data);
};

Book.create = function(data,result){    
    result(data);
};

Book.remove = function(id,result){    
    result("Xoa data co id:" + id);
};

Book.update = function (data,result){
    result(data)
}

module.exports = Book;