<script setup lang="ts">
import '../assets/style/css/style.css';
import '../assets/style/css/themevariable.scss';
import DateFilter from './DateFilter.vue';
// utilities
import { ref } from 'vue';

// cassets
import leftimagecompare from '../assets/images/camera-img.png';
import rightimagecompare from '../assets/images/project-img2.png';

// components
import { VueCompareImage } from './compareindex';

const hover = ref(false);
const sliding = ref(false);

function startCallback(pos: number) {
  console.log('component  started at ', pos);
}

function endCallback(pos: number) {
  console.log(`component has ended at: ${pos}`);
}

function slideCallback(state: boolean) {
  sliding.value = state;
}
</script>

<template>
  <!-- <div class="container" style="max-width: 500px; width: auto; height: auto; margin: 50px auto; display: flex; flex-direction: column;"
>
<VueCompareImage
:hover="hover"
:slide-on-click="false" vertical :left-image="cat1" left-image-label="Left Image" :right-image="cat2"
right-image-label="Right Image" slider-line-color="aquamarine" @is-sliding="slideCallback" @slide-start="startCallback" @slide-end="endCallback"
/>
</div>
<div class="container" style="max-width: 500px; width: auto; height: auto; margin: 10px auto;">
<VueCompareImage
keyboard vertical :left-image="cat1" left-image-label="Left Image" :right-image="cat2"
right-image-label="Right Image" @slide-start="startCallback" @slide-end="endCallback"
/>
</div> -->

<DateFilter />

  <div class="container">
    <VueCompareImage
      class="awesome"
      :slide-on-click="false"
      keyboard
      :left-image="leftimagecompare"
      left-image-label="Left Image"
      :right-image="rightimagecompare"
      right-image-label="Right Image"
      @slide-start="startCallback"
      @slide-end="endCallback"
    />
  </div>
</template>

<style>
.awesome .vci--right-label {
  color: red;
}
</style>
