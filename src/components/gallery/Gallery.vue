<template>
    <div v-if="errors">
        <p class="text-red-500">Not found!</p>
    </div>
    <p class="text-white">{{ gallery.intro }}</p><br />
    <div class="grid grid-cols-1 md:grid-cols-2 text-center">
        <div v-for="img in gallery.images" :key="img.id">
            <img :src="`${img.url}`" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Gallery",
    data() {
        return {
            errors: false,
            galleries: {
                chevrolet: {
                    intro: "Some test text",
                    leaderImage: "",
                    images: [
                        {
                            id: 1,
                            url: "/img/home/solstice_during.jpg"
                        }
                    ]
                },
                ford: {
                    intro: "",
                    leaderImage: "",
                    images: [

                    ]
                },
                nissan: {
                    intro: "",
                    leaderImage: "",
                    images: [

                    ]
                },
                jeep: {
                    intro: "",
                    leaderImage: "",
                    images: [

                    ]
                },
                bmw: {
                    intro: "",
                    leaderImage: "",
                    images: [

                    ]
                }
            }
        }
    },
    mounted() {
        console.log(this.$route.params)
    },
    methods: {
        setErrors() {
            this.errors = true;
        },
    },
    computed: {
        gallery() {
            switch(this.$route.params.make) {
                case 'chevrolet':
                    return this.galleries.chevrolet;
                case 'ford':
                    return this.galleries.ford;
                case 'nissan':
                    return this.galleries.nissan;
                case 'jeep':
                    return this.galleries.jeep;
                case 'bmw':
                    return this.galleries.bmw;
                default:
                    this.setErrors();
                    return this.errors;
            }
        }
    }
}
</script>
