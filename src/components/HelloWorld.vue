<template>
  <div class="home">
    <v-card class="mx-auto" elevation="0" max-width="900" color="#FFFFFF">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            
        <v-timeline-item icon="mdi-numeric-1" fill-dot  color="green darken-4">
          <span slot="opposite" class="font-weight-bold"><v-icon class="mr-3">mdi-account-circle</v-icon> Ingresar</span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Ingresar como usuario</v-card-title>
                  <v-card-text class="text-justify">
                    Registrarte con tu nombre, apellidos, email y contraseña para obtener una cuenta con la cual luego ingresar a la plataforma y crear productos. 
                  </v-card-text>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-2" fill-dot  color="green darken-4">
          <span slot="opposite" class="font-weight-bold">Regitrar<v-icon class="ml-3">mdi-registered-trademark</v-icon></span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Registrar nuevo Producto</v-card-title>
                  <v-card-text class="text-justify">
                    Para registrar un nuevo producto debe elegir el nombre, cantidad y precio del producto finalmente agregar una imagen.
                  </v-card-text>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-3" fill-dot  color="green darken-4">
          <span slot="opposite" class="font-weight-bold"><v-icon class="mr-3">mdi-card-search</v-icon>Buscar</span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Buscar un Producto</v-card-title>
                  <v-card-text class="text-justify">
                    Para buscar un producto, debe ir a la sección de productos y dar click en "buscar".
                  </v-card-text>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-4" fill-dot  color="green darken-4">
          <span slot="opposite" class="font-weight-bold">Visualizar<v-icon class="ml-3">mdi-book-open-variant</v-icon></span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Visualizar los Nutrientes de un Producto</v-card-title>
                  <v-card-text class="text-justify">
                    En la opción de "ver más" podrá la tabla nutricional de los productos seleccionado
                  </v-card-text>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>             
      </v-timeline>  
    </v-card>

    <v-hover class="mb-8">
      <template v-slot:default="{ hover }">
        <v-card max-width="500" :class="`elevation-${hover ? 24 : 3}`" class="transition-swing mx-auto px-4 py-3" >
          <h3 class="mx-4 pt-4">Members</h3>
          <v-card-text class="font-weight-medium text--primary text-justify pt-1">
            Hecho por un equipo de 5 estudiantes universitarios.
            <ul>
              <li>Olenka Gianella Rivero Martínez     </li>
              <li>Ayrton Martin Valle Palomino  </li>
              <li>Gloria Stephanie Calderon Cabrera  </li>
              <li>Fernando Dan Muñoz Betalleluz      </li>
              <li>Fili Eduardo Quispe Sánchez      </li>
            </ul>
          </v-card-text>
        </v-card>
      </template>
    </v-hover> 
  </div>
</template>


<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      
    }),
  }
</script>
