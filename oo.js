import prototypeChain from "./common.js"

function foo () {
  const o = Object.create(foo.prototype)
  o.name = 'foo'
  return o
}

// foo.prototype.constructor = foo
foo.prototype.f = function () { console.log(`Hello from ${this.name}`) }

function bar () {
  const o = Object.create(bar.prototype)
  o.name = 'bar'
  return o
}

bar.prototype = Object.create(foo.prototype)
bar.prototype.constructor = bar

function baz () {
  const o = Object.create(baz.prototype)
  o.name = 'baz'
  return o
}

baz.prototype = Object.create(bar.prototype)
baz.prototype.constructor = baz

export default function oo () {
  prototypeChain(foo())
  prototypeChain(bar())
  prototypeChain(baz())

  console.log(baz() instanceof bar && baz() instanceof foo)
  console.log(bar() instanceof foo)

  foo().f()
  bar().f()
  baz().f()
}
