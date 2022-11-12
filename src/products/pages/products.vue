<template>
    <div class="teachers">
      <v-row class="pt-4">
        <v-col cols="12">
          <h1 class="pl-11">Products</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="d-flex flex-wrap justify-center mb-8">
            <v-card v-for="product in products" :key="product.id" class="pb-2 ma-3" width="345" max-height="350">
              <v-card-text>
                <div>Product</div>
                <h3 class="text--primary font-weight-bold py-1">{{product.title}}</h3>
                <v-img v-bind:src="`${product.image}`" width="150" height="100"></v-img>
                <div>{{ product.id }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="indigo accent-4" class="font-weight-bold te">see more</v-btn>
              </v-card-actions>
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
    }),

    created() {
      productsService.getAll()
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
        })
        .catch(e => {
          console.log(e)
        })
    }
}
</script>