//"courses" text
$(document).ready(function(){
  $(".coursebtn").mouseover(function(){
    $(".coursebtn").css("background-color", "white");
    $(".linkToText2").css("color", "black")
  });
  $(".coursebtn").mouseout(function(){
      $(".coursebtn").css("background-color", "transparent");
      $(".linkToText2").css("color", "white")
    });

    //alert unavailibility
    $(".learn").click(function() {
      alert("Sorry, temporarily unavailable");
    });
});



// typing text animation
$(document).ready(function() {
var textElements = $(".h11");
var delay = 80;

function animateText(index) {
    if (index < textElements.length) {
        var textElement = $(textElements[index]);
        var text = textElement.text();

        textElement.empty().css("visibility", "visible");

        var currentIndex = 0;
        var interval = setInterval(function() {
            textElement.append(text[currentIndex]);
            currentIndex++;
            if (currentIndex >= text.length) {
                clearInterval(interval);
                animateText(index + 1); // Animate the next text
            }
        }, delay);
    }
}

animateText(0); 
});

// typing learners count
$(document).ready(function() {
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function startTypingAnimation() {
    var textElement = $("#typing-effect h3");
    var text = textElement.text();
    var originalText = text;
    textElement.empty();

    var i = 0;
    var speed = 50;
    function typeWriter() {
      if (i < originalText.length) {
        textElement.append(originalText.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      } else {
        i = 0;
      }
    }

    typeWriter();
  }

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        startTypingAnimation();
      }
    });
  });

  var targetElement = document.getElementById("typing-effect");
  observer.observe(targetElement);
});

$(document).ready(function() {
  $('.front1').on('mouseover', function() {
    $(this).find('.description1').addClass('show');
  });

  $('.course').on('mouseout', function() {
    $(this).find('.description1').removeClass('show');
  });
});


// flip
$("#card").flip({
  axis: 'y',
  trigger: 'hover'
});

$("#card1").flip({
  axis: 'y',
  trigger: 'hover'
});

$("#card2").flip({
  axis: 'y',
  trigger: 'hover'
});

$("#card3").flip({
  axis: 'y',
  trigger: 'hover'
});

$("#card4").flip({
  axis: 'y',
  trigger: 'hover'
});

$("#card5").flip({
  axis: 'y',
  trigger: 'hover'
});

$("#card6").flip({
  axis: 'y',
  trigger: 'hover'
});

$("#card7").flip({
  axis: 'y',
  trigger: 'hover'
});

$("#card8").flip({
  axis: 'y',
  trigger: 'hover'
});

$("#card9").flip({
  axis: 'y',
  trigger: 'hover'
});

$("#card10").flip({
  axis: 'y',
  trigger: 'hover'
});

$("#card11").flip({
  axis: 'y',
  trigger: 'hover'
});

