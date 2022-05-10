const router = require('express').Router();
const familyController = require('./../controllers/family.controller');

router.get('/', familyController.getAllFamily);

router.get('/:workoutId', familyController.getOneFamily);

router.post('/', familyController.createNewFamily);

router.patch('/:workoutId', familyController.updateOneFamily);

router.delete('/:workoutId', familyController.deleteOneFamily);

export = router;
