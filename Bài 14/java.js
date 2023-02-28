var n= parseInt(prompt('nhap vao so tu nhien n'));
var a, S;
for (a = 1; a < n; a++){
    if(n % a == 0){
        S +=a;
    }
}
if(S = n){
    document.write("so " + n +" la so hoan hao")
} else document.write("so " + n +" khong la so hoan hao")