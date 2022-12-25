export function commaify(numStr)
{
    var str = "";
    for (var i = 0; i < numStr.length; i++)
    {
        str = numStr.charAt(numStr.length - 1 - i) + str;
        if (i % 3 == 2 && i != numStr.length - 1) str = "," + str;
    }
    return str;
}

export function stringifyByteCount(number)
{
    const endings = [ "B", "KB", "MB", "GB", "TB", "PB", "EB" ];

    var end = 0;
    while (number >= 1024)
    {
        number /= 1024;
        end++;
    }

    var places;
    if (number < 100) places = 1;
    else if (number < 10) places = 2;
    else if (number < 2) places = 3;
    else places = 0;

    var pow = Math.pow(10, places);
    var n = Math.round(number * pow) / pow;
    var str = n + " " + endings[end];

    return str;
}
