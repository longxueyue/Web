$(document).ready(function () {
/*
    //判断是否为数组
    var arr = [1,2,3];
    alert($.isArray(arr));

    //判断是否为函数
    var fn = function () {};
    alert($.isFunction(fn));

    //判断是否为对象
    var obj = {};
    alert($.isEmptyObject(obj));

    //判断是否由{}或new Object()创建的对象
    var obj1 = {},
        obj2 = new Object(),
        obj3 = new Object('123'),//如果是传递参数的话，返回的是一个字符串而不是对象
        obj = window;  //window是内置的对象，返回的也不是一个纯粹的对象
    alert($.isPlainObject(obj));

    //判断一个DOM中是否包含一个DOM节点
    alert($.contains($('#box').get(0),$('b').get(0)));

    //判断数据类型
    var str = '123';
    alert($.type(str));

    //判断是否为数值
    var num = '02';
    alert($.isNumeric(num));

    //判断是否为window对象
    var win = window;
    alert($.isWindow(win));

    //创建数组或对象的序列化表示形式   (url的键值对表示方式)
    var obj = {};
    obj.firstname = 'wangxin';
    obj.lastname = 'wangwangwang';
    obj.age = 18;
    alert($.param(obj));


*/

    var obj = {
        name:'Lee',
        test:function () {
            alert(this.name);
        }
    };
    obj.test();
    //$('#box').click(obj.test);//此时返回的this是div
    $('#box').click($.proxy(obj,'test'));//改变this指向问题，成为原指向
});