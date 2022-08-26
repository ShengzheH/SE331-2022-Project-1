<template>
  <div class="background"></div>
  <CommentList v-if="comments.length" :comments="comments"></CommentList>
  <CommentForm @comment-submitted="addComment"></CommentForm>
</template>
<script>
import CommentForm from '@/components/CommentForm.vue'
import CommentList from '@/components/CommentList.vue'
export default {
  inject: ['GStore'],
  components: {
    CommentForm,
    CommentList
  },
  data() {
    return {
      comments: []
    }
  },
  methods: {
    addComment(comment) {
      this.comments.push(comment)
      this.GStore.flashMessage = 'Your comment has been added'
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'DoctorComment'
      })
    }
  }
}
</script>
<style scoped>
#building {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 500px;
  height: 200px;
  cursor: pointer;
  border: 3px solid #a6abb1;
  border-radius: 20px;
  margin: auto;
  text-align: center;
  background-image: url('../assets/card.jpg');
  background-position: absolute;
  background-size: 100% 100%;
  /* background-color: blanchedalmond; */
}
</style>
