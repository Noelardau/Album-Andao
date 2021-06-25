$('.pp').click(function() {
    $(this).toggleClass('pl');
    if ($(this).hasClass('pl')) {
        $(this).html('pause');
        enP.play();
    } else {
        $(this).html('play');
        enP.pause();

    }
});
$('.moins').click(function(e) {
    e.stopPropagation();
    enP.volume -= 0.2;
});
$('.plus').click(function(e) {
    e.stopPropagation();
    enP.volume += 0.2;
});

document.querySelector('.pp').disabled = true;
$('p').click(function() {

    document.querySelector('.pp').disabled = false;
    $('.pp').addClass('pl');
    var th = $(this);
    $('.enLecture').html(th.text());
    th.children('audio').addClass('played');
    th.children('audio').removeClass('noPlayed');
    th.siblings().children('audio').addClass('noPlayed');
    th.siblings().children('audio').removeClass('played');

    document.querySelector('.played');
    document.querySelector('.played').play();
    var st = document.querySelectorAll('.noPlayed');
    for (var i = 0; i < st.length; i++) {

        st[i].pause();
        st[i].currentTime = 0;
    }

    function timer() {
        var sec = Math.ceil(document.querySelector('.played').currentTime),
            min = Math.floor(sec / 60);
        if (sec > 59) {
            sec = sec % 60;

        }

        document.querySelector('h2').innerHTML = (min < 10 ? '0' + min : min) + ' : ' + (sec < 10 ? '0' + sec : sec);
    }
    timer();
    setInterval(timer, 1000);
    enP = document.querySelector('.played');

    if (enP.paused) {

        $('.pp').html('play');
    } else {

        $('.pp').html('pause');

    }
});

$('.rev').click(function() {
    enP.currentTime -= 3;
});
$('.fwd').click(function() {
    enP.currentTime += 3;
});