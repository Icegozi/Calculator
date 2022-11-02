var pt = 0;
var cong = {
    a: "",
    b: "",
}
function laygt(c){
var them = document.getElementById(c).value;
if (pt == 0) {
    cong.a += them;
}else{
    cong.b += them;
}
}
function doi(){
pt = 1;
}
function tinh(){
let D = Number(cong.a) + Number(cong.b);
document.getElementById("kk").value = cong.a + "+" + cong.b + "=" + D;
}
function Del(){
    pt = 0;
    cong = {
        a: "",
        b: "",
    }
}