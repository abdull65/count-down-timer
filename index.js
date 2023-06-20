function setCountDown() {
  const dateInput = document.getElementById("dateInput").value;
  const lunchDate = new Date(dateInput);
  const currentDate = new Date();
  const timeDifference = lunchDate - currentDate;
  const currentDay = document.getElementById("days");
  const currentHour = document.getElementById("hours");
  const currentMinutes = document.getElementById("minutes");
  const currentSeconds = document.getElementById("seconds");
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

  currentDay.innerHTML = daysLeft;
  currentHour.innerHTML = hoursLeft;
  currentMinutes.innerHTML = minutesLeft;
  currentSeconds.innerHTML = secondsLeft;

  if (timeDifference < lunchDate.getSeconds()) {
    clearInterval(countdownInterval);
    alert("count down is over");
  }
}
document.getElementById("dateInput").addEventListener("focus", () => {
  const countdownInterval = setInterval(setCountDown, 1000);
  setCountDown();
});
