function download(name, button)
{
    var div = button.parentElement;
    var language = div.getElementsByTagName("select")[0];
    var selected = language.value.trim().toLowerCase();

    name = name.trim().toLowerCase();
    while (name.includes(" ")) name = name.replace(" ", "_");
    window.location.href = "/data/club/hackathons/" + name + "/" + selected + ".zip";
}
