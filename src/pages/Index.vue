<template>
  <Layout>
    <g-link
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      class="post"
      :to="`/blog/${edge.node.id}`"
    >
      <el-card shadow="hover">
        <div>
          {{ edge.node.title }}
        </div>
      </el-card>
    </g-link>
    <el-pagination
      background
      layout="total, prev, pager, next"
      :current-page="$page.posts.pageInfo.currentPage"
      :page-size="$page.posts.pageInfo.perPage"
      :total="$page.posts.totalCount"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allPost (page: $page, perPage: 1) @paginate {
    totalCount
    pageInfo {
      perPage
      currentPage
      totalPages
    }
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: '博客列表'
  },
  methods: {
    handleCurrentChange(page) {
      this.$router.push(page === 1 ? '/' : `/${page}`)
    }
  }
}
</script>

<style>
.post {
  display: block;
}

.post + .post {
  margin-top: 24px;
}

.el-pagination {
  margin-top: 24px;
  text-align: right;
}
</style>
