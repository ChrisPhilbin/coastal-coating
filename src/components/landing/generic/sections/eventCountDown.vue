<template>
  <p class="w-full text-center text-3xl md:text-4xl text-coastal-dark-blue font-coastal-body font-bold">
    {{ countDown.days + "d " + countDown.hours + "h " + countDown.minutes + "m " + countDown.seconds + "s" }}
  </p>
</template>

<script>
export default {
  name: "EventCountDown",
  props: ["countDownToDate"],
  data() {
    return {
      countDownInterval: "",
      countDown: {
        days: "",
        hours: "",
        minutes: "",
        seconds: "",
      },
    };
  },
  mounted() {
    let countDownDate = new Date(this.countDownToDate).getTime();

    this.countDownInterval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      this.countDown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.countDown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countDown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.countDown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.countDownInterval);
  },
};
</script>
