//跨浏览器事件处理  给对象添加句柄
var eventUtil = {
    //添加句柄
    addHander:function (element,type,hander) {
        if(element.addEventListener){
            element.addEventListener(type,hander);  //dom二级
        }else if(element.attachEvent){
            element.attachEvent('on'+type,hander);
        }else {      //因为element.onclick == element['onclick']
            element['on' + type] = hander;  //dom0级
        }
    },
    removeHander:function (element,type,hander) {
        if (element.removeEventListener) {
            element.removeEventListener(type, hander);
        } else if (element.deatchEvent) {
            element.deatchEvent('on' + type, hander);
        } else {      //因为element.onclick == element['onclick']
            element['on' + type] = null;
        }
    },//获取事件对象
    getEvent:function (event) {
        return event?event:window.event;
    },//获取事件类型
    getType:function (event) {
        return event.type;
    },//获取事件目标
    getTarget:function (event) {
        return event.target || event.srcElement;
    },//阻止默认行为
    preventDefault:function (event) {
        if(event.preventDefault){
            event.preventDefault();
        }else {//IE中的阻止事件默认行为
            event.returnValue = false;
        }
    },
    stopPropagation:function (event) {
        if(event.stopPropagation){
            event.stopPropagation();
        }
        else{
            event.cancelBubble = true;
        }
    }
};