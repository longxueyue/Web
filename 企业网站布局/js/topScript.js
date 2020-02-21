$(document).ready(function () {

    $('#setHome').on('click',function () {
        SetHome(window.location);//用于获取当前页面的地址
    });
    $('#addFav').on('click',function () {
        AddFavorite(window.location,document.title);
    });


});
