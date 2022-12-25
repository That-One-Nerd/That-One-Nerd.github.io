export function defaultLerp(a, b, t, clamp = true)
{
    if (clamp)
    {
        t = globalThis.extras.min([ 1, t ]);
        t = globalThis.extras.max([ 0, t ]);
    }
    return a + t * (b - a);
}

export function sinLerp(a, b, t, clamp = true)
{
    if (clamp)
    {
        t = globalThis.extras.min([ 1, t ]);
        t = globalThis.extras.max([ 0, t ]);
    }
    var cos = Math.cos(Math.PI * t) - 1;
    var mult = (b - a) / 2;
    return -mult * cos + a;
}
