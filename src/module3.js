var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammar = '#JSGF V1.0;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;

  var allQuestions = [{
    image:'images/chocolate.jpg',
    answer:"Chocolate"
  }, {
    image:'images/cherry.jpg',
    answer: "Cherry"
  }, {
    image:'images/chair.jpg',
    answer: "Chair"
  }, {
    image:'images/cheetah.jpg',
    answer: "Cheetah"
   }, {
    image:'images/chess.jpg',
    answer: "Chess"
   }, {
    image:'images/bench.jpg',
    answer:"Bench"
   }, {
    image:'images/torch.jpg',
    answer: "Torch"
   }, {
    image:'images/watch.jpg',
    answer: "Watch"
   }, {
    image:'images/beach.jpg',
    answer: "Beach"
   }, {
    image:'images/ostrich.jpg',
    answer: "Ostrich"
   },{
    image:'images/ketchup.jpg',
    answer: "Ketchup"
   }, {
    image:'images/lunchbox.jpg',
    answer: "Lunch box"
   }, {
    image:'images/nachos.jpg',
    answer: "Nachos"
   }, {
    image:'images/matchstick.jpg',
    answer: "Matchstick"
   }, {
    image:'images/kitchen.jpg',
    answer:"Kitchen"
   }, {
    image:'images/statue.jpg',
    answer: "Statue"
   }, {
    image:'images/picture.jpg',
    answer: "Picture"
   }, {
    image:'images/future.jpg',
    answer: "Future"
   }, {
    image:'images/furniture.jpg',
    answer: "Furniture"
   }, {
    image:'images/temperature.jpg',
    answer: "Temperature"
   }
];

  
  var quesCounter = 0;
  var quizSpace = $('#quiz');
  var correctAns = 0;
  
  nextQuestion();

  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>Pronounce the object given in this question :</p>');
        element.append(question);

        var img = new Image();
        img.src = allQuestions[index].image;
        element.append(img);

        var object = $('<h2>' + allQuestions[index].answer + '</h2>');
        element.append(object);

        return element;
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var finish = $('<p>',{id: 'question'});
                    finish.append('Quiz finished');
                    quizSpace.append(finish).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                    $('.speakButton').hide();
                    
                    var restartButton = $('<div class="button"><a href="index.html">Restart</a></div>')
                    quizSpace.append(restartButton);
                }
        });
    }

  $('#next').click(function () 
    {
      quesCounter++;
      nextQuestion();
    });
  
  $('#prev').click(function () 
  {
      quesCounter--;
      nextQuestion();
  });
  $('.speakButton').click(function () 
  {
    recognition.start();
  });

  recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    // var Answer = $('<p>',{class: 'answer'});
    if(command.toLowerCase() === allQuestions[quesCounter].answer.toLowerCase()){
      $("p.answer").text('Correct ans');
      console.log('Correct answer');
    }
    else{
      // Answer.append('Wrong answer!! Please try again');
      $("p.answer").text('Wrong ans');
      console.log('Wrong answer');
    }
  };
  
  recognition.onspeechend = function() {
      recognition.stop();
  };
  
  recognition.onerror = function(event) {
    console.log('Error occurred in recognition: ' + event.error);
  }        
  
  