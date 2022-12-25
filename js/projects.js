function main()
{
    var projects = getProjects();
    if (projects == undefined)
    {
        console.error("No projects found.");
        return;
    }
    var template = getTemplate();
    if (template == undefined)
    {
        console.error("Template not found.");
        return;
    }
    var divs = populateTemplates(projects, template);
    insertProjects(divs);
}

function getProjects()
{
    const projectsPath = "/data/projects.json";
    
    request.open("GET", projectsPath, false);
    request.send(null);

    var str = request.responseText;

    return JSON.parse(str);
}

function getTemplate()
{
    const templatePath = "/templates/project.html";

    request.open("GET", templatePath, false);
    request.send(null);

    return request.responseText;
}

function populateTemplates(json, template)
{
    var total = "";

    for (var i = 0; i < json.projects.length; i++)
    {
        var project = json.projects[i];
        var str = template;
        str = globalThis.extras.replaceVarsBlock(str, "%id%", project.id);
        str = globalThis.extras.replaceVarsBlock(str, "%name%", project.name);
        str = globalThis.extras.replaceVarsBlock(str, "%description%", project.description);
        str = globalThis.extras.replaceVarsBlock(str, "%link%", project.link);
        str = globalThis.extras.replaceVarsBlock(str, "%date%", project.date);
        str = globalThis.extras.replaceVarsBlock(str, "<!--img-->", project.img == undefined ? "" : project.img);

        total += str;
    }

    return total;
}

function insertProjects(projects)
{
    var html = document.documentElement.innerHTML;
    
    while (html.includes("<!--projects-->")) html = html.replace("<!--projects-->", projects);
    document.documentElement.innerHTML = html;
}

main();
