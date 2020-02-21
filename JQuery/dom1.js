$(function(){

   //alert($('div').css('color'));
    var box=$('div').css(['color','width','height']);//把多个属性封存进一个数组里

    //有两种方法可以依此打印出来
    /*for(var index in box){
        alert(index+':'+box);
    }

    $.each(box,function (i,vlaue) {//遍历JavaScript原生态数组
       alert(i+':'+vlaue);//可以挨个返回数组里面定义的属性的值
    });
    $('div').each(function (index,element) {//
        //alert(index+':'+element);//返回的是div的序号以及当前元素
        alert('第'+index+'个文本是：'+$(element).text());
    });*/

    //设置css样式
    /*$('div').css({
        'color':'red',
        'background':'#ccc',
        'height':'30px',
        'width':'100%'
    })
    alert($('div p').css('width'));
    //想要设置某个元素的css属性值，需要计算的话可以传递一个匿名函数

    $('div').eq(1).css('width',function (index,value) {
       return (parseInt(value)-500)+'px';
    });

    //直接给元素添加、移除css类，一个或者多个
  //  $('div').addClass('col size');
  //  $('div').removeClass('size');

    //交换css类样式
    $('div').click(function (){
        $(this).toggleClass('green');//浏览器默认样式与指定样式的切换
    });

    $('div').click(function (){
        $(this).toggleClass('green',true);//方法后面可以加上布尔类型的参数，设置成true或false某一个将会变成改不了
    });
    var i=0;
    $('div').click(function (){
        $(this).toggleClass('green',i++%2==0);//自己设置切换频率
    });

    //实现两个指定样式的切换
    $('div').click(function () {
       $(this).toggleClass(function () {
           if($(this).hasClass('blue'))
           {
               $(this).removeClass('blue');
               return 'red';
           }
           else{
               $(this).removeClass('red');
               return 'blue';
           }
       });
    });
*/
    var i=0;
    $(document).click(function () {//这三个参数是序号、类名、以及频率(bool类型的)
        $('div').toggleClass(function (index,className,switchBool) {
            alert(index+':'+className+':'+switchBool);
            if($(this).hasClass('blue'))
            {
                $(this).removeClass('blue');
                return 'red';
            }
            else{
                $(this).removeClass('red');
                return 'blue';
            }
        },i++%2==0);
    });

});

