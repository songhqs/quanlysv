$(function () {
    $.ajax({
        method: "GET",
        url: "http://ql-hocvien.herokuapp.com/users",

    })
        .done(function (users) {
            console.log(users)
            let htmlString = "";
            for (let i = 0; i < users.length; i++) {
                htmlString += `<tr>
        <td>${users[i].name}</td>
        <td>${users[i].email}</td>
        <td>${users[i].phone}</td>
        <td>${users[i].id}</td>
        <td>${users[i].gender}</td>
        </tr>`

            }
            $('#table').html(htmlString);
        });
});
function confirmDelete{
    studentId = id;
    $('#exampleModal').modal('show');
}



function deletedanhsach() {
    $.ajax({
        url: "http://ql-hocvien.herokuapp.com/users" + studentId,
        method: "DELETE",
    })
        .done(function (result) {
            // C1: Tải lại trang

            // C2: Không tải lại trang
            // Lấy lại danh sách users, sau đó render lại table => Tốn thời gian lấy lại danh sách users

            // C3: Không tải lại trang
            // Dòng DOM để xóa
        })
        .fail(function (err) {
            if (err.status == 404) {
                alert("hoc vien khong ton tai");
            } else {
                alert("không xoa được");
            }
        });

}



$.ajax({
    url: "http://ql-hocvien.herokuapp.com/users",
    method: "POST",
    data: {
        "name": "Tri Minh Man",
        "email": "tri@simplemachines.org",
        "password": "123456",
        "phone": "462-441-6079",
        "birthday": "4/4/2008",
        "gender": "Male"
    }
});
