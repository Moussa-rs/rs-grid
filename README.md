<p align="center"><a href="https://github.io/moussa-rs/rs-grid/" target="_blank" rel="noopener noreferrer"></a></p>

<h1 align="center">rs-grid</h1>

</p>

## What is RS Grid Layout?

rs-grid is a grid layout system, like [Gridster](http://dsmorse.github.io/gridster.js/), for Vue.js.

is uses internally [Interactjs](https://interactjs.io/)   

## Features

- Draggable widgets
- Resizable widgets
- Static widgets
- Bounds checking for dragging and resizing
- Widgets may be added or removed without rebuilding grid
- Layout can be serialized and restored
- Responsive

## **Current version:** 1.0.0 (Supports Vue 3+)

## Usage

```js
    import { GridLayout, GridItem } from "rs-grid" // import the components 
    
    // use in template
    <grid-layout
        id="grid-layout"
        :margin="[parseInt(marginX), parseInt(marginY)]"
        v-model:layout="layout"
        :col-num="parseInt(colNum)"
        :row-height="rowHeight"
        :is-draggable="draggable"
        :is-resizable="resizable"
        :is-mirrored="mirrored"
        :is-bounded="bounded"
        :prevent-collision="preventCollision"
        :vertical-compact="compact"
        :restore-on-drag="restoreOnDrag"
        :use-css-transforms="true"
        :responsive="responsive"
        :transformScale="transformScale"
        @layout-created="layoutCreatedEvent"
        @layout-before-mount="layoutBeforeMountEvent"
        @layout-mounted="layoutMountedEvent"
        @layout-ready="layoutReadyEvent"
        @layout-updated="layoutUpdatedEvent"
        @breakpoint-changed="breakpointChangedEvent"
      >
        <grid-item
          v-for="item in layout"
          :key="item.i"
          :static="item.static"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :min-w="item.minW"
          :max-w="item.maxW"
          :min-x="item.minX"
          :max-x="item.maxX"
          :min-y="item.minY"
          :max-y="item.maxY"
          :preserve-aspect-ratio="item.preserveAspectRatio"
          @resize="resize"
          @move="move"
          @resized="resized"
          @container-resized="containerResized"
          @moved="moved"
        >
          <!--<custom-drag-element :text="item.i"></custom-drag-element>-->
          <test-element :text="item.i" @removeItem="removeItem($event)"></test-element>
          <!--<button @click="clicked">CLICK ME!</button>-->
        </grid-item>
      </grid-layout>
```

## Props

# GridLayout

- layout
type: Array
required: true
This is the initial layout of the grid.

The value must be an Array of Object items. Each item must have i, x, y, w and h properties. Please refer to the documentation for GridItem below for more information.

- responsiveLayouts
type: Object
required: false
default : {}
This is the initial layouts of the grid per breakpoint if responsive is set to true. The keys of the Object are breakpoint names and each value is an Array of Object items as defined by layout prop. eg:{ lg:[layout items], md:[layout items] }. Setting the prop after the creation of the GridLayout has no effect.

See also responsive, breakpoints and cols

- colNum
type: Number
required: false
default: 12
Says how many columns the grid has.

The value should be a natural number.

- rowHeight
type: Number
required: false
default: 150
Says what is a height of a single row in pixels.

- maxRows
type: Number
required: false
default: Infinity
Says what is a maximal number of rows in the grid.

- margin
type: Array
required: false
default: [10, 10]
Says what are the margins of elements inside the grid.

The value must be a two-element Array of Number. Each value is expressed in pixels. The first element is a margin horizontally, the second element is a vertical margin.

- isDraggable
type: Boolean
required: false
default: true
Says if the grids items are draggable.

- isResizable
type: Boolean
required: false
default: true
Says if the grids items are resizable.

- isMirrored
type: Boolean
required: false
default: false
Says if the RTL/LTR should be reversed.

- isBounded
type: Boolean
required: false
default: false
Says if the grid items are bounded to the container when dragging

- autoSize
type: Boolean
required: false
default: true
Says if the container height should swells and contracts to fit contents.

- verticalCompact
type: Boolean
required: false
default: true
Says if the layout should be compact vertically.

- restoreOnDrag
type: Boolean
required: false
default: false
Says if the moved grid items should be restored after an item has been dragged over.

- preventCollision
type: Boolean
required: false
default: false
Says if grid items will move when being dragged over.

- useCssTransforms
type: Boolean
required: false
default: true
Says if the CSS transition-property: transform; should be used.

- responsive
type: Boolean
required: false
default: false
Says if the layout should be responsive to window width

See also responsiveLayouts, breakpoints and cols

- breakpoints
type: Object
required: false
default: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
Breakpoints defined for responsive layout, the parameter represents the width of different devices:lg(large), md(medium), sm(small), xs(extra small). Sets widths on wich column number changes

See also responsiveLayouts and cols

- cols
type: Object
required: false
default: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }
Defines number of columns for each breakpoint

- useStyleCursor
type: Boolean
required: false
default: true
Says if set the styleCursor option to true. When dragging freezes, setting this value to false may alleviate problems. This property is not reactive

- transformScale
type: Number
required: false
default: 1
Sets a scaling factor to the size of the grid items, 1 is 100%

# GridItem

- i
type: String
required: true
This is the unique identifier of the item.

- x
type: Number
required: true
Says what is a initial horizontal position of the item (in which column it should be placed).

The value must be a whole number.

- y
type: Number
required: true
Says what is a initial vertical position of the item (in which row it should be placed).

The value must be a whole number.

- w
type: Number
required: true
Says what is a initial width of the item.

The value is a number that is multiplied by colWidth.

- h
type: Number
required: true
Says what is a initial height of the item.

The value is a number that is multiplied by rowHeight.

- minW
type: Number
required: false
default: 1
Says what is a minimal width of the item. If w will be smaller then minW then w will be set to minW.

The value is a number that is multiplied by colWidth.

- minH
type: Number
required: false
default: 1
Says what is a minimal hieght of the item. If h will be smaller then minH then h will be set to minH.

The value is a number that is multiplied by rowHeight.

- maxW
type: Number
required: false
default: Infinity
Says what is a maximal width of the item. If w will be bigger then maxW then w will be set to maxW.

The value is a number that is multiplied by colWidth.

- maxH
type: Number
required: false
default: Infinity
Says what is a maximal height of the item. If h will be bigger then maxH then h will be set to maxH.

The value is a number that is multiplied by rowHeight

- isDraggable
type: Boolean
required: false
default: null
Says if item is draggable.

If default value is null then it's inherited from parent.

- isResizable
type: Boolean
required: false
default: null
Says if item is resizable.

If default value is null then it's inherited from parent.

- isBounded
type: Boolean
required: false
default: null
Says if the item is bounded to the container when dragging.

If default value is null then it's inherited from parent.

- static
type: Boolean
required: false
default: false
Says if item is static (won't be draggable, resizable or moved by other items).

- dragIgnoreFrom
type: String
required: false
default: 'a, button'
Says which elements of the item shouldn't trigger drag event of the item.

The value is css-like selector string.

For more info please refer to ignoreFrom in interact.js docs (opens new window).

- dragAllowFrom
type: String
required: false
default: null
Says which elements of the item should trigger drag event of the item.

The value is css-like selector string.

If null then one can drag by any (excluding dragIgnoreFrom) element of the item.

For more info please refer to allowFrom in interact.js docs (opens new window).

- resizeIgnoreFrom
type: String
required: false
default: 'a, button'
Says which elements of the item shouldn't trigger resize event of the item.

The value is css-like selector string.

For more info please refer to ignoreFrom in interact.js docs (opens new window).

- preserveAspectRatio
type: Boolean
required: false
default: false
If 'true', forces the GridItem to preserve its aspect ratio when resizing.

- dragOption
type: Object
required: false
default: {}
Passthrough object for the grid item interact.js draggable configuration(opens new window)

- resizeOption
type: Object
required: false
default: {}