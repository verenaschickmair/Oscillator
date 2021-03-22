document.querySelector('button').onclick = event => {
  let ctx = new window.AudioContext();
  let oscillator = ctx.createOscillator();
  
  oscillator.type = 'sine'; //square, triangle, sawtooth
  oscillator.frequency.value = 200; //20 - 20000hz
  
  //oscillator.connect(ctx.destination);
  oscillator.start();
  
  let gain = ctx.createGain();
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  
  document.onmousemove = event => {
    //change frequency
    let y = event.clientY / window.innerHeight;    
    oscillator.frequency.value = y * 5000 + 20; //20 - 5000hz
    
    
    let x = event.clientX / window.innerWidth;
    x = Math.min(x, 0.7); //max volume
    gain.gain.setValueAtTime(x, ctx.currentTime);
  }
}