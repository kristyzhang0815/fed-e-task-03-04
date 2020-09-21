<template>
  <el-container>
    <el-header>
      <h1>Martin Blog</h1>
    </el-header>
    <div class="main">
      <el-container>
        <el-aside>
          <el-menu>
            <g-link to="/">
              <el-menu-item index="1">
                <i class="el-icon-notebook-2"></i>
                <span slot="title">博客列表</span>
              </el-menu-item>
            </g-link>
            <g-link to="/trend">
              <el-menu-item index="2">
                <i class="el-icon-news"></i>
                <span slot="title">最新动态</span>
              </el-menu-item>
            </g-link>
            <g-link to="/social">
              <el-menu-item index="3">
                <i class="el-icon-star-off"></i>
                <span slot="title">社交圈</span>
              </el-menu-item>
            </g-link>
            <g-link to="/open-source">
              <el-menu-item index="4">
                <i class="el-icon-suitcase"></i>
                <span slot="title">开源项目</span>
              </el-menu-item>
            </g-link>
          </el-menu>
        </el-aside>
        <el-main>
          <slot />
        </el-main>
      </el-container>
    </div>
    <el-footer>© {{ year }} Martin0809</el-footer>
  </el-container>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.el-header {
  padding: 96px !important;
  height: auto !important;
  color: #fff;
  text-align: center;
  background-image: linear-gradient(
    120deg,
    rgb(38, 144, 249),
    rgb(252, 45, 45)
  );
}

h1 {
  font-size: 28px;
}

.main {
  width: 1024px;
  margin: 24px auto 0;
}

.el-aside {
  width: 200px !important;
}

.el-footer {
  text-align: center;
  line-height: 60px;
  border-top: 1px solid #e6e6e6;
}
</style>
