<template>
  <q-list v-if="posts && posts.length">
    <q-item v-for="(id, post) in posts" :key="id">
      <p><strong>{{ post.title }}</strong></p>
      <p>{{ post.body }}</p>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'Posts',
  data () {
    return {
      posts: []
    }
  },

  created() {
    this.$axios.get('http://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style>
</style>
