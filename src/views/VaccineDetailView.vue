<template>
  <div class="background">
    <div class="home">
      <h1>People who have been vaccinated with the defferent doses</h1>
      <h2>
        Number of people vaccinated with first dose vaccine :
        {{ this.first_dose }}
      </h2>
      <div class="home-list">
        <FirstDose
          v-for="people in peoples"
          :key="people.id"
          :people="people"
        />
      </div>
      <h2>
        Number of people vaccinated with second dose vaccine :
        {{ this.second_dose }}
      </h2>
      <div class="home-list">
        <SecondDose
          v-for="people in peoples"
          :key="people.id"
          :people="people"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstDose from '@/components/FirstDose.vue'
import SecondDose from '@/components/SecondDose.vue'
import PeopleService from '@/services/PeopleService.js'
import { watchEffect } from '@vue/runtime-core'
export default {
  name: 'HomeView',
  components: {
    FirstDose,
    SecondDose
  },
  data() {
    return {
      peoples: null,
      first_dose: 0,
      second_dose: 0,
      length: 0
    }
  },
  created() {
    watchEffect(() => {
      PeopleService.getTotalPeoples().then((response) => {
        this.peoples = response.data
        for (let i = 0; i < this.peoples.length; i++) {
          if (this.peoples[i].First_dose == true) {
            this.first_dose = this.first_dose + 1
          }
          if (this.peoples[i].Second_dose == true) {
            this.second_dose = this.second_dose + 1
          }
        }
      })
    })
  }
}
</script>
<style scoped>
.home-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
  margin-right: 100px;
  padding-bottom: 100px;
}

#page-next {
  text-align: right;
  margin-left: 100px;
  padding-bottom: 100px;
}
</style>
