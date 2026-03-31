import sharp from 'sharp';
import path from 'path';

const createThumbnail = async (req, res, next) => {
    if (!req.file) {
        return next();
    }

    try {
        const { path: filePath, filename, destination } = req.file;

        const name = path.parse(filename).name;
        const thumbName = name + '_thumb.png';
        const thumbPath = path.join(destination, thumbName);

        await sharp(filePath)
            .resize(160, 160)
            .png()
            .toFile(thumbPath);

        console.log('Thumbnail created:', thumbPath);

        next();
    } catch (err) {
        console.error(err);
        next(err);
    }
};

export { createThumbnail };