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

function deletedanhsach() {
    $('#exampleModal').modal('show');
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
