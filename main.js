// movements --------------------------------------

$('#lamp1, #lamp2').click(function() {
  var $lamp = $(this).find('.st13')
  if ($lamp.is('.bright'))
    $lamp.attr('class','st13');
  else
    $lamp.attr('class','st13 bright');
});

$('.st7.st82.st83').click(function(){

       if($(this).text() == 'CLOSED'){
           $(this).text('OPEN').attr('transform', 'matrix(1 0 0 1 860.8425 528.1208)');
       } else {
           $(this).text('CLOSED').attr('transform', 'matrix(1 0 0 1 854.8425 528.1208)');
       }
});

$('#runner').click(function() {
  $('#runner').attr('class','run');
})

$('#swing').click(function() {
  $('#swing').attr('class','');
  var s = setInterval(function() {
    $('#swing').attr('class','swinging');
    clearInterval(s)
  }, 50)
})

$('#balloon').click(function() {
  $('#balloon').attr('class','');
  var s = setInterval(function() {
    $('#balloon').attr('class','floating');
    clearInterval(s)
  }, 50)
})

$('#yoga').click(function() {
  $('#yoga').attr('class','');
  var s = setInterval(function() {
    $('#yoga').attr('class','meditating');
    clearInterval(s)
  }, 50)
})

$('#boat').click(function() {
  $('#boat').attr('class','slideIn');
})

$('#bottle').click(function() {
  $('#bottle').attr('class','');
  var s = setInterval(function() {
    $('#bottle').attr('class','throwing');
    clearInterval(s)
    }, 50)
})

$('#bird').click(function() {
  $('#bird').attr('class','');
  var s = setInterval(function() {
    $('#bird').attr('class','birdie');
    clearInterval(s)
    }, 50)
})

$('#scoop').click(function() {
  $('#scoop').attr('class','st21');
  var s = setInterval(function() {
    $('#scoop').attr('class','st21 scoop');
    clearInterval(s)
    }, 50)
})




// sounds --------------------------------------

$('#duck2').click(function() {
    var duckNoise = new Audio('duck-quack2.wav');
    duckNoise.play();
});

$('#duck1, #duck3, #duck4').click(function() {
    var duckNoise2 = new Audio('duck-baby.wav');
    duckNoise2.play();
});

$('#bike').click(function() {
    var bikeNoise = new Audio('bike.wav');
    bikeNoise.play();
});

$('#cone').click(function() {
    var shopSong = new Audio('icecreamsong.wav');
    shopSong.play();
});

$('#boat').click(function() {
    var choochoo = new Audio('boat.wav');
    choochoo.play();
});

$('#door').click(function() {
    var doorbell = new Audio('doorbell-3.wav');
    doorbell.play();
});

$('#book').click(function() {
    var pageNoise = new Audio('page-flip.wav');
    pageNoise.play();
});

$('#pond').click(function() {
    var splash = new Audio('splashing.wav');
    splash.play();
});

$('#iceboy').click(function() {
    var giggle = new Audio('kidlaugh.wav');
    giggle.play();
});

$('#bird').click(function() {
    var tweet = new Audio('tweet2.wav');
    tweet.play();
});

function setHalfVolume() {
    var happyMusic = document.getElementById("song");
    happyMusic.volume = 0.2; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}
