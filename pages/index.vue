<template lang="pug">
  section.container
    div
      h3 Nuxt.jsのタグが付けられた投稿の一覧
      ul
        li(v-for="item in items" :key="item.id")
          h4
            span {{ item.title }}
            small by {{ item.user.id }}
          div {{ item.body.slice(0, 130) }}
          p: a(:href="item.url") {{ item.url }}
</template>

<script>
export default {
  async asyncData({ app }) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js');
    return { items };
  }
}
</script>

<style lang="stylus">
.container
  min-height: 100vh
  padding: 16px

h3
  margin: 16px 0
  padding: 8px 0
  border-bottom: solid 1px #e5e5e5

li + li
  margin: 16px 0

p
  margin: 8px 0
</style>

