const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
   res.redirect('/Question');
});

app.get('/Question', (req, res) => {
   res.render('Question.ejs', {});
});

app.post('/Answer', (req, res) => {
 var question = req.body.question;
 var answerList = ["Yes.", "No.", "Maybe...", "Absolutely Not!", "Definitely!", "Ask Again Later."];
 var newAnswer = Math.floor(Math.random() * 6);

 /*if(window.localStorage.getItem(question) == null) {
 	var newAnswer = Math.floor(Math.random() * 6);
 	window.localStorage.setItem(question, answerList[newAnswer]);
 }*/
 res.render('Answer.ejs', { answer: [question, answerList[newAnswer]]});
});

app.get('/Answer', (req, res) => {
   res.render('Answer.ejs', {});

});
