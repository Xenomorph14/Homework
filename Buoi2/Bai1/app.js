let userInput1=prompt("Moi nhap chuoi thu nhat");
let userInput2=prompt("Moi nhap chuoi thu hai");
arr1=userInput1.split("");
arr2=userInput2.split("");
function compare()
{
    if(arr1.length==arr2.length)
    {
        for(i=0;i<arr1.length;i++)
        {
            for(j=0;j<arr2.length;j++)
            {
                if(arr1[i]==arr2[j])
                {
                    arr1.splice(i,1);
                    arr2.splice(j,1);
                    i--;
                    j--;
                }
            }
        }
    }else
        {
            return false;
        }
    if(arr2.length>0){
            return false;
    }else
        {
            return true;
        }
}
console.log(compare());
