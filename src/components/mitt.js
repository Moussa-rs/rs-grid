import mitt from 'mitt'
const eventBus = {}

const emitter = mitt()

eventBus.$emit = (...args) => {
  emitter.emit(args[0], args.slice(1))
}

eventBus.$on = function () {
  Reflect.apply(emitter.on, emitter, arguments)
}

eventBus.$off = function () {
  Reflect.apply(emitter.off, emitter, arguments)
}

export default eventBus
