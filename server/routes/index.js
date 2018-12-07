const database = require('../database');
const router = require('express-promise-router')();

router.get('/api/stories', async (req, res) => {
  const { rows } = await database.query('SELECT * FROM stories');
  res.json(rows)
});

router.get('*', (req, res) => {
  res.render('index', { title: 'example' });
});

module.exports = router;
