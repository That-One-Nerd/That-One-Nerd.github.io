const title = document.getElementById("title");

// This is for the AP exam timer.
const examStart = new Date("May 3, 2023 12:00");
const examEnd = new Date("May 3, 2023 15:15");

const examElement = document.createElement("h3");
if (title != undefined)
{
    // Add the newly created AP exam countdown element.
    title.append(examElement);

    // Enable the AP exam countdown.
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown()
{
    // Difference between now and the desired date in milliseconds.
    const now = new Date(Date.now());
    var mode = "waiting";

    var difference = examStart - now;
    if (difference < 0)
    {
        difference = examEnd - now;
        mode = "doing";
    }
    if (difference < 0)
    {
        difference = -difference;
        mode = "done";
    }

    // Get minutes and seconds from decimal hours.
    var deciHours = difference / (1000 * 60 * 60);
    var deciMinutes = (deciHours % 1) * 60;
    var deciSeconds = (deciMinutes % 1) * 60;

    var hours = Math.floor(deciHours);
    var minutes = Math.floor(deciMinutes);
    var seconds = Math.floor(deciSeconds);

    // Construct string and assign it.
    var string = `${hours}:${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
    switch (mode)
    {
        case "waiting":
            string += " until the AP exam begins!";
            break;

        case "doing":
            string += " until the AP exam ends!";
            break;

        case "done":
            string += " since the AP exam has been completed!";
            break;
    }

    examElement.textContent = string;
}
