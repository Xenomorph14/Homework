let userInput=prompt("Nhap goi dinh dang HH:MM:SSPM or  HH:MM:SSAM");
let arr=userInput.split("");
let len=arr.length;
if(arr[len-2]=="A")
{
    arr.splice(len-2,2);
    console.log(arr.join(""));  
}
if(arr[len-2]=="P")
{
    arr.splice(len-2,2);
    newStr=arr.join("");
    num=Number(newStr.slice(0,2))+12;
    time=`${num}${newStr.slice(2,8)}`
    console.log(time);
}
