<script>
    export default {
        name: 'MinicartPage',

        computed: {
            getCartTotal() {
                return this.$store.getters.getCartTotal;
            },

            getIsMiniCartOpen() {
                return this.$store.getters.getIsMiniCartOpen;
            },

            getCartItems() {
                return this.$store.getters.getCartItems;
            },
            getProductInPDP() {
                return this.$store.getters.getProductInPDP;
            }
        }

    }
</script>

<template>

    <div class="container">
        <!-- Iterate over minicart items and show its current quantity and image  -->
        <div class="minicart-items">
            <div class="product-container" v-for="item in getCartItems" :key="item.id">
                    <div class="quantity">
                        {{ item.quantity }}
                    </div>
                    <div class="image-container">
                        <img :src="item.image" alt="item.name">
                    </div>
            </div>
        </div>
        <div class="total">
            <span>Total</span>
            <span class="number">${{ getCartTotal }}</span>
        </div>
    </div>


</template>

<style scoped lang="scss">
    .container {

        margin-top: 1rem;

        .minicart-items {
            
            .product-container {
                display: flex;
                align-items: center;
                gap: 5rem;
                padding: .5rem;
                border-bottom: 1px solid rgb(240 232 241);
                .image-container {
                    img {
                        width: 50px;
                        height: 50px;
                        object-fit: cover;
                    }
                }
                .quantity {
                    font-size: 1rem;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    background-color: rgb(167 28 189);
                    color: white;
                }
            }
        }

        .total {
            justify-content: flex-end;
            display: flex;
            margin-top: 1rem;
            font-size: 1.5rem;
            gap: 1rem;
            color: rgb(195, 195, 195);

            .number {
                font-weight: bold;
                color: rgb(167 28 189);
            }
        }

    }

</style>