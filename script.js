let quotes = document.getElementById("quotes");

fetch("https://randominspirationalquotes.onrender.com")
  .then((response) => response.json())
  .then((data) => {
    quotes.textContent = `"${data.quote}"`;
    quotes.nextElementSibling.textContent = data.author;
  })
  .catch((error) => console.error("Error fetching data:", error));

  


// Clock and greeting
function updateTime() {
  const timeEl = document.getElementById("time");
  const greetingEl = document.getElementById("greeting");
  const now = new Date();

  let formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true, // This ensures 12-hour format with AM/PM
  });

  let formattedTime = formatter.format(now);

  const hours = now.getHours();

  timeEl.textContent = formattedTime.replace(/ (AM|PM)$/, "");
}

setInterval(updateTime, 1000);
updateTime();
