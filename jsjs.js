var box = document.getElementById('box');
var btn = document.getElementById('btn');
var str = ['猪小明', '盖伦', '雷恩加尔', '阿卡丽', '提莫'];
var flag = true;
let timer = null;
function fn() {
    var res = Math.round(Math.random() * 4);
    box.innerText = str[res];
}
btn.onclick = function () {
    if (flag) {
        btn.innerText = "结束";
        flag = !flag;
        timer = setInterval(fn, 50);
    }
    else {
        btn.innerText = "开始";
        flag = !flag;
        clearInterval(timer);
    }
}
