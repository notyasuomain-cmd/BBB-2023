window.addEventListener('load', async () => {
    let i = 1;

    startTime();


    $('#button').click(() => {
        console.log(i)
        $('.slideshow').removeClass("asd");
        $('.slideshow').addClass("kozep");

        document.getElementById('kep').setAttribute('src', `assets/img/pictures/image${i}.png`);
        
        
        i++;
        if(i === 3) {
            i = 1;
        }


    })

});


function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}