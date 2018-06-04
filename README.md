# vue-slider-dir

> A Vue directive for switching tabs by sliding

## Install

```
npm install --save vue-slider-dir
```

## Usage

```
// main.js
import Vue from 'vue'
import slider from 'vue-slider-dir'

Vue.use(slider)

// component

// template
<div v-slide="{tabNum, urls}"></div>

// script
export default {
  ...
  data () {
    return {
      urls: [...],
      tabNum: 0
    }
  }
} 

```

## Example

[with webpack](https://github.com/ekwing-gz/vue-slider-dir/tree/master/example)
