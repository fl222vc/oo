export default function prototypeChain (o) {
  for (let oo = o; oo !== null; oo = Object.getPrototypeOf(oo)) {
    console.log(oo)
  }
}
