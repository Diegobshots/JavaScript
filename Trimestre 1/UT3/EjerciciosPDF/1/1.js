var ip = prompt("Introduce IP: ");

var arrayNums = ip.split('.');

if(arrayNums === null || arrayNums.length != 4){
    alert("Ip incorrecta.")
}else{
    if(arrayNums[0] >= 1 && arrayNums[0] <= 223){
        if(arrayNums[1] >= 0 && arrayNums[1] <= 255 && arrayNums[2] >= 0 && arrayNums[2] <= 255){
            if(arrayNums[3] >= 0 && arrayNums[3] <= 254){
                alert("Ip correcta.")
            }else{
                alert("Ip incorrecta")
            }
        }else{
            alert("Ip incorrecta")
        }
    }else{
        alert("Ip incorrecta")
    }
}