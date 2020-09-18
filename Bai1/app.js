//Lập trình hướng đối tượng
// Lập trình hướng đối tượng (OOP) là một kỹ thuật lập trình cho phép lập
// trình viên tạo ra các đối tượng trong code trừu tượng hóa các đối tượng.
// 4 nguyên lý cơ bản
// Tính đóng gói:
//     Các dữ liệu và phương thức có liên quan với nhau được đóng gói thành các lớp  để tiện cho việc quản lý và sử dụng. Tức là mỗi lớp được xây dựng để thực hiện một nhóm chức năng đặc trưng của riêng lớp đó.
//     Ngoài ra, đóng gói còn để che giấu một số thông tin và chi tiết cài đặt nội bộ để bên ngoài không thể nhìn thấy.
// Tính kế thừa:
//     Nó cho phép xây dựng một lớp mới dựa trên các định nghĩa của lớp đã có
// Tính đa hình
//     Tính đa hình là một hành động có thể được thực hiện bằng nhiều cách khác nhau
// Tính trừu tượng
//     Trừu tượng có nghĩ là tổng quát hóa một cái gì đó lên, không cần chú ý chi tiết bên trong.

//TraficLight
$red=document.getElementById("red");
$yellow=document.getElementById("yellow");
$green=document.getElementById("green");
$r=document.getElementById("r");
$y=document.getElementById("y");
$g=document.getElementById("g");

let redValue=Number($red.innerText);
let yellowValue=Number($yellow.innerText);
let greenValue=Number($green.innerText);
 
function count(timeR,timeY)
{
    redStop =setInterval(()=>
        {
            $red.style.backgroundColor="red";
            $red.innerText=redValue--;
                if($red.innerText==="0")
                    {
                        $red.style.backgroundColor="black";
                        clearInterval(redStop);
                        redValue=$r.value;
                    }
        },1000);
    setTimeout(() => 
    {
       yellowStop=setInterval(() => 
       {
            $yellow.style.backgroundColor="yellow";
            $yellow.innerText=yellowValue--;
                if($yellow.innerText==="0")
                    {
                        $yellow.style.backgroundColor="black";
                        clearInterval(yellowStop);
                        yellowValue=$y.value;
                    } 
       },1000); 
    },timeR);
    setTimeout(() => 
    {
        greenStop=setInterval(() => 
        {
            $green.style.backgroundColor="green";
            $green.innerText=greenValue--;
                if($green.innerText==="0")
                {
                    $green.style.backgroundColor="black";
                    clearInterval(greenStop);
                    greenValue=$g.value;
                }    
        }, 1000);    
    },timeY);
}
document.getElementById("runNow").addEventListener("click",function()
{
    timeR=$r.value*1000;
    timeY=$r.value*1000+$y.value*1000;
    timeG=$r.value*1000+$y.value*1000+$g.value*1000;
    count(timeR,timeY);
    setInterval(() => 
    {
        count(timeR,timeY);    
    }, timeG);
});