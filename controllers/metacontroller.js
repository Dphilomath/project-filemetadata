const router = require("express").Router()
const multer = require("multer")
const upload = multer({dest: "uploadsxyzzzz/"})
var fs = require('fs');
var dir = 'uploadsxyzzzz'; 
const path = require("path")

router.post('/fileanalyse', upload.single('upfile'), function (req, res) {

    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    })

    fs.readdir(dir, (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
          fs.unlink(path.join(dir, file), (err) => {
            if (err) throw err;
          });
        }
      });
})

module.exports = router