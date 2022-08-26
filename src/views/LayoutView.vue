<template>
  <div class="background" v-if="GStore.people">
    <div id="nav">
      <router-link :to="{ name: 'PeopleDetail' }">People Details</router-link>|
      <router-link :to="{ name: 'PeopleVaccineDetail' }"
        >Vaccine Details</router-link
      >|
      <router-link :to="{ name: 'DoctorComment' }"
        >Doctor's Comments</router-link
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
