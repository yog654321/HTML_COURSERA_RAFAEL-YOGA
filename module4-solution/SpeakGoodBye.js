(function (window) {
    var speakWord = "Goodbye";

    var speak = function (name) {
        console.log(speakWord + " " + name);
    };

    window.speakGoodBye = speak;

})(window);
