$(function(){

    //alert($('div').width());这个方法比下面的简单方便
    //alert($('div').css('width'));
    //$('div').css('width','500px');
    /*$('div').css({
        'width':'400px'
    });
    //$('div').width('542px');//传递数值，设置参数
    //或者不带px单位
    //$('div').width(324);    //但是啊，，最好带上单位，更加清晰
    $('div').width(function (index,value) {
        return (value - 300)+'px';
    })*/

    //同理，height一摸一样

    //内外边距和边框的计算尺寸方法   所有的都是获取元素的宽度
    /*alert($('div').width());
    alert($('div').innerWidth());//包含内边距
    alert($('div').outerWidth());//包含内边距和边框
    alert($('div').outerWidth(true));//包含内外边距和边框*/

    //元素偏移方法
    //alert($('div p').offset().top);
    //alert($('div').offset().top);//获取相对于视口（原始界面的）的偏移
    //alert($('div').position().top);//获取相对于父窗口的偏移
    //alert($('div p').position().left);

    //alert($(window).scrollTop());//获取垂直滚动条的值
    //$(window).scrollTop(300);//设置垂直滚动调的值
    alert($(window).scrollLeft());//获取水平滚动条的值
    $(window).scrollLeft(300);//设置水平滚动调的值


});