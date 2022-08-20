<template>
  <div class="background">
    <div class="home">
      <h1>People's covid-19 vaccination status</h1>
      <div class="home-list">
        <ListItem v-for="people in peoples" :key="people.id" :people="people" />
      </div>
    </div>
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
<style scoped>
.home-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.background {
  background: url('../assets/bc.jpg');
  width: 100%;
  height: 100%;
  background-position: absolute;
  background-attachment: fixed;
  background-repeat: scroll;
  background-size: 100% 100%;
}
.body {
  overflow: auto;
}
</style>
