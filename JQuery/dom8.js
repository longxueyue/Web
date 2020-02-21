$(function () {


    //bind()无法动态的绑定事件，比如也就是克隆出来的并不携带本体的事件
   /* $('.button').bind('click',function () {
        $(this).clone().appendTo('#box');
    })

   //此类只是复制事件，并不能进行委托
   $('.button').bind('click',function () {
       $('<input type="button" class="button" value="点击">').appendTo('#box');
   });
    //相反，live()是被淘汰的函数，可以进行事件委托
    $('.button').live('click',function () {
        $('<input type="button" class="button" value="点击">').appendTo('#box');
    });

    $('.button').bind('click',function () {
        $(this).clone(true).appendTo('#box');//在clone()上加入true也能实现委托的功能，不加参数默认为false。
    })                                                //但是原理不同，这个只是复制事件


   //jQuery已经提供了一个很好的方法 在1.7之前能用
    $('#box').delegate('.button','click',function () {
        $(this).clone().appendTo('#box');    //事件委托，语义清晰，减少冒泡，绑定谁就是谁
    })
    $('#box').undelegate('.button','click');  //取消事件委托
*/

   //.bind()是事件绑定用于少量的处理  .live()、.delegate()是事件绑定用于大量的处理
                                                                    //  以及尚不存在即将生成的

    //以上方法都被废弃，啊哈哈
    //新的绑定事件
/*    $('.button').on('click',function () {
        alert('绑定事件');
    })

    //加入额外数据和绑定对象
    $('.button').on('click',{user:'wang'},function (e) {
        alert('笨蛋'+e.data.user);
    })
    //绑定多个事件
    $('.button').on('click mouseenter',function () {
        alert("移入和点击");
    })
    //同上
    $('.button').on({
        'mouseenter':function () {
            alert('移入');
        },
        'mouseout':function () {
            alert('移除');
        }
    })


    $('form').on('submit',function () {
       return false;
    })   //阻止了默认行为和阻止冒泡
              //作用同上
    //$('form').on('submit',false);
    $('form').on('submit',function(e){
        e.preventDefault();//阻止默认行为
    });

    $('form').on('submit',function(e){
        e.stopPropagation()//阻止冒泡
    });

    //事件绑定移除
    $('.button').on('click',function () {
        alert('绑定事件');
    });
    $('.button').off('click');  //取消绑定的事件

    function dat(){
        alert('埃罗芒');
    }
    $('.button').on('click',dat);
    $('.button').off('click',dat);  //这是另一种方式

    $('.button').on('click.abc',function () {
        alert('绑定事件1');
    });
    $('.button').on('click.efh',function () {
        alert('绑定事件2');
    });
    $('.button').off('click.abc');  //取消绑定的事件
    //通过命名空间 来进行取消

*/
    //通过on进行事件委托
    $('#box').on('click','.button',function () {
        $(this).clone().appendTo('#box');
    })
    //$('#box').off('click','.button');//取消事件委托   事件委托也还有额外数据和命名空间


    //只能进行一次绑定事件或者委托的one()方法

    //事件绑定只能进行一次
 /*   $('.button').one('click',function () {
        alert('一次');
    })
    //事件委托只能进行一次
        $('#box').one('click','.button',function () {
            $(this).clone().appendTo('#box');
         })
*/

});

