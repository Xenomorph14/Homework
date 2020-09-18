// Remove dupllicate value
let userInput=prompt("Moi nhap");
let arr=userInput.split("");
arrNew=[];
let bool;
let i = 0;
while (i < arr.length - 1) {
    bool = true;
    let j = i + 1;
    while (j < arr.length) 
    {
        if (arr[i] == arr[j])
        {
            arr.splice(j, 1);
            bool = false;
        } else 
            { 
                j++; 
            }
    }
    if (bool == false) 
        {
            arr.splice(i, 1);
        } else 
            {
                i++ ;
            }
}
console.log(arr);
