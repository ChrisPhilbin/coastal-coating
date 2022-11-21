<script>
import KioskForm from "../kiosk-form/Kiosk-Form.vue";
export default {
  name: "KioskModal",
  components: { KioskForm },
  props: ["isGameFinished", "numberOfMatches", "numberOfTurns", "discountEarned"],
  data() {
    return {
      isKioskFormVisible: false,
    };
  },
  methods: {
    close() {
      this.isKioskFormVisible = false;
      if (this.numberOfTurns === 3) {
        if (confirm("Are you sure you want to exit and rest the game? Any discount earned will be lost.")) {
          this.$emit("close");
        }
      } else {
        this.$emit("close");
      }
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <span class="text-4xl font-bold text-coastal-dark-blue font-coastal-body"><slot name="header"></slot></span>
          <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
        </header>
        <div v-if="!isKioskFormVisible">
          <section class="modal-body" id="modalDescription">
            <div class="block flex justify-center">
              <div class="text-3xl font-bold font-coastal-body text-center w-3/4">
                <slot name="body"></slot>
              </div>
            </div>
            <div v-if="isGameFinished">
              <span class="text-green-600 text-5xl font-bold text-center block mt-10">
                You've earned a {{ discountEarned }}% discount!
              </span>
            </div>
          </section>

          <footer class="modal-footer">
            <span class="text-2xl text-center block font-coastal-body">
              <slot name="footer"></slot>
            </span>
            <button
              v-if="!this.isGameFinished"
              type="button"
              class="btn-green absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-8 font-coastal-body"
              @click="close"
              aria-label="Close modal"
            >
              Continue
            </button>
            <button
              v-if="this.isGameFinished"
              type="button"
              class="btn-green absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-8 font-coastal-body"
              @click="isKioskFormVisible = true"
              aria-label="Claim your discount"
            >
              Claim your discount
            </button>
          </footer>
        </div>
        <div v-if="isKioskFormVisible">
          <KioskForm :discountEarned="discountEarned" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: rgb(243, 244, 246);
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-left: 8px;
  min-width: 50%;
  min-height: 50%;
  position: relative;
  border-radius: 0.25rem;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: rgb(30, 64, 475);
  background: transparent;
}

.btn-green {
  margin-bottom: 16px;
  margin-top: 16px;
  width: 50%;
  color: white;
  font-weight: bold;
  font-size: larger;
  background: rgb(30, 64, 475);
  border: 1px solid #4aae9b;
  border-radius: 5px;
  padding: 8px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
