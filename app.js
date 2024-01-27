document.addEventListener('DOMContentLoaded', function () {
    const video = document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('preview');
    const scanner = new Instascan.Scanner({ video: video });
    var n=0;
    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);

            scanner.addListener('scan', function (content) {
                n=content;
                alert(n);
               // if(content=="CP-0000"){alert("oxion vulop")};
            });
        } else {
            console.error('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });

    const qrCodeValue = 'Hello, World!'; // Valor do QR code que você deseja gerar
    const qrcode = new QRCode(document.getElementById('qrcode'));
    qrcode.makeCode(qrCodeValue);
});
;
    const scanner = new Instascan.Scanner({ video: video });

    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);

            scanner.addListener('scan', function (content) {
                n=content;
                alert(n);
                //if(content=="CP-0000"){alert("oxion vulop")};
            });
        } else {
            console.error('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });

    const qrCodeValue = 'Hello, World!'; // Valor do QR code que você deseja gerar
    const qrcode = new QRCode(document.getElementById('qrcode'));
    qrcode.makeCode(qrCodeValue);
});
