
/**
 * Input:
 * số cạnh của tam giác
 * 
 * Thực hiện:
 * B1: gọi hàm button và sử dụng click để gọi hàm
 * B2: tạo biến input và gán giá trị thẻ vào từng biến
 * B3: dùng điều kiện else if để phân ra nhiều trường hợp
 * B4: In kết quả tam giác lên giao diện
 *
 * Output:
 * Giá trị 3 cạnh tam giác là tam giác nào?
 */


document.querySelector("button").onclick = function() {
   const input1 = parseFloat(document.getElementById("input1").value);
   const input2 = parseFloat(document.getElementById("input2").value);
   const input3 = parseFloat(document.getElementById("input3").value);
   var vuong = Math.sqrt((input1 * input1) + (input2 * input2)); 
   if(input1 === input2 && input2 !== input3) {
      console.log("tam giac can");
      document.getElementById("txt").innerHTML = "Đây là tam giác cân";
   } else if(input1 === input2 && input2 == input3) {
      console.log("tam giac deu");
      document.getElementById("txt").innerHTML = "Đây là tam giác đều";
   } else if(vuong === input3) {
      document.getElementById("txt").innerHTML = "Đây là tam giác vuông";
   } else if(!input1 || !input2 || !input3) {
      document.getElementById("txt").innerHTML = "Vui lòng nhập thông tin đầy đủ";
   } else {
      document.getElementById("txt").innerHTML = "Đây là một tam giác nào đó";
   }

}