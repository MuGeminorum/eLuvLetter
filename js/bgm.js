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


function toBase64(audioURL) {
    window.URL = window.URL || window.webkitURL;
    let xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.open("GET", audioURL, true);
    xhr.onload = function () {
        if (this.status == 200) {
            let reader = new FileReader();
            reader.readAsDataURL(this.response);
            reader.onload = function () {
                $('#music').attr('src', reader.result);
                $('#envelope').fadeIn('slow');
                $('.heart').fadeOut('fast');
                let currentUrl = window.location.href;
                let firstIndex = currentUrl.indexOf("#");
                if (firstIndex <= 0) window.location.href = currentUrl + "#contact";
            };

        }
    }
    xhr.send(null);
}