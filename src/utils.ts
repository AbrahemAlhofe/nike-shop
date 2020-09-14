export class EventsHandler {
    events: { [key: string] : Array<Function> } = {}

    $emit (eventName: string, ...args: any) {
        if ( !Array.isArray(this.events[eventName]) ) return
        this.events[eventName].forEach( callBack => callBack(...args) )
    }

    $on (eventName: string, callBack: Function) {
        if ( !Array.isArray(this.events[eventName]) ) this.events[eventName] = []
        this.events[eventName].push( callBack )
        if ( eventName !== '$listen' ) this.$emit('$listen', eventName, callBack) 
    }
}

export function onDragDrop (
    element: HTMLElement,
    mousedown: (e: MouseEvent) => void | boolean,
    mousemove: (e: MouseEvent, position : { x : number, y: number }) => any,
    mouseup: (e: MouseEvent) => void
) {
  let point_1 = { x : 0, y : 0 }

  let isMouseUp = false
  let isMouseDown = false
  let isMouseMove = false

  element.addEventListener("mousedown", (e: MouseEvent) => {
    if ( mousedown(e) ) {
      isMouseDown = true
      isMouseUp = false
      point_1 = { x: e.pageX, y: e.pageY };
    }
  });

  document.body.addEventListener("mouseup", (e: MouseEvent) => {

    if ( isMouseDown && isMouseMove ) {
      isMouseUp = true;
      mouseup(e);
    }

  });

  document.body.addEventListener("mousemove", (e: MouseEvent) => {
    if ( !isMouseUp && isMouseDown ) {
      isMouseMove = true
      mousemove(e, { x: e.pageX - point_1.x, y: e.pageY - point_1.y });
    }
  });

}

export function pad(number: number, range: number = 2): string {
  const arr = new Array(range).fill(0)
  arr.splice(String(number).length - 1, String(number).length, String(number))
  return arr.reverse().join('')
}

export function createElement<K extends keyof HTMLElementTagNameMap> (tagName: K, options: {
    innerText? : string,
    innerHTML? : string,
    classList? : string[],
    attrs? : { [key: string] : string }
}) {
    const elm = document.createElement(tagName)
    
    elm.innerText = options.innerText || '';

    elm.innerHTML = options.innerHTML || elm.innerHTML

    for ( let className of (options.classList || []) ) elm.classList.add(className);

    for ( let attrName in options.attrs ) elm.setAttribute( attrName, options.attrs[ attrName ] )

    return elm
}

export function animateCounting (start: number, end: number, callBack: Function) {
  const increment = end < start ? -1 : 1
  const counter = setInterval(() => {
    callBack(start += increment)
    if ( start === end ) clearInterval(counter);
  }, 1500 / Math.abs(end - start) )
}

export function animateTyping (string: string, callBack: Function) {
  let _string = ''
  let i = 0
  const animation = setInterval(() => {
    _string += string[i]
    callBack(_string);
    i += 1
    if ( i >= string.length ) clearInterval(animation)
  }, 1000 / string.length)
}