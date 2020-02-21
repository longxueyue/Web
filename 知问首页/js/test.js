$(document).ready(function () {
    // $('#reg').ajaxForm(function () {
    //     alert('成功提交！');
    // });
    $('#reg').submit(function () {
        $(this).ajaxSubmit({
            url:'F:/phpStudy/WWW/test.php',
        });
    });
});