let touche = document.querySelector('.img1');

let body = document.body;
const music = document.querySelector('.music');

touche.addEventListener('click', ()=>{
  
  body.classList.toggle('open');
  music.classList.toggle('ps');

});


/* code pour l'audio*/

     
    const btPlay = document.querySelector('.btPlay');
    const btPause = document.querySelector('.btPause');
    const sound1 = document.querySelector('.sound1');
    const sound2 = document.querySelector('.sound2');
    let audio = document. querySelector('audio');
    
    btPlay.addEventListener('click', ()=>{
      audio.play();
      btPause.style.display = 'initial';
      btPlay.style.display = 'none';
      sound2.style.display = 'initial'
      sound1.style.display = 'none';
      
    });
    
    btPause.addEventListener('click', ()=>{
      
      audio.pause();
      btPlay.style.display = 'initial';
      btPause.style.display = 'none';
      sound1.style.display = 'initial';
      sound2.style.display = 'none';
    });
    
    
    
