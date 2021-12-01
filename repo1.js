function Btn0(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "0";
}

function Btn1(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "1";
}

function Btn2(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "2";
}

function Btn3(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "3";
}

function Btn4(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "4";
}

function Btn5(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "5";
}

function Btn6(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "6";
}

function Btn7(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "7";
}

function Btn8(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "8";
}

function Btn9(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "9";
}

function BtnA(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "A";
}

function BtnB(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "B";
}

function BtnC(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "C";
}

function BtnD(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "D";
}

function BtnE(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "E";
}

function BtnF(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    document.getElementById("box1").value =s + "F";
}

function Btndel(){
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var s= value;
    var s2 = s.slice(0,-1);
    document.getElementById("box1").value =s2;
}

function Btnalldel(){
    document.getElementById("box1").value ="";
}

function henkan(){
    //n進数から10進数に変換
    const n10 = document.getElementById("sin1").value;
    const textbox = document.getElementById("box1");
    const value = textbox.value;
    var num= value;
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
    }

    //10進数からnsin進数に変換
    var n = alls;
    const nsin = document.getElementById("sin2").value;;
    var x=0;
    var ans = "";
    while(n>=nsin**(x+1)){
        x+=1;
    }
    var i=0;
    while(true){
        while(true){
            if(n>=(i+1)*(nsin**x)){
                i +=1;
            }
            else{
                n = n-i*(nsin**x);
                if(i<=9){
                    ans = ans + String(i);
                }
                else{
                    if(i==10){
                        ans=ans+"A";
                    }
                    else if(i==11){
                        ans=ans+"B";
                    }
                    else if(i==12){
                        ans=ans+"C";
                    }
                    else if(i==13){
                        ans=ans+"D";
                    }
                    else if(i==14){
                        ans=ans+"E";
                    }
                    else{
                        ans=ans+"F";
                    }   
                }
            i = 0;
            break;
            }
        }
        x=x-1;
        if(x==-1){
            break;
        }
    }
    document.getElementById("box2").value =n10;
    document.getElementById("box3").value =num;
    document.getElementById("box4").value =nsin;
    document.getElementById("box5").value =ans;
    document.getElementById("box6").value =alls;
}