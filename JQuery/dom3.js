$(function(){
    //为什么这个会显示在最后呢，因为body里面有元素，先加载完？应该是这样
    //var box= $('<div>节点</div>');   //创建节点
    //$('body').append(box);              //插入节点
    //alert($('div').position().top);   //相对于父窗口的偏移
    //$('div:eq(1)').append('<em>是我妹！</em>');   //往文本后面插入元素
    //$('div').prepend('<em>卧槽，</em>');  //往文本前面插入元素

    //$('strong').appendTo('div:eq(0)');//移入操作，把前面的移动到appendTo(content)content后面,不需要创建节点
    //$('em').prependTo('div:eq(0)');//移入操作，把后面的移动到appendTo(content)content前面,不需要创建


    //或者啊，利用function来操作欸
    /*$('div:first').append(function(index,html){
       return '<em>滚犊子！</em>'+index;
    });

    $('div:first').prepend(function(index,html){
        return '<em>滚犊子！</em>'+index;
    });


    //外部插入节点法，，，也就是同级


    $('div').eq(0).after('<strong>哇哇呜呜</strong>');
    $('div').eq(0).after(function(index,html){
        return '<em>ahhhh</em>'+index+html;
    });
    $('div').eq(0).before('<strong>哇哇呜呜</strong>');
    $('div').eq(0).before(function(index,html){
        return '<em>ahhhh</em>'+index+html;
    });*/

    //$('em').insertAfter('p');   外部节点移入法
    //$('div').insertBefore('p');

    //包裹节点
    //$('div').wrap('<strong>12</strong>');//把div标签包裹在wrap参数里
    //$('div').wrap('<strong></strong>');
    //$('div').wrap('<strong><em>wocao</em></strong>');//多个标签也可以
    //$('div').unwrap();移除把‘div'包裹进去的元素
    //$('div').wrap($('strong').get(0));//包裹一个原生的DOM，也就是已经存在的标签
    //$('div').wrap(document.createElement('strong'));//或者临时的原生DOM
    /*$('div').wrap(function (index) {
        return '<strong />';//也可以在匿名函数里创建
    });*/

    //$('div').wrapAll('<em />');//这个玩意啊，把全局所有的div元素全都包裹在em里
    //$('div').wrapAll(document.createElement('p'));//之后的DOM操作，，同上啦


    //节点参数被包裹
    //$('div').wrapInner('<em />');//这个是div把参数包裹进去
    //$('div').wrapInner(document.createElement('p'));//之类的同上了

    //获得元素的节点名称
    /*$('button').click(function(){
        var x = $('div').get(1);
        //$('div').append(x.nodeName+": "+x.innerHTML);
        //$('div:last').after('<p>x.nodeName+": "+x.innerHTML</p>');//这样就可以啦，，获得节点的
        // 名称，添加进去新的外部节点中
        $('<p>x.nodeName+": "+x.innerHTML</p>').appendTo('p');//很迷，为什么成倍的增加
    });*/

    //进行的节点操作
    $('div:eq(2)').click(function () {
       alert('juzi.com');
    });
    //克隆节点
    //$('div:eq(2)').clone().appendTo('body');//克隆出来的没有克隆出元素事件
    $('div:eq(2)').clone(true).appendTo('body');//加上true参数就可以啦
    //$('div:eq(2)').remove();//移除操作
    //$('div:eq(2)').remove('.box');//移除指定的元素
    //$('div:eq(2)').remove().appendTo('body');//使用remove进行移除操作不保留元素的事件
    //$('div:eq(2)').detach().appendTo('body');//但是啊，detach就可以保留元素的事件了
    //$('div:eq(2)').empty();//把指定的元素设置为空

    $('div:eq(2)').replaceWith('<p>22</p>');//指定元素节点进行替换

});