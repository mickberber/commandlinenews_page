const path = require('path');

module.exports = (router) => {
  router.get('/zip', (req, res) => {
    res.download(path.join(__dirname + './../../public/dist/logo.png'), './logo.png');
  });
}
