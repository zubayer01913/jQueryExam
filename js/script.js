$(document).ready(function() {

    var images = [];

    images[0] = "images/1.png";
    images[1] = "images/2.png";
    images[2] = "images/3.png";
    images[3] = "images/4.png";


    var loop;
    var i = 0;

    var counter = $("#counter");

    $('.gallary img').mouseover(function() {
        var image = this;
        loop = setInterval(function() {
            if (i < images.length - 1) {
                i++;
                $(image).attr('src',images[i]);
            } else {
                i = 0;
                $(image).attr('src',images[i]);
            } 
            counter.html(i);
        }, 1000); 

    }).mouseout(function() {
        clearInterval(loop);
        i = 0;
        $(this).attr('src', images[i]);
        counter.html(i);
    });

});
