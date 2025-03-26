<script>
  // Create a new Shepherd tour instance with default options and cancel icon enabled
  function createTour() {
    return new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true
      },
      cancelIcon: { enabled: true }
    });
  }

  // Add the intro step to the tour; with no attachTo property it appears in the center
  function addTourSteps(tour) {
    tour.addStep({
      id: 'intro',
      text: `
        <h3>Welcome to GovPreneurs Guided Tour!</h3>
        <p>This guided tour will help you discover the key features and functionalities of GovPreneurs, ensuring you have all the information you need to get started.</p>
      `,
      buttons: [{ text: 'Next', action: tour.next }]
    });
  }

  // Initialize and start the tour on page load
  window.onload = function() {
    let tour = createTour();
    addTourSteps(tour);
    tour.start();

    // Restart the tour when any button with the class "startguide" is clicked
    document.querySelectorAll('.startguide').forEach(function(button) {
      button.addEventListener('click', function() {
        tour = createTour();
        addTourSteps(tour);
        tour.start();
      });
    });
  };
</script>
