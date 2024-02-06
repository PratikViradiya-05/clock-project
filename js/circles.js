setInterval(()=>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    var hh = document.getElementById("hh");
    var mm = document.getElementById("mm");
    var ss = document.getElementById("ss");

    hh.style.strokeDashoffset = 510 - (h*510)/12;
    mm.style.strokeDashoffset = 630 - (m*630)/60;
    ss.style.strokeDashoffset = 760 - (s*760)/60
    
});