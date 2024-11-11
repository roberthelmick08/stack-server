const { Router } = require('express');

const router = new Router();

router.get('/new', (req, res) => {
  res.json({ user: req.app.locals.engine.generation.newUser() });
});

module.exports = router;
