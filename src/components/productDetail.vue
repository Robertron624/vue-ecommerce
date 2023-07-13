<script>

import minicartPage from './minicartPage.vue'

export default {
    name: 'ProducDetail',

    components: {
        minicartPage
    },

    methods: {

        handleAddToCart() {

            //Check if the product is already in the cart
            const productId = this.getProductInPDP.id;
            const productInCart = this.$store.getters.getProductFromMiniCart(productId);

            if (productInCart) {

                // Using the addQuantityByOne action, add the quantity by one

                this.$store.commit('addQuantityByOne', productId);

                
                return;
            }

            // If the product is not in the cart, add it and set the quantity to 1
            const productToAdd = {
                id: this.getProductInPDP.id,
                name: this.getProductInPDP.name,
                price: this.getProductInPDP.price,
                image: this.getProductInPDP.image,
                quantity: 1,
            }

            this.$store.commit('addCartItem', productToAdd);
        },

        handleRemoveFromCart() {
            const productId = this.getProductInPDP.id;
            const productInCart = this.$store.getters.getProductFromMiniCart(productId);

            if (productInCart) {
                
                // Check if the quantity is 1, if so, remove the product from the cart
                if (productInCart.quantity === 1) {
                    this.$store.commit('removeCartItem', productId);
                    return;
                }
                // If the quantity is more than 1, remove the quantity by one

                this.$store.commit('removeQuantityByOne', productId);
                return;
            }
        },
    },

    computed: {
        getProductInPDP() {
            return this.$store.getters.getProductInPDP;
        },

        getQuantityInCart() {

            const productId = this.$store.getters.getProductInPDP.id;
            const productInCart = this.$store.getters.getProductFromMiniCart(productId);

            if (productInCart) {
                return productInCart.quantity;
            }

            return null;
        },

        getIsMiniCartOpen() {
            return this.$store.getters.getIsMiniCartOpen;
        }
    }
}

</script>

<template>
    <div class="container">

        <div class="pdp-title">
            <span v-if="getProductInPDP && !getIsMiniCartOpen">Product</span>
            <span v-if="getIsMiniCartOpen">Shoping Cart</span>
        </div>
        <div class="product-detail" v-if="!getIsMiniCartOpen">

            <div class="placeholder" v-if="!getProductInPDP">
                <p>Please choose a product on the left</p>
            </div>

            <div class="product" v-if="getProductInPDP">
                <div class="image-container">
    
                    <div v-if="getQuantityInCart" class="quantity-in-cart">
                        <span>
                            {{ getQuantityInCart }}
                        </span>
                    </div>
                    <img :src="getProductInPDP.image" alt="getProductInPDP.name">
                </div>
    
                <div class="name-price-quantity">
    
                    <div class="name-price">
                        <p class="name">
                            {{ getProductInPDP.name }}
                        </p>
                        <span class="divisor">
    
                        </span>
                        <p class="price">
                            ${{ getProductInPDP.price }}
                        </p>
                    </div>
    
                    <div class="quantity">
                        <button v-on:click="handleRemoveFromCart" class="minus">
                            -
                        </button>
                        <button v-on:click="handleAddToCart" class="plus">
                            +
                        </button>
                    </div>
                </div>
                <p class="description">
                    {{ getProductInPDP.description }}
                </p>
            </div>
        </div>

        <div class="minicart-container" v-if="getIsMiniCartOpen">
            <minicartPage />
        </div>

    </div>
</template>


<style scoped lang="scss">
.container {
    div.pdp-title {
        font-size: 2rem;
        border-bottom: 1px solid rgb(240 232 241);
        color: rgb(213, 158, 221);
        height: 52px;
    }

    .placeholder {
        color: #999;

        p {
            margin-top: 1rem;
        }

        span {
            width: 100%;
            height: 52.2px;
            display: inline-block;
            border-bottom: 1px solid rgb(240 232 241);
        }
    }

    .product-detail {

        margin-top: 1rem;
        gap: 1rem;

        div.image-container {
            position: relative;

            .quantity-in-cart {
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgb(167 28 189);
                color: white;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                font-weight: 700;
                font-size: .85rem;
            }

            img {
                width: 100%;
                max-width: 300px;
            }
        }


        .name-price-quantity {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 300px;

            border-bottom: 1px solid rgb(240 232 241);
            padding-bottom: .5rem;

            .name-price {
                display: flex;
                gap: .5rem;
                align-items: center;

                .name {
                    text-transform: capitalize;
                }

                .divisor {
                    width: 4px;
                    height: 4px;
                    background-color: rgb(233 211 237);
                    border-radius: 50%;
                }

                .price {
                    color: rgb(167 28 189);
                    font-weight: 600;
                }
            }

            .quantity {
                display: flex;
                align-items: center;

                .minus {
                    background: rgb(240 240 240);
                    color: black;

                    &:hover {
                        background: rgb(233 211 237);
                    }
                }

                .plus {
                    background-color: rgb(167 28 189);
                    color: white;

                    &:hover {
                        background-color: rgb(213, 158, 221);
                    }
                }

                button {
                    width: 30px;
                    height: 30px;
                    border-radius: 2px;
                    border: none;
                    font-weight: 700;
                    font-size: 1rem;
                    transition: all 0.3s ease-in-out;
                }
            }
        }

        p.description {
            margin-top: 1rem;
            color: #999;
            font-weight: 600;
            border-bottom: 1px solid rgb(240 232 241);
            width: 50%;
            padding-bottom: .5rem;
            font-size: .85rem;
        }
    }

}
</style>