import prototypeChain from "./common.js"

class foo {
  name = 'foo'
  f () {
    console.log(`Hello from ${this.name}`)
  }
}

class bar extends foo {
  name = 'bar'
}

class baz extends bar {
  name = 'baz'
}

export default function oclass () {
  prototypeChain(foo)
  prototypeChain(bar)
  prototypeChain(baz)

  console.log(new baz instanceof bar && new baz instanceof foo)
  console.log(new bar instanceof foo)

  new foo().f()
  new bar().f()
  new baz().f()
}
