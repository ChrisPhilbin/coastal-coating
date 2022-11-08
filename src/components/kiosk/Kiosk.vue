<style>
@import "./kiosk.styles.scss";
</style>

<template>
  <div class="grid grid-cols-6 gap-8 m-4" :class="{ 'pointer-events-none': isModalVisible }" id="cardGame">
    <div v-for="(card, index) in memoryCards" class="text-white flip-container" :key="index" @click="flipCard(card)">
      <div class="memorycard">
        <div class="border rounded shadow p-4" v-if="!card.isFlipped">
          <img src="/img/kiosk/cc_logo_small_transparent.png" class="origin-center rotate-45" />
        </div>
        <div class="rounded border" v-else><img :src="card.image" /></div>
      </div>
    </div>
  </div>
  <KioskModal
    v-show="isModalVisible"
    @close="closeModal"
    :isGameFinished="isGameFinished"
    :numberOfMatches="numberOfMatches"
    :numberOfTurns="numberOfTurns"
  >
    <template v-slot:header> {{ modalText.header }} </template>

    <template v-slot:body> {{ modalText.body }} </template>

    <template v-slot:footer> {{ modalText.footer }} </template>
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
      numberOfTurns: 1,
      modalText: {},
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
      if (this.numberOfTurns === 3) {
        this.resetGame();
      }
    },
    showModal(modalStatus) {
      if (modalStatus === "start") {
        this.isModalVisible = true;
      } else if (modalStatus === "success") {
        this.isModalVisible = true;
        this.modalText.header = "Nice job! You found a match!";
        this.modalText.body = `You've found ${this.numberOfMatches} match${
          this.numberOfMatches > 1 || this.numberOfMatches === 0 ? "es" : ""
        } so far!`;
        this.modalText.footer = `You have ${3 - this.numberOfTurns} turns remaining!`;
      } else if (modalStatus === "failure") {
        this.isModalVisible = true;
        this.modalText.header = "So Close! You didn't find a match this time!";
        this.modalText.body = `You've found ${this.numberOfMatches} match${
          this.numberOfMatches > 1 || this.numberOfMatches === 0 ? "es" : ""
        } so far!`;
        this.modalText.footer = `You have ${3 - this.numberOfTurns} turns remaining!`;
      } else if (modalStatus === "finished") {
        this.isModalVisible = true;
        this.modalText.header = "Game Over!";
        this.modalText.body = `Thanks for playing! You found ${this.numberOfMatches} match${
          this.numberOfMatches > 1 || this.numberOfMatches === 0 ? "es" : ""
        }!`;
        this.modalText.footer = "";
      } else {
        this.isModalVisible = false;
      }
    },
    flipCard(card) {
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
    },
    match() {
      console.log("Checking for card match");
      if (this.flippedCards[0].cardName === this.flippedCards[1].cardName) {
        // setTimeout(() => {
        //   this.flippedCards.forEach((card) => {
        //     card.isMatched = true;
        //   });
        // }, 500);
        this.flippedCards.forEach((card) => {
          card.isMatched = true;
        });
        this.numberOfMatches++;
        this.numberOfTurns++;
        this.flippedCards = [];
        this.showModal("success");
        console.log("Success! Cards match", this.numberOfMatches);
        //briefly show success modal with number of turns remaining
      } else {
        setTimeout(() => {
          this.flippedCards.forEach((card) => {
            card.isFlipped = false;
          });
        }, 800);
        // this.flippedCards.forEach((card) => {
        //   card.isFlipped = false;
        // });
        this.numberOfTurns++;
        this.flippedCards = [];
        if (this.numberOfTurns < 3) {
          this.showModal("failure");
        }
        console.log("Cards are not a match!", this.numberOfTurns);
        //briefly show failure modal with number of turns remaining
      }

      if (this.numberOfTurns === 3) {
        this.isGameFinished = true;
        this.showModal("finished");
        // this.resetGame();
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
