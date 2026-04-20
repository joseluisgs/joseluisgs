new Crawler({
  appId: 'FAAIQ0MAJO',
  apiKey: '1568d90fa2bb716c7acdbb989ad2eda5', // Admin API Key
  rateLimit: 8,
  startUrls: ['https://joseluisgs.dev/'],
  sitemaps: ['https://joseluisgs.dev/sitemap.xml'],
  ignoreCanonicalTo: false,
  exclusionPatterns: [],
  discoveryPatterns: ['https://joseluisgs.dev/**'],
  schedule: 'at 02:00 every 1 day',
  actions: [
    {
      indexName: 'joseluisgs_dev_faaiq0majo_pages',
      pathsToMatch: ['https://joseluisgs.dev/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl0: {
              selectors: ['.vp-page-title h1', '.vp-sidebar-link.active'],
              defaultValue: 'Documentation',
            },
            lvl1: '.vp-page-title h1',
            lvl2: '#markdown-content h2',
            lvl3: '#markdown-content h3',
            lvl4: '#markdown-content h4',
            lvl5: '#markdown-content h5',
            lvl6: '#markdown-content h6',
            content: '#markdown-content p, #markdown-content li',
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    joseluisgs_dev_faaiq0majo_pages: {
      attributesForFaceting: ['type', 'lang'],
      attributesToRetrieve: ['hierarchy', 'content', 'url', 'url_without_anchor', 'type'],
      attributesToHighlight: ['hierarchy', 'content'],
      attributesToSnippet: ['content:10'],
      searchableAttributes: [
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy.lvl3)',
        'content',
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: [
        'desc(weight.pageRank)',
        'desc(weight.level)',
        'asc(weight.position)',
      ],
      ranking: [
        'words',
        'filters',
        'typo',
        'attribute',
        'proximity',
        'exact',
        'custom',
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      removeWordsIfNoResults: 'allOptional',
    },
  },
})
