// عداد الفعالية القادمة - غيّري التاريخ هنا عند الإعلان عن فعالية جديدة
const nextEventDate = new Date('2026-09-28T00:00:00+03:00').getTime();

function updateCountdown() {
    const now = Date.now();
    let distance = nextEventDate - now;

    const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
    distance -= days * 1000 * 60 * 60 * 24;
    const hours = Math.max(0, Math.floor(distance / (1000 * 60 * 60)));
    distance -= hours * 1000 * 60 * 60;
    const minutes = Math.max(0, Math.floor(distance / (1000 * 60)));
    distance -= minutes * 1000 * 60;
    const seconds = Math.max(0, Math.floor(distance / 1000));

    const values = { days, hours, minutes, seconds };
    Object.entries(values).forEach(([key, value]) => {
        const el = document.querySelector(`[data-countdown="${key}"]`);
        if (el) el.textContent = String(value).padStart(2, '0');
    });

    const status = document.querySelector('[data-countdown-status]');
    if (status) {
        status.textContent = nextEventDate > now
            ? 'الوقت المتبقي على الفعالية القادمة'
            : 'بدأت الفعالية القادمة';
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);
