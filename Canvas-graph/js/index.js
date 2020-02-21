


window.onload = function () {

    var canvas = document.getElementById('canvas');

    canvas.height = 800;
    canvas.width = 1200;

    var context = canvas.getContext('2d');


    //lineCap(context);
    //drawRect(context,300,300,100,100,'yellow','blue',10);
    //drawFillRect(context,350,350,100,100,'red','rgba(158,33,0,0.5)',5);
    //drawStar(context,100,200,400,400,30);
    context.save();
    var linearGrad = context.createLinearGradient(0,0,0,canvas.height);
    linearGrad.addColorStop(0.0,'black');
    linearGrad.addColorStop(1.0,'#035');
    context.fillStyle = linearGrad;
    context.fillRect(0,0,canvas.width,canvas.height);
    context.restore();
    //drawStar(context,5,10,40,40,0);

    for(var i=0;i<50;i++){
        var R = Math.random()*10 + 10;
        var d = 2*R*Math.cos(18/180*Math.PI);
        var x = Math.random()*(canvas.width - d) + d/2.0;
        var y = Math.random()*(canvas.height*0.65 - d) + d/2.0;
        var a = Math.random()*360;
        drawStar(context,R,x,y,a);
        //context.globalAlpha = 0.5;
    }

    //drawTransform(context);

    /*fillRoundRect(context,150,150,500,500,10,'#bbada0');
    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++)
            fillRoundRect(context,170+i*120,170+j*120,100,100,6,'#ccc0b3');*/

    drawMoon(context,2,900,200,100,30);
    drawLand(context);
};


//图形转换函数
function drawTransform(cxt) {
    cxt.strokeStyle = 'blue';
    cxt.fillStyle = 'red';

    cxt.transform(1,0,0,1,100,100);
    cxt.transform(2,0,0,1,0,0);
    cxt.setTransform(1,0,0,1,0,0);//重置transform，并以现在设置的参数为准
    //cxt.translate(100,100);

    cxt.fillRect(1,1,100,100);
    cxt.strokeRect(1,1,100,100);

}


function lineCap(cxt){

    cxt.moveTo(100,100);
    cxt.lineTo(200,100);

    cxt.lineWidth = 10;
    cxt.lineCap = 'round';//线条结束
    cxt.lineJoin = 'round'; //默认是miter尖型，线条交汇
    cxt.miterLimit = 10;  //默认为10，只有尖端超过10才变为butt，

    cxt.stroke();

}
