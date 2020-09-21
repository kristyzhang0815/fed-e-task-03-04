<template>
  <Layout>
    <div v-html="$page.post.content"></div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    content
  }
}
</page-query>

<script>
export default {}
</script>

<style></style>
