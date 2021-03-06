var collegeController = require('./controller/app/college'),
    collegesController = require('./controller/app/colleges'),
    getFileUploadController = require('./controller/app/getFileUpload'),
    postFileUploadController = require('./controller/app/postFileUpload'),
    homeController = require('./controller/app/home');

module.exports = function(app, express) {
    var appRouter = express.Router();

    appRouter.get('/', homeController);
    appRouter.get('/college/:id', collegeController);
    appRouter.get('/colleges', collegesController);
    appRouter.route('/upload')
        .get(getFileUploadController)
        .post(postFileUploadController);

    return appRouter;
}
