let slider = {
  inserted (el, { value }, vnode) {
    let startX, startY, endX, endY
    let { tabNum, minX = 50, maxY = 100, urls } = value
    let num = urls.length

    el.addEventListener('touchstart', e => {
      let touch = e.touches[0]
      startX = touch.screenX
      startY = touch.screenY
    }, false)

    el.addEventListener('touchend', e => {
      let touch = e.changedTouches[0]
      endX = touch.screenX
      endY = touch.screenY
      let dir = getDirection(startX, startY, endX, endY, minX, maxY)
      if (dir === 'left') {
        if (--tabNum < 0) tabNum = 0
      } else if (dir === 'right') {
        if (++tabNum > num - 1) tabNum = num - 1
      }
      vnode.context.$router.push(urls[tabNum])
    }, false)
  }
}

function getDirection (startX, startY, endX, endY, minX, maxY) {
  let absX = Math.abs(endX - startX)
  let absY = Math.abs(endY - startY)
  if (absX > absY && absX > minX && absY < maxY) {
    return startX > endX ? 'left' : 'right'
  } else {
    return 'vertical'
  }
}

slider.install = function (Vue, options) {
  Vue.directive('slide', this)
}

export default slider
