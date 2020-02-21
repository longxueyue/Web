//过滤选择器的使用
$(function(){
    //$('li:first').css('background','#ccc');//选取ul列表的第一个项目
    //$('li:last').css('background','#ccc');//选取ul列表的最后一个项目
    //如果要选取第一个ul列表的最后一个项目则可以在其上加上id
    //$('#li :last').css('background','#ccc');
    //$('li:not(.red)').css('background','#ccc');//除了有类名叫red的其余全部li标签都设置样式
    //$('li:even').css('background','#ccc');//从索引（0开始）的所有偶数标签
    //$('li:odd').css('background','#ccc');//从索引（0开始）的所有奇数标签
    //$('li:eq(2)').css('background','#ccc');//从索引（0开始）等于index的标签
    //$('li:lt(2)').css('background','#ccc');//从索引（0开始）小于index的标签
    //$('li:gt(2)').css('background','#ccc');//从索引（0开始）大于index的标签
    //$(':header').css('background','#ccc');//选择标题元素，如果标题元素成为子元素的话
    //$('div :header').css('background','#ccc');//利用后代选择器来实现，
    //设置加载页面时的焦点处于？
    //$('input').get(0).focus();//得到焦点
    //$('input:focus').css('background','#ccc');
    /*$('input').focus(function () {
        $('input').css('background','red');
    })*/

    //速度较快的方法
   /* $('li').last().css('background','#ccc');
    $('li').first().css('background','#ccc');
    $('li').eq(1).css('background','#ccc');
    $('li').not('.red').css('background','#ccc');*/



   //$('div:contains("我是")').css('background','Red');//选取包含指定文本的元素
    //$('div:empty').css('background','#ccc');//选取不包含子元素或者是空文本的元素
    //$('ul:has(.red)').css('background','#ccc');//选择含有class为red的元素
    //$('div:parent').css('background','#ccc');//选取含有子元素或者文本的元素
    //$('ul').has('.red').css('background','#ccc');//同上
    //alert( $('div:hidden').length);
    //$('div:hidden').show(1000);//一秒钟后动画显示
    //alert($('div:visible').length);

    //子代过滤器
    //$('li:first-child').css('background','#ccc');//寻找li标签的父元素的第一个子元素
    //$('li:last-child').css('background','#ccc');//寻找li标签的父元素的最后一个子元素
    //$('li:only-child').css('background','#ccc');//寻找li标签的父元素只有一个子元素才标记
    //$('p:nth-child(odd)').css('background','#ccc');//每个p元素的奇数元素
    //$('p:nth-child(even)').css('background','#ccc');//每个p元素的偶数元素
    //$('p:nth-child(1)').css('background','#ccc');//每个其父元素的第一个元素（索引从1开始）
    //$('li').eq(7).css('background','#ccc');//从头开始特定的寻找li元素的标签（索引从0开始）


    //其他方法过滤器
    //alert($('.red').is('li'));//检测类.red所在标签是否为li
    //alert($('.red').is($('li')));//同上，jQuery对象集合
    //alert($('.red').is($('li').eq(2)));//同上，jQuery单个对象
    //alert($('#red').is($('li').get(4)));//同上，DOM对象

    //所以is()函数可以对id也可以对类

    /*alert($('.red').is(function(){
        return $(this).attr('title',"列表3");//必须要用$(this)来表示所判断的元素
    }));*/

    //而hasclass()只能针对class
    //alert($('li').eq(2).hasClass('red'));//是否有这个名叫red的类，不用加点
    //$('li').slice(2).css('background','#ccc');//从第二个（索引从0开始）一直往后
    //$('li').slice(2,4).css('background','#ccc');//从第二个（索引从0开始）到第三个不包含末尾的

    //alert($('div').contents().length);
    //alert($('div').find('p').length);返回子节点（包括文本的）的元素
    //$('li').filter('.red').css('background','#ccc');//选择li的class为red的元素
    //$('li').filter('.red,:first,:last').css('background','#ccc');//增加了首尾元素

    //特殊要求函数返回
    /*$('li').filter(function(){
        return $(this).attr('class')=='red'&&$(this).attr('title')=='列表3';//要用等于符号亲
    }).css('background','#ccc');*/


});


