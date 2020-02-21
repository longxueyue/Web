window.onload = function () {

    var aa=document.getElementById('aago'),
        box=document.getElementById('box');

    eventUtil.addHander(box,'click',function () {
        alert('我是夫');
    });
    eventUtil.addHander(aa,'click',function (e) {
       //获取事件对象
       e = e||window.e;
       alert(eventUtil.getTarget(e));
       eventUtil.preventDefault(e);
       eventUtil.stopPropagation(e);
    });

};