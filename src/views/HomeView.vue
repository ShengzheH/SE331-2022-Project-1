<template>
  <div class="home">
    <h1>People's covid-19 vaccination status</h1>
    <ListItem v-for="people in peoples" :key="people.id" :people="people" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListItem from '@/components/ListItem.vue'
import PeopleService from '@/services/PeopleService.js'
export default {
  name: 'HomeView',
  components: {
    ListItem
  },
  data() {
    return {
      peoples: null
    }
  },
  created() {
    PeopleService.getPeoples().then((response) => {
      this.peoples = response.data
    })
  }
}
</script>
