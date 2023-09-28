

window.addEventListener('load', async () => {
    const en = "16 éves tanuló vagyok a Dunakeszi Radnóti Mikós Gimnáziumban. Legjobban az informatika, matematika és fizika foglalkoztat. Szabadidőmben sportolok, és számítógépezek.";
    const te = "Neszmélyi Balázs vagyok 16 éves gimnazista, és az informatika az egyik legnagyobb szenvedélyem. Imádom felfedezni a számítógépek és a programozás világát, és gyakran foglalkozom saját projektekkel is. A gimnáziumban is aktívan részt veszek az informatikaórákon, és szeretném a jövőben ezen a területen tanulmányaimat folytatni. Amellett, hogy az informatika iránt érdeklődöm, szeretek sportolni és olvasni is, és mindig nyitott vagyok új kihívásokra és tapasztalatokra.";
    const o = "Lajos Leondardó vagyok, a Puskás Tivadar Technikumba járok és kedvelem a programozást. A szabadidőmben szívesen számítógépezek, és a barátaimmal töltöm az időmet."
    let a;
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
        if(i === 6) {
            i = 1;
        }
    })


    $('.en').click(() => {
        if(compare(a, "en")) {
            //eltunik a beumatjkozas
            $('.bemutatkozas').addClass("asd");a
            a = null;
        } else {
            $('.bemutatkozas').removeClass("asd");

            a = "en";
            $('.bemutatkozas').html(en);
        
        }

    });

    $('.te').click(() => {
        if(compare(a, "te")) {
            //eltunik a beumatjkozas
            $('.bemutatkozas').addClass("asd");
            a = null;


        } else {
            $('.bemutatkozas').removeClass("asd");

            a = "te";
            $('.bemutatkozas').html(te);
        
        }
    });

    $('.o').click(() => {
        if(compare(a, "o")) {
            //eltunik a beumatjkozas
            $('.bemutatkozas').addClass("asd");
            a = null;

            

        } else {
            $('.bemutatkozas').removeClass("asd");

            a = "o";
            $('.bemutatkozas').html(o);
        
        }
    });
});

function compare(a,b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}


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
    //format number to 2 digits
    if (i < 10) {i = "0" + i}; 
    return i;
}