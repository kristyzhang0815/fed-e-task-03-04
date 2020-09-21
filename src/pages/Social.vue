<template>
  <Layout>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="粉丝" name="fans">粉丝1</el-tab-pane>
      <el-tab-pane label="关注" name="watch">关注2</el-tab-pane>
    </el-tabs>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '社交圈'
  },
  data() {
    return {
      activeName: 'watch'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style></style>
