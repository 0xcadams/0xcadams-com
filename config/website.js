const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Chase Adams', // Navigation and Site Title
  siteTitleAlt: 'cadams.io', // Alternative Site title for SEO
  siteUrl: 'https://cadams.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/avatar.png', // Used for SEO and manifest
  siteDescription: 'An unusual affinity for code and a passion for learning.',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@_chase_adams', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: '1724c0',
  backgroundColor: tailwind.colors.blue,
};
