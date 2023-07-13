<script>

    export default {
        name: 'ProducDetail',
        data() {
            return {
                productInPDP: this.$store.getters.getProductInPDP,
            }
        },
        methods: {
            
        },

        computed: {
            getProductInPDP() {
                return this.$store.getters.getProductInPDP;
            }
        }
    }

</script>

<template>

    <div class="container">
        <h2>
            Please choose a product on the left
        </h2>

        <div class="product-detail" v-if="getProductInPDP">
            <h1>
                {{getProductInPDP.name}}
            </h1>
            <img :src="getProductInPDP.image" alt="getProductInPDP.name">
            <p>
                {{getProductInPDP.description}}
            </p>
        </div>

    </div>


</template>


<style scoped lang="scss">

    .container {

        padding-top: 56px;
        
            h2 {
                border-top: 1px solid rgb(240	232	241	);
                font-size: 1.5rem;
                color: #999;
            }

    }

</style>