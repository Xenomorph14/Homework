// Remove dupllicate value
let userInput=prompt("Moi nhap");
let arr=userInput.split("");
arrNew=[];
let checkKey;
let i = 0;
while (i < arr.length - 1) {
    checkKey = true;
    let j = i + 1;
    while (j < arr.length) {
        if (arr[i] == arr[j])
        {
            arr.splice(j, 1);
            checkKey = false;
        } else { j++ }
    }
    if (checkKey == false) {
        arr.splice(i, 1);
    } else { i++ }
}
console.log(arr);
