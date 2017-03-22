var pee = require('./create_thumbnail');

pee.create_thumbnails('./images', function(err) {
  if (err) {
    console.log(err.message);
  }
  console.log('It worked');
});
