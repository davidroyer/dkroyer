/* eslint-disable no-console */
import siteConfig from './../../site.config.js'

export const setupSitemap = ({ sitemapOptions, routes }) => {
  const config = {
    hostname: siteConfig.url,
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    routes
  }

  const configKeys = Object.keys(config)
  for (const key of configKeys) {
    sitemapOptions[key] = config[key]
  }
}

export default function () {
  this.options.sitemap = {}

  this.requireModule([
    'nuxt-social-meta',
    {
      title: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.url,
      img: `${siteConfig.url}/share.png`,
      twitter: '@DavidRoyer_'
    }
  ])

  /**
   * If the Google `analyticsId` is set then add the module and set the `id`
   */
  if (siteConfig.analyticsId) {
    this.requireModule([
      '@nuxtjs/google-analytics',
      {
        id: siteConfig.analyticsId
      }
    ])
  }

  this.requireModule('@nuxtjs/sitemap')

  this.nuxt.hook('generate:done', ({ generatedRoutes, options }) => {
    setupSitemap({
      sitemapOptions: options.sitemap,
      routes: Array.from(generatedRoutes)
    })
  })
}
