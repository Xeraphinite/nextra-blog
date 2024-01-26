const withNextra = require('nextra')({
    theme: 'nextra-theme-blog',
    themeConfig: './theme.config.jsx',
    latex: true,
})

module.exports = withNextra()
