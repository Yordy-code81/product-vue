<template>
    <div>
        <h1>Product Information</h1>
        <v-row justify="space-around">
            <v-col>
                <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                  <template slot="progress">
                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                  </template>
              
                  <v-img height="250" v-bind:src="`${image}`"></v-img>
              
                  <v-card-title>{{ title }}</v-card-title>
              
                  <v-card-text>
                    <v-row align="center" class="mx-0">
                      <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                    
                      <div class="grey--text ms-4"></div>
                    </v-row>
                
                    <div class="my-4 text-subtitle-1">$ {{ price }}</div>
                
                    <div>{{ description }}</div>
                  </v-card-text>
              
                  <v-divider class="mx-4"></v-divider>
              
                  <v-card-title> Nutrients </v-card-title>
              
                  <v-card-text>
                    <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                      <v-chip></v-chip>
                    
                      <v-chip></v-chip>
                    
                      <v-chip></v-chip>
                    
                      <v-chip></v-chip>
                    </v-chip-group>
                  </v-card-text>
                </v-card>
            </v-col>


            <v-col>
                <v-container class="mt-12">
                    <v-row justify="space-around">
                      <v-card width="400">
                    
                        <v-card-text>
                          <div class="font-weight-bold ml-8 mb-2"> Nutrients </div>
                        
                          <v-timeline align-top dense>
                            <v-timeline-item v-for="nutrient in nutrients" :key="nutrient.id" :color="color" small>
                              <div>
                                <div class="font-weight-normal">
                                  <strong> name: </strong> {{ nutrient.name }}
                                </div>
                                <div>{{ nutrient.amount }} {{ nutrient.unit }}</div>
                              </div>
                            </v-timeline-item>
                          </v-timeline>
                        </v-card-text>
                      </v-card>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import productsService from '../services/products.service';

export default {
    name: "product-detail",
    data: () => ({
        id: 0,
        title: '',
        price: 0.0,
        description: '',
        image: '',
        nutrients: [],
        color: 'green',
    }),

    created() {
        this.refreshDataProduct()
    },

    methods: {
        refreshDataProduct() {
            productsService.getById(this.$route.params.id)
                .then(response => {
                    this.id = response.data.id
                    this.title = response.data.title
                    this.price = response.data.price
                    this.description = response.data.description
                    this.image = response.data.image
                    this.nutrients = response.data['nutrition']['nutrients'].map(
                        nut => ({
                            name: nut.name,
                            amount: nut.amount,
                            unit: nut.unit,
                            percentOfDailyNeeds: nut. percentOfDailyNeeds
                        })
                    )
                    console.log(response.data['nutrition']['nutrients'])
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
}
</script>