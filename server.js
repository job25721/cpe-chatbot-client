require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');
const processMessage = require('./process-message');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.wav')
    }
})

const upload = multer({ storage: storage })

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors({ origin: true }));

// initial route
app.get('/', (req, res) => {
    res.send('API RUNNING')
});

app.post('/api/audio-message', upload.single('audio') ,(req,res) => {
    console.log(req.file.filename);
})

app.post('/api/dialogflowGateway', async (req, res) => {
    try {

        const message = req.body.message;
        const sessionId = req.body.sessionId;

        const responseChat = await processMessage(message, sessionId);
        console.log(JSON.stringify(responseChat));
        res.json(responseChat);

    } catch (error) {

        console.error(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            error: error
        });
    }

});

// start server
app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});