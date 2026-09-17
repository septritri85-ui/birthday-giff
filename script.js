
/* =====================================================
   AMBIL ELEMENT
===================================================== */

const button =
    document.getElementById("openGift");

const opening =
    document.getElementById("opening");

const main =
    document.getElementById("main");

const music =
    document.getElementById("music");


/* =====================================================
   BUKA HADIAH
===================================================== */

button.addEventListener("click", function () {


    /*
        Musik diputar setelah tombol ditekan.
        Ini supaya browser HP mengizinkan audio.
    */

    music.volume = 0.35;


    music.play()
        .then(() => {

            console.log(
                "Musik berhasil diputar"
            );

        })
        .catch((error) => {

            console.log(
                "Musik belum dapat diputar:",
                error
            );

        });


    /* Efek hati */

    createHearts(30);


    /* Animasi halaman */

    opening.style.opacity = "0";

    opening.style.transform =
        "scale(1.04)";


    /* Pindah halaman */

    setTimeout(() => {

        opening.style.display =
            "none";

        main.style.display =
            "block";

        window.scrollTo(
            0,
            0
        );


        createHearts(25);

    }, 1000);

});



/* =====================================================
   BUAT HATI
===================================================== */

function createHeart() {


    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    const symbols = [

        "♡",
        "♥",
        "💗",
        "💕",
        "🤍",
        "✨"

    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random()
                * symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100
        + "vw";


    heart.style.fontSize =
        (
            12 +
            Math.random() * 20
        )
        + "px";


    heart.style.animationDuration =
        (
            5 +
            Math.random() * 7
        )
        + "s";


    document.body.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 13000);

}



/* =====================================================
   BANYAK HATI
===================================================== */

function createHearts(number) {


    for (
        let i = 0;
        i < number;
        i++
    ) {


        setTimeout(() => {

            createHeart();

        }, i * 90);


    }

}



/* =====================================================
   HATI BERJALAN TERUS
===================================================== */

setInterval(() => {


    if (
        main.style.display ===
        "block"
    ) {

        createHeart();

    }


}, 1200);
