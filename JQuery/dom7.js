$(function () {

    /*   $('input').click(function () {
              alert('我我将使用模拟用户来触发');
        ;
    /*
              //$('input').trigger('click');//模拟事件操作  这个模拟了所有的input操作
              $('input').click(function () {
                  alert('我我将使用模拟用户来触发');
              }).trger('click');*/
/*
              //传达额外数据
              $('input').click(function (e,data1,data2,data3,data4) {
                  alert(data1+"|"+data2+"|"+data3+'|'+data4.user);//利用对象的时候要加点  .
              }).trigger('click',[123,'abc',['as',456],{user:789}]);  //其中user:789 代表的是对象和C/C++/C#一样
              //trigger额外数据，只有一条的时候不用加中括号，多时候要加，否则便不能识别了
        /*
              //bind加额外数据
                                      使用时加入额外数据时这样写
              $('input').bind('click',{heihei:'wakaka'},function (e,data1,data2,data3,data4,data5) {
                  alert(data1+"|"+data2+"|"+data3+'|'+data4.user+"|"+e.data.heihei);//利用对象的时候要加点  .
              }).trigger('click',[123,'abc',['as',456],{user:"Lee"}]);
    */
    /*
                  //自定义事件
                  $('input').bind('zidingyi',function () {
                      alert('自定义事件');
                  }).trigger('dingyi');
        /*
                  //trigger的简写操作
                  $('input').click(function () {
                      alert('我我将使用模拟用户来触发');
                  }).click();   //大部分jQuery都支持

                  //$('input:eq(1)').trigger('submit');

                  //$('form').trigger('submit');   //这个存在默认行为，直接跳转
                  //$('form').triggerHandler('sumbit');  //这个阻止了默认行为，阻止了跳转

                  $('form').submit(function (e) {
                      e.preventDefault();
                  }).trigger('submit');   //通过使用trigger来阻止默认行为的发生

                $('input').click(function () {
                    alert('我我将使用模拟用户来触发');
                });
                //trigger是可以匹配到所有元素  ，而triggerHandler是只能匹配到第一个
                //$('input').trigger('click');
                $('input').triggerHandler('click')

                $('input').click(function () {
                    alert('我我将使用模拟用户来触发');
                }).trigger('click').css('color','red');    //trigger的返回值为jQuery对象，，所以可以连缀

                alert($('input').click(function () {
                    alert('我我将使用模拟用户来触发');
                    return 456;
                }).triggerHandler('click'));
                //而triggerHandler() 没有返回值的时候返回 undefined，有的话直接返回返回值
   */

                //命名空间与移除事件
               /* $('input').bind('click.abc',function () {
                    alert('abc');
                });
                $('input').bind('click.xyz',function () {
                    alert('xyz');
                });
                $('input').bind('mouseenter.abc',function () {
                    alert('abc');
                });*/
    //$('input').unbind('click');//命名为click的全部都被移除
    $('input').unbind('click.abc');//只移除了命名为click.abc的事件
    //
    // $('input').trigger('click');//模拟了所有的click事件
    //$('input').trigger('click.abc');//只模拟了命名为click.abc的事件
});