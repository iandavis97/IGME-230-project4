/*defining the sounds*/
Howler.mobileAutoEnable=false;
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
var keyNotes = {
        /*a*/ 65: c, // c
        /*w*/ 87: cSharp, // c#
        /*s*/ 83: d, // d
        /*e*/ 69: dSharp, // d#
        /*d*/ 68: e, // e
        /*f*/ 70: f, // f
        /*t*/ 84: fSharp, // f#
        /*g*/ 71: g, // g
        /*y*/ 89: gSharp, // g#
        /*h*/ 72: a, // a
        /*u*/ 85: aSharp, // a#
        /*j*/ 74: b, // b
    };

/*playing notes*/
function playSound(note) {
    note.play();
    console.log(note + " clicked");
}
/*playing the notes with mouse click*/
for (let i=0;i<notes.length;i++){
    document.getElementById(notes[i]).addEventListener('mousedown',function(){
        playSound(sounds[i]);
         console.log("Event listener called");
        /*changing note opacity*/
        if(sounds[i].playing()===true){
            document.getElementById(notes[i]).style.opacity=".5";
            
            }
    document.getElementById(notes[i]).addEventListener('mouseup',function(){
        
            document.getElementById(notes[i]).style.opacity="1.0";
        
    })                   
    });
}
/*playing the notes with keyboard strokes*/
    document.addEventListener('keydown',function(event){
        if(event.code=='KeyQ'){
            playSound(gSharp);
        if(gSharp.playing()===true){
            document.getElementById("gSharp-note").style.opacity=".5";
            }
        }
        if(event.code=='KeyA'){
            playSound(a);
        if(a.playing()===true){
            document.getElementById("a-note").style.opacity=".5";
            }
        }
        if(event.code=='KeyW'){
            playSound(aSharp);
        if(aSharp.playing()===true){
            document.getElementById("aSharp-note").style.opacity=".5";
            }
        }
        if(event.code=='KeyS'){
            playSound(b);
        if(b.playing()===true){
            document.getElementById("b-note").style.opacity=".5";
            }
        }
        if(event.code=='KeyD'){
            playSound(c);
        if(c.playing()===true){
            document.getElementById("c-note").style.opacity=".5";
            }
        }
        if(event.code=='KeyR'){
            playSound(cSharp);
        if(cSharp.playing()===true){
            document.getElementById("cSharp-note").style.opacity=".5";
            }
        }
        if(event.code=='KeyF'){
            playSound(d);
        if(d.playing()===true){
            document.getElementById("d-note").style.opacity=".5";
            }
        }
        if(event.code=='KeyT'){
            playSound(dSharp);
        if(dSharp.playing()===true){
            document.getElementById("dSharp-note").style.opacity=".5";
            }
        }
        if(event.code=='KeyG'){
            playSound(e);
        if(e.playing()===true){
            document.getElementById("e-note").style.opacity=".5";
            }
        }
        if(event.code=='KeyH'){
            playSound(f);
        if(f.playing()===true){
            document.getElementById("f-note").style.opacity=".5";
            }
        }
        if(event.code=='KeyU'){
            playSound(fSharp);
        if(fSharp.playing()===true){
            document.getElementById("fSharp-note").style.opacity=".5";
            }
        }
        if(event.code=='KeyJ'){
            playSound(g);
        if(g.playing()===true){
            document.getElementById("g-note").style.opacity=".5";
            }
        }
    });
    document.addEventListener('keyup',function(event){
        if(event.code=='KeyQ'){
            document.getElementById("gSharp-note").style.opacity="1";
        }
        if(event.code=='KeyA'){
            document.getElementById("gSharp-note").style.opacity="1";
        }
        if(event.code=='KeyW'){
            document.getElementById("a-note").style.opacity="1";
        }
        if(event.code=='KeyS'){
            document.getElementById("b-note").style.opacity="1";
        }
        if(event.code=='KeyD'){
            document.getElementById("c-note").style.opacity="1";
        }
        if(event.code=='KeyR'){
            document.getElementById("cSharp-note").style.opacity="1";
        }
        if(event.code=='KeyF'){
            document.getElementById("d-note").style.opacity="1";
        }
        if(event.code=='KeyT'){
            document.getElementById("dSharp-note").style.opacity="1";
        }
        if(event.code=='KeyG'){
            document.getElementById("e-note").style.opacity="1";
        }
        if(event.code=='KeyH'){
            document.getElementById("f-note").style.opacity="1";
        }
        if(event.code=='KeyU'){
            document.getElementById("fSharp-note").style.opacity="1";
        }
        if(event.code=='KeyJ'){
            document.getElementById("g-note").style.opacity="1";
        }
    });