const router = require("express").Router()

router.get("/" , (req, res) => {
    res.json({code:200, message:"hello"})
})

module.exports = router