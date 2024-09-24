// import "@extism/js-pdk"

const { notify } = Host.getFunctions()

export function greet() {
  const name = Host.inputString();
  Host.outputString(`Hello, ${name}`)

  // const request: HttpRequest = {
  //   method: "POST" as const,
  //   url: "https://localhost/echo",
  // }
  // const response = Http.request(request, JSON.stringify({
  //   name
  // }))

  const message = "Will it blend?"
  const mem = Memory.fromString(message)

  notify(mem.offset)

}
