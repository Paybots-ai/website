(function () {
    const terminal = document.getElementById('adoption-terminal');
    const output = document.getElementById('terminal-output');
    const cursor = document.getElementById('terminal-cursor');
    if (!terminal || !output || !cursor) return;

    const STEPS = [
        {
            cmd: 'paybots mode confirm',
            lines: ['mode: confirm', 'every purchase → user tap required'],
        },
        {
            cmd: 'paybots rules set --cap=500 --category=travel',
            lines: ['rules: active', 'caps · merchants · categories enforced'],
        },
        {
            cmd: 'paybots mode autonomous',
            lines: ['mode: autonomous', 'intent-only purchases · checked & backed'],
        },
        {
            cmd: '',
            lines: ['status: ready', 'agent cleared for production traffic'],
            success: true,
        },
    ];

    const TYPE_MS = 42;
    const LINE_PAUSE_MS = 520;
    const STEP_PAUSE_MS = 900;
    const LOOP_PAUSE_MS = 2400;

    let running = false;
    let started = false;

    function sleep(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }

    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function appendLine(className, text) {
        const line = document.createElement('div');
        line.className = 'terminal-line ' + className;
        line.textContent = text;
        output.appendChild(line);
        return line;
    }

    function renderStatic() {
        output.innerHTML = '';
        STEPS.forEach(function (step) {
            if (step.cmd) {
                appendLine('terminal-line--cmd', '$ ' + step.cmd);
            }
            step.lines.forEach(function (text) {
                appendLine(
                    step.success ? 'terminal-line--success' : 'terminal-line--out',
                    step.success ? '✓ ' + text : '  ' + text
                );
            });
            appendLine('terminal-line--spacer', '');
        });
        cursor.hidden = true;
    }

    async function typeText(lineEl, text, ms) {
        for (let i = 0; i < text.length; i++) {
            lineEl.textContent += text[i];
            await sleep(ms);
        }
    }

    async function runSequence() {
        if (running) return;
        running = true;
        cursor.hidden = false;

        while (true) {
            output.innerHTML = '';

            for (let s = 0; s < STEPS.length; s++) {
                const step = STEPS[s];

                if (step.cmd) {
                    const cmdLine = appendLine('terminal-line--cmd', '$ ');
                    await typeText(cmdLine, step.cmd, TYPE_MS);
                    await sleep(LINE_PAUSE_MS);
                }

                for (let l = 0; l < step.lines.length; l++) {
                    const prefix = step.success ? '✓ ' : '  ';
                    const outLine = appendLine(
                        step.success ? 'terminal-line--success' : 'terminal-line--out',
                        ''
                    );
                    await typeText(outLine, prefix + step.lines[l], TYPE_MS);
                    await sleep(LINE_PAUSE_MS);
                }

                if (s < STEPS.length - 1) {
                    appendLine('terminal-line--spacer', '');
                }
                await sleep(STEP_PAUSE_MS);
            }

            await sleep(LOOP_PAUSE_MS);
        }
    }

    function start() {
        if (started) return;
        started = true;

        if (prefersReducedMotion()) {
            renderStatic();
            return;
        }

        runSequence();
    }

    if (prefersReducedMotion()) {
        renderStatic();
        return;
    }

    const observer = new IntersectionObserver(
        function (entries) {
            if (entries.some(function (e) { return e.isIntersecting; })) {
                start();
                observer.disconnect();
            }
        },
        { threshold: 0.35 }
    );

    observer.observe(terminal);
})();
