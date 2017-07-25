function startIntro() {
  $(".content div").typed({
    strings: [
      "Well, hello there..",
      "How's it going?",
      "Or should I say...",
      "How are you doing? 😉",
      "*winks*",
      "You might be wondering why have you been called here and why is this place so crowded?(If it is -_-)",
      "Well, it's Freshers Party thats why! ♥️",
      "Welcome to the Freshers Party! 😇",
      "It's great to have you here with us today.",
      "So without much further a do,",
      "Lets get started 😈",
      "Calling on stage, our host for the evening <strong class='underline'>Akansha</strong>"
    ],
    showCursor: false,
    backDelay: 1000,
    startDelay: 1500,
    contentType: 'html'
  });
}

$('.js-start').on('click', function() {
  startIntro();
});
