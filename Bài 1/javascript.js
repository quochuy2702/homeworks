var luong = prompt('nhap vao so tien luong cua ban');
var thue = prompt('nhap vao so tien thue ma ban can nop (tu 1-100%) ');
var tienNhanDuoc = (parseInt(luong) * (100 - parseFloat(thue) - 10) / 100);
document.write('so tien ban nhan duoc la ' + tienNhanDuoc);