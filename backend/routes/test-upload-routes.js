const router = require('express').Router();
const {singleMulterUpload, singlePublicFileUpload} = require('../awsS3');
router.post('/', singleMulterUpload('image'), async(req, res) => {
        try{
        const urlOnS3 = await singlePublicFileUpload(req.file);
        console.log(urlOnS3)
        res.json({message:'hi'})
        } catch(e) {
            next(e)
        }
        
});

module.exports = router;