// Lista completa de Yo-kai con sus nombres e imágenes
const yoKaiList = [
    { name: "Brushido", img: "Milimpiano.png" },
    { name: "Washogun", img: "Samulimpio.png" },
    { name: "Lie-in", img: "Dormileon.png" },
    { name: "Lie-in Heart", img: "Leon_Alfa.png" },
    { name: "Hissfit", img: "Pataleto.png" },
    { name: "Tublappa", img: "Chupatinas.png" },
    { name: "Slicenrice", img: "Cortarroz.png" },
    { name: "Flamurice", img: "Socarrat.png" },
    { name: "Mudmunch", img: "Atierrador.png" },
    { name: "Sgt. Burly", aliases: ["Sgt. Burly", "Sgt Burly", "Sergeant Burly"], img: "Capi-cachas.png" },
    { name: "Demuncher", img: "Devoramonios.png" },
    { name: "Devourer", img: "Devoralmas.png" },
    { name: "Brokenbrella", img: "Fracaguas.png" },
    { name: "Pittapatt", img: "Chancleto.png" },
    { name: "Houzzat", img: "Komecasa.png" },
    { name: "Faysoff", img: "Sincara.png" },
    { name: "So-Sorree", img: "Losiento.png" },
    { name: "Bowminos", img: "Domiplof.png" },
    { name: "Smogling", img: "Niebli.png" },
    { name: "Smogmella", img: "Nebula.png" },
    { name: "Master Oden", img: "Don_Kaldo.png" },
    { name: "Failian", img: "Falsillo.png" },
    { name: "Apelican", img: "Apelicano.png" },
    { name: "Miradox", img: "Trielespejo.png" },
    { name: "Verygoodsir", img: "Ambrosio.png" },
    { name: "Chymera", img: "Kimera.png" },
    { name: "Kingmera", img: "Kimerreal.png" },
    { name: "Terrorpotta", img: "Aterracota.png" },
    { name: "Wotchagot", img: "Quierodeso.png" },
    { name: "Pride Shrimp", img: "Gambulloso.png" },
    { name: "No-Go Kart", img: "Indiligencio.png" },
    { name: "Mistank", img: "Tanquivocado.png" },
    { name: "Mimikin", img: "Mimoniqui.png" },
    { name: "Enduriphant", img: "Mamuguanto.png" },
    { name: "Zappary", img: "Rayael.png" },
    { name: "Frazzel", img: "Cazarrayos.png" },
    { name: "Swelton", img: "Zudado.png" },
    { name: "Toadal Dude", img: "Eleganfibio.png" },
    { name: "Uber Geeko", img: "Frikigarto.png" },
    { name: "Leggly", img: "Patis.png" },
    { name: "Jumbelina", img: "Picassina.png" },
    { name: "Boyclops", img: "Chiclope.png" },
    { name: "Buchinyan", img: "Buchinyan.png" },
    { name: "Bakulia", img: "Somnia.png" },
    { name: "Drizzelda", img: "Cellisca.png" },
    { name: "Nekidspeed", img: "Rapidizo.png" },
    { name: "Harry Barry", img: "Oso_Boco.png" },
    { name: "Faux Kappa", img: "Kappafalso.png" },
    { name: "Tigappa", img: "Tigrappa.png" },
    { name: "Master Nyada", img: "Gran_Mangu.png" },
    { name: "Kelpacabana", img: "Algacabana.png" },
    { name: "Tongus", img: "Niscala.png" },
    { name: "Nurse Tongus", img: "Curaniscala.png" },
    { name: "Sandmeh", img: "Arenito.png" },
    { name: "Mr. Sandmeh", aliases: ["Mr. Sandmeh", "Mr Sandmeh", "Mister Sandmeh"], img: "Don_Arenito.png" },
    { name: "Pallysol", img: "Sombrillo.png" },
    { name: "Scarasol", img: "Sombrillogro.png" },
    { name: "Supoor Hero", img: "Pauperman.png" },
    { name: "Gnomey", img: "Nomi.png" },
    { name: "High Gnomey", img: "Gran_Nomi.png" },
    { name: "Predictabull", img: "Torivinador.png" },
    { name: "Smashibull", img: "Torivino.png" },
    { name: "DON-CHAN", aliases: ["DON-CHAN", "Don chan"], img: "Don-chan.png" },
    { name: "Ray O'Light", aliases: ["Ray O'Light", "Ray O' Light", "Ray O Light"], img: "Rayito.png" },
    { name: "Kyryn", img: "Kyryn.png" },
    { name: "Unikirin", img: "Unikyryn.png" },
    { name: "Wydeawake", img: "Envelo.png" },
    { name: "Allnyta", img: "Cafeino.png" },
    { name: "Herbiboy", img: "Acelgo.png" },
    { name: "Carniboy", img: "Morenaso.png" },
    { name: "Yoink", img: "Prestragon.png" },
    { name: "Gimme", img: "Bolsadron.png" },
    { name: "K'mon-K'mon", img: "Espaoi.png" },
    { name: "Yoodooit", img: "Hazlotu.png" },
    { name: "Count Zapaway", img: "Zappingla.png" },
    { name: "Tyrat", img: "Rataleza.png" },
    { name: "Snobetty", img: "Frivolia.png" },
    { name: "Slimamander", img: "Babamandra_A.png" },
    { name: "Dracunyan", img: "Dracunyan.png" },
    { name: "Eyesoar", img: "Ojezno.png" },
    { name: "Eyellure", img: "Joyezno.png" },
    { name: "Wobblewok", img: "Caldewok_A.png" },
    { name: "Robbinyu", img: "Mirlobirlo.png" },
    { name: "Squeeky", img: "Estrequito.png" },
    { name: "Rawry", img: "Vrumbo.png" },
    { name: "Furgus", img: "Peluco.png" },
    { name: "Furdinand", img: "Foliculio.png" },
    { name: "Nosirs", img: "No-no.png" },
    { name: "Papa Windbag", img: "Batallitos.png" },
    { name: "Ben Tover", img: "Eskakeo.png" },
    { name: "Toiletta", img: "Lena.png" },
    { name: "Foiletta", img: "Malena.png" },
    { name: "Sproink", img: "Termascino_A.png" },
    { name: "Arachnus", img: "Aracnio.png" },
    { name: "Arachnia", img: "Aracne.png" },
    { name: "Cricky", img: "Torticolis.png" },
    { name: "Snaggly", img: "Malmet.png" },
    { name: "Whinona", img: "Agorerana.png" },
    { name: "Flushback", img: "Desolvidador.png" },
    { name: "Vacuumory", img: "Memorio.png" },
    { name: "Irewig", img: "Mosquereta.png" },
    { name: "Firewig", img: "Bronquereta.png" },
    { name: "Mermaidyn", img: "Nereida.png" },
    { name: "Mermadonna", img: "Sirenia.png" },
    { name: "Mermother", img: "Oceanida.png" },
    { name: "Lady Longnek", img: "Cisnia.png" },
    { name: "Draaagin", img: "Vacilagon.png" },
    { name: "SV Snaggerjag", img: "Bergantin_A.png" },
    { name: "Spoilerina", img: "Chafarina.png" },
    { name: "Poofessor", img: "Repeloso.png" },
    { name: "Slurpent", img: "Octosierpe.png" },
    { name: "Melonyan", img: "Melonyan.png" },
    { name: "Oranyan", img: "Naranyan.png" },
    { name: "Kiwinyan", img: "Kiwinyan.png" },
    { name: "Grapenyan", img: "Uvanyan.png" },
    { name: "Strawbnyan", img: "Fresanyan.png" },
    { name: "Watermelnyan", img: "Sandinyan.png" },
    { name: "Robokapp", img: "Robokapp.png" },
    { name: "Robokoma", img: "Robokoma.png" },
    { name: "Robogramps", img: "Roboabuzampa.png" },
    { name: "Robomutt", img: "Robocantonio.png" },
    { name: "Robonoko", img: "Robonoko.png" },
    { name: "Robodraggie", img: "Robodraqui.png" },
    { name: "Wondernyan", img: "Maravinyan.png" },
    { name: "Robonyan F", img: "Robonyan_2.0.png" },
    { name: "Sailornyan", img: "Sailornyan.png" },
    { name: "Machonyan", img: "Tigrenyan.png" },
    { name: "Hovernyan", img: "Hovernyan.png" },
    { name: "Darknyan", img: "Darknyan.png" },
    { name: "Jibakoma", img: "Jibakoma.png" },
    { name: "Jetnyan", img: "Jetnyan.png" },
    { name: "Unfairy", img: "Injustio.png" },
    { name: "Unkaind", img: "Malicia.png" },
    { name: "Untidy", img: "Implacablio.png" },
    { name: "Unpleasant", img: "Inaguantablio.png" },
    { name: "Unkeen", img: "Destrukto.png" },
    { name: "Grublappa", img: "Chupatodo.png" },
    { name: "Madmunch", img: "Atierrahorror.png" },
    { name: "Badsmella", img: "Apestula.png" },
    { name: "Mad Kappa", img: "Kappamalo.png" },
    { name: "Shamasol", img: "Sombrio.png" },
    { name: "Gnomine", img: "Pillastre.png" },
    { name: "Defectabull", img: "Toragorero.png" },
    { name: "Feargus", img: "Cardado.png" },
    { name: "Scaremaiden", img: "Trampeida.png" },
    { name: "Wrongnek", img: "Malisnia.png" },
    { name: "Grumpus Khan", img: "Keji_Do_Khan.png" },
    { name: "Groupus Khan", img: "Gruñon_Khan.png" },
    { name: "Slumberhog", img: "Puergazan.png" },
    { name: "Snortlehog", img: "Torreznio.png" },
    { name: "Panja Pupil", img: "Pupilo_Panja.png" },
    { name: "Panja Pro", img: "Panja_Pro.png" },
    { name: "Samureel", img: "Samuranguila.png" },
    { name: "Time Keeler", img: "Anguilocio.png" },
    { name: "Takoyakid", img: "Minipulpobola.png" },
    { name: "Takoyaking", img: "Pulpobola_Rey.png" },
    { name: "Danke Sand", img: "Aranecido.png" },
    { name: "No Sandkyu", img: "Desaranecido.png" },
    { name: "Sumodon", img: "Sumodon.png" },
    { name: "Yokozudon", img: "Supersumodon.png" },
    { name: "Whateverest", img: "Desinverest.png" },
    { name: "Whatuption", img: "Inverestupcion.png" },
    { name: "Happycane", img: "Contentallo.png" },
    { name: "Starrycane", img: "Talloestrella.png" },
    { name: "Gutsy Bones", img: "Tripasqueleto.png" },
    { name: "Meganyan", img: "Meganyan.png" },
    { name: "Cap'n Crash", aliases: ["Cap'n Crash", "Captain Crash"], img: "Capitan_Penas.png" },
    { name: "Eyeclone", img: "Cicluracan.png" },
    { name: "Kin", img: "Aurea.png" },
    { name: "Gin", img: "Argenta.png" },
    { name: "Dame Dedtime", img: "Lady_Desdicha.png" },
    { name: "Dame Demona", img: "Lady_Demona.png" },
    { name: "Hans Full", img: "Manojo.png" },
    { name: "Eyephoon", img: "Torbelloptico.png" },
    { name: "Mallice", img: "Martillete.png" },
    { name: "Cap'n Rex", aliases: ["Cap'n Rex", "Captain Rex"], img: "Capipalante.png" },
    { name: "Flippa", img: "Pili.png" },
    { name: "Floppa", img: "Mili.png" },
    { name: "Dame Dredful", img: "Lady_Espanto.png" },
    { name: "Kat Kraydel", img: "Kali_Mera.png" },
    { name: "Goldy Bones", img: "Aureosqueleto.png" },
    { name: "Glitzy Bones", img: "Diamanqueleto.png" },
    { name: "Hans Galore", img: "Manazas.png" },
    { name: "Retinado", img: "Retinado.png" },
    { name: "Snottle", img: "Tomoko.png" },
    { name: "Moximous N", img: "Ultra_N.png" },
    { name: "Moximous K", img: "Ultra_K.png" },
    { name: "Jibanyan S", img: "Jibanyan_S.png" },
    { name: "Komasan S", img: "Komasan_S.png" },
    { name: "Komajiro S", img: "Komajiro_S.png" },
    { name: "Darkyubi", img: "Oskyubi.png" },
    { name: "Illuminoct", img: "Iluminocto.png" },
    { name: "Gargaros", img: "Gargantuo_A.png" },
    { name: "Ogralus", img: "Cazamentires_A.png" },
    { name: "Orcanos", img: "Demoniorco_A.png" },
    { name: "Rubeus J", img: "Rubeo_J.png" },
    { name: "Hardy Hound", img: "Gran_Sabueso.png" },
    { name: "Hinozall", img: "Intelecto.png" },
    { name: "Bronzlow", img: "Nulo.png" },
    { name: "Teastroyer", img: "Testructor.png" },
    { name: "Infinipea", img: "Infinitio.png" },
    { name: "Headasteam", img: "Expresso.png" },
    { name: "Kabuking", img: "Kabukio.png" }
];

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

