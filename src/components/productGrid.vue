<script>

// Import the mock data

import mockData from '../mockData.js';


// create thee arrays for the three columns

let firstColumn = [];
let secondColumn = [];
let thirdColumn = [];

// loop through the mockData and push the data to the arrays

for (let i = 0; i < mockData.length; i++) {
    if (i % 3 === 0) {
        firstColumn.push(mockData[i]);
    } else if (i % 3 === 1) {
        secondColumn.push(mockData[i]);
    } else {
        thirdColumn.push(mockData[i]);
    }
}



export default {
    name: 'ProductGrid',
    data() {
        return {
            firstColumn: firstColumn,
            secondColumn: secondColumn,
            thirdColumn: thirdColumn,
        }
    },
    methods: {
        // when the user clicks on a product, navigate to the product page
        goToProduct(product) {
            this.$router.push({ name: 'product', params: { id: product.id } });
        }
    },

    computed: {
        // get the products from the store
        allProducts() {
            return this.$store.state.allProducts;
        }
    }
}

</script>

<template>
    <div class="container">

    <h1>
        Store
    </h1>
        <div class="product-grid">
            <!-- show the products in three columns  -->

            <div class="colum">
                <div class="product" v-for="product in firstColumn" :key="product.id">
                    <img :src="product.image" alt="product.name">
                </div>
            </div>

            <div class="colum">
                <div class="product" v-for="product in secondColumn" :key="product.id">
                    <img :src="product.image" alt="product.name">
                </div>
            </div>

            <div class="colum">
                <div class="product" v-for="product in thirdColumn" :key="product.id">
                    <img :src="product.image" alt="product.name">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.container {
    max-width: 500px;

    h1 {
        font-size: 2rem;
        border-bottom: 1px solid rgb(240	232	241	);
        color: rgb(213, 158, 221);
    }

    .product-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
       

        .colum {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: fit-content;
        }

        .product {
            height: fit-content;
            border: 1px solid rgb(240	232	241	);
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            img {
                max-width: 100%;
                width: 100px;
                object-fit: cover;
            }
        }
    }

}

</style>