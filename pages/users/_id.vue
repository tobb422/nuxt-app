<template lang="pug">
  div: p User ID: {{ userId }}
</template>

<script>
  export default {
    head() {
      return {
        title: this.userId
      };
    },
    data() {
      return {
        userId: this.$route.params.id
      };
    }
  }
</script>