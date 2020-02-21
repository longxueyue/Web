$(function () {
    //$('#box').css('color','blue');
    //$('div').css('color','Red');
    //$('.pox').css('color','orange');
    //alert($('div').length);//size()求长度的方法被废弃了！！！！
    //$('div>p').css('color','blue');//子代选择器
    //
    //群组选择器
    $('#div1,.pp,strong').css('color','Pink');//设置了群组选择器
    //$('#div2>p').css('color','Red');//子代选择器
    //$('#div2').children('p').css('color','Red');//这个也是子代选择器的jQuery方法提供的    速度快

    $('#div2').find('p').css('color','Red');//后代选择器的jQuery提供的方法    速度快
    $('ol li *').css('font-size','100px');//通配选择器加通配符‘*’
    $('div em,div strong').css('font-family','方正姚体').css('display','block');//把不是块级元素的设置为块级元素
    $('div.box').css('font-size','50px').css('color','Red');//特殊选择器可以指定某个特殊的标签
    $('.name.css').css('color','Purple');//多类选择器
    //$('.div3').next('p').css('color','orange');//next选择器jQuery库中提供的方法
    /*或者*///但是如果使用next选择器的下面不是所写的标签，则不会显示任何提供的样式
    //$('.div3 + p').css('color','blue');
    $('.div3 ~ p').css('color','blue');//nextAll选择器，与上面不同的是全部的同级标签都给改了,中间插入的标签也没有作用
    //prev与prevAll
    //$('.div3').prev('p').css('color','orange');
    //$('.div3').prevAll('p').css('color','orange');//此div上面的所有p标签都会被修改

    //$('.div3').siblings('p').css('color','red');//siblings上下同级所有
    $('.div3').prevUntil('p').css('color','blue');//同级上非指定元素选中，遇到指定元素停止
    $('.div3').nextUntil('p').css('color','red');//同级下非指定选素选中，遇到指定元素停止
});