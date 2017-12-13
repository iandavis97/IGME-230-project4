/*defining the sounds*/
var c = new Howl({src: ['piano notes/68441__pinkyfinger__piano-c.wav']});
var cSharp = new Howl({src: ['piano notes/68440__pinkyfinger__piano-c.wav']});
var d = new Howl({src: ['piano notes/68442__pinkyfinger__piano-d.wav']});
var dSharp = new Howl({src: ['piano notes/68444__pinkyfinger__piano-eb.wav']});
var e = new Howl({src: ['piano notes/68443__pinkyfinger__piano-e.wav']});
var f = new Howl({src: ['piano notes/68446__pinkyfinger__piano-f.wav']});
var fSharp = new Howl({src: ['piano notes/68445__pinkyfinger__piano-f.wav']});
var g = new Howl({src: ['piano notes/68448__pinkyfinger__piano-g.wav']});
var gSharp = new Howl({src: ['piano notes/68447__pinkyfinger__piano-g.wav']});
var a = new Howl({src: ['piano notes/68437__pinkyfinger__piano-a.wav']});
var aSharp = new Howl({src: ['piano notes/68439__pinkyfinger__piano-bb.wav']});
var b = new Howl({src: ['piano notes/68438__pinkyfinger__piano-b.wav']});

/*list of notes*/
var sounds = [c, cSharp, d, dSharp, e, f, fSharp, g, gSharp, a, aSharp, b];
var notes = ["c-note", "cSharp", "d-note", "dSharp", "e-note", "f-note", "fSharp", "g-note", "gSharp", "a-note", "aSharp", "b-note"];
var lights=["c-light","cSharp-light","d-light","dSharp-light","e-light","f-light","fSharp-light","g-light","gSharp-light","a-light","aSharp-light","b-light"];

/*playing notes*/
function playSound(note) {
    note.play();
    console.log(note + " clicked");
}

/*playing the notes*/
for (let i=0;i<notes.length;i++){
    document.getElementById(notes[i]).addEventListener('mousedown',function(){
        playSound(sounds[i]);
         console.log("Event listener called");
        /*changing note opacity*/
        if(sounds[i].playing()===true){
            document.getElementById(notes[i]).style.opacity=".5";
            document.getElementById(lights[i]).style.backgroundColor="red";
            }
    document.getElementById(notes[i]).addEventListener('mouseup',function(){
        
            document.getElementById(notes[i]).style.opacity="1.0";
        document.getElementById(lights[i]).style.backgroundColor="white";
        
    })                   
    });
}