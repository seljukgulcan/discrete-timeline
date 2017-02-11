/**
 * Independant script for creating discrete timelines. 
 *
 * @module Timeline
 */

var Timeline = function() {

	var DEFAULT_FILL_COLOR = "#d6e685";
	var CELL_WIDTH = 10;
	var CELL_HEIGHT = 20;
	var CELL_ROW_SPACING = 10;
	var CELL_COL_SPACING = 5;
	var PADDING_LEFT = 100;
	var PADDING_UP = 25;
	var FONT_SIZE = 14;

	var canvas;
	var context;

	var fillSingleCell = function( rowNo, colNo) {

		var x = colNo * ( CELL_WIDTH + CELL_COL_SPACING) + PADDING_LEFT;
		var y = rowNo * ( CELL_HEIGHT + CELL_ROW_SPACING) + PADDING_UP;;

		context.rect( x, y, CELL_WIDTH, CELL_HEIGHT);
		context.fill();
	}

	/**
	 * Draws timeline with specified number of rows, number of columns inside given div.
	 * @param  {stirng} divId     id of container div element
	 * @param  {number} noOfRows     number of rows in the timeline
	 * @param  {number} noOfCols     number of columns in the timeline
	 * @param  {array} listRowTitle list of row titles (Optional)
	 */
	var init = function( divId, noOfRows, noOfCols, listRowTitle) {

		canvas = document.createElement('canvas');
		canvas.id     = divId + "TimelineCanvas";
		canvas.width  = PADDING_LEFT + noOfCols * ( CELL_WIDTH + CELL_COL_SPACING) + 10;
		canvas.height = PADDING_UP + noOfRows * (CELL_HEIGHT + CELL_ROW_SPACING) + 10;
		canvas.style.border   = "1px solid";

		document.getElementById( divId).appendChild(canvas);
		context=canvas.getContext("2d");
		context.font = FONT_SIZE + "px Courier New";

		if( listRowTitle != undefined) {

			for( var row = 0; row < noOfRows; row++) {

				context.fillText( listRowTitle[row], 2, PADDING_UP + row * ( CELL_HEIGHT + CELL_ROW_SPACING) + FONT_SIZE);
			}
		}

		for( var col = 0; col < noOfCols; col++) {

			context.fillText( col % 10, PADDING_LEFT + col * (CELL_WIDTH + CELL_COL_SPACING), 14);
		}

		context.beginPath();
		context.fillStyle = "#eeeeee";
		for( var row = 0; row < noOfRows; row++) {

			for( var col = 0; col < noOfCols; col++) {

				fillSingleCell( row, col);
			}
		}
	}

	/**
	 * Fills specified cells
	 * @param  {number} rowNo          index of row that cells will be filled in.
	 * @param  {number} startCellIndex starting index (starting cell will be filled)
	 * @param  {number} noOfCellToFill number of cells to be filled starting from startCellIndex
	 * @param  {string} color          optinal argument of ccs rgb color code of filled cells (# is required in argument)
	 */
	var fillCell = function( rowNo, startCellIndex, noOfCellToFill, color) {

		if( noOfCellToFill == undefined) {

			noOfCellToFill = 1;
		}

		if( color == undefined) {

			color = DEFAULT_FILL_COLOR;
		}

		context.fillStyle = color;
		context.beginPath();

		for( var i = 0; i < noOfCellToFill; i++) {

			fillSingleCell( rowNo, startCellIndex + i);
		}
	}

	return {

		init: init,
		fillCell: fillCell
	}
}();