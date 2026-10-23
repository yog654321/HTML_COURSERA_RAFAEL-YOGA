(function (window) {
    var speakWord = "Hello";

    var speak = function (name) {
        console.log(speakWord + " " + name);
    };

    window.speakHello = speak;

})(window);
