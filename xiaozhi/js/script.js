$(document).ready(function () {
    $('#div0').hover(function () {
        $(this).find('.sub').css({
            'opacity': '1',
            'visibility': 'visible'
        });
    },function () {
        $(this).find('.sub').css({
            'opacity': '0',
            'visibility': 'hidden'
        })
    });
    $('#nav li').hover(function () {
        $(this).addClass('lia_bg');
    },function () {
        $(this).removeClass('lia_bg');
    });/*导航栏颜色结束*/

    var select = $('#select'),
        side = $('#side'),
        sel_a = select.find('span'),
         sel_lia = select.find('li'),
         sel_li = side.find('li');
    var date = new Date(),
        current_week = date.getDay();
    sel_a.each(function (index,value) {
        sel_a.eq(index).addClass('weekday_be');
        if(current_week==0&&index==6){
            sel_a.eq(6).addClass('weekday_link');
            sel_li.eq(6).removeClass('display');
        }else{
            sel_a.eq(current_week-1).addClass('weekday_link');
            sel_li.eq(current_week-1).removeClass('display');
        }
    });

    sel_lia.each(function (index,value) {
        sel_lia.eq(index).click(function () {
            var current_link = select.find('.weekday_link');
            current_link.removeClass('weekday_link');
            sel_a.eq(index).addClass('weekday_link');
            var current_dis = side.find('li:not(.display)');
            current_dis.addClass('display');
            sel_li.eq(index).removeClass('display');
        });
    });
});
