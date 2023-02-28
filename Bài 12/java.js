var n, i;
i = parseInt(prompt('nhap vao n so tu nhien lien tiep'));
var T = 1;
for (n =1; n <= i; n++){ 
    T = T*n;
} document.write(i+'!= ' + T);