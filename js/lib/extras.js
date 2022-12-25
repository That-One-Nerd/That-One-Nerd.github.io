export function lerp(a, b, t, clamp = true)
{
    if (clamp)
    {
        t = min([ 1, t ]);
        t = max([ 0, t ]);
    }
    return a + t * (b - a);
}

export function max(nums)
{
    if (nums.length < 0) return 0;
    var biggest = nums[0];
    for (var i = 1; i < nums.length; i++)
    {
        var num = nums[i];
        if (num > biggest) biggest = num;
    }
    return biggest;
}

export function min(nums)
{
    if (nums.length < 0) return 0;
    var smallest = nums[0];
    for (var i = 1; i < nums.length; i++)
    {
        var num = nums[i];
        if (num < smallest) smallest = num;
    }
    return smallest;
}

export function placify(num)
{
    var str = num.toString();
    if (num > 10 && num < 20) return str + "th";
    switch (str[str.length - 1])
    {
        case '1': return str + "st";
        case '2': return str + "nd";
        case '3': return str + "rd";
        default: return str + "th";
    }
}

export function replaceVars(variable, replace)
{
    var elements = document.getElementsByClassName("js-check-vars");
    var changed = 0;
    for (var i = 0; i < elements.length; i++)
    {
        var element = elements[i];
        var html = element.innerHTML;

        while (html.includes(variable))
        {
            html = html.replace(variable, replace);
            changed++;
        }

        element.innerHTML = html;
    }

    return changed;
}
export function replaceVarsBlock(text, variable, replace)
{
    while (text.includes(variable)) text = text.replace(variable, replace);
    return text;
}
