const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Web Node' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Web Node' });
})


module.exports = router;