$(document).ready(function() {
    $('li img').mouseover(function () {
        $(this).addClass('current');
    }).mouseout(function () {
        $(this).removeClass('current');
    });
});
/*
window.onload = function ()
{
    var oLi = document.getElementsByTagName("li");
    for (var i = 0; i < oLi.length; i++)
    {
        oLi[i].onmouseover = function ()
        {
            this.className = "current"
        };
        oLi[i].onmouseout = function ()
        {
            this.className = ""
        }
    }
}
*/
