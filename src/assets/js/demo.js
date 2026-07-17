(function () {
    var VIDEO_ID = 'I5kIem0T5vY';
    var STORAGE_KEY = 'paybots-demo-unlocked';

    var gate = document.getElementById('demo-gate');
    var locked = document.getElementById('demo-locked');
    var iframe = document.getElementById('demo-iframe');
    var unlockBtn = document.getElementById('demo-unlock');

    if (!gate || !locked || !iframe || !unlockBtn) return;

    function unlock() {
        locked.hidden = true;
        gate.classList.add('is-unlocked');
        iframe.src =
            'https://www.youtube-nocookie.com/embed/' +
            VIDEO_ID +
            '?autoplay=1&rel=0&modestbranding=1';
    }

    if (localStorage.getItem(STORAGE_KEY) === 'true') {
        unlock();
        return;
    }

    unlockBtn.addEventListener('click', function () {
        localStorage.setItem(STORAGE_KEY, 'true');
        unlock();
    });
})();
