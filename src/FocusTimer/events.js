import { controls } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function'){
      return
    }

    actions[action]()
  })
}

export function tree() {
  el.tree.addEventListener('click', () => actions.tree())
}

export function cloud() {
  el.cloud.addEventListener('click', () => actions.cloud())
}

export function store() {
  el.store.addEventListener('click', () => actions.store())
}

export function fire() {
  el.fire.addEventListener('click', () => actions.fire())
}