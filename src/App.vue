<template>
  <div id="app" >
    <h1 style="text-align: center">RS Grid</h1>
    <!--<pre>{{ layout | json }}</pre>-->
    <div>
      <div class="layoutJSON">
        Displayed as <code>[x, y, w, h]</code>:
        <div class="columns">
          <div class="layoutItem" v-for="item in layout" :key="item.id">
            <b>{{ item.id }}</b
            >: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
          </div>
        </div>
      </div>
      <!--<div class="layoutJSON">
              Displayed as <code>[x, y, w, h]</code>:
              <div class="columns">
                  <div class="layoutItem" v-for="item in layout2">
                      <b>{{item.id}}</b>: [{{item.x}}, {{item.y}}, {{item.w}}, {{item.h}}]
                  </div>
              </div>
          </div>-->
    </div>
    <div id="content">
      <button @click="decreaseWidth">Decrease Width</button>
      <button @click="increaseWidth">Increase Width</button>
      <button @click="scaleHalf">Scale x0.5</button>
      <button @click="scaleThreeQuarters">Scale x0.75</button>
      <button @click="scaleIdentity">Scale x1.0</button>
      <button @click="addItem">Add an item</button>
      <button @click="addItemDynamically">Add an item dynamically</button>
      <!-- Add to show rtl support -->
      <button @click="changeDirection">Change Direction</button>
      <input type="checkbox" v-model="draggable" /> Draggable
      <input type="checkbox" v-model="resizable" /> Resizable
      <input type="checkbox" v-model="mirrored" /> Mirrored
      <input type="checkbox" v-model="bounded" /> Bounded
      <input type="checkbox" v-model="responsive" /> Responsive
      <input type="checkbox" v-model="preventCollision" /> Prevent Collision
      <input type="checkbox" v-model="compact" /> Vertical Compact
      <div style="margin-top: 10px; margin-bottom: 10px">
        Row Height: <input type="number" v-model="rowHeight" /> Col nums:
        <input type="number" v-model="colNum" /> Margin x:
        <input type="number" v-model="marginX" /> Margin y:
        <input type="number" v-model="marginY" />
      </div>
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
          :key="item.id"
          :static="item.static"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :id="item.id"
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
          <!--<custom-drag-element :text="item.id"></custom-drag-element>-->
          <test-element :text="item.id" @removeItem="removeItem($event)"></test-element>
          <!--<button @click="clicked">CLICK ME!</button>-->
        </grid-item>
      </grid-layout>
      <hr />
      <!--<grid-layout
                  :layout="layout2"
                  :col-num="12"
                  :row-height="rowHeight"
                  :is-draggable="draggable"
                  :is-resizable="resizable"
                  :vertical-compact="true"
                  :use-css-transforms="true"
          >
              <grid-item v-for="item in layout2" :key="item.id"
                         :x="item.x"
                         :y="item.y"
                         :w="item.w"
                         :h="item.h"
                         :min-w="2"
                         :min-h="2"
                         :id="item.id"
                         :is-draggable="item.draggable"
                         :is-resizable="item.resizable"
              >
                  <test-element :text="item.id"></test-element>
              </grid-item>
          </grid-layout> -->
    </div>
  </div>
</template>

<script>
import GridItem from './components/GridItem.vue'
import GridLayout from './components/GridLayout.vue'
// import ResponsiveGridLayout from './components/ResponsiveGridLayout.vue';
import TestElement from './components/TestElement.vue'
//   import CustomDragElement from './components/CustomDragElement.vue';
import { getDocumentDir, setDocumentDir } from './helpers/DOM'
//var eventBus = require('./eventBus');

let testLayout = [
  {
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    id: '0',
    resizable: true,
    draggable: true,
    static: false,
    minY: 0,
    maxY: 2
  },
  { x: 2, y: 0, w: 2, h: 4, id: '1', resizable: null, draggable: null, static: true },
  {
    x: 4,
    y: 0,
    w: 2,
    h: 5,
    id: '2',
    resizable: true,
    draggable: true,
    static: false,
    minX: 4,
    maxX: 4,
    minW: 2,
    maxW: 2,
    preserveAspectRatio: true
  },
  {
    x: 6,
    y: 0,
    w: 2,
    h: 3,
    id: '3',
    resizable: true,
    draggable: true,
    static: false,
    preserveAspectRatio: true
  },
  { x: 8, y: 0, w: 2, h: 3, id: '4', resizable: true, draggable: true, static: false },
  { x: 10, y: 0, w: 2, h: 3, id: '5', resizable: true, draggable: true, static: false },
  { x: 0, y: 5, w: 2, h: 5, id: '6', resizable: true, draggable: true, static: false },
  { x: 2, y: 5, w: 2, h: 5, id: '7', resizable: true, draggable: true, static: false },
  { x: 4, y: 5, w: 2, h: 5, id: '8', resizable: true, draggable: true, static: false },
  { x: 6, y: 3, w: 2, h: 4, id: '9', resizable: true, draggable: true, static: true },
  { x: 8, y: 4, w: 2, h: 4, id: '10', resizable: true, draggable: true, static: false },
  { x: 10, y: 4, w: 2, h: 4, id: '11', resizable: true, draggable: true, static: false, minY: 4 },
  { x: 0, y: 10, w: 2, h: 5, id: '12', resizable: true, draggable: true, static: false },
  { x: 2, y: 10, w: 2, h: 5, id: '13', resizable: true, draggable: true, static: false },
  { x: 4, y: 8, w: 2, h: 4, id: '14', resizable: true, draggable: true, static: false },
  { x: 6, y: 8, w: 2, h: 4, id: '15', resizable: true, draggable: true, static: false },
  { x: 8, y: 10, w: 2, h: 5, id: '16', resizable: true, draggable: true, static: false },
  { x: 10, y: 4, w: 2, h: 2, id: '17', resizable: true, draggable: true, static: false },
  { x: 0, y: 9, w: 2, h: 3, id: '18', resizable: true, draggable: true, static: false },
  { x: 2, y: 6, w: 2, h: 2, id: '19', resizable: true, draggable: true, static: false }
]

