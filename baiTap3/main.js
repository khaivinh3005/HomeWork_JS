
/**
 * Input:
 * 3 Số nguyên vừa nhập
 * 
 * Thực hiện:
 * B1: Gọi thẻ button vào tạo sự kiện click
 * B2: tạo biến num1,num2,num3, myDIV và gán giá trị thẻ.
 * B3: Tạo biến arr và điền toại bộ biến để tạo thành 1 mảng
 * B4: chạy vòng lặp for để gọi giá trị mảng trong array tương ứng với giá trị từng của 3 số vừa nhập
 * B5: dùng if nếu từng giá trị của mảng chia hết cho 2 và in ra số chẵn , dùng else để lấy giá trị số lẽ
 * B6: In gái trị ra màn hình
 * 
 * Output:
 * In ra số chẵn số lẻ và số lượng số chẵn và lẻ.
 * 
 * 
 */
document.querySelector("button").addEventListener("click" ,function() {
   var num1 = parseInt(document.getElementById("num1").value);
   var num2 = parseInt(document.getElementById("num2").value);
   var num3 = parseInt(document.getElementById("num3").value);
   var myDIV = document.getElementById("myDIV");
   var arr = [num1 , num2 , num3];
   var count = 0;
   for(var i = 0 ; i <  arr.length ; i++) {
      if(arr[i] % 2 === 0) {
         var text = arr[i] + ": số chẵn";
         var txt = document.createTextNode(text);
         var span = document.createElement("span");
         span.className = "mx-3";
         span.appendChild(txt);
         myDIV.appendChild(span);
         count++;
      } else if(!(arr[i] % 2 === 0)) {
         var text = arr[i] + ": số lẻ";
         var txt = document.createTextNode(text);
         var span = document.createElement("span");
         span.className = "mx-3";
         span.appendChild(txt);
         myDIV.appendChild(span);
      } else {
         var text = "Vui lòng điền đầy đủ thông tin";
         var txt = document.createTextNode(text);
         var span = document.createElement("span");
         span.className = "mx-3";
         span.appendChild(txt);
         myDIV.appendChild(span);
      }
   }
   document.getElementById("txt").innerHTML = `Có ${count} số chẵn và ${3-count} số lẻ`;
   
})





