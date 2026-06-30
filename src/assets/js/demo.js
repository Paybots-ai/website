(function () {
    var VIDEO_ID = 'I5kIem0T5vY';
    var NOTIFY_EMAIL = 'chris@paybots.io';

    var STORAGE_KEY = 'paybots-demo-unlocked';
    var form = document.getElementById('demo-form');
    var gate = document.getElementById('demo-gate');
    var locked = document.getElementById('demo-locked');
    var iframe = document.getElementById('demo-iframe');
    var nameInput = document.getElementById('demo-name');
    var emailInput = document.getElementById('demo-email');
    var thumb = document.querySelector('.demo-video-thumb');
    var errorEl = document.getElementById('demo-error');
    var submitBtn = document.getElementById('demo-submit');

    if (!form || !gate || !locked || !iframe || !nameInput || !emailInput) return;

    if (thumb) {
        thumb.style.backgroundImage = 'url(https://img.youtube.com/vi/' + VIDEO_ID + '/maxresdefault.jpg)';
    }

    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function unlock() {
        locked.hidden = true;
        gate.classList.add('is-unlocked');
        iframe.src = 'https://www.youtube.com/embed/' + VIDEO_ID + '?autoplay=1&rel=0';
    }

    function setSubmitting(isSubmitting) {
        submitBtn.disabled = isSubmitting;
        submitBtn.textContent = isSubmitting ? 'Unlocking…' : 'Watch demo';
    }

    function prefillFromUrl() {
        var params = new URLSearchParams(window.location.search);
        var name = params.get('name');
        var email = params.get('email');

        if (name && !nameInput.value) nameInput.value = name;
        if (email && !emailInput.value) emailInput.value = email;
    }

    function sendLead(name, email) {
        fetch('https://formsubmit.co/ajax/' + NOTIFY_EMAIL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                _subject: 'Paybots Demo View',
                _replyto: email,
                _template: 'table',
            }),
        }).catch(function () {
            // Best-effort lead capture; don't block the demo if email fails
        });
    }

    prefillFromUrl();

    if (localStorage.getItem(STORAGE_KEY) === 'true') {
        unlock();
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = nameInput.value.trim();
        var email = emailInput.value.trim();

        if (!name || !isValidEmail(email)) {
            errorEl.hidden = false;
            return;
        }

        errorEl.hidden = true;
        setSubmitting(true);

        localStorage.setItem(STORAGE_KEY, 'true');
        sendLead(name, email);
        unlock();
        setSubmitting(false);
    });
})();
