// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Martin Blog',
  siteUrl: 'https://martin0809.github.io',
  pathPrefix: '/fed-e-task-03-04',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {
          // remark options
        },
      },
    },
  ],
  templates: {
    Post: '/blog/:id',
  },
}
