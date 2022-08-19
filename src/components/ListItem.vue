<template>
  <div class="list-item">
    <span>Name: {{ people.Name }} {{ people.Surname }}</span>
    <span>The status of vaccine</span>
    <span
      >First dose: {{ firstdose(people.First_dose) }} Time:
      {{ people.First_dose_time }}</span
    >
    <span
      >Second dose: {{ firstdose(people.Second_dose) }} Time:
      {{ people.Second_dose_time }}</span
    >
    <span>Age:{{ people.Age }}</span>
    <span>Home Town: {{ people.Home_town }}</span>
    <br />
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    people: {
      type: Object,
      required: true
    }
  },
  computed: {
    firstdose() {
      return function (dose) {
        if (dose) return 'Get'
        else return 'Not Yet'
      }
    }
  }
}
</script>
<style scoped>
.list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
