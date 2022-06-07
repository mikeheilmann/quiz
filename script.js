const startKnopf=document.getElementById("startKnopf");
const weiterKnopf=document.getElementById("weiterKnopf");
const beendenKnopf=document.getElementById("beendenKnopf");

const antwort1Knopf=document.getElementById("richtigKnopf");
const antwort2Knopf=document.getElementById("richtigKnopf");


startKnopf.addEventListener("click",startenSpiel);
weiterKnopf.addEventListener();
beendenKnopf.addEventListener();

antwort1Knopf.addEventListener();
antwort2Knopf.addEventListener();


function startenSpiel(){

}


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