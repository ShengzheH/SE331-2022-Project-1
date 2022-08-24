<template>
  <div class="background" v-if="GStore.people">
    <div id="nav">
      <router-link :to="{ name: 'PeopleDetail' }">Details</router-link>|
      <router-link :to="{ name: 'PeopleVaccineDetail' }"
        >VaccineDetails</router-link
      >
    </div>
    <router-view :people="GStore.people" />
  </div>
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
