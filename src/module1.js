const synth = window.speechSynthesis;
const voiceSelect = document.getElementById('voice-select');
$('#voice-select').hide();

let voices = [];

  const getVoices = () => {
    voices = synth.getVoices();
  
    voices.forEach(voice => {
      console.log('in voices');
      const option = document.createElement('option');
      option.textContent = voice.name + '(' + voice.lang + ')';
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  };

  getVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
  }

  
  


  var allQuestions = [{
    image:'images/chocolate.jpg',
    options: ["Chain", "Cheetah", "Chocolate", "Chips"],
    answer: 2
  }, {
    image:'images/cherry.jpg',
    options: ["Chess", "Cheetah", "Chain", "Cherry"],
    answer: 3
  }, {
    image:'images/chair.jpg',
    options: ["Chair", "Chaos", "Charcoal", "Cheese"],
    answer: 0
  }, {
    image:'images/cheetah.jpg',
    options: ["Chair", "Chips", "Cheetah", "Chocolate"],
    answer: 2
   }, {
    image:'images/chess.jpg',
    options: ["Chain","Chaos", "Chess", "Chocolate"],
    answer: 2
   }, {
    image:'images/bench.jpg',
    options: ["Torch","Watch", "Beach", "Bench"],
    answer: 3
   }, {
    image:'images/torch.jpg',
    options: ["Watch","Torch", "Chess", "Beach"],
    answer: 1
   }, {
    image:'images/watch.jpg',
    options: ["Bench","Ostrich", "Torch", "Watch"],
    answer: 0
   }, {
    image:'images/beach.jpg',
    options: ["Bench","Beach", "Watch", "Ostrich"],
    answer: 1
   }, {
    image:'images/ostrich.jpg',
    options: ["Beach","Watch", "Ostrich", "Bench"],
    answer: 2
   },{
    image:'images/ketchup.jpg',
    options: ["Ketchup","Matchstick", "Kitchen", "Lunchbox"],
    answer: 0
   }, {
    image:'images/lunchbox.jpg',
    options: ["Kitchen","Nachos", "Orchid", "Lunchbox"],
    answer: 3
   }, {
    image:'images/nachos.jpg',
    options: ["Ketchup","Nachos", "Kitchen", "Matchstick"],
    answer: 1
   }, {
    image:'images/matchstick.jpg',
    options: ["Lunchbox","Kitchen", "Mtachstick", "Orchid"],
    answer: 2
   }, {
    image:'images/kitchen.jpg',
    options: ["Nachos","Kitchen", "Orchid", "Kitchen"],
    answer: 1
   }, {
    image:'images/statue.jpg',
    options: ["Statue","Future", "Temperature", "Nature"],
    answer: 0
   }, {
    image:'images/picture.jpg',
    options: ["Future","Mature", "Picture", "Furniture"],
    answer: 2
   }, {
    image:'images/future.jpg',
    options: ["Furniture","Future", "Temperature", "Statue"],
    answer: 1
   }, {
    image:'images/furniture.jpg',
    options: ["Future","Nature", "Picture", "Furniture"],
    answer: 3
   }, {
    image:'images/temperature.jpg',
    options: ["Temperature","Statue", "Future", "Mature"],
    answer: 0
   }
];

  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
  
  
  nextQuestion();

  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append("Identify the object from its voice");
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>',{id: 'radio'});
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>',{id:'radio_li'});
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
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
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
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
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                    
                    var restartButton = $('<div class="button"><a href="module1.html">Restart</a></div>')
                    quizSpace.append(restartButton);

                    var exitButton = $('<div class="button"><a href="index.html">Exit</a></div>')
                    quizSpace.append(exitButton);
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }

  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
    $('.speakButton').click(function () 
    {
        speak();
    });


const speak = () => {
  if (voiceSelect.value !== '') {
    // Get speak text
    const speakText = new SpeechSynthesisUtterance(allQuestions[quesCounter].options[allQuestions[quesCounter].answer]);

    // Speak error
    speakText.onerror = e => {
      console.error('Something went wrong');
    };

    // Selected voice
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

    // Loop through voices
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });

    // Set pitch and rate
    speakText.rate = 0.5;
    speakText.pitch = 1.4;
    // Speak
    synth.speak(speakText);
  }
};