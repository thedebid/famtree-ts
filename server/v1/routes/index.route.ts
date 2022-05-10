const router = require('express').Router();
import familyRoute from './family.route';

router.use('/family', familyRoute);

module.exports = router;
