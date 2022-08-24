// enumerates tree via mptt pass, invoking callback
function mptt2(fn, n, i, lvl, par, cidx = 0, gidx = {i: 0}) {
    let lft = i++, rgt;

    let _gidx = gidx.i;

    if (Array.isArray(n.nodes)) {
        for (var j = 0; j < n.nodes.length; j++) {
            gidx.i++;
            i = mptt2(fn, n.nodes[j], i, lvl+1, n, j, gidx);
        }
    }

    rgt = i++;

    fn(n, lft, rgt, lvl, par, cidx, _gidx);

    return i;
}