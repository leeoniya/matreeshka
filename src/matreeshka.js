/*
const palette = [
	'#ffffcc',
	'#fff0a9',
	'#fee087',
	'#fec965',
	'#feab4b',
	'#fd893c',
	'#fa5c2e',
	'#ec3023',
	'#d31121',
	'#af0225',
	'#800026',
];
*/

const palette = [
	'#eee',
	"#a5d6a7",
];

// TODO: select palette (ant design, greens, reds) based on callback for index, choose random color from it?
// TODO: color by time at top of stack (self)
// TODO: name filter, other field filter, ancestor filter
// TODO: color by callback (fuzzy text match)
// TODO: dynamic font color based on contrast

const VALUE_THRESHOLD_ADAPTIVE = true;
const VALUE_THRESHOLD = 0; // 1e-3, 2e-3, 0
const LEVEL_THRESHOLD = 1e3;

function matreeshka(opts, flat, targ) {
	const cellGap = 0.5;

	let pxRatio = devicePixelRatio;
	let cssWid, cssHgt;
	let canWid, canHgt;

	let index;
	let stack = [];

	// or sort() and take last element? or loop?
	let levels = Math.max(...new Set(flat[0])) + 1;
	let cellHgt;
	let pxPerVal;

	let root = document.createElement('div');
	root.className = 'matreeshka';

	let hover = document.createElement('div');
	hover.className = 'hover';
	hoverStyle = hover.style;

	let can = document.createElement('canvas');
	let ctx = can.getContext('2d');

	let rootVal = flat[1][0];

	let chars = '';
	for (let i = 32; i <= 126; i++)
		chars += String.fromCharCode(i);

	let pxPerChar = Math.ceil(ctx.measureText(chars).width / chars.length * pxRatio);

	// render
	function setFocus(idx) {
		// where the next sibling should start
		let xPosByLevel = Array(levels).fill(0);

		// x0s or merged rects, defered rendering until non-tiny or non-adjacent sibling encountered, else accumulates
		let x0PosByLevel = Array(levels).fill(-1);
		let x1PosByLevel = Array(levels).fill(-1);

		let len = flat[0].length;

		let baseVal = flat[1][idx];

		pxPerVal = canWid / baseVal;
		let zoomLvl = flat[0][idx];

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

		index = new Flatbush(1401, 512, Int16Array);

		ctx.clearRect(0, 0, canWid, canHgt);

		let paths = palette.map(c => new Path2D());

		let lastSi = stack.length - 1;
		let si = 0;
		i = stack[si];
		do {
			let lvl  = flat[0][i];
			let val  = flat[1][i];
			let name = flat[2][i];

			// custom matching function (by label, by value, by ancestor, by tag) -> color palette, random from narrow range, greens, oranges, pinks, blues, purples
			// by % of total

			let pctOfTotal = val / baseVal;
		//	let paletteIdx = Math.min(Math.floor(pctOfTotal * palette.length), palette.length - 1);
		//	let paletteIdx = Math.min(Math.floor(Math.random() * palette.length), palette.length - 1);

			let paletteIdx = 1;

			let cellWid = lvl <= zoomLvl ? canWid : val * pxPerVal;

			let y = lvl * cellHgt;
			let x = xPosByLevel[lvl];

			// TODO: deal in values to reduce compute?
			if (x0PosByLevel[lvl] == -1) {
				if (cellWid < 7) {
					x0PosByLevel[lvl] = x; // start of merged cell
					x1PosByLevel[lvl] = x + cellWid;
				}
			} else {
				if (cellWid < 7) {
					// if end of prev cell at this level (if adjacent-ish by 1px)
					if (x1PosByLevel[lvl] + 1 >= x) {
						//merges++;
						// merge!
						x1PosByLevel[lvl] = x + cellWid;
					} else {
						// draw pending! if cell width > 5?
						paletteIdx = 0;
						let x2 = x0PosByLevel[lvl];
						let cellWid2 = x1PosByLevel[lvl] - x2;

						let x0 = x2 + cellGap;
						let y0 = y + cellGap;
						let w = cellWid2 - cellGap * 2;
						let h = cellHgt - cellGap * 2;
						let fillPath = paths[paletteIdx];
						fillPath.rect(x0, y0, w, h);

						// reset, does nothing?
						x0PosByLevel[lvl] = x; // start of merged cell
						x1PosByLevel[lvl] = x + cellWid;
					}
				} else {
					// draw pending! if cell width > 5?
					paletteIdx = 0;
					let x = x0PosByLevel[lvl];
					let cellWid = x1PosByLevel[lvl] - x;

					let x0 = x + cellGap;
					let y0 = y + cellGap;
					let w = cellWid - cellGap * 2;
					let h = cellHgt - cellGap * 2;
					let fillPath = paths[paletteIdx];
					fillPath.rect(x0, y0, w, h);

					// reset
					x0PosByLevel[lvl] = -1; // start of merged cell
				}
			}

			if (cellWid >= 7) {
				paletteIdx = 1;
				let x0 = x + cellGap;
				let y0 = y + cellGap;
				let w = cellWid - cellGap * 2;
				let h = cellHgt - cellGap * 2;

				let fillPath = paths[paletteIdx];

				fillPath.rect(x0, y0, w, h);
				let i2 = index.add(x0, y0, x0 + w, y0 + h);
				i > idx && stack.push(i);

				let maxChars = Math.floor(w / pxPerChar);

				if (maxChars > 1) {
					//let label = `${name} (${val})`;
					let label = name.split(" ")[0];
					ctx.fillText(label.slice(0, maxChars - 1), x0, y0 + h/2);
				}
			}

			for (let nxtLvl = lvl + 1, v = xPosByLevel[lvl]; nxtLvl < levels; nxtLvl++)
				xPosByLevel[nxtLvl] = v;

			xPosByLevel[lvl] += cellWid;

			i = si < lastSi ? stack[++si] : ++i;
		} while (i < flat[0].length && (i <= idx || flat[0][i] > zoomLvl));

		// console.log('merges', merges);
		// console.log('sm', sm);

		console.log(stack);

		ctx.save();
		ctx.globalCompositeOperation = 'destination-over';

		for (let i = 0; i < paths.length; i++) {
			ctx.fillStyle = palette[i];
			ctx.fill(paths[i]);
		}

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

		ctx.font = '15px monospace';

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
		console.time('setFocus');

		if (hoveredIdx != null) {
			setFocus(stack[hoveredIdx]);

			hoveredIdx = null;
			searchFlat(e.offsetX * pxRatio, e.offsetY * pxRatio);
		}

		console.timeEnd('setFocus');
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