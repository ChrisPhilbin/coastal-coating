<template>
    <div class="text-center pt-20 md:pt-2">
        <h2 class="text-white">Get a quote</h2>
    </div>
</template>

<script>
export default {
    name: "GenerateQuote",
    data() {
        return {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            carYear: "",
            carMake: "",
            carModel: "",
            carMilage: "",
            servicesDesired: [],
        }
    }
}
</script>