function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
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
    options: ["Thor", "Thunder", "Breath", "Thing"],
    answer: 0
  }, {
    image:'images/cherry.jpg',
    options: ["Thor", "Threat", "Thunder", "Death"],
    answer: 2
  }, {
    image:'images/chair.jpg',
    options: ["Throat", "Throw", "Growth", "Thief"],
    answer: 1
  }, {
    image:'images/cheetah.jpg',
    options: ["Tooth", "Thirst", "Thing", "Cloth"],
    answer: 3
   }, {
    image:'images/chess.jpg',
    options: ["Threat","Myth", "Thor", "Mouth"],
    answer: 3
   }, {
    image:'images/bench.jpg',
    options: ["North","Thing", "Month", "Threat"],
    answer: 0
   }, {
    image:'images/torch.jpg',
    options: ["Throw","Threapy", "Thread", "Thanks"],
    answer: 2
   }, {
    image:'images/watch.jpg',
    options: ["Month","North", "Thing", "Mouth"],
    answer: 0
   }, {
    image:'images/beach.jpg',
    options: ["Throat","Breath", "Earth", "Teeth"],
    answer: 2
   }, {
    image:'images/ostrich.jpg',
    options: ["Thirst","Thanks", "Throw", "Thin"],
    answer: 1
   },{
    image:'images/ketchup.jpg',
    options: ["Throat","Thank", "Think", "Thin"],
    answer: 3
   }, {
    image:'images/lunchbox.jpg',
    options: ["Throat","Thank", "Think", "Thin"],
    answer: 2
   }, {
    image:'images/nachos.jpg',
    options: ["Plinth","Tenth", "Breath", "Death"],
    answer: 3
   }, {
    image:'images/matchstick.jpg',
    options: ["Lunchbox","Tooth", "Death", "Tenth"],
    answer: 1
   }, {
    image:'images/kitchen.jpg',
    options: ["Thumb","Month", "Think", "Throw"],
    answer: 0 }
  
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