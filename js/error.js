var changed = false;
function main()
{
    globalThis.extras.replaceVars("%url%", window.location.pathname.substring(1));

    setTimeout(() => {
        if (!headerOpen)
        {
            toggleHeader();
            changed = true;
            setTimeout(showHeaderMessage, 500);
        }
        else showHeaderMessage();
    }, headerOpen ? 500 : 1000);
}

function goBack()
{
    history.back();
}

function goHome()
{
    window.location.href = "/index.html";
}

function showHeaderMessage()
{
    var text1 = document.getElementById("headertext");
    var text2 = document.getElementById("headertext2" + (changed ? "a" : "b"));
    text1.style.top = "3.5vw";
    text2.style.top = "0.75vw";

    var lastClosed = headerOpen;
    setInterval(() => {
        if (!headerOpen && lastClosed) onHeaderClose();
        lastClosed = headerOpen;
    }, 500);
}

function onHeaderClose()
{
    setTimeout(() => {
        if (!headerOpen) toggleHeader();
    }, 3500);
}

main();
