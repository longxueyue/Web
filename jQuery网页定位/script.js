$(document).ready(function () {
    $('h2').hover(  //hover是包装了mouseenter和mouseout两个方法，是对当前元素有效，对其子元素无效
        function () {
            $(this).stop().animate({'width':'100px'},200);
        },
        function () {
            $(this).stop().animate({'width':'60px'},200);
        }
    );
    //滑动滚动条时
    $(window).scroll(function () {
        //滚动条滚动的距离
        var top = $(document).scrollTop();
        //取出菜单栏对象
        var menu = $('#menu');//对于多次利用的id，
                            // jQuery建议使用一个变量去存储这个选择器
        //取出所有类为.class楼层
        var items = $('#content').find('.item');
        var currentId = "";
        //遍历楼层
        items.each(function () {
            var m = $(this);//得到遍历每一层的本身对像
            //得到当前楼层的距离
            var currentTop = m.offset().top;
            if(top > currentTop - 200){
               //得到滚动到相应楼层的href也就是id
                currentId = '#' + m.attr('id');
            }else {
                return false;  //return false相当于break；return true相当于continue；
            }
        });
        var currentLink = menu.find('.current');//找到类current所在的链接
        //给相应的楼层附上类,应该先判断current类是否为空（没有滚动）并且没有变化
        if(currentId && currentLink.attr('href') != currentId) {
            //都满足后消去之前的样式
            currentLink.removeClass('current');  //增加移除样式类时不用  加点
            //对新的对象增加样式
            //console.log(currentId);

            menu.find('[href="' + currentId + '"]').addClass('current');
        }
    });





  /*  $(document).on('click',function (e) {
        $('title').html(e.pageX+" "+e.pageY);
    })*/
});
