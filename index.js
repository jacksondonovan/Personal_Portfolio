const express = require('express')
const app = express()
const port = process.env.PORT || 2000
const path = require('path')

const bodyParser = require('body-parser')

app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
  res.render('index',{msg:"Welcome to Kathy's baskets!"})
})

app.listen(port,(req,res)=>{
  console.log('listening on port ' + port);
})
//'The oldest game in the book. I plan to use Tic Tac Toe and Rock Paper Scissors as my gateway into data science. Im beyond interested in data science, and while web development is the first skill of being a computer scienist double threat, I cant help but day dream about making my own game that can learn and predict its opponents moves. This site may not may not contain machine learning yet, but be sure to enjoy a few rounds before my AI discourages you from playing it ever again.'

//48- chars or less

 'This is my first ever website! Ever since I started learning code I knew that I wanted to program a game. In this game, both the dealer and the player attempt to score as close to 21 without going over. Blackjack took a tremendous amount of logic. The cards were generated through a free Deck of Cards API, the rest was built with my most rudimentary understanding of Javascript and DOM manipulation. Play a few hands, see if you can reach the goal total.'
