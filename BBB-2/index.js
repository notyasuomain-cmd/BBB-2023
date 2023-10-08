var nrow = 12; // 12 rows
var ncell = 8; // 8 columns
var cellSize = "30px"; // cell size (matching with css)
var tt = new Array(nrow);
var figure_cell_list = [];

// TODO: a sakk babuk szerintem nem annyira vannak kozepen mint ahogy kene

// add black pieces to row 0
figure_cell_list.push([0, 0, '/BBB-2/pieces/br.png']);
figure_cell_list.push([0, 1, '/BBB-2/pieces/bn.png']);
figure_cell_list.push([0, 2, '/BBB-2/pieces/bb.png']);
figure_cell_list.push([0, 3, '/BBB-2/pieces/bq.png']);
figure_cell_list.push([0, 4, '/BBB-2/pieces/bk.png']);
figure_cell_list.push([0, 5, '/BBB-2/pieces/bb.png']);
figure_cell_list.push([0, 6, '/BBB-2/pieces/bn.png']);
figure_cell_list.push([0, 7, '/BBB-2/pieces/br.png']);

// add black pawns to row 1
for (var col = 0; col < 8; col++) {
    figure_cell_list.push([1, col, '/BBB-2/pieces/bp.png']);
}

// add white pieces to row 11
figure_cell_list.push([11, 0, '/BBB-2/pieces/wr.png']);
figure_cell_list.push([11, 1, '/BBB-2/pieces/wn.png']);
figure_cell_list.push([11, 2, '/BBB-2/pieces/wb.png']);
figure_cell_list.push([11, 3, '/BBB-2/pieces/wq.png']);
figure_cell_list.push([11, 4, '/BBB-2/pieces/wk.png']);
figure_cell_list.push([11, 5, '/BBB-2/pieces/wb.png']);
figure_cell_list.push([11, 6, '/BBB-2/pieces/wn.png']);
figure_cell_list.push([11, 7, '/BBB-2/pieces/wr.png']);

// add white pawns to row 10
for (var col = 0; col < 8; col++) {
    figure_cell_list.push([10, col, '/BBB-2/pieces/wp.png']);
}

var newrow;

function init() {
    for (var i = 0; i < nrow; i++) {
        newrow = document.getElementById("chessboard").insertRow(i);
        tt[i] = new Array(ncell);
        for (var j = 0; j < ncell; j++) {
            tt[i][j] = newrow.insertCell(j);
            tt[i][j].id = i * ncell + j;

            // cell color
            if ((i + j) % 2 === 0) {
                tt[i][j].style.background = "#ffffff"; // White
            } else {
                tt[i][j].style.background = "#709c44"; // Black
            }

            tt[i][j].onclick = function() {
                cellClicked(this);
            };

            // set cell size
            tt[i][j].style.width = cellSize;
            tt[i][j].style.height = cellSize;

            // append piece image
            var img = document.createElement("img");
            tt[i][j].appendChild(img);
        }
    }
    for (var i = 0; i < figure_cell_list.length; i++) {
        var trow = figure_cell_list[i][0];
        var tcol = figure_cell_list[i][1];
        var timgsrc = figure_cell_list[i][2];

        tt[trow][tcol].querySelector("img").src = timgsrc;
    }
}

function clearBackground() {
    for (var i = 0; i < nrow; i++) {
        for (var j = 0; j < ncell; j++) {
            // cell color
            if ((i + j) % 2 === 0) {
                tt[i][j].style.background = "#ffffff"; // white
            } else {
                tt[i][j].style.background = "#709c44"; // black
            }
        }
    }
}

function cellClicked(obj) {
    clearBackground();
    var row = parseInt(obj.id / ncell);
    var column = obj.id % ncell;
    tt[row][column].style.background = "#00ff00"; // green background for selected cell
}

// call init function when it is loaded
window.onload = init;
