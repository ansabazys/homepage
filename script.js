// Clock and greeting
function updateTime() {
  const timeEl = document.getElementById("time");
  const greetingEl = document.getElementById("greeting");
  const now = new Date();

  let formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // This ensures 12-hour format with AM/PM
  });

  let formattedTime = formatter.format(now);
  console.log(formattedTime); // Example output: 01:24 PM

  const hours = now.getHours();

  timeEl.textContent = formattedTime.replace(/ (AM|PM)$/, '');

  if (hours < 12) {
    greetingEl.textContent = "Good Morning";
  } else if (hours < 18) {
    greetingEl.textContent = "Good Afternoon";
  } else {
    greetingEl.textContent = "Good Evening";
  }
}

setInterval(updateTime, 1000);
updateTime();

// Search functionality
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    if (query.startsWith("http")) {
      window.open(query, "_blank");
    } else {
      window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchBtn.click();
});
