let envelope_opened = false;
let content = {
    salutation: "",
    signature: "",
    body: "",
    sign: 0
};

function playPause() {
    let player = document.getElementById('music');
    let play_btn = $('#music_btn');
    if (player.paused) {
        player.play();
        play_btn.attr('class', 'play');
    }
    else {
        player.pause();
        play_btn.attr('class', 'mute');
    }
}

window.onload = function () {
    loadingPage();
    $.ajaxSettings.async = true;
    $.getJSON("./font/content.json", function (result) {
        content.salutation = result.salutation;
        content.signature = result.signature;
        content.body = result.body;
        content.sign = getPureStr(content.signature).pxWidth('18px Satisfy, serif');
        document.title = result.title;
        $('#recipient').append(result.recipient);
        $('#flipback').text(result.sender);
        $('#music').attr('src', result.bgm);
        $('#envelope').fadeIn('slow');
        $('.heart').fadeOut('fast');
        let currentUrl = window.location.href;
        let firstIndex = currentUrl.indexOf("#");
        if (firstIndex <= 0) window.location.href = currentUrl + "#contact";
    });
    document.addEventListener('touchstart', function (event) { if (event.touches.length > 1) event.preventDefault(); });
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        let now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) event.preventDefault();
        lastTouchEnd = now;
    }, false);
    document.addEventListener('gesturestart', function (event) { event.preventDefault(); });
    let contact = $('#contact');
    let mtop = (window.innerHeight - contact.height()) * 0.5;
    contact.css('margin-top', mtop + 'px');
    $('body').css('opacity', '1');
    $('#jsi-cherry-container').css('z-index', '-99');
}

window.onresize = function () {
    let cherry_container = $('#jsi-cherry-container');
    let canvas = cherry_container.find('canvas').eq(0);
    canvas.height(cherry_container.height());
    canvas.width(cherry_container.width());
    // Do scaling for sakura background when the window is resized
    loadingPage();
}