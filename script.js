const startKnopf=document.getElementById("startKnopf");
const beendenKnopf=document.getElementById("beendenKnopf");
const frage = document.getElementById("frage");
const antwort1Knopf=document.getElementById("antwort1Knopf");
const antwort2Knopf=document.getElementById("antwort2Knopf");


startKnopf.addEventListener("click",startenSpiel);
beendenKnopf.addEventListener("click",beendenSpiel);

antwort1Knopf.addEventListener();
antwort2Knopf.addEventListener();


let frageMomentan=0;
const fragen=[
    {
        frage: "Was ist 1+1 ?",
        antworten: [
            {antwort1: "2", antwort: true},
            {antwort2: "11", antwort: false},
        ]
    },
    {
        frage: "Was ist 2*2 ?",
        antworten: [
            {antwort1: "4", antwort: true},
            {antwort2: "22", antwort: false},
        ]
    }
];


function startenSpiel(){
    frage.innerHTML=fragen[frageMomentan].frage;

}

function 


function beendenSpiel(){

}

