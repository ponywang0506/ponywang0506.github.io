console.log("電機系卷哥：B09901052劉承亞")
console.log("B09901020蔡仲廷好帥")
function ShowTime(){
    var NowDate=new Date();
    var y = NowDate.getFullYear();
    var M = NowDate.getMonth()+1;
    var d = NowDate.getUTCDate();
    var h = NowDate.getHours();
    var m = NowDate.getMinutes();
    var s = NowDate.getSeconds();
    if(h<10){h = "0" + String(h)}
    if(m<10){m = "0" + String(m)}
    if(s<10){s = "0" + String(s)}   //4-26-2021 21:34:05
    document.getElementById('showbox').innerHTML =
            "current-time: " + M + "-" + d + "-" + y + " " + h+":"+m+":"+s
    setTimeout('ShowTime()',1000);
}

audio = document.getElementById("audio");
console.log(audio)
audio.volume=0.1;    


function play()
{
    audio = document.getElementById("audio");
    console.log(audio)
    audio.volume=0.1;    
}


function hide()
{
    audio = document.getElementById("audio");
    word = document.getElementById("music");
    console.log(word.innerText)
    if(word.innerText == "顯示音樂")
    {
        word.innerHTML = "隱藏音樂"
        audio.removeAttribute("hidden","hidden");
    }
    else if(word.innerText == "隱藏音樂")
    {
        word.innerHTML = "顯示音樂"
        audio.setAttribute('hidden','hidden');
    }
}