const router = require('express').Router();


router.get('/', (req,res) => {
    res.status(200).send(`Hello Dude`)
});

router.get('/:id', (req,res) => {
    res.status(200).send(`<h1>Here is the imformation about ${req.params.id}</h1>`)
});

module.exports = router;