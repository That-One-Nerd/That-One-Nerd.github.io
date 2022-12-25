function main()
{
    setAge();
    setStart();
}

function setAge()
{
    const birthday = Date.parse("05/18/2007");
    var now = Date.now();
    var diff = now - birthday;
    var years = diff * (1 / 31556952000);

    globalThis.extras.replaceVars("%age%", Math.floor(years));
}

function setStart()
{
    const start = Date.parse("7/01/2020");
    var now = Date.now();
    var diff = now - start;
    var years = diff * (1 / 31556952000);

    globalThis.extras.replaceVars("%start%", Math.round(years));
}

main();
