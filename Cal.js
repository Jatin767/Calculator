function cal(){
    var opr1 = document.getElementById('first').value;
    var opr2 = document.getElementById('second').value;
    var Maths= document.getElementById('Maths').value;
    if (Maths == '+') {
        var res = parseInt(opr1) + parseInt(opr2) ;
    }
    if (Maths == '-') {
        var res = parseInt(opr1) - parseInt(opr2) ;
    }
    if (Maths == '*') {
        var res = parseInt(opr1) * parseInt(opr2) ;
    }
    if (Maths == '/') {
        var res = parseInt(opr1) / parseInt(opr2) ;
    }
    document.getElementById('res').value = res;
}