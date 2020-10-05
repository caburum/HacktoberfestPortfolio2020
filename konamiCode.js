let KonamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var myAudio = new Audio('./audio/Konami Intro - Metal Gear Solid ᴴᴰ.mp3');



const detectCode = (code) => {
  let input = ''
  let codeToDetect = code.join('')
  // detect key events
  document.addEventListener('keydown', e => {

    //add events to input
    input += ('' + e.key)
    if (input === codeToDetect) {
      myAudio.play()
    }
    // reset the code
    if (!codeToDetect.indexOf(input)) return;
    input = ('' + e.key)
  })
}

detectCode(KonamiCode)