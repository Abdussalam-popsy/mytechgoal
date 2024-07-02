function updateDateTime() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    currentTimeElement.textContent = `Current UTC Time: ${utcTime}`;
    currentDayElement.textContent = dayOfWeek;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
});
