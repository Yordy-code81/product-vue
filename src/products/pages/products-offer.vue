<template>
    <div class="products">
      <v-row class="pt-4">
        <v-col cols="12">
          <h1 class="pl-11">Products on Sale</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="d-flex flex-wrap justify-center mb-8">
            <v-card v-for="product in produ" :key="product.id" class="pb-2 ma-3" width="345" max-height="550">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  v-bind:src="`${product.image}`"
                >
                  <v-card-title>{{ product.name }}</v-card-title>
                </v-img>
            
                <v-card-subtitle class="pb-0">
                    {{ product.name }}
                </v-card-subtitle>
            
                <v-card-text class="text--primary">
                  <div>price: S/{{ product.price }}</div>
                
                  <div>Amount: {{ product.amount }} {{ product.type }}</div>

                </v-card-text>
            
                <v-card-actions>
                  <v-btn
                    color="green"
                    text
                  >
                    {{ product.first_name }} {{ product.last_name }}
                  </v-btn>
              
                  <v-btn
                    color="green"
                    text
                  >
                    {{ product.phone }}
                  </v-btn>

                </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
</template>

<script>
import CreateProductService from '../services/register-product.service';

export default {
    name: "products-offer",

    data: () => ({
      products: [],
      produ: [],
      isValid: true,
      idSelect: null,
      name: '',
      nameRules: [ v => !!v || 'Product name is required'],
    }),

    created() {
        this.getAllProducts();
    },

    updated() {

    },

    methods: {
      getAllProducts() {
        CreateProductService.getAllProducts()
        .then(response => {
          this.products = response.data.map(
            prod => ({
              id: prod.id,
              name: prod.name,
              amount: prod.amount,
              type: prod.type,
              image: prod.image,
              price: prod.price,
              sellerId: prod.sellerId
            })
          )
          this.products.forEach(value => {
            CreateProductService.getSellerOfProduct(value.sellerId)
              .then(res => {
                let seller = res.data
                let aux_seller = {
                  id: value.id,
                  name: value.name,
                  amount: value.amount,
                  type: value.type,
                  image: value.image,
                  price: value.price,
                  first_name: seller.first_name,
                  last_name: seller.last_name,
                  phone: seller.phone
                }
                this.produ.push(aux_seller)
              })
          })
        })
        .catch(e => {
          console.log(e)
        })
      },
    }
}
</script>