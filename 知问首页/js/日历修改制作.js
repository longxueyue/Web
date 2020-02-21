$(document).ready(function () {

    $('#date').datepicker({
        dateFormat : 'yy-mm-dd',
        //dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],//日期名字
        //dayNamesShort: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']//短名字
        dayNamesMin: ['日','一','二','三','四','五','六'],
        firstDay:1,
        monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        monthNamesShort:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        altField:'#alt',/*为日期选择器创建一个输入域*/
        altFormat:'dd/mm/yy',
        //appendText:'哈喽',
        showWeek:true,
        weekHeader:'周',

        /*datepicker的外观选项*/

        disabled:false, //禁用日历选项
        //numberOfMonths:[2,3],  //日历中同时显示月份的个数,可以是数组也可以是值
        showOtherMonths:true,  //当月中没有使用的单元格会显示填充，但无法使用
        //selectOtherMonths:true,  //当月中也可以选择其他月的日期

        changeMonth:true,   //月份和年份用下拉选择框代替
        changeYear:true,
        isRTL:false,//是否由右向左绘制日历
        //autoSize:true  自动调整你输入框的大小，前提撤销其css宽度
        showOn:'button',    //button是点击按钮才触发，而both是文本框和按钮都触发
        //showOn:'both',
        buttonText:'哈喽',
        buttonImage:'img/nav_bt.png',
        buttonImageOnly:true,
        showButtonPanel:true,
        closeText:'关闭', //设置关闭按钮的文本
        currentText:'当前日期mm-dd',
        nextText:'下个月mm',  //设置下一个月的title
        prevText:'上个月mm',  //设置上一个月的title
        navigationAsDateFormat:true,  //设置prev、next和current的文字可以是format 的日期格式。
        yearSuffix:'年',   //附加到header上年份后面的文本
        showMonthAfterYear:true,

        //date日期选择选项
        maxDate:0,  //基于当前日期的最大日期
        //minDate:-1,  //基于当前日期的最小日期
        hideIfNoPrevNext:true,  //如果啊，下月和上月不存在的话就隐藏按钮
        yearRange:'1950:2020',   //选择年份范围
        //defaultDate:-1,    //默认选定日期，以当前日期为基点
        //gotoCurrent:true      //为true后当点击“返回今日”按钮并按回车后不返回今日
                                //而且不能与defaultDate连用

        //datepicker的视觉选项
        showAnim:'fadeIn',   //默认是fadeIn淡入淡出效果,false取消，参数还有很多
        duration:1000,    //延迟时间

        //datepicker方法事件
        /*
        beforeShow:function (input) {
            console.log(input);
            alert('显示之前');
        }    //显示之前调用

        beforeShowDay:function (date) {  //date是一个Date类对象
            if(date.getDay()==1){
                return [false,'date','不能操作啊'];
            }else {
                return [true];
            }
        }
        onChangeMonthYear:function (year,month,list) {
            //alert('日历中月份和年份改变时触发');
            //alert(year);
            //alert(month);
            alert(list.id); //返回的是对象或者属性
        }
        */
        onClose:function (dateText,list) {
            console.log(dateText+'我'+list);
        },      //关闭后触发
        onSelect : function (dateText,inst) {
            console.log(dateText);
        }      //选择后触发
});



    //$('#date').datepicker('option','disabled','true');  //外部事件
});
