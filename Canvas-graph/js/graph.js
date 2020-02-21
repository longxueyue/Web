
/*(function (global) {

    function graphical(el,options) {
        
    };

    global.graphical = graphical;
}(window));*/
function drawRect(cxt,x,y,width,height,strokeStyle,fillStyle,lineWidth) {
    cxt.beginPath();
    cxt.moveTo(x,y);
    cxt.lineTo(x+width,y);
    cxt.lineTo(x+width,y+height);
    cxt.lineTo(x,y+height);
    cxt.closePath();

    cxt.lineWidth = lineWidth;
    cxt.fillStyle = fillStyle; //Canvas是基于状态的绘制
    cxt.strokeStyle = strokeStyle;

    cxt.fill();  //对于想描边的图形，要先填充再用描边覆盖。
    cxt.stroke();
}
    /*function drawFillRect(cxt,x,y,width,height,strokeStyle,fillStyle,lineWidth) {
        cxt.lineWidth = lineWidth;
        cxt.fillStyle = fillStyle;
        cxt.strokeStyle = strokeStyle;

        cxt.fillRect(x,y,width,height);
        cxt.strokeRect(x,y,width,height);
    }*/


function drawStar(cxt,R,xAxis,yAxis,rotate){
    cxt.save();//状态保存函数

    StarPath(cxt,R,xAxis,yAxis,rotate);
    cxt.lineWidth = 1;
    cxt.fillStyle = 'yellow';
    cxt.strokeStyle = 'rgba(5,83,167,0.69)';

    cxt.fill();
    cxt.stroke();
    cxt.restore();
}
function StarPath(cxt,R,xAxis,yAxis,rotate) {
    cxt.beginPath();
    for(var i=0;i<5;i++){//因为是逆时针画图，而旋转的话是顺时针
        cxt.lineTo(Math.cos((18+i*72 - rotate)/180*Math.PI)*R +xAxis,
            -Math.sin((18+i*72 - rotate)/180*Math.PI)*R + yAxis);
        cxt.lineTo(Math.cos((54+i*72 - rotate)/180*Math.PI)*R/2.0 +xAxis,
            -Math.sin((54+i*72 - rotate)/180*Math.PI)*R/2.0 + yAxis);
    }
    cxt.closePath();
}


function drawRoundRect(cxt,x,y,width,height,radius) {
    if(2*radius>width || 2*radius>height)
        return;
    cxt.save();
    cxt.translate(x,y);
    pathRoundRect(cxt,width,height,radius);
    cxt.stroke();
    cxt.restore();
}
function strokeRoundRect(cxt,x,y,width,height,radius,lineWidth,strokeColor) {
    if(2*radius>width || 2*radius>height)
        return;
    cxt.save();
    cxt.translate(x,y);
    pathRoundRect(cxt,width,height,radius);
    cxt.lineWidth = lineWidth || 1;
    cxt.strokeStyle = strokeColor || 'balck';
    cxt.stroke();
    cxt.restore();
}
function fillRoundRect(cxt,x,y,width,height,radius,fillColor) {
    if(2*radius>width || 2*radius>height)
        return;
    cxt.save();
    cxt.translate(x,y);
    pathRoundRect(cxt,width,height,radius);
    cxt.fillStyle = fillColor || 'balck';
    cxt.fill();
    cxt.stroke();
    cxt.restore();
}
function pathRoundRect(cxt,width,height,radius) {
    cxt.beginPath();
    cxt.arc(radius,radius,radius,1*Math.PI,1.5*Math.PI);
    cxt.arc(width-radius,radius,radius,1.5*Math.PI,2*Math.PI);
    cxt.arc(width-radius,height-radius,radius,0*Math.PI,0.5*Math.PI);
    cxt.arc(radius,height-radius,radius,0.5*Math.PI,1*Math.PI);
    cxt.closePath();
}


function drawMoon(cxt,d,x,y,R,rotate,fillColor) {
    cxt.save();
    cxt.translate(x,y);
    cxt.rotate(rotate*Math.PI/180);
    cxt.scale(R,R);
    pathMoon(cxt,d);
    cxt.fillStyle = fillColor || '#fd5';
    cxt.fill();
    cxt.restore();
}
function pathMoon(cxt,d) {
    cxt.beginPath();
    cxt.arc(0,0,1,0.5*Math.PI,1.5*Math.PI,true);
    cxt.moveTo(0,-1);
    cxt.arcTo(d,0,0,1,dis(0,-1,d,0)/d);
    cxt.closePath();
}
function dis(x1,y1,x2,y2) {
    return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}
function drawLand(cxt) {
    cxt.save();
    cxt.beginPath();
    cxt.moveTo(0,600);
    cxt.bezierCurveTo(540,400,660,800,1200,600);
    cxt.lineTo(1200,800);
    cxt.lineTo(0,800);
    cxt.closePath();

    var landStyle = cxt.createLinearGradient(0,800,0,600);
    landStyle.addColorStop(0,'#030');
    landStyle.addColorStop(1,'#580');
    cxt.fillStyle = landStyle;
    cxt.fill();
    cxt.restore();
}



