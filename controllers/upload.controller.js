const cloudinary = require('cloudinary');

exports.uploadsProcess = async (req, res, next) => {
    const uploads = (file, folder) => {
        return new Promise (resolve => {
            cloudinary.uploader.upload(file, (result) =>{
                resolve({
                    url: result.url,
                    id: result.public_id
                },
                {
                    resource_type:'auto',
                    folder
                })
            })
        })
    };
    const uploader = async (path) => uploads(path,'docs');

    if(req.method === "POST"){
        const urls = [];
        const files = req.files;
        if(!req.file){
            for(const file of files){
                const { path } = file;
                const newPath = await uploader(path)
                urls.push({ newPath, name:file.originalname })
            }
            res.status(200).json({result: urls, msg: "file uploaded successfully"})
        } else {
            const { path } = req.file
            const newPath = await uploader(path)
            res.status(200).json({ result:{ newPath, name:req.file.originalname }, msg:"Image Upload Correctly"})
        }
    }else {
        res.status(450).jason({errorMessage:`${req.method} method not allowed`})
    }
}
