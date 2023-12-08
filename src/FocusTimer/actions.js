import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'


export function toggleRunning() {
  state.isRunning = true

  timer.countdown()
}

export function toggleRunningStop() {
  state.isRunning = false
  timer.updateDisplay()
}

export function increase() {
  el.minutes.textContent++
}

export function decrease() {
  el.minutes.textContent -= 5
}

export function tree() {
  sounds.cloud.pause()
  sounds.store.pause()
  sounds.fire.pause()

  el.cloud.classList.remove('music-on')
  el.store.classList.remove('music-on')
  el.fire.classList.remove('music-on')
  el.tree.classList.toggle('music-on')

  sounds.tree.play()

}

export function cloud() {
  sounds.tree.pause()
  sounds.store.pause()
  sounds.fire.pause()

  el.tree.classList.remove('music-on')
  el.store.classList.remove('music-on')
  el.fire.classList.remove('music-on')
  el.cloud.classList.toggle('music-on')

  sounds.cloud.play()
}

export function store() {
  sounds.tree.pause()
  sounds.cloud.pause()
  sounds.fire.pause()

  el.tree.classList.remove('music-on')
  el.cloud.classList.remove('music-on')
  el.fire.classList.remove('music-on')
  el.store.classList.toggle('music-on')

  sounds.store.play()
}

export function fire() {
  sounds.tree.pause()
  sounds.store.pause()
  sounds.cloud.pause()

  el.tree.classList.remove('music-on')
  el.store.classList.remove('music-on')
  el.cloud.classList.remove('music-on')
  el.fire.classList.toggle('music-on')

  sounds.fire.play()
}