function showCongratsImage() {

    // Detener temporizador
    stopTimer();

    // Obtener tiempo final mostrado
    const tiempoTotal = document.getElementById("time").textContent;

    // Sonido de victoria
    const victorySound = new Audio("congrats.mp3");
    victorySound.volume = 0.8;
    victorySound.play().catch(() => {});

    // Panel lateral
    const finalPanel = document.createElement("div");
    finalPanel.style.position = "fixed";
    finalPanel.style.top = "0";
    finalPanel.style.right = "-350px";
    finalPanel.style.width = "320px";
    finalPanel.style.height = "100%";
    finalPanel.style.backgroundColor = "#0b2a4a";
    finalPanel.style.color = "white";
    finalPanel.style.padding = "20px";
    finalPanel.style.boxSizing = "border-box";
    finalPanel.style.zIndex = "1000";
    finalPanel.style.fontFamily = "Arial, sans-serif";
    finalPanel.style.display = "flex";
    finalPanel.style.flexDirection = "column";
    finalPanel.style.transition = "right 0.6s ease";

    // Botón cerrar
    const closeBtn = document.createElement("div");
    closeBtn.textContent = "✖";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "15px";
    closeBtn.style.right = "15px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "18px";

    closeBtn.addEventListener("click", () => {
        finalPanel.style.right = "-350px";
        setTimeout(() => finalPanel.remove(), 600);
    });

    // Título
    const title = document.createElement("h2");
    title.textContent = `Congrats! You've guessed all the Yo-kai in ${tiempoTotal}`;
    title.style.marginTop = "40px";
    title.style.marginBottom = "30px";
    title.style.fontSize = "22px";

    // Texto Twitter
    const followText = document.createElement("p");
    followText.innerHTML = `
        If you liked it, why not follow me on twitter?: 
        <a href="https://x.com/salty_baconV2" target="_blank" style="color:#4fc3ff; text-decoration:none;">
        @Salty_BaconV2
        </a>
    `;
    followText.style.fontSize = "16px";
    followText.style.marginTop = "auto";

    // Montaje
    finalPanel.appendChild(closeBtn);
    finalPanel.appendChild(title);
    finalPanel.appendChild(followText);
    document.body.appendChild(finalPanel);

    // Animación de entrada
    setTimeout(() => {
        finalPanel.style.right = "0";
    }, 50);
}


// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "Are you sure you want to exit? All progress will be lost.";
    }
});


