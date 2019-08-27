
export const capturePhoto = () => {
   var iniciarCamara = document.getElementById('iniciarCamara');
    var player = document.getElementById('player');
    var label = document.getElementById('labelTomarFoto')
    var snapshotCanvas = document.getElementById('snapshot');
    var captureButton = document.getElementById('capture');
    var videoTracks;
    iniciarCamara.addEventListener('click', function () {
        player.style.display = "block";
    var handleSuccess = function (stream) {
        iniciarCamara.style.display = "none";
        label.style.display='none';
        // Attach the video stream to the video element and autoplay.
        player.srcObject = stream;
        videoTracks = stream.getVideoTracks();
        captureButton.style.display='block';
        
    };

    captureButton.addEventListener('click', function () {
        player.style.display="none";
        captureButton.style.display="none";
        

        var context = snapshot.getContext('2d');
        // Draw the video frame to the canvas.
        context.drawImage(player, 0, 0, snapshotCanvas.width,
            snapshotCanvas.height);

        // Stop all video streams.
        videoTracks.forEach(function (track) { track.stop() });
        /*   */
        var url = snapshotCanvas.toDataURL();
       
        sessionStorage.setItem('url', url);
       
    });


    navigator.mediaDevices.getUserMedia({ video: true })
        .then(handleSuccess);
});
}
