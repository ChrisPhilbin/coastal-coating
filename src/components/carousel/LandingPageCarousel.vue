<template>
  <div class="md:w-3/4 md:mx-auto mb-3">
    <vueper-slides autoplay :slide-ratio="ratio" :duration="6000">
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :content="slide.content"> </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "LandingPageCarousel",
  components: { VueperSlides, VueperSlide },
  props: ["displaySlides"],
  data: () => ({
    ratio: 1 / 3,
    options: {
      images: [
        {
          content: `<img src="/img/cars/gallery/bmw/sm/4_series_sm.jpg" />`,
        },
        {
          content: `<img src="/img/cars/gallery/bmw/sm/m4_side_sm.jpg" />`,
        },
        {
          content: `<img src="/img/cars/gallery/chevrolet/sm/silverado_sm.jpg" />`,
        },
        {
          content: `<img src="/img/cars/gallery/gmc_buick/sm/terrain_sm.jpg" />`,
        },
        {
          content: `<img src="/img/cars/gallery/gmc_buick/sm/yukon_sm.jpg" />`,
        },
      ],
      reviews: [
        {
          content: `<div><iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJoshmoro%2Fposts%2Fpfbid02A282NocMP73r6UisTLSrfjoFVSYz2J3N64vRxqoFjqM9rMZ8M3N1r5Zscv3yXEFxl&show_text=true&width=500"
        height="257"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe></div>`,
        },
        {
          content: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMzWineglass%2Fposts%2Fpfbid02KbnPXDLkmQ1M8MZUYHWasQfpDsVBdzH6PWhWpqY3oa4nmwCGgLHQgTUBQm2JcTJtl&show_text=true&width=500" width="500" height="265" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
        },
        {
          content: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbuddy.mills.545%2Fposts%2Fpfbid02BznyC5MurCyKcCYLkewNd2UhLG69JCznWFk2pK4rr26vL9h2RQorcygx2GvNJJ6el&show_text=true&width=500" width="500" height="188" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
        },
        {
          content: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fandy.powell.543%2Fposts%2Fpfbid0hUazyo7S9wBwiQJR66TMupjcKvZV2s8Z5Az9NJPmVK9zrFCRPr2kf8ExhGqRiUxxl&show_text=true&width=500" width="500" height="188" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
        },
      ],
    },
  }),
  computed: {
    slides() {
      switch (this.displaySlides) {
        case "landingPageImages":
          this.setRatio(325 / 450);
          return this.options.images;
        case "landingPageReviews":
          console.log("reviews");
          return this.options.reviews;
        default:
          return null;
      }
    },
  },
  methods: {
    setRatio(ratio) {
      this.ratio = ratio;
    },
  },
};
</script>
