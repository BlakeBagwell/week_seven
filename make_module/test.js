var web_scrape_mod = require('./save_page_mod');

web_scrape_mod.saveWebPage(
  'http://css-tricks.com', 'css-tricks.html', function(err) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('It worked.');
  }
);
