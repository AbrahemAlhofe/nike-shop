import { EventsHandler } from "./utils"

abstract class Recorder<T> extends EventsHandler {
  value: T;
  history: T[] = []

  constructor(
    public _init: T,
    public middlewares: { [key: string]: (...args: any) => any }
  ) {
    super();
    this.value = this._init;
    this.$emit('set', this.value)
    this.$on("$listen", (eventName: string, callback: Function) => {
      if (eventName === "set") callback(this.value);
    });
    this.middlewares = Object.assign(
      {
        set: (v: T) => v,
        update: (index: number, v: T) => [index, v],
        updateAll: (v: T) => v,
        get : (index: number) => void 0
      },
      this.middlewares
    );
    this.history.push(this.value);
  }

  set(value: T) {
    value = this._$middleware('set', value);

    if (value !== this.value) this.$emit("update", (this.value = value));
    this.$emit("set", this.value);
    this.history.push(this.value);
  }

  protected _$middleware (name: string, ...args: any[]) {
    return this.middlewares[name].call(this, ...args)
  }
}

export class RecordArray<T> extends Recorder<T[]> {
  constructor(
    _init: T[],
    middlewares = {}
  ) {
    super(_init, middlewares);
    this.$on('$listen', (eventName: string, callback: Function) => {
      if ( eventName === 'add' ) this.value.forEach( (item, index) => callback(item, index) )
    })
    this.$on('set', (value: T[]) => {
      // Remove Old Items
      this.history[ this.history.length - 1 ].forEach((item, index) => this.$emit('remove', index, item))

      // Add New Items
      value.forEach((item, index) => this.$emit('add', item, index))
    })
  }

  push(...items: T[]) {
    this.value.push(...items);
    this.$emit("add", items, this.value.length - 1);
    this.$emit('update', this.value)
    this.history.push(this.value)
  }

  splice (from: number, deleteCount: number = 0, ...items: T[]) {
    this.value.splice(from, deleteCount, ...items)
    this.$emit('splice', from, deleteCount, ...items)
    this.$emit("update", this.value);
    this.history.push(this.value)
  }

}

export class RecordValue<T> extends Recorder<T> {
    constructor (
      _init: T,
      middlewares = {}
    ) {
      super(_init, middlewares)
    }
}

export class RecordObject<T extends { [key: string] : any }> extends Recorder<T> {
    constructor(
      _init: T,
      middlewares = {}
    ) {
      super(_init, middlewares)
      this.$on("$listen", (eventExpression: string, callback: Function) => {
        const [ name, prefix ] = eventExpression.split(':')
        if (name === "update" && !prefix) for ( let key in this.value ) callback(key, this.value[key])
        if (name === "update" && prefix) callback(this.value[prefix])
      });
      this.$on('set', (value: T) => {
        this.$emit('update', value)
        for (let key in value) this.$emit(`update:${key}`, value[key]);
      })
    }

    update (key: keyof T, value: any) {
      this.value[key] = value
      this.$emit(`update`, key, value)
      this.$emit(`update:${key}`, value)
    }

}