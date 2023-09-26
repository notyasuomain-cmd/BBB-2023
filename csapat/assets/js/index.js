

window.addEventListener('load', async () => {
    const en = "Én bemutatzkaozas";
    const te = "Te bemutatzkaozas";
    const o = "o mejavsv"
    $(".enb").html(en);
    $(".teb").html(te);
    $(".ob").html(o);



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

    $('.en').click(() => {
        $(".enb").toggleClass("asd");
    });
    $('.te').click(() => {
        $(".teb").toggleClass("asd");
    });
    $('.o').click(() => {
        $(".ob").toggleClass("asd");
    });

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