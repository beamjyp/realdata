<template>
  <div>
    <div class="" style="">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-src="1.1.png"></b-carousel-slide>

        <b-carousel-slide img-src="1.2.png"> </b-carousel-slide>

        <b-carousel-slide img-src="1.3.png"> </b-carousel-slide>

        <b-carousel-slide img-src="1.4.png"> </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
  visibility: hidden;
  position: absolute;
  width: 100%;
  opacity: 0;
}
.fade-enter,
.fade-leave-to {
  visibility: visible;
  width: 100%;
  opacity: 0;
}
img {
  height: 600px;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
.bg {
  background-position: top; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain; /* Resize the background image to cover the entire container */
  background-color: rgb(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  stroke-dashoffset: unset;
  height: auto;
}
</style>
