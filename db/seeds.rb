Page.create({
              name: 'Facebook: John Dies at the End',
              url: 'https://www.facebook.com/JohnDiesattheEnd.TheNovel/',
              title_css_sel: '#pageTitle',
              desc_css_sel: '',
              art_url_css_sel: '.userContentWrapper a[href^="/JohnDiesattheEnd.TheNovel/posts/"]:not(.uiLinkSubtle)',
              art_title_css_sel: '.userContentWrapper .userContent',
              art_desc_css_sel: '.userContentWrapper'
            })
Page.create({
              name: 'Twitter: creus_fcb',
              url: 'https://twitter.com/creus_fcb',
              title_css_sel: '',
              desc_css_sel: '',
              art_url_css_sel: '#timeline .tweet-timestamp',
              art_title_css_sel: '#timeline .js-tweet-text',
              art_desc_css_sel: '#timeline .content'
            })
Page.create({
              name: 'English Marca',
              url: 'http://marca.com/en',
              title_css_sel: '',
              desc_css_sel: '',
              art_url_css_sel: 'article.mod-item .mod-title a',
              art_title_css_sel: 'article.mod-item .mod-title a',
              art_desc_css_sel: 'article.mod-item figure.multimedia-item'
            })
Page.create({
              name: 'Wikipedia: In the News',
              url: 'https://en.wikipedia.org/wiki/Main_Page',
              title_css_sel: '',
              desc_css_sel: '',
              art_url_css_sel: '#mp-itn>ul:first-of-type li b a',
              art_title_css_sel: '#mp-itn>ul:first-of-type li',
              art_desc_css_sel: '#mp-itn>ul:first-of-type li'
            })
