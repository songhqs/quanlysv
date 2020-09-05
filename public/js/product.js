$(function () {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/products",

    })
        .done(function (users) {
            console.log(users)
            let htmlString = "";
            for (let i = 0; i < users.length; i++) {
                htmlString += `<tr>
        <td>${users[i].id}</td>
        <td>${users[i].name}</td>
        <td>${users[i].thumbnail}</td>
       <td>${users[i].price}</td>
        <td>${users[i].quantity}</td>
        <td>${users[i].status}</td>
        
        
        </tr>`

            }
            $('#table').html(htmlString);
        });
});

function deletedanhsach() {
    $('#exampleModal').modal('show');
}




