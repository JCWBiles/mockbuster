var express = require('express');
var router = express.Router();

var QuizController = require('../controllers/quiz');

router.get('/', QuizController.Index);
router.get('/level', QuizController.Level);
router.get('/game', QuizController.Easy);
router.get('/mediumgame', QuizController.Medium);
router.get('/difficultgame', QuizController.Difficult);
router.get('/end', QuizController.End);
router.get('/highscores', QuizController.Highscores);

module.exports = router;
