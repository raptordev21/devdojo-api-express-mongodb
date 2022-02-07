const express = require('express');
const {
    getBootcamp,
    getBootcamps,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampsInRadius,
    bootcampPhotoUpload
} = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp');

// Include other resource routers
// const courseRouter = require('./courses');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');

// Re-route into other resourse routers
// router.use('/:bootcampId/courses', courseRouter);
router.use('/:bootcampId/courses', require('./courses'));

router
    .route('/')
    .get(advancedResults(Bootcamp, 'courses'), getBootcamps)
    .post(createBootcamp);

router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);

router
    .route('/:id/photo')
    .put(bootcampPhotoUpload)

router
    .route('/radius/:zipcode/:distance')
    .get(getBootcampsInRadius);

module.exports = router;