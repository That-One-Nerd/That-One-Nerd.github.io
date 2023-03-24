const moreInfoId = "body-more-info";

var moreInfoOpen = false;
var moreInfoSize = 0;

function init()
{
    var element = document.getElementById(moreInfoId);
    if (element != undefined)
    {
        moreInfoSize = element.offsetHeight;
        element.style.height = "0";
    }
}

function toggleMoreInfo()
{
    moreInfoOpen = !moreInfoOpen;
    
    var element = document.getElementById(moreInfoId);
    element.style.height = moreInfoOpen ? moreInfoSize.toString() + "px" : "0";
}

function goToDownloads()
{
    window.location.href = "/projects/keycollect/download.html";
}

function downloadFile(name)
{
    name = name.toLowerCase();
    while (name.includes(" ")) name = name.replace(" ", "_");
    window.location.href = "/data/projects/keycollect/" + name;
}

init();
