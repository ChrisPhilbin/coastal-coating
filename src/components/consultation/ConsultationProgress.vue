<template>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-8 mb-4">
        <div class="bg-blue-600 h-2.5 rounded-full" :style="{
              width: (currentStep/3)*100 + '%',
            }"></div>
    </div>
    <div class="text-white mb-4">
        <span class="text-sm">Step {{ currentStep }} of 3</span><br/>
        <span class="font-bold" v-if="currentStep === 1">Your contact information</span>
        <span class="font-bold" v-if="currentStep === 2">Your car's information</span>
        <span class="font-bold" v-if="currentStep === 3">Services you're interested in</span>
    </div>
</template>

<script>
export default {
    name: "ConsultationProgress",
    props: {
        currentStep: Number
    }
}
</script>