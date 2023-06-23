$(document).ready(function() {
    var textElements = $("h1");
    var delay = 50; 

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

    animateText(0); // Start the animation with the first text element
});
