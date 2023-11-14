let envelope_opened = false;

let content = {
    to: "",
    from: "",
    recipient: "",
    text: "",
    sign: 0
};

window.onload = function () {

    loadingPage();

    $.ajaxSettings.async = true;
    $.getJSON("./font/content.json", function (result) {
        content.to = result.to;
        content.from = result.from;
        content.recipient = result.recipient;
        content.text = result.text;
        content.sign = getPureStr(content.from).pxWidth('18px Satisfy, serif');
        document.title = result.title;
        $('#recipient').append(content.to);
        $('#flipback').text(result.sender);
        if (result.stamp != null) {
            $('#stamp img').attr('src', result.stamp);
        }
        toBase64(result.bgm);
    });

    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) event.preventDefault();
    });

    let lastTouchEnd = 0;

    document.addEventListener('touchend', function (event) {

        let now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) event.preventDefault();
        lastTouchEnd = now;

    }, false);

    document.addEventListener('gesturestart', function (event) {
        event.preventDefault();
    });

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