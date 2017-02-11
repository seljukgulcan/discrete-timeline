# Timeline.js

This simple script draws discrete timelines (see below for an example). It has just two methods. It is not designed for general purposes so you may want to tweak some variables or rewrite some parts of code to suit your needs.

## Example

![Example output](https://raw.githubusercontent.com/Shathra/discrete-timeline/master/demo.png)

## Usage

 - Add a container (div) to your page.
 
```
<div id="timeline"></div>
```
 
 - Import timeline.js. (It does not depend on any other libraries so importing just timeline.js is enough.

```
<script type="text/javascript" src="timeline.js"></script>
```

 - Use init to create an empty timeline. (First argument is id of container, see [Documentation](#Documentation) for more information.

```
Timeline.init( "timeline", 4, 100, ["Alex", "Bob", "Alice", "John"]);
```
 - Use fillCell to fill cell on the timeline.

```
Timeline.fillCell( 0, 78, 10, getRandomColor());
```

## Documentation

### Timeline.init(divId, noOfRows, noOfCols, listRowTitle) 

Draws empty timeline with specified number of rows, number of columns inside given div.

**Parameters**

**divId**: `stirng`, id of container div element

**noOfRows**: `number`, number of rows in the timeline

**noOfCols**: `number`, number of columns in the timeline

**listRowTitle**: `array`, list of row titles (Optional)



### Timeline.fillCell(rowNo, startCellIndex, noOfCellToFill, color) 

Fills specified cells

**Parameters**

**rowNo**: `number`, index of row that cells will be filled in.

**startCellIndex**: `number`, starting index (starting cell will be filled)

**noOfCellToFill**: `number`, number of cells to be filled starting from startCellIndex

**color**: `string`, optinal argument of ccs rgb color code of filled cells (# is required in argument)




* * *
