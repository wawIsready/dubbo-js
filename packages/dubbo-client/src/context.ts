
export default class Context {
  path: string
  method: string
  args: Array<any>

  constructor() {
      this.path = ''
      this.method = ''
      this.args = []
  }

  getPath() {
      return this.path
  }

  setPath(path: string) {
      this.path = path
  }

  get serialization() {
      return JSON.stringify({
          path: this.path,
          methodName: this.method,
          methodArgs: this.args
      })
  }
}
