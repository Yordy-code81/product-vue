<template>
    <div class="products">
      <v-row class="pt-4">
        <v-col cols="12">
          <h1 class="pl-11">Products</h1>
        </v-col>
      </v-row>
      <v-row class="pt-4 pl-10 pr-10">
        <v-col>
          <div class="d-flex flex-wrap justify-center mb-8">
            <v-text-field class="mb-2" hide-details="auto"
          v-model="name"
          label="Product name"
          required outlined
          >
          <template v-slot:append>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">mdi-account-circle-outline</v-icon>
              </template>
              Write here the product name
            </v-tooltip>
          </template>
        </v-text-field>
        <v-btn
          class="ma-2"
          v-model="isValid"
          :loading="loading2"
          :disabled="!isValid"
          color="success"
          @click="getAllProducts(name)"
        >
          Search
          <template v-slot:loader>
            <span>Loading...</span>
          </template>
        </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="d-flex flex-wrap justify-center mb-8">
            <v-card v-for="product in products" :key="product.id" class="pb-2 ma-3" width="345" max-height="350">
              <div class="prod-card">
                <v-card-title class="t-back" style="color:whitesmoke">
                Product
              </v-card-title>
              <v-card-text>
                <div>Product</div>
                <h3 class="text--primary font-weight-bold py-1">{{product.title}}</h3>
                <v-img class="ml-10 mt-5" v-bind:src="`${product.image}`" width="150" height="100"></v-img>
              </v-card-text>
              <v-card-actions>
                <v-btn color="teal" class="ma-2" outlined :to="`/products/${product.id}`">see more</v-btn>
              </v-card-actions>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
</template>

<script>
import productsService from '../services/products.service';

export default {
    name: "products-view",

    data: () => ({
      products: [],
      isValid: true,
      name: '',
      nameRules: [ v => !!v || 'Product name is required'],
    }),

    created() {
      
    },

    updated() {

    },

    methods: {
      getAllProducts(nameProduct) {
        productsService.getAll(nameProduct)
        .then(response => {
          this.products = response.data['products'].map(
            prod => ({
              id: prod.id,
              title: prod.title,
              image: prod.image,
              imageType: prod.imageType
            })
          )
          console.log(response.data['products']);
          this.name = ''
        })
        .catch(e => {
          console.log(e)
        })
      }
    }
}
</script>

<style>

.t-back {
  background-image: linear-gradient(180deg, #aef4c5 0, #9cedc1 16.67%, #87e4bc 33.33%, #6cd8b4 50%, #4dccad 66.67%, #24c3aa 83.33%, #00bba9 100%);
}

/*.prod-card:hover {
  box-shadow: 10px 10px 98px -9px rgba(0,0,0,0.39);
}*/

</style>