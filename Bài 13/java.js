var n= parseInt(prompt('nhap vao so tu nhien n'));
var i;
if(n < 2){
    document.write(n+' khong phai la so nguyen to');
} else{
    for(i=2; i <= n-1; i++){
        if (n % i == 0){
            document.write(n+' khong phai la so nguyen to');
        } 
    } 
}document.write(n+' la so nguyen to');
