function matreeshka(opts, flat, targ) {
    const cellGap = 2;

    let pxRatio = devicePixelRatio;
    let cssWid, cssHgt;
    let canWid, canHgt;

    let index;
    let stack = [];
    let dfltStack = Array.from(flat[0].keys());

    let levels = Math.max(...flat[0]) + 1;
    let cellHgt;
    let pxPerVal;

    let root = document.createElement('div');
    root.className = 'matreeshka';

    let hover = document.createElement('div');
    hover.className = 'hover';
    hoverStyle = hover.style;

    let can = document.createElement('canvas');
    let ctx = can.getContext('2d');

    let chars = '';
    for (let i = 32; i <= 126; i++)
        chars += String.fromCharCode(i);

    let pxPerChar = Math.ceil(ctx.measureText(chars).width / chars.length * pxRatio);

    // render
    function setFocus(idx) {
        let xPosByLevel = Array(levels).fill(0);
        let len = flat[0].length;

        pxPerVal = canWid / flat[1][idx];
        let zoomLvl = flat[0][idx];

        if (zoomLvl == 0)
            stack = dfltStack;
        else {
            // indicies from root in focused stack
            stack = [];
            let i;

            // add all ancestors (except root, to avoid excess iteration)
            i = idx;
            let ancestLvl = zoomLvl;
            while (ancestLvl > 1) {
                i--;
                let lvl = flat[0][i];

                if (lvl < ancestLvl) {
                    stack.push(i);
                    ancestLvl = lvl;
                }
            }

            // add root
            stack.push(0);

            stack.reverse();

            // add self & all descendants
            i = idx;
            do {
                stack.push(i);
            } while (i++ < len && flat[0][i] > zoomLvl);
        }

        index = new Flatbush(stack.length, 512, Int16Array);

        ctx.clearRect(0, 0, canWid, canHgt);

        let path = new Path2D();

        let si = 0;
        i = stack[si];
        let prevLvl = flat[0][i];
        do {
            i = stack[si];

            let lvl  = flat[0][i];
            let val  = flat[1][i];
            let name = flat[2][i];

            let cellWid = Math.round(lvl <= zoomLvl ? canWid : val * pxPerVal);
            let y = Math.round(lvl * cellHgt);
            let x = xPosByLevel[lvl];

            let x0 = x + cellGap;
            let y0 = y + cellGap;
            let w = cellWid - cellGap * 2;
            let h = cellHgt - cellGap * 2;

            path.rect(x0, y0, w, h);
            index.add(x0, y0, x0 + w, y0 + h);

            let label = `${name} (${val})`;
            let maxChars = Math.floor(w / pxPerChar);
            ctx.fillText(label.slice(0, maxChars - 1), x0, y0 + h/2);

            xPosByLevel.fill(xPosByLevel[lvl], lvl+1);
            xPosByLevel[lvl] += cellWid
            prevLvl = lvl;
        } while (++si < stack.length);

        ctx.save();
        ctx.fillStyle = '#eee';
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fill(path);
        ctx.restore();

        index.finish();
    }

    function setData() {

    }

    function setSize({width, height}) {
        cssWid = width;
        cssHgt = height;
        canWid = can.width = Math.round(cssWid * pxRatio);
        canHgt = can.height = Math.round(cssHgt * pxRatio);
        can.style.width = `${cssWid}px`;
        can.style.height = `${cssHgt}px`;

        cellHgt = canHgt / levels;

        ctx.font = '18px Arial';

        setFocus(0);
    }

    can.addEventListener('mousemove', e => {
        searchFlat(e.offsetX * pxRatio, e.offsetY * pxRatio);
    });
    can.addEventListener('mouseleave', e => {
        hoverStyle.display = "none";
        hoveredIdx = null;
    });
    can.addEventListener('click', e => {
        if (hoveredIdx != null) {
            setFocus(stack[hoveredIdx]);

            hoveredIdx = null;
            searchFlat(e.offsetX * pxRatio, e.offsetY * pxRatio);
        }
    });

    let hoveredIdx = null;

    function searchFlat(xMin, yMin, xMax, yMax) {
        let flatIdxs = index.search(xMin, yMin, xMax ?? xMin + 1, yMax ?? yMin + 1);

        if (flatIdxs.length > 0) {
            for (let j = 0; j < flatIdxs.length; j++) {
                let idx = flatIdxs[j];

                let offs = index._indices.indexOf(idx) * 4;
                let minX = index._boxes[offs++];
                let minY = index._boxes[offs++];
                let maxX = index._boxes[offs++];
                let maxY = index._boxes[offs++];

                if (hoveredIdx !== idx) {
                    hoverStyle.display = "block";

                    hoverStyle.top = `${Math.round(minY / pxRatio)}px`;
                    hoverStyle.left = `${Math.round(minX / pxRatio)}px`;
                    hoverStyle.width = `${Math.round((maxX - minX) / pxRatio)}px`;
                    hoverStyle.height = `${Math.round((maxY - minY) / pxRatio)}px`;

                    hoveredIdx = idx;
                }

                break;
            }
        }
        else {
            hoverStyle.display = "none";
            hoveredIdx = null;
        }
    }

    setSize(opts);

    root.appendChild(can)
    root.appendChild(hover);
    targ.appendChild(root);

    return {
        root,
        setSize,
        setData,
        setFocus,
    };
}