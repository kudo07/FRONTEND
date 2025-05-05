const express = require('express');
const PORT = 8011;
const app = express();
// stuck now every request goes from here to proceed further

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-policy',
    "default-src 'self';" +
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;"
  );
  // allow from the self
  // and allow from the other domain also
  // font, images anything
  // not allowed image
  // customise with img-src
  //cross site scripting
  // allow inline script also for trust code console in html
  //remove nonce run both the script only nonce make the distinguish which is run and which is not
  // inline script runs
  next();
  // allow our script now
});

// anything reaches to the next line goes by this particular line
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log(req.url);
  //   res.send('hello');
  res.send(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log('server start');
});
