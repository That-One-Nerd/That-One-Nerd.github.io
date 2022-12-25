const request = new XMLHttpRequest();
const siteUrl = window.location.href;

function init()
{
    console.log("Initializing " + siteUrl);

    insertHeader();
    insertFooter();

    if (document.cookie.includes("headerOpen=false")) toggleHeader();

    resetDropdowns();

    const initMessagePath = "/data/initmessages.txt";
    request.open("GET", initMessagePath, false);
    request.send(null);
    var lines = request.responseText.split("\n");

    globalThis.request = request;

    console.log(lines[Math.floor(Math.random() * lines.length)]);
}

function backToTop()
{
    const maxFrames = 30;

    var currentScroll = document.body.scrollTop;
    if (currentScroll == 0) currentScroll = document.documentElement.scrollTop;
    if (currentScroll == 0) return;
    var startScroll = currentScroll;

    var timer = setInterval(loop);
    var frames = 0;

    function loop()
    {
        if (frames == maxFrames)
        {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            clearInterval(timer);
            return;
        }
        frames++;
        currentScroll = globalThis.lerping.sinLerp(startScroll, 0, frames / maxFrames);

        document.body.scrollTop = currentScroll;
        document.documentElement.scrollTop = currentScroll;
    }
}

function insertFooter()
{
    const footerPath = "/templates/footer.html";

    var str = document.documentElement.innerHTML;

    request.open("GET", footerPath, false);
    request.send(null);

    while (str.includes("<!--footer-->")) str = str.replace("<!--footer-->", request.responseText);
    document.documentElement.innerHTML = str;
}

function insertHeader()
{
    const headerPath = "/templates/header.html";

    var str = document.documentElement.innerHTML;

    request.open("GET", headerPath, false);
    request.send(null);

    while (str.includes("<!--header-->")) str = str.replace("<!--header-->", request.responseText);
    document.documentElement.innerHTML = str;
}

function resetDropdowns()
{
    var drops = document.getElementsByClassName("dropdown");
    for(var i = 0; i < drops.length; i++) toggleDropdown(drops[i]);
}

function scaleHeaderSpacer()
{
    var header = document.getElementById("header"),
    spacer = document.getElementById("header-spacer");
    spacer.style.marginBottom = header.clientHeight + "px";
}

var headerOpen = true;
var spin = 180;
function toggleHeader()
{
    headerOpen = !headerOpen;
    var header = document.getElementById("header"), button = document.getElementById("header-close");

    spin += 180;
    header.style.top = headerOpen ? "0" : "-4.1vw";
    button.style.rotate = spin + "deg";
    button.title = (headerOpen ? "Close" : "Open") + " the header.";

    document.cookie = "headerOpen=" + headerOpen;
}

function toggleDropdown(dropdown)
{
    var body = dropdown.getElementsByClassName("dropdown-body")[0];
    if (body.style.height.startsWith("0"))
    {
        body.style.height = "auto";
        var height = body.clientHeight;
        body.style.height = "0";

        setTimeout(function ()
        {
            body.style.height = height + "px";
        }, 10);

        body.style.borderWidth = "1px";
        dropdown.style.marginBottom = "1vw";
    }
    else
    {
        body.style.height = "0";
        body.style.borderWidth = "0";
        dropdown.style.marginBottom = "0";
    }
}

init();
