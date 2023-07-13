<script>

export default {
    name: 'ProductGrid',
    data() {
        return {
            productInPDP: null,
        }

    },
    methods: {
        // pass the product to the currentProduct in the PDP

        showProductInPDP(product) {
            this.$store.commit('setProductInPDP', product);
        }
    },

    computed: {
        // get the products from the store
        getProductInPDP() {
            return this.$store.getters.getProductInPDP;
        },

        allProducts() {

            const allProducts = this.$store.getters.getProductsAsThreeArrays;

            // divide the products into three columns

            let firstColumn = allProducts[0];
            let secondColumn = allProducts[1];
            let thirdColumn = allProducts[2];


            return {
                firstColumn: firstColumn,
                secondColumn: secondColumn,
                thirdColumn: thirdColumn,
            }
        },

        getQuantityInCart(productId) {

            const productInCart = this.$store.getters.getProductFromMiniCart(productId);

            if (productInCart) {
                return productInCart.quantity;
            }

            return null;
        },

        isProductInCart(productId) {

            console.log(productId)
            const productInCart = this.$store.getters.getProductFromMiniCart(productId);

            if (productInCart) {
                return true;
            }

            return false;
        }
    }
}
</script>

<template>
    <div class="container">

        <h1>
            Store
        </h1>

        <!-- iterate over the three arrays in allProducts function -->

        <div class="product-grid">
            <!-- show the products in three columns  -->

            <div class="colum">
                <div class="product" v-on:click="showProductInPDP(product)" v-for="product in allProducts.firstColumn"
                    :key="product.id">
                    <div :class="{ selected: product == getProductInPDP }" class="product-container">

                        <!-- show the quantity in the cart if the product is in the cart -->

                        <!-- <div v-if="isProductInCart(product.id)" class="quantity-in-cart">
                            {{ getQuantityInCart(product.id) }}
                        </div> -->

                        <img :src="product.image" alt="product.name">
                    </div>
                </div>
            </div>

            <div class="colum">
                <div class="product" v-on:click="showProductInPDP(product)" v-for="product in allProducts.secondColumn"
                    :key="product.id">
                    <div :class="{ selected: product == getProductInPDP }" class="product-container">
                        <img :src="product.image" alt="product.name">
                    </div>
                </div>
            </div>

            <div class="colum">
                <div class="product" v-on:click="showProductInPDP(product)" v-for="product in allProducts.thirdColumn"
                    :key="product.id">
                    <div :class="{ selected: product == getProductInPDP }" class="product-container">
                        <img :src="product.image" alt="product.name">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    max-width: 500px;

    h1 {
        font-size: 2rem;
        border-bottom: 1px solid rgb(240 232 241);
        color: rgb(213, 158, 221);
    }

    .product-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2rem;


        .colum {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: fit-content;
        }

        .product {
            .product-container {
                height: fit-content;
                background-color: rgb(255 255 255);
                border: 1px solid rgb(240 232 241);
                padding: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                position: relative;

                .quantity-in-cart {
                    position: absolute;
                    top: 0;
                    right: 0;
                    background-color: rgb(167 28 189);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 30px;
                    height: 30px;
                }

                &.selected {
                    border: 2px solid rgb(177 132 185);
                    box-shadow: 0 0 10px rgb(177 132 185);
                }

                &:hover {
                    scale: 1.1;
                }

                img {
                    max-width: 100%;
                    width: 100px;
                    object-fit: cover;
                }
            }
        }
    }

}
</style>