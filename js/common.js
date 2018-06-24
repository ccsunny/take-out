(function() {
    var newRem = function() {
        var html = document.documentElement;
        html.style.fontSize = html.getBoundingClientRect().width / 12 + 'px';
    };
    window.addEventListener('resize', newRem, false);
    newRem();
})();