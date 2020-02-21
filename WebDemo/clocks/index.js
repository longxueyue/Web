window.onload = function () {

    var list = document.getElementById('line');
    var hour = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var css = document.getElementById('css');
    var line = '',i;
    var span = document.getElementById('digit');

    for(i=1;i<=60;i++){
        line += "<li></li>";
        css.innerHTML += "#line li:nth-of-type("+i+") {transform: rotate("+(i-1)*6+"deg);}";
        if(i%5==0){
            var sp = document.createElement('div');
            var txt = document.createElement('div');
            sp.className = 'spans';
            sp.style.transform = "rotate("+i*6+"deg)";
            txt.className = 'write';
            txt.innerHTML = i/5;
            //txt.style.display = "block";
            txt.style.transform = "rotate("+-i*6+"deg)";

            sp.appendChild(txt);
            span.appendChild(sp);
        }
    }

    list.innerHTML = line;

    setInterval(changeTime,1000);

    function changeTime() {
        var date = new Date();
        hour.style.transform = "rotate("+date.getHours()*30+"deg)";
        minutes.style.transform = "rotate("+date.getMinutes()*6+"deg)";
        seconds.style.transform = "rotate("+date.getSeconds()*6+"deg)";
    }


}