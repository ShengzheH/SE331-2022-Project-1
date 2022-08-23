<template>
  <div class="background" v-if="people">
    <div id="nav">
      <router-link :to="{ name: 'PeopleDetail', params: { id } }"
        >Details</router-link
      >|
      <router-link :to="{ name: 'PeopleVaccineDetail', params: { id } }"
        >VaccineDetails</router-link
      >
    </div>
    <router-view :people="people" />
  </div>
</template>
<script>
import PeopleService from '@/services/PeopleService.js'
export default {
  props: ['id'],
  data() {
    return {
      people: null
    }
  },
  created() {
    PeopleService.getPeople(this.id)
      .then((response) => {
        this.people = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>
