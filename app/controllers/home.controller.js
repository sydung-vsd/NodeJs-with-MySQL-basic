// việc xử lý request ở controller, vì thế chúng ta tách cái này ra và định nghĩa nó ở controller chứ không xử lý ở trong router
// step1: export.controller_name = (req,res)=>{}

exports.home = (req,res)=>{
    res.send('hello anhdung');
};

exports.sendFile = (req,res)=>{
    res.sendFile(__dirname.replace('app\\controllers','') + "/dungvs.html");
    // khi sendFile, vì đây là đừng dẫn tuyệt đối nên chúng ta phải thay đổi đường dẫn (__dirname.replace('app\\controllers','))
}

//  sau khi đã định nghĩa controller, để sử dụng thì ra phải require nó vào router


