var n10 = 2;
var num = "111"
var snum = num;
var alls = 0;

for(var i=0;i<snum.length+1;i++){
    var s = snum.slice(snum.length-1-i,snum.length-i);
    if(s=="A"){
        s="10";
    }
    else if(s=="B"){
        s="11";
    }
    else if(s=="C"){
        s="12";
    }
    else if(s=="D"){
        s="13";
    }
    else if(s=="E"){
        s="14";
    }
    else if(s=="F"){
        s="15";
    }
    alls = alls + Number(s)*(n10**i)
    console.log(alls)
}
console.log(snum);
console.log(String(alls));