$(document).ready(function () {
    //设置瀑布流布局
    waterfull();
    var dataInt = {'data':[{'src':'benzi_19.png','span':'龙晴','h2':'88899','h5':'฿9877'},
            {'src':'benzi_20.png','span':'恋爱喜剧','h2':'5640','h5':'฿4520'},{'src':'benzi_21.png','span':'路人女主','h2':'7899','h5':'฿6666'},{'src':'benzi_22.png','span':'茶事春秋','h2':'8888','h5':'฿4444'},
            {'src':'benzi_20.png','span':'恋爱喜剧','h2':'5640','h5':'฿4520'},{'src':'benzi_21.png','span':'路人女主','h2':'7899','h5':'฿6666'},{'src':'benzi_22.png','span':'茶事春秋','h2':'8888','h5':'฿4444'},
            {'src':'benzi_23.png','span':'恋爱喜剧','h2':'5640','h5':'฿4520'},{'src':'benzi_24.png','span':'路人女主','h2':'7899','h5':'฿6666'},{'src':'benzi_25.png','span':'茶事春秋','h2':'8888','h5':'฿4444'},
            {'src':'benzi_26.jpg','span':'恋爱喜剧','h2':'5640','h5':'฿4520'},{'src':'benzi_27.jpg','span':'路人女主','h2':'7899','h5':'฿6666'},{'src':'benzi_28.jpg','span':'茶事春秋','h2':'8888','h5':'฿4444'},
            {'src':'benzi_29.png','span':'恋爱喜剧','h2':'5640','h5':'฿4520'},{'src':'benzi_30.jpg','span':'路人女主','h2':'7899','h5':'฿6666'},{'src':'benzi_31.jpg','span':'茶事春秋','h2':'8888','h5':'฿4444'},
            ]
        /*'spanP':['wda','wda']*/
    };

    $(window).on('scroll',function () {
        if(checkScrollSlide){
        $.each(dataInt.data,function (key,value) {
            var oBox = $('<div>').addClass('app_box').appendTo($('#main'));
            var oPic = $('<div>').addClass('pic').appendTo($(oBox));
            var oa = $('<a>').attr('href','404.html').attr('target','_blank').appendTo($(oPic));
            var oimg = $('<img>').attr('src',"images/"+$(value).attr('src')).appendTo(oa);
            var oSpan = $('<span>').html($(value).attr('span')).appendTo(oa);
            var oDiv = $('<div>').addClass('app_mo_bt').appendTo(oa);
            var oh3 = $('<h3>').html('฿').appendTo(oDiv);
            var oh2 = $('<h2>').html($(value).attr('h2')).appendTo(oDiv);
            var oh5 = $('<h5>').html($(value).attr('h5')).appendTo(oDiv);
        });
        waterfull();
        }
    });
});
function waterfull() {
    //取出其中的所有div中有box类的元素
    var $oBoxs = $('#main>div');           //而width()则不包括
    var boxW = $oBoxs.eq(0).outerWidth();//outerWidth()是包括外边的padding，margin
    var cloumns = Math.floor(1200/boxW);
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
    var boxElementDis = $boxEle.offset().top;
    var scrollTop = $(window).scrollTop();
    var scrollH = 600+'px';//浏览器自身高度
    return (boxElementDis<scrollTop+scrollH)?true:false;
}