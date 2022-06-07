const startKnopf=document.getElementById("startKnopf");
const weiterKnopf=document.getElementById("weiterKnopf");
const beendenKnopf=document.getElementById("beendenKnopf");

const richtigKnopf=document.getElementById("richtigKnopf");
const falschKnopf=document.getElementById("richtigKnopf");


startKnopf.addEventListener("click",startenSpiel);
weiterKnopf.addEventListener();
beendenKnopf.addEventListener();

richtigKnopf.addEventListener();
falschKnopf.addEventListener();


function startenSpiel(){

}

function weiterFrage(){
} 

function beendenSpiel(){
}

function zeigeFrage(){
}

function waehleAntwort(){
}

const fragen=[
    {
        frage: "Was ist 1+1 ?",
        antwort: {
            a: "2",
            b: "11"
        },
        richtigeAntwort: "a"
    },
    {
        frage: "Was ist 2*2 ?",
        antwort: {
            a: "4",
            b: "22"
        },
        richtigeAntwort: "a"
    }
];

