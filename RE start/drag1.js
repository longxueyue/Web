function getByClass(claName,parent) {     //得到元素标签名
    var oparent = parent?document.getElementById(parent):document,
        eles = [],//存储有类的元素
        elements = oparent.getElementsByTagName('*');
    for(var i=0;i<elements.length;i++){
        if(elements[i].className == claName){
            eles.push(elements[i]);   
        }
    }
    return eles;
}
window.onload = drag;

function drag() {
    var oTitle = getByClass('login_logo_webqq', 'loginPanel')[0];//声明对象

}

function fnDown() {
    document.onmousemove = function (ev) {
        ev = ev || window.ev;
        document.title = ev.clientX+","+ev.clientY;
    }
};