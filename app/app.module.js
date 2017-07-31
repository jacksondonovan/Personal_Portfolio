var app = angular.module("app",[])

app.component("gallery",{
  controller: function(){
    const vm = this
    vm.title = 'Select A Project'
    vm.description = "The projects range from simple single-user applications like card games, to applications that help people link up and meet eachother. These diverse projects show the balance between my personal interests and productive/commercial-based projects. This gallery will always be 1% done. I'm always looking for ideas to help strengthen, grow and flex my programming knowledge."
    vm.selectMB = function(){
      vm.title = 'Music Box'
      vm.description = 'A singer/song writer app that uses the Web Audio API. The Music Box was an idea I formed back in college.'
    }
    vm.selectCP = function(){
      vm.title = 'Code Pilot'
      vm.description = 'Teaching has always been rewarding for me. This project, with collaboration of two other developers, helps pair teachers and students who want to learn code. This is an important site for me personally because Ive had so many great mentors help me get through the harsh learning curve of back-end development. I had a lot of fun developing Code Pilot. Ill never forget this as the first time I implemented web sockets into a project. Using a chat app that I developed myself legitimately gave me goose bumps.'
    }
    vm.select46 = function(){
      vm.title = 'The Forty-Six Open'
      vm.description = 'The 46 Open was a project completed during my time at the Galvanize Web Dev Immersive program. Between learning and coding, we all carved out time to see who the best ping pong player was. While everyone claimed to be the best, I sought out to seek who truly was the best. With a few other programmers, we created the 46 Open. This site aimed to pair and rank players. Along with helping the team with the back-end HBS and routing, I also created our rating algorithm (largely based on the ELO rating system used by the World Chess Foundation).'
    }
    vm.selectBJ = function(){
      vm.title = 'Blackjack'
      vm.description = 'The popular card game. In Blackjack, players attempt to make their hand total reach, or get as close to, 21 as possible. If you go over 21, you lose. Similarly, if the dealer goes over 21, the dealer loses. Closest while remaining under 21 wins. This is my first ever website! Ever since I started learning code I knew that I wanted to program a game. Blackjack took a tremendous amount of logic. Luckily logic is my middle name. The cards were generated through a free Deck of Cards API, the rest was built with my most rudimentary understanding of Javascript and DOM manipulation. Play a few hands, see if you can reach the goal total.'
    }
    vm.selectTT = function(){
      vm.title = 'Tic Tac Toe'
      vm.description = 'The oldest game in the book. I plan to use Tic Tac Toe and Rock Paper Scissors as my gateway into data science. Im beyond interested in data science, and while web development is the first skill of being a computer scienist double threat, I cant help but day dream about making my own game that can learn and predict its opponents moves. This site may not may not contain machine learning yet, but be sure to enjoy a few rounds before my AI discourages you from playing it ever again.'
    }
    vm.selectMB = function(){
      vm.title = 'Music Box'
      vm.description = 'A singer/song writer app that uses the Web Audio API'
    }
  },
  templateUrl: '/templates/gallery.hbs'
})
