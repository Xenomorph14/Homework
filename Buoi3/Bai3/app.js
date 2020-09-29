// 

function convertTo24(timeStr)
{   
    timeStr=timeStr.toUpperCase();
    if(timeStr.indexOf("AM") !=-1)
    {
        return timeStr.replace("AM","");
    }
    timeStr=timeStr.replace("PM","");
    let arrTime=timeStr.split(":");
    if(arrTime[0] < 12)
    {
        arrTime[0]=Number(arrTime[0])+12;
    }else
    {
        arrTime[0]="00";    
    }
    return arrTime.join(":");

}