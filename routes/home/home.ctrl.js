const home = (req, res) => {
  res.render('home/index'); // index.ejs
};

const login = (req, res) => {
  res.render('home/login'); // login.ejs
};

module.exports = {
  home,
  login
  // hello: hello
  // login: login
};
