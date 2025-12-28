import multer from 'multer';

const storage = multer.memoryStorage();

export const upload = multer({
    storage,
});

export const uploadPDFmiddleware = multer({
    storage,
    fileFilter: (_, file, cb) => {
        if (file.mimetype !== "application/pdf") {
            return cb(new Error("Only PDFs allowed"));
        }
        cb(null, true);
    },
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});