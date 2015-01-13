(function ($) {
    'use strict';

    function getImageData(img) {
        var height = img.height,
            width = img.width,
            canvas = document.createElement('canvas'),
            context = canvas.getContext('2d');

        canvas.height = height;
        canvas.width = width;
        context.drawImage(img, 0, 0, width, height);

        return context.getImageData(0, 0, width, height);
    }

    function scanQRCodeImage(img) {
        var height = img.height,
            width = img.width,
            imageData = getImageData(img);

        return new QRDecode().decodeImageData(imageData, width, height);
    }

    $.fn.scanQRCode = function () {
        // Only scans the first image, ignore others
        return scanQRCodeImage(this.get(0));
    };
}(jQuery));