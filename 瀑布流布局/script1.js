$(document).ready(function () {
    //设置瀑布流布局
    waterfull();
    var dataInt = {'data':[{'src':'4.jpg'},{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'}]};
    $(window).on('scroll',function () {
        if(checkScrollSlide){
        $.each(dataInt.data,function (key,value) {
            var oBox = $('<div>').addClass('box').appendTo($('#main'));
            var oPic = $('<div>').addClass('pic').appendTo($(oBox));
            var oimg = $('<img>').attr('src',"Saved Pictures/"+$(value).attr('src')).appendTo(oPic);
        });
        waterfull();
        }
    });
});
function waterfull() {
    //取出其中的所有div中有box类的元素
    var $oBoxs = $('#main>div');           //而width()则不包括
    var boxW = $oBoxs.eq(0).outerWidth();//outerWidth()是包括外边的padding，margin
    var cloumns = Math.floor($(window).width()/boxW);
    $('#main').css({
        'width': cloumns*boxW+'px',
        'margin': '0 auto'
    });
    //设置流水效果
    var hArr = [];
    $oBoxs.each(function (index,value) {//索引和值
        if(index<cloumns){
            hArr[index]=$oBoxs.eq(index).outerHeight();//存入高度
        }else{
            var minH = Math.min.apply(null,hArr);//求出数组的最小值
            var minIndex = $.inArray(minH,hArr);//求出某个值在数组中的下标
            $(value).css({
                'position': 'absolute',
                'top': minH+'px',
                'left': minIndex*boxW+'px'
            });
            hArr[minIndex]+=$oBoxs.eq(index).outerHeight();
        }
    });
}
function checkScrollSlide() {
    var $boxEle = $('#main>div').last();
    var boxElementDis = $boxEle.offset().top+Math.floor($boxEle.outerHeight()/2);
    var scrollTop = $(window).scrollTop();
    var scrollH = $(window).height();//浏览器自身高度
    return (boxElementDis<scrollTop+scrollH)?true:false;
}