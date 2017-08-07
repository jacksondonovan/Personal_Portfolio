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
                   $scope.description = "These projects range from simple single-user applications like card games, to applications that help people link up and meet eachother. These diverse projects show the balance between my personal interests and productive/commercial-based projects. This gallery will always be 1% done. I'm always looking for ideas to help strengthen, grow and flex my programming knowledge. Click on a project's icon to learn more about its stack and usage."
                   $scope.stack = 'AngularJS, Bootstrap, CSS'
                   $scope.link = 'https://jackson-donovan-portfolio.herokuapp.com'
                   $scope.selectMB = function(){
                     $scope.title = 'Music Box'
                     $scope.description = "Music Box is a singer/song writer application using the Web Audio API. Users input lyrics, and the music box will supply the melody. The ultimate goal for Music Box is to learn the preferences of users and supply them with personal albums and songs. Music is an art, but with EDM and bass drops rising, after a quick look at sales figures or Youtube views, you can start to make a science of it. With Music Box, we will write and share interesting and fun songs with each other."
                     $scope.stack = 'AngularJS, Express, HBS, SQL'
                     $scope.link = 'https://the-music-box.herokuapp.com'
                   }
                   $scope.selectCP = function(){
                     $scope.title = 'Code Pilot'
                     $scope.description = "Teaching has always been rewarding for me. This project, built in collaboration with two other developers, helps pair students, who want to learn code, with teachers, who want to be helpful. This site means a lot for me personally because I've had so many great mentors help me get through the harsh learning curve of back-end development. Through Code Pilots pair programming features, team work makes learning curves less daunting and rewards within reach."
                     $scope.stack = 'Web Sockets, HBS, jQuery Transitions, Express, SQL'
                     $scope.link = 'https://code-pilot.herokuapp.com'
                   }
                   $scope.select46 = function(){
                     $scope.title = 'The Forty-Six Open'
                     $scope.description = "The 46 Open was a project completed during my time at the Galvanize Web Dev Immersive program. Between learning and coding, we all made time to see who the best ping pong player was. While everyone claimed to be the best, I sought out to seek who truly was. So a team and I created the 46 Open. This site pairs and ranks Galvanize Ping Pong players. Along with helping the team with handle bars and routing, I also created our rating algorithm (Based on Chess' ELO rating system)."
                     $scope.stack = 'Handle Bars, Express, SQL'
                     $scope.link = 'https://infinite-shelf-75058.herokuapp.com'
                   }
                   $scope.selectBJ = function(){
                     $scope.title = 'Blackjack'
                     $scope.description = 'This is my first ever website! Ever since I started learning code I knew that I wanted to program a game. In this game, both the dealer and the player attempt to score as close to 21 without going over. Blackjack took a tremendous amount of logic. The cards were generated through a free Deck of Cards API, the rest was built with my most rudimentary understanding of Javascript and DOM manipulation. Play a few hands, see if you can reach the goal total.'
                     $scope.stack = 'HTML, CSS, Javascript'
                     $scope.link = 'https://blackjack-game-128c2.firebaseapp.com'
                   }
                   $scope.selectTT = function(){
                     $scope.title = 'Tic Tac Toe'
                     $scope.description = 'The oldest game in the book. I plan to use Tic Tac Toe and Rock Paper Scissors as my gateway into data science. Im beyond interested in data science, and while web development is the first skill of being a computer scienist double threat, I cant help but day dream about making my own game that can learn and predict its opponents moves. This site may not may not contain machine learning yet, but be sure to enjoy a few rounds before my AI discourages you from playing it ever again.'
                     $scope.stack = 'AngularJS, Express, Node, HBS, SQL'
                     $scope.link = 'https://tic-tac-toe-byjd.herokuapp.com'
                   }
                   $scope.selectYOM = function(){
                     $scope.title = 'Yacht Owners Meet'
                     $scope.description = "Music Box is a singer/song writer application using the Web Audio API. Users input lyrics, and the music box will supply the melody. The ultimate goal for Music Box is to learn the preferences of users and supply them with personal albums and songs. Music is an art, but with EDM and bass drops rising, after a quick look at sales figures or Youtube views, you can start to make a science of it. With Music Box, we will write and share interesting and fun songs with each other."
                     $scope.stack = 'AngularJS, Express, Node, HBS, SQL'
                     $scope.link = "https://yacht-owners-meet.herokuapp.com"
                   }
               })
