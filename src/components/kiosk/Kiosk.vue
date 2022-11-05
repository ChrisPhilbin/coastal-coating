<style>
@import "./kiosk.styles.scss";
</style>

<template>
  <div class="grid grid-cols-6 gap-8 m-4">
    <div
      v-for="(card, index) in memoryCards"
      class="text-white flip-container"
      :class="{ flipped: card.isFlipped, matched: card.isMatched }"
      :key="index"
      @click="flipCard(card)"
    >
      <div class="memorycard">
        <div class="front border rounded shadow p-4">
          <img src="/img/kiosk/cc_logo_small_transparent.png" class="origin-center rotate-45" />
        </div>
        <div class="back rounded border"><img :src="card.image" /></div>
      </div>
    </div>
  </div>
  <KioskModal v-show="isModalVisible" @close="closeModal">
    <template v-slot:header> Header Text </template>

    <template v-slot:body> Body Modal Text </template>

    <template v-slot:footer> Footer Modal text </template>
  </KioskModal>
</template>

<script>
import _cloneDeep from "lodash/cloneDeep";
import _shuffle from "lodash/shuffle";
import KioskModal from "./kiosk-modal/Kiosk-Modal.vue";

export default {
  name: "Kiosk",
  components: { KioskModal },
  mixins: [],
  data() {
    return {
      isModalVisible: false,
      memoryCards: [],
      flippedCards: [],
      isGameFinished: false,
      numberOfMatches: 0,
      numberOfTurns: 0,
      cardDeck: [
        {
          cardName: "camaro1",
          image: "/img/cars/gallery/chevrolet/sm/camaro_sm.jpg",
        },
        {
          cardName: "camaro2",
          image: "/img/cars/gallery/chevrolet/sm/camaro_sm.jpg",
        },
        {
          cardName: "camaro3",
          image: "/img/cars/gallery/chevrolet/sm/camaro_sm.jpg",
        },
        {
          cardName: "camaro4",
          image: "/img/cars/gallery/chevrolet/sm/camaro_sm.jpg",
        },
        {
          cardName: "camaro5",
          image: "/img/cars/gallery/chevrolet/sm/camaro_sm.jpg",
        },
        {
          cardName: "camaro6",
          image: "/img/cars/gallery/chevrolet/sm/camaro_sm.jpg",
        },
      ],
    };
  },
  created() {
    this.resetGame();
    this.showModal("start");
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
    },
    showModal(modalStatus) {
      if (modalStatus === "start") {
        this.isModalVisible = true;
      } else if (modalStatus === "success") {
        return;
      } else if (modalStatus === "failure") {
        return;
      } else if (modalStatus === "finished") {
        return;
      } else {
        this.isModalVisible = false;
      }
    },
    flipCard(card) {
      console.log(card, "Flipping card.");
      if (card.isMatched || card.isFlipped || this.flippedCards.length === 2) {
        return;
      }
      card.isFlipped = true;

      if (this.flippedCards.length < 2) {
        this.flippedCards.push(card);
      }
      if (this.flippedCards.length === 2) {
        this.match(card);
      }
      console.log(card, "Card after being flipped.");
    },
    match() {
      console.log("Checking for card match");
      if (this.flippedCards[0].cardName === this.flippedCards[1].cardName) {
        setTimeout(() => {
          this.flippedCards.forEach((card) => {
            card.isMatched = true;
          });
        }, 500);
        this.numberOfMatches++;
        this.numberOfTurns++;
        this.flippedCards = [];
        console.log("Success! Cards match", this, this.numberOfMatches);
        //briefly show success modal with number of turns remaining
      } else {
        setTimeout(() => {
          this.flippedCards.forEach((card) => {
            card.isFlipped = false;
          });
        }, 800);
        this.numberOfTurns++;
        this.flippedCards = [];
        console.log("Cards are not a match!", this.numberOfTurns);
        //briefly show failure modal with number of turns remaining
      }

      if (this.numberOfTurns === 3) {
        this.isGameFinished = true;
        //show thanks for playing modal and redirect to form to caputure user info and pass along proper discount code
      }
    },
    resetGame() {
      this.cardDeck.forEach((card) => {
        card.isFlipped = false;
        this.isMatched = false;
      });

      setTimeout(() => {
        this.memoryCards = [];
        const cards1 = _cloneDeep(this.cardDeck);
        const cards2 = _cloneDeep(this.cardDeck);
        const cards3 = _cloneDeep(this.cardDeck);

        this.memoryCards = _shuffle(this.memoryCards.concat(cards1, cards2, cards3));
        this.isGameFinished = false;
        this.numberOfMatches = 0;
        this.numberOfTurns = 0;
        this.flippedCards = [];
      }, 800);
    },
  },
};
</script>
