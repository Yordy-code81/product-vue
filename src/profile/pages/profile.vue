<template>
    <div class="profile ma-10">
      <v-card class="mx-5 mt-3">
        <div class="t-back accent-4">
          <v-card-title v-if="isTeacher" class="white--text font-weight-bold">Hello Seller</v-card-title>
          <v-card-title v-else class="white--text font-weight-bold">Hello Seller</v-card-title>
        </div>
        <v-row>
          <v-col cols="2" class="px-8 pt-8">
            <div class="pa-3">
              <v-img
                  src="https://previews.123rf.com/images/imagevectors/imagevectors1601/imagevectors160100868/50600489-plana-verde-icono-de-perfil-y-el-c%C3%ADrculo-verde.jpg"
                  height="150px"
                  width="150px"
                  class="teacher-img"
              >
            </v-img>
            </div>
          </v-col>
          <v-col cols="10">
            <v-card-text>
              <h1 class="text--primary">Personal Information:</h1>
              <div class="text--primary pt-2">
                Name: {{user.first_name}}<br>
                Last Name: {{user.last_name}}<br>
                Age: {{user.age}}<br>
                Phone: {{user.phone}}<br>
                Email: {{user.email}}<br>
                Farm Address: {{user.farm_address}}<br>
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
      <h1 v-if="isTeacher" class="pl-5 pt-10">Points</h1>
      <v-card v-if="isTeacher" class="mx-5 mt-3">
        <v-container>
          <v-row>
            <div class="d-flex justify-start align-center ml-5 mr-3">
              <v-icon>mdi-check-bold</v-icon>
            </div>
            <v-col>
              <div>You</div>
              <p class="text--primary font-weight-bold mb-1">Points earned</p>
            </v-col>
            <v-col class="d-flex justify-center align-center">
              <v-chip outlined rounded color="green darken-1" class="font-weight-bold">
                {{user.point}} Points
              </v-chip>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </template>
  
  <script>
  //import ProfileService from '../services/profile.service'
  
  export default {
    name: "profile-view",
    data:()=>({
      typeUser: '',
      isTeacher: false,
      user: {},
      id: '',
      firstname: '',
      lastname: '',
      age: '',
      phone: '',
      point: 0,
      email: '',
    }),
    created() {
      this.user = JSON.parse(localStorage.getItem('user'))
      this.validate()
    },
    methods: {
    }
  }
  </script>

<style>

.t-back {
  background-image: linear-gradient(180deg, #aef4c5 0, #9cedc1 16.67%, #87e4bc 33.33%, #6cd8b4 50%, #4dccad 66.67%, #24c3aa 83.33%, #00bba9 100%);
}
</style>