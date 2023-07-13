<script>

export default {
    name: 'ProducDetail',
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

        <h2 class="pdp-title" v-if="getProductInPDP">
            Product
        </h2>

        <div class="placeholder" v-if="!getProductInPDP">

            <span></span>

            <p>Please choose a product on the left</p>
        </div>

        <div class="product-detail" v-if="getProductInPDP">

            <img :src="getProductInPDP.image" alt="getProductInPDP.name">

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
                    <button class="minus">
                        -
                    </button>
                    <button class="plus">
                        +
                    </button>
                </div>
            </div>
            <p class="description">
                {{ getProductInPDP.description }}
            </p>
        </div>
    </div>
</template>


<style scoped lang="scss">
.container {

    h2.pdp-title {
        font-size: 2rem;
        border-bottom: 1px solid rgb(240 232 241);
        color: rgb(213, 158, 221);
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

        img {
            width: 100%;
            max-width: 300px;
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