
/**
 * Input:
 * Nhập tên người dùng
 * 
 * Thực hiện:
 * B1: Tạo hàm alert để thông báo
 * B2: tạo biến input và sử dụng prompt để hiển thị và yêu cầu người dùng nhập vào
 * B3: dùng điều kiện else if để phân ra nhiều trường hợp
 * B4: tạo hàm function để lỡ người dùng nhập sai thì có thể thử lại
 * B5: In kết quả người dùng nhập vào lên giao diện
 * 
 * 
 * Output:
 * In ra xin chào tên người dùng sử dụng
 * 
 * 
 */


alert("Xin chào , ai đang sử dụng máy vậy a?");
   var input = prompt("Vui lòng điền thông tin người dùng sử dụng: \n Bố(B) , Mẹ(M) , Anh Trai(A) , Em Gái(E)");
   if (input == "B" || input == "b") {
      document.querySelector("h1").innerHTML = "Hello Bố";
   } else if (input == "M" || input == "m") {
      document.querySelector("h1").innerHTML = "Hello Mẹ";
   } else if (input == "A" || input == "a") {
      document.querySelector("h1").innerHTML = "Hello Anh Trai";
   } else if (input == "E" || input == "e") {
      document.querySelector("h1").innerHTML = "Hello Em Gái";
   } else if (input == "") {
      document.querySelector("h1").innerHTML = "Vui Lòng nhập thông tin giúp tôi";
      myFun();
   } else {
      document.querySelector("h1").innerHTML = "Vui lòng nhập đúng thông tin";
      myFun();
   }



function myFun() {
   var btn = document.createElement("button");
   btn.innerText = "Thử lại";
   btn.classList.add("btn" , "btn-success");
   document.body.appendChild(btn);
   btn.addEventListener("click" ,function() {
      window.location.reload();
   } )
}