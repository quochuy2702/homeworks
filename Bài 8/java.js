// var n, S;
// S = 0;
// for (n=1; n <= 50; n++){
//     S += n;
// } document.write(S);

// var n, i;
// i = parseInt(prompt('nhap vao n so tu nhien lien tiep'))
// var S = 0;
// for (n =1; n <= i; n++){ 
//     S+=n;
// } document.write(S);


// var n,S;
// S = 0;
// n = 0;
// do {
//     S += n;
//     n++;
// }
// while (n > 0 && n <= 50){
//     document.write(S);
// } 

var n,S;
S = 0;
n = 1; 
// khác với do...while thì while sai điều kiện thì kết thúc luôn còn do...while chạy 1 lần
while(n > 0 && n <= 50){
    S += n;
    n++;
} document.write(S);
