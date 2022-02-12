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
const { protect, authorize } = require('../middleware/auth');

// Re-route into other resourse routers
// router.use('/:bootcampId/courses', courseRouter);
router.use('/:bootcampId/courses', require('./courses'));

router
    .route('/')
    .get(advancedResults(Bootcamp, 'courses'), getBootcamps)
    .post(protect, createBootcamp);

router
    .route('/:id')
    .get(getBootcamp)
    .put(protect, updateBootcamp)
    .delete(protect, deleteBootcamp);

router
    .route('/:id/photo')
    .put(protect, bootcampPhotoUpload)

router
    .route('/radius/:zipcode/:distance')
    .get(getBootcampsInRadius);

module.exports = router;