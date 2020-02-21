
window.onload = function () {

    var con = document.getElementById("container");
    var oUl = document.getElementById("header");
    var listContent = document.getElementById("listContent");
    var tips = document.getElementById("tips");
    var tipsContent = document.getElementById("tipsContent");
    var arrow = document.getElementById("arrow");
    var i,j;

    for(i=0;i<data.length;i++){
        oUl.innerHTML += "<li>" + data[i].name + "</li>";
    }

    var oLis = oUl.getElementsByTagName('li');
    oLis[0].className = 'sec';

    for(i=0;i<oLis.length;i++){
        oLis[i].index = i;
        oLis[i].onclick = function (ev) {
            for(j =0;j<oLis.length;j++){
                oLis[j].className = '';
                listContent.innerHTML = '';
                arrow.innerHTML = '';
                tipsContent.innerHTML = '';
            }
            this.className = 'sec';
            dataDis(data[this.index]);
        }
    }

    dataDis(data[0]);
    function dataDis(data) {

        for(i=0;i<data.list.length;i++){

            var ul = document.createElement('ul');
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.innerHTML = data.list[i].title;
            a.href = 'javascript:';

            li.appendChild(a);
            ul.appendChild(li);
            listContent.appendChild(ul);

            a.index = i; //标记每个的索引位置
                var oh4 = document.createElement('h4');
                var Li1 = document.createElement('li');

                var Li2 = document.createElement('li');
                var Li3 = document.createElement('li');
                var Li4 = document.createElement('li');
                var Li5 = document.createElement('li');
                var Li6 = document.createElement('li');

            a.onmouseover = function (ev) {
                tips.style.display = "block";
                tips.style.left = con.offsetLeft + this.offsetWidth + 10 + 'px';
                tips.style.top = this.offsetTop + this.scrollTop + 'px';
                oh4.innerHTML = data.list[this.index].company;
                Li1.innerHTML = data.list[this.index].recruitingNumbers;
                Li2.innerHTML = data.list[this.index].workingLocation;
                Li3.innerHTML = data.list[this.index].workExperience;
                Li4.innerHTML = data.list[this.index].education;
                Li5.innerHTML = data.list[this.index].wage;
                Li6.innerHTML = data.list[this.index].addDate;

                arrow.appendChild(oh4);
                tipsContent.appendChild(Li1);
                tipsContent.appendChild(Li2);
                tipsContent.appendChild(Li3);
                tipsContent.appendChild(Li4);
                tipsContent.appendChild(Li5);
                tipsContent.appendChild(Li6);

            }

            ul.onmouseout = function (ev) {
                tips.style.display = 'none';
            }
        }





    }

}
