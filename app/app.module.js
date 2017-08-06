var app = angular.module("app",["ngRoute"])
                 .config(function($routeProvider){
                   $routeProvider
                     .when('/gallery',{
                       templateUrl: '/templates/gallery.hbs',
                       controller: 'galcontroller'
                     })
                     .when('/interests',{
                       templateUrl: '/templates/interests.hbs',
                       controller: 'galcontroller'
                     })
                     .when('/contact',{
                       templateUrl: '/templates/contact.hbs',
                       controller: 'galcontroller'
                     })
                     .otherwise({
                       redirectTo: '/gallery'
                     })
                 })
                 .controller('galcontroller', function($scope){
                   $scope.title = 'Select A Project'
                   $scope.description = "The projects range from simple single-user applications like card games, to applications that help people link up and meet eachother. These diverse projects show the balance between my personal interests and productive/commercial-based projects. This gallery will always be 1% done. I'm always looking for ideas to help strengthen, grow and flex my programming knowledge."
                   $scope.stack = 'AngularJS, Bootstrap, CSS'
                   $scope.link = 'https://jackson-donovan-portfolio.herokuapp.com/'
                   $scope.selectMB = function(){
                     $scope.title = 'Music Box'
                     $scope.description = 'A singer/song writer app that uses the Web Audio API. The Music Box is a project I will always consider 1% done. The idea of applying four chords over a set number of syllables has enticed me ever since I taught myself four chord songs on the piano. The Music Box makes music creation easy for both casual music lovers and aspiring musicians. Music is an art, but with with the advent of three chord, four chord and bass drop songs, its becoming much more of a predictable science. Im passionate about this idea and cant wait to create and shape "personal songs" and "personal albums".'
                     $scope.stack = 'AngularJS, Express, HBS, SQL'
                     $scope.link = 'https://the-music-box.herokuapp.com'
                   }
                   $scope.selectCP = function(){
                     $scope.title = 'Code Pilot'
                     $scope.description = 'Teaching has always been rewarding for me. This project, with collaboration of two other developers, helps pair teachers and students who want to learn code. This is an important site for me personally because Ive had so many great mentors help me get through the harsh learning curve of back-end development. I had a lot of fun developing Code Pilot. Ill never forget this as the first time I implemented web sockets into a project. Using a chat app that I developed myself legitimately gave me goose bumps.'
                     $scope.stack = 'Web Sockets, HBS, jQuery Transitions, Express, SQL'
                     $scope.link = 'https://code-pilot.herokuapp.com'
                   }
                   $scope.select46 = function(){
                     $scope.title = 'The Forty-Six Open'
                     $scope.description = 'The 46 Open was a project completed during my time at the Galvanize Web Dev Immersive program. Between learning and coding, we all carved out time to see who the best ping pong player was. While everyone claimed to be the best, I sought out to seek who truly was the best. With a few other programmers, we created the 46 Open. This site aimed to pair and rank players. Along with helping the team with the back-end HBS and routing, I also created our rating algorithm (largely based on the ELO rating system used by the World Chess Foundation).'
                     $scope.stack = 'Handle Bars, Express, SQL'
                     $scope.link = 'https://infinite-shelf-75058.herokuapp.com/'
                   }
                   $scope.selectBJ = function(){
                     $scope.title = 'Blackjack'
                     $scope.description = 'In Blackjack, players attempt to make their hand total reach, or get as close to, 21 as possible. If you go over 21, you lose. Similarly, if the dealer goes over 21, the dealer loses. Closest while remaining under 21 wins. This is my first ever website! Ever since I started learning code I knew that I wanted to program a game. Blackjack took a tremendous amount of logic. Luckily logic is my middle name. The cards were generated through a free Deck of Cards API, the rest was built with my most rudimentary understanding of Javascript and DOM manipulation. Play a few hands, see if you can reach the goal total.'
                     $scope.stack = 'HTML, CSS, Javascript'
                     $scope.link = 'https://blackjack-game-128c2.firebaseapp.com/'
                   }
                   $scope.selectTT = function(){
                     $scope.title = 'Tic Tac Toe'
                     $scope.description = 'The oldest game in the book. I plan to use Tic Tac Toe and Rock Paper Scissors as my gateway into data science. Im beyond interested in data science, and while web development is the first skill of being a computer scienist double threat, I cant help but day dream about making my own game that can learn and predict its opponents moves. This site may not may not contain machine learning yet, but be sure to enjoy a few rounds before my AI discourages you from playing it ever again.'
                     $scope.stack = 'AngularJS, Express, Node, HBS, SQL'
                     $scope.link = 'https://tic-tac-toe-byjd.herokuapp.com/'
                   }
                   $scope.selectYOM = function(){
                     $scope.title = 'Yacht Owners Meet'
                     $scope.description = 'A singer/song writer app that uses the Web Audio API'
                     $scope.stack = 'AngularJS, Express, Node, HBS, SQL'
                     $scope.link = 'the-music-box.herokuapp.com'
                   }
               })