/*let testLayout = [
      { x: 0, y: 0, w: 2, h: 2, id: "0" },
      { x: 2, y: 0, w: 2, h: 2, id: "1" },
      { x: 4, y: 0, w: 2, h: 2, id: "2" },
      { x: 6, y: 0, w: 2, h: 2, id: "3" },
      { x: 8, y: 0, w: 2, h: 2, id: "4" },
  ];*/

export default {
  name: 'app',
  components: {
    GridLayout,
    GridItem,
    TestElement
    //   CustomDragElement,
  },
  data() {
    return {
      layout: JSON.parse(JSON.stringify(testLayout)),
      layout2: JSON.parse(JSON.stringify(testLayout)),
      draggable: true,
      resizable: true,
      mirrored: false,
      responsive: true,
      bounded: false,
      transformScale: 1,
      preventCollision: false,
      compact: true,
      restoreOnDrag: false,
      rowHeight: 30,
      colNum: 12,
      index: 0,
      marginX: 10,
      marginY: 10
    }
  },
  mounted: function () {
    this.index = this.layout.length
  },
  methods: {
    clicked: function () {
      window.alert('CLICK!')
    },
    increaseWidth: function () {
      let width = document.getElementById('content').offsetWidth
      width += 20
      document.getElementById('content').style.width = width + 'px'
    },
    decreaseWidth: function () {
      let width = document.getElementById('content').offsetWidth
      width -= 20
      document.getElementById('content').style.width = width + 'px'
    },
    scaleHalf: function () {
      this.transformScale = 0.5
      document.getElementById('grid-layout').style.transform = 'scale(0.5)'
    },
    scaleThreeQuarters: function () {
      this.transformScale = 0.75
      document.getElementById('grid-layout').style.transform = 'scale(0.75)'
    },
    scaleIdentity: function () {
      this.transformScale = 1
      document.getElementById('grid-layout').style.transform = 'scale(1)'
    },
    removeItem: function (id) {
      console.log('### REMOVE ' + id)
      const index = this.layout.map((item) => item.id).indexOf(id)
      this.layout.splice(index, 1)
    },
    addItem: function () {
      // let self = this;
      //console.log("### LENGTH: " + this.layout.length);
      let item = { x: 0, y: 0, w: 2, h: 2, id: this.index + '', whatever: 'bbb' }
      this.index++
      this.layout.push(item)
    },
    addItemDynamically: function () {
      const x = (this.layout.length * 2) % (this.colNum || 12)
      const y = this.layout.length + (this.colNum || 12)
      console.log('X=' + x + ' Y=' + y)
      let item = {
        x: x,
        y: y,
        w: 2,
        h: 2,
        id: this.index + ''
      }
      this.index++
      this.layout.push(item)
    },
    move: function (id, newX, newY) {
      console.log('MOVE id=' + id + ', X=' + newX + ', Y=' + newY)
    },
    resize: function (id, newH, newW, newHPx, newWPx) {
      console.log(
        'RESIZE id=' + id + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx
      )
    },
    moved: function (id, newX, newY) {
      console.log('### MOVED id=' + id + ', X=' + newX + ', Y=' + newY)
    },
    resized: function (id, newH, newW, newHPx, newWPx) {
      console.log(
        '### RESIZED id=' +
          id +
          ', H=' +
          newH +
          ', W=' +
          newW +
          ', H(px)=' +
          newHPx +
          ', W(px)=' +
          newWPx
      )
    },
    containerResized: function (id, newH, newW, newHPx, newWPx) {
      console.log(
        '### CONTAINER RESIZED id=' +
          id +
          ', H=' +
          newH +
          ', W=' +
          newW +
          ', H(px)=' +
          newHPx +
          ', W(px)=' +
          newWPx
      )
    },
    /**
     * Add change direction button
     */
    changeDirection() {
      let documentDirection = getDocumentDir()
      let toggle = ''
      if (documentDirection === 'rtl') {
        toggle = 'ltr'
      } else {
        toggle = 'rtl'
      }
      setDocumentDir(toggle)
      //eventBus.$emit('directionchange');
    },

    layoutCreatedEvent: function (newLayout) {
      console.log('Created layout: ', newLayout)
    },
    layoutBeforeMountEvent: function (newLayout) {
      console.log('beforeMount layout: ', newLayout)
    },
    layoutMountedEvent: function (newLayout) {
      console.log('Mounted layout: ', newLayout)
    },
    layoutReadyEvent: function (newLayout) {
      console.log('Ready layout: ', newLayout)
    },
    layoutUpdatedEvent: function (newLayout) {
      console.log('Updated layout: ', newLayout)
    },
    breakpointChangedEvent: function (newBreakpoint, newLayout) {
      console.log('breakpoint changed breakpoint=', newBreakpoint, ', layout: ', newLayout)
    }
  }
}
</script>

<style>
/*    #app {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
      }

      h1, h2 {
          font-weight: normal;
      }

      ul {
          list-style-type: none;
          padding: 0;
      }

      li {
          display: inline-block;
          margin: 0 10px;
      }

      a {
          color: #42b983;
      }*/
</style>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
