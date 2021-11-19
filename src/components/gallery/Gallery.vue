<template>
    <div class="grid grid-cols-1 md:grid-cols-2 text-center">
        <div v-for="image in gallery.images" :key="image.id">
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
                    intro: "",
                    leaderImage: "",
                    images: [
                        {
                            id: 1,
                            url: ""
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
    computed: {
        gallery() {
            switch(this.$route.params) {
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
                    this.errors = true;
            }
        }
    }
}
</script>
