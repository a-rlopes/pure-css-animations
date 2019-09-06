$(function() {
    RecursiveSquares();
    curAnim = 0;
    stop1 = stop2 = false;

    for(let i = 0; i<2; i++){
        $('#toogleAnim' + i).on('click', () => {
            ToogleAnimation(i)
        });
    }
});


function ToogleAnimation(animation){
    if(animation !== curAnim){
        switch(curAnim){
            case 0:
                stop1 = true;
                break;
            case 1:
                stop2 = true;
                break;
        }

        switch(animation){
            case 0:
                RecursiveSquares(stop1);
                break;
            case 1:
                ManiacDiv(stop2);
                break;
        }
    }
}

function RecursiveSquares(stop) {        
    $('#box-area').append('<li></li>');
    randomSize = Math.floor(Math.random()*180) + 15;
    $('#box-area li:last-child').height(randomSize);
    $('#box-area li:last-child').width(randomSize);
    
    randomPosition = Math.floor(Math.random()*100);
    $('#box-area li:last-child').css({left:randomPosition + '%'});
    
    randomOpacity = Math.floor(Math.random()) + 0.6;
    $('#box-area li:last-child').css({opacity:randomOpacity});

    randomRotation = Math.floor(Math.random()*180);
    $('#box-area li:last-child').css({transform:'translateY(300%) rotate(' + randomRotation + 'deg)'});
    
    if(stop){
        return;
    }
    randomDelay = Math.floor(Math.random()*500);
    setTimeout(() => {
        RecursiveSquares();
    },randomDelay);
}

function ManiacDiv(stop) {
    colors = ['#f4eda7', '#f6bf9f', '#fec5ce', '#d4bcd9', '#c1e8ce'];
    randomColor = colors[Math.floor(Math.random()*5)];
    /*
    random1 = Math.floor(Math.random()*100);
    random2 = Math.floor(Math.random()*100);
    random3 = Math.floor(Math.random()*100);
    random4 = Math.floor(Math.random()*100);
    random5 = Math.floor(Math.random()*100);
    random6 = Math.floor(Math.random()*100);
    random7 = Math.floor(Math.random()*100);
    random8 = Math.floor(Math.random()*100);

    $('#anim1 .container').css({'clip-path':'polygon(' + random1 + ' ' + random2 + ', ' + random3 + ' '+ random4 + ', ' + random5 +' ' + random6 +', ' + random7 +' ' + random8 +', 0 0)',
    '-webkitclip-path':'polygon(' + random1 + ' ' + random2 + ', ' + random3 + ' '+ random4 + ', ' + random5 +' ' + random6 +', ' + random7 +' ' + random8 +', 0 0)',
    '-moz-clip-path':'polygon(' + random1 + ' ' + random2 + ', ' + random3 + ' '+ random4 + ', ' + random5 +' ' + random6 +', ' + random7 +' ' + random8 +', 0 0)',
    'background-color':randomColor});
    */

    if(stop){
        return;
    }
    setTimeout(() => {
        ManiacDiv();
    },500);
}