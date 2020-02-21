window.onload = function () {
    waterfull('main','box');//瀑布流布局
    //传入后台数据,假设已经传入
    var dataInt = {'data':[{'src':'4.jpg'},{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'}]};
    //实现加载功能  onscroll在滚动条滚动时触发
    window.onscroll = function () {
        if(checkScrollSlide){
            //当数据块渲染到数据底部
            var oParent =document.getElementById('main');
            for(var i=0;i<dataInt.data.length;i++){
                var oBox = document.createElement('div');
                oBox.className = 'box';
                oParent.appendChild(oBox);
                var oPic = document.createElement('div');
                oPic.className = 'pic';
                oBox.appendChild(oPic);
                var img = document.createElement('img');
                img.src = "Saved Pictures/"+dataInt.data[i].src;
                oPic.appendChild(img);
            }
            waterfull('main','box');
        }
    };
};
function waterfull(parent,cls){
    //将main下所有的class为box的元素取出来
    var oParent = document.getElementById(parent);
    var oBoxs=getElementBox(oParent,cls);
    //console.log(oBoxs);
    //计算整个页面的列数
    var oBoxW = oBoxs[0].offsetWidth;
    //console.log(oBoxW);
    var columns = Math.floor(document.documentElement.clientWidth/oBoxW);
    oParent.style.cssText = 'width:'+columns*oBoxW+'px;margin:0 auto;';
    //向下插入图片
    var arr =[];//保存每一列的高度
    for(var i=0;i<oBoxs.length;i++){
        if(i<columns){
            arr[i] = oBoxs[i].offsetHeight;//自身实际高度
        }else{
            //求出最小的高度
            var minH = Math.min.apply(null,arr);
            //求出其下标
            var index = getIndex(arr,minH);//arr里是高度值
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH +'px';//高度
            oBoxs[i].style.left = index*oBoxW + 'px';
            //加入之后改变每列高度
            arr[index]+=oBoxs[i].offsetHeight;//加入添加图片的高度
        }

    }
}

function getIndex(arrt,min) {
    for(var i=0;i<arrt.length;i++){
        if(arrt[i] == min){
            return i;
        }
    }
}

function getElementBox(parent,cls) {
    var attr = [];
    var oElements = document.getElementsByTagName('*');//取出下面所有元素
    for(var i=0;i<oElements.length;i++){
        if(oElements[i].className==cls){
            attr.push(oElements[i]);
        }
    }
    return attr;
}

//计算是否达到可以加载的距离
function checkScrollSlide() {
    var oParent = document.getElementById('main');
    var oBoxs = getElementBox(oParent,'box');
    //滚动条划过高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
    //当前视口的高度
        currentH = document.documentElement.clientHeight || document.body.clientHeight,
        oBoxElementH = oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
    return (oBoxElementH<(scrollTop+currentH))?true:false;
}