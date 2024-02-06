setInterval(()=>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    // console.log(h);

    var sec_dot = document.querySelector(".sec_dot");
    var min_dot = document.querySelector(".min_dot");
    var hr_dot = document.querySelector(".hr_dot");

    sec_dot.style.transform = `rotate(${s * 6}deg)`;
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    hr_dot.style.transform = `rotate(${h * 30}deg)`;
})