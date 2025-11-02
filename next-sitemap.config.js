/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.shortifylink.in', 
  generateRobotsTxt: true, 
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/url-creation-error'], 
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/url-creation-error'] },
    ],
  },
};
