const { colors } = require('./tailwind.config')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
  analyticsID: 'UA-56060335-5',
  siteTitle: 'David Royer - Front End Web Developer', // Navigation and Site Title
  shortName: 'D.Royer', // Alternative Site title for SEO
  siteUrl: 'https://www.davidroyer.me', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Personal site of David Royer, Front-End Web Designer and Developer.',
  siteFBAppID: '123456789', // Facebook App ID
  twitterUsername: '@DavidRoyer_', // Twitter Username
  ogTitle: 'David Royer',
  ogType: 'website',
  ogImage: 'icon.png',
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'de_DE', // Facebook Language

  // Manifest and Progress color
  themeColor: colors['grey-darkest'],
  backgroundColor: colors['indigo'],

  /**
   * Icons To Load
   */
  fontAwesomeIcons: {
    brands: ['faTwitter', 'faGithub', 'faLinkedinIn'],
    regular: ['faTimesCircle'],
    solid: ['faChevronRight, faAdjust', 'faSync', 'faUser', 'faStar', 'faTag']
  }
}
