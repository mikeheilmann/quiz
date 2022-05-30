let startKnopf=document.getElementById("startKnopf");

startKnopf.addEventListener("click",startenSpiel);

function startenSpiel(){
    weiterFrage();
}

function weiterFrage(){
    zeigeFrage();
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

