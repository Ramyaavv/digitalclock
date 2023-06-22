
function displayTime(){

    let ar=["Sunday","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]

    let dateTime=new Date();

    let hr=dateTime.getHours();

    let min=dateTime.getMinutes();

    let sec=dateTime.getSeconds();

    let da=dateTime.getDate();

    let mon=dateTime.getMonth();

    let yea=dateTime.getFullYear();

    let days=dateTime.getDay();

    if(hr>12)
    {
        hr=hr-12;
        document.getElementById("ampm").innerHTML="PM";
    }
    document.getElementById("y").innerHTML=da;

    document.getElementById("x").innerHTML=mon;

    document.getElementById("w").innerHTML=yea;

    switch(days){
        case 0:
            document.getElementById("t").innerHTML=ar[days];
            break;
        case 1:
            document.getElementById("t").innerHTML=ar[days];
            break;
        case 2:
            document.getElementById("t").innerHTML=ar[days];
            break;
        case 3:
            document.getElementById("t").innerHTML=ar[days];
            break;
        case 4:
            document.getElementById("t").innerHTML=ar[days];
            break;
        case 5:
            document.getElementById("t").innerHTML=ar[days];
            break;
        case 6:
            document.getElementById("t").innerHTML=ar[days];
            break;
    }
    
    let a=document.getElementById("hours")

    let b=document.getElementById("min")

    let c=document.getElementById("sec");

    a.innerHTML=hr;

    b.innerHTML=min;
    
    c.innerHTML=sec;
}
setInterval(displayTime,500)