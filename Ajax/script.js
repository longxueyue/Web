$(document).ready(function () {

    $.ajax({
        type:'POST',
        url:'test.php',
        data:{
            url:'xiaozhi'
        },
        success:function (response,status,xhr) {
            $('#box').html(response);
        }
    });

});