// var n = 1;
// do {
//     document.write(n +'-');
//     n++;
//     } 
// while (n <= 100 && n % 3 == 0)

// đoạn trên sai ở đâu?

var n;
for (n=1; n <= 100; n++){
    if (n % 3 == 0){
        document.write(n +'-');
    }
}