$(function(){

    //alert($('#box').html());//返回的id中的值，获取的是其中的内容包括html标签
    //alert($('#box').text());//获取的是0其中的文本内容

    //$('#box').html('<em>我是渣渣贝</em>');//替换HTML内容，设置的html会自动解析
    //$('#box').text('<em>我睡觉哦，拜拜啦，亲，么么哒！</em>');//替换HTML内容，设置的html会被转义，
                                                        // 也就是被打印出来

    //alert($('input').val());//val操作的是表单元素,返回的是表单里面的内容，默认选中第一个表单元素
    //alert($('input:text').val());//自由设定，啊哈哈哈

    //想要追加数据而不取代之前的数据的话
    //$('#box p').html($('#box p').html()+"我是你大哥！");//我利用的是后代选择器

    //$('input:text').val('来自地狱的人类，你们将要面临邪恶的惩罚！！！');
    $('button').click(function(){
        $('#bei').val('亲爱的王欣大大');
    });
    //alert($('input:radio').eq(1).val());//eq选择器选取带有指定index值的元素
    //alert($('input:radio:eq(1)').val());这个是可以返回表单中的value值
    //下面这个是可以临时改变表单中设置的value值
    //$('input:radio').eq(1).val('男');

    //将复选框和下拉选择框之类的多个选择，提供首选项的方法
    //$('input:radio').val(['男']);//不能瞎用，要确切选中所要绑定的表单

    //元素属性的操作
    //$('div p').attr('value','fengzi');//改变或者添加元素属性
    /*$('div em').attr({
       'value':'我手机',
       'title':'不知名'
    });//同上，操作多个*/
    $('div p,div em').attr('title',function (index,value) {
       return '我们的title：'+value+',我是'+(index+1)+'号';
    });

    //也可以利用function来在已有上添加内容
    //$('#box p').html($('#box p').html()+"我是你大哥！");
    $('#box p').html(function (index,value) {
        return value+'<em>我是你大哥哥！</em>';
    })
});