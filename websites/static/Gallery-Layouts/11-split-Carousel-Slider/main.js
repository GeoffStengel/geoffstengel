$(document).ready(function () {
  // Get The Carosels
  const $homeCarouselWrapper = $("div.home-carousel-wrapper");
  //    const $homeCarousels = $('div.home-carousel');
  const slideTransitionDuration = ".8s";
  const slideTransitionDurationMS = parseFloat(slideTransitionDuration) * 1000;

  // Loop through and initialize each carosel
  $homeCarouselWrapper.each(function () {
    // Get the carosel
    const $theCarouselWrapper = $(this);
    const $theCarousel = $theCarouselWrapper.find("div.home-carousel");

    // *** Global Text Rotation *** //
    $theCarouselWrapper.find(".home-carousel-rotate-wrapper").each(function () {
      const $theCarouselRotateWrapper = $(this);
      const $rotationDealy =
        typeof $theCarouselRotateWrapper.data("delay") !== "undefined"
          ? parseInt($theCarouselRotateWrapper.data("delay"))
          : 0;
      setInterval(function () {
        // Set custom delay to stagger
        setTimeout(function () {
          let $currentLebel = $theCarouselRotateWrapper.find(
            ".home-carousel-rotate-item:nth-of-type(1)"
          );
          let $nextLebel = $theCarouselRotateWrapper.find(
            ".home-carousel-rotate-item:nth-of-type(2)"
          );
          $currentLebel.addClass("slideUp");
          $nextLebel.addClass("slideUp");
          // Reset all
          setTimeout(function () {
            $theCarouselRotateWrapper.addClass("disableTransition");
            // Remove the transition class so the columns sit in their
            $theCarouselRotateWrapper.find(".slideUp").removeClass("slideUp");
            // Add current panel to the end;
            $currentLebel.appendTo($theCarouselRotateWrapper);
            // Set timeout and remove the disable transition once it finishes
            setTimeout(function () {
              $theCarouselRotateWrapper.removeClass("disableTransition");
            }, slideTransitionDurationMS);
          }, slideTransitionDurationMS * 2);
        }, $rotationDealy);
      }, slideTransitionDurationMS * 4);
    });

    // *** Background Image Rotation *** //
    setInterval(function () {
      // Set interval to loop transitions
      $theCarousel
        .find(".home-carousel-image")
        .css("transition-duration", slideTransitionDuration);

      // Get all objects to manipulate
      let $currentPannel = $theCarousel.find(
        ".home-carousel-panel:nth-of-type(1)"
      );
      let $nextPannel = $theCarousel.find(
        ".home-carousel-panel:nth-of-type(2)"
      );

      const $currentPannelImg1 = $currentPannel.find(
        ".home-carousel-image:nth-of-type(1)"
      );
      const $currentPannelImg2 = $currentPannel.find(
        ".home-carousel-image:nth-of-type(2)"
      );
      const $currentPannelImg3 = $currentPannel.find(
        ".home-carousel-image:nth-of-type(3)"
      );

      const $nextPannelImg1 = $nextPannel.find(
        ".home-carousel-image:nth-of-type(1)"
      );
      const $nextPannelImg2 = $nextPannel.find(
        ".home-carousel-image:nth-of-type(2)"
      );
      const $nextPannelImg3 = $nextPannel.find(
        ".home-carousel-image:nth-of-type(3)"
      );

      // Get background image to remove "blip" on transtion
      newBackgroundImage = $nextPannelImg1.css("background-image");

      // Reset background images used to remove "blip"
      $currentPannel.css("background-image", "none");
      $nextPannel.css("background-image", "none");

      // Transition column 1
      $currentPannelImg1.addClass("slideUp");
      $nextPannelImg1.addClass("slideUp");

      // Transition column 2 with delay
      setTimeout(function () {
        $currentPannelImg2.addClass("slideUp");
        $nextPannelImg2.addClass("slideUp");
      }, slideTransitionDurationMS * 0.17);

      // Transition column 3 with delay
      setTimeout(function () {
        $currentPannelImg3.addClass("slideUp");
        $nextPannelImg3.addClass("slideUp");
      }, slideTransitionDurationMS * 0.34);

      // Reset all
      setTimeout(function () {
        // Remove transition so when the panels reset they don't "slide down"
        $currentPannel.addClass("disableTransition");
        $nextPannel.addClass("disableTransition");

        // Set new background image to current panel so there is no "blip"
        $currentPannel.css("background-image", newBackgroundImage);
        $nextPannel.css("background-image", newBackgroundImage);

        // Remove the transition class so the columns sit in their
        $theCarousel.find(".slideUp").removeClass("slideUp");

        // Add current panel to the end;
        $currentPannel.appendTo($theCarousel);

        // Remove the class that disables the transition so future columns can slide
        setTimeout(function () {
          $theCarousel
            .find(".disableTransition")
            .removeClass("disableTransition");
        }, slideTransitionDurationMS);
      }, slideTransitionDurationMS * 2);
    }, slideTransitionDurationMS * 4);
  });
});
