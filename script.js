function updateUTCTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = `Current UTC Time: ${utcTime}`;
}

updateUTCTime();
setInterval(updateUTCTime, 1000);
