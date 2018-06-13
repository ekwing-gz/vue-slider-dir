let slider = {
  inserted (el, { value, arg }, vnode) {
    let start, end
    let { tabNum, minX = 100, maxY = 100, urls } = value
    let num = urls.length

    el.addEventListener('touchstart', e => {
      let touch = e.touches[0]
      let x = touch.screenX
      let y = touch.screenY
      start = { x, y }
    }, false)

    el.addEventListener('touchend', e => {
      if (start == null) return
      let touch = e.changedTouches[0]
      let x = touch.screenX
      let y = touch.screenY
      end = { x, y }
      let tabNum = vnode.context.$data[arg]
      let dir = getDirection(start.x, start.y, end.x, end.y, minX, maxY)
      if (dir !== 'vertical') {
        if (dir === 'left') {
          if (--tabNum < 0) tabNum = 0
        } else if (dir === 'right') {
          if (++tabNum > num - 1) tabNum = num - 1
        }
        vnode.context.$router.push(urls[tabNum])
        vnode.context.$data[arg] = tabNum
      }
      start = null
    }, false)
  }
}

function getDirection (startX, startY, endX, endY, minX, maxY) {
  let absX = Math.abs(endX - startX)
  let absY = Math.abs(endY - startY)
  if (absX > absY && absX > minX && absY < maxY) {
    return startX < endX ? 'left' : 'right'
  } else {
    return 'vertical'
  }
}

slider.install = function (Vue, options) {
  Vue.directive('slide', this)
}

export default slider
