
/**
 * Input:
 * 3 số nguyên vừa nhập
 * 
 * Thực hiện:
 * B1: Gọi thẻ button vào tạo sự kiện click
 * B2: Tạo và điền giá trị từng thẻ cho biến num1,num2,num3
 * B3: Tạo biến arr và điền toại bộ biến để tạo thành 1 mảng
 * B4: Tìm số lớn nhất trong mảng gán vào biến var max = Math.max.apply(null , arr);
 * B5: Lấy trong mảng giá trị lớn nhất ra và lúc đó arr chỉ còn 2 giá trị
 * B6: Từ 2 giá trị đó tìm số lớn nhất và số nhỏ nhất
 * B7: sử dụng if else để thực hiện giá trị điền vào có hợp lệ hay ko
 * B8: In gái trị ra màn hình
 * 
 * Output:
 * In ra 3 số nguyên vừa nhập theo thứ tự tăng dần
 * 
 * 
 */
document.querySelector("button").addEventListener("click" ,function() {
   var num1 = parseInt(document.getElementById("num1").value);
   var num2 = parseInt(document.getElementById("num2").value);
   var num3 = parseInt(document.getElementById("num3").value);
   var arr  = [num1 , num2 , num3];
   var max = Math.max.apply(null , arr);
   arr.splice(arr.indexOf(max),1);
   var max2 = Math.max.apply(null ,arr);
   var min = Math.min.apply(null , arr);
   if(isNaN(num1) || isNaN (num2) || isNaN(num3)) {
      document.getElementById("txt").innerHTML = "Vui lòng nhập số";
   } else {
   document.getElementById("txt").innerHTML = "Theo thứ tự tăng dần là: " + min +" "+ max2 +" "+ max;
   }
   
})

