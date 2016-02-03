'use strict';

$(document).ready(function() {
    console.log('im here not doing anything');

    var badge = document.getElementById('badge');
    var loader = document.getElementById('loader');
    var wingLf1 = document.getElementById('wingLf1');
    var wingLf2 = document.getElementById('wingLf2');
    var wingLf3 = document.getElementById('wingLf3');
    var wingLf4 = document.getElementById('wingLf4');
    var tail1 = document.getElementById('tail1');
    var tail2 = document.getElementById('tail2');
    var over = document.getElementById('over');

    var wingRf1 = wingLf1.cloneNode();
    var wingRf2 = wingLf2.cloneNode();
    var wingRf3 = wingLf3.cloneNode();
    var wingRf4 = wingLf4.cloneNode();

    loader.appendChild(wingRf1);
    loader.appendChild(wingRf2);
    loader.appendChild(wingRf3);
    loader.appendChild(wingRf4);

    loader.appendChild(over);

    TweenMax.set(wingRf1, { transformOrigin: '160% 100%', scaleX: -1 });
    TweenMax.set(wingRf2, { transformOrigin: '180% 100%', scaleX: -1 });
    TweenMax.set(wingRf3, { transformOrigin: '220% 100%', scaleX: -1 });
    TweenMax.set(wingRf4, { transformOrigin: '340% 100%', scaleX: -1 });

    TweenMax.set(tail2, { transformOrigin: '50% 100%' }); 

    TweenMax.from(loader, 0.5, {opacity: 0});

    var wingClose = new TimelineMax({paused:true, yoyo:true});

    var closeDur = 0.3, closeStg = 0.2;

    wingClose
        .staggerTo([wingLf1, wingLf2, wingLf3, wingLf4], 0.1, {x: -4, y: -1, ease: Power3.easeIn }, 0.1)
        .staggerTo([wingRf1, wingRf2, wingRf3, wingRf4], 0.1, {x: 4, y: -1, ease: Power3.easeIn }, 0.1, '-=0.4')
        .to(tail2, 0.4, {scale: 1.1}, '-=0.4')
        .to(wingLf1, closeDur, {x: 84, y: 64, ease: Power3.easeIn }, '+=0.1')
        .to(wingRf1, closeDur, {x: -84, y: 64, ease: Power3.easeIn}, '-='+closeDur)
        .to(wingLf2, closeDur, {x: 64, y: 49, ease: Power3.easeIn }, '-='+closeStg)
        .to(wingRf2, closeDur, {x: -64, y: 49, ease: Power3.easeIn}, '-='+closeDur)
        .to(wingLf3, closeDur, {x: 42, y: 32, ease: Power3.easeIn }, '-='+closeStg)
        .to(wingRf3, closeDur, {x: -42, y: 32, ease: Power3.easeIn}, '-='+closeDur)
        .to(wingLf4, closeDur, {x: 32, y: 24, ease: Power3.easeIn }, '-='+closeStg)
        .to(wingRf4, closeDur, {x: -32, y: 24, ease: Power3.easeIn}, '-='+closeDur)
        .to(tail1, 0.1, {y: 5, ease: Power3.easeIn}, '-=0.8')
        .to(tail1, 0.3, {y: -55}, '-=0.3')
        .to(tail2, 0.1, {y: 3, scale: 0.7, ease: Power3.easeIn}, '-=0.1')
        .to(tail2, 0.3, {y: -50, scale: 0.4, ease: Power2.easeIn}); 

    $('#open').click(function(){
        playSound('wingopen');
        wingClose.reverse();
    });
    $('#close').click(function(){
        playSound('wingclose');
        wingClose.play();
            // wingClose.restart();
    });

    function playSound(filename){   
        document.getElementById("sound").innerHTML='<audio autoplay="autoplay"><source src="../images/' + filename + '.mp3" type="audio/mpeg" /><source src="' + filename + '.ogg" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="' + filename +'.mp3" /></audio>';
    }

});
