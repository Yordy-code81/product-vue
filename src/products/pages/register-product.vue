<template>
    <div class="registerbono pt-8">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card class="px-8 pt-8 pb-5 mx-auto transition-swing" :class="`elevation-${hover ? 20 : 3}`" max-width="800">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                    <v-col>
                        <h3 class="font-weight-bold pt-0 mb-4">Datos del Producto</h3>
                    </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="name"      label="Name"></v-text-field>
                    <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="amount"               label="Amount"                    type="number"></v-text-field>
                    <v-select     class="mb-3" :rules="rules" dense outlined  hide-details  v-model="type"     label="Type"    :items="lsType"></v-select>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="image"            label="Image Link"></v-text-field>
                    <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="price" type="number"  label="Price S/"></v-text-field>              
                        
                      <!-- <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="fechaEmision"         label="Fecha de emision"    placeholder="2019-02-03T00:00:00"></v-text-field> -->
                </v-col>
                </v-row>
              <v-divider class="mt-5 mb-3"></v-divider>
              <v-card-actions>
                <v-btn outlined color="red" @click="reset">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn outlined color="indigo accent-4" :disabled="!valid" @click="createProduct">Submit</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </template>
      </v-hover>    
      <v-snackbar v-model="snackbar" color="success" dark>
        Product created
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </template>
  
  <script>
  import CreateProductService from '../services/register-product.service';
  export default {
      name: 'register-product',
      data: () => ({
          sampleUser: null,
          lsType: ['kg','hg', 'dag', 'g', 'dg', 'cg', 'mg'],
          snackbar: false,
          valid: true,
          name: '',
          amount: '',
          type: '',
          image: '',
          price: '',
          picker: null,
          rules: [v => !!v || 'This field is required'],
      }),
      mounted () {
        this.sampleEx();
      },
      methods: {
        createProduct () {
          if(this.$refs.form.validate()) {
            let idLogged = localStorage.getItem('user');
            console.log("user", idLogged);
            const Product = {
                name: this.name,
                amount: parseFloat(this.amount),
                type: this.type,
                image: this.image,
                price: parseFloat(this.price),
            };

            CreateProductService.registerProduct(this.sampleUser.id, Product)
                .then((response) => {
                  console.log("new product:", response.data);
                })
                .catch((e) => {
                  console.log("error", e);
                  console.log("new product", Product);
                });
            this.snackbar = true;
            this.reset();
          }
        },
        sampleEx (){
          let de = localStorage.getItem('user');
          this.sampleUser = JSON.parse(de);
          console.log("Objeto User",this.sampleUser);
        },
        reset () {
          this.$refs.form.reset()
        }
    }
  }
  </script>
  
  <style>
  </style>