<!-- Include Shepherd CSS and JS in your head -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shepherd.js/dist/css/shepherd.css" />
<script src="https://cdn.jsdelivr.net/npm/shepherd.js/dist/js/shepherd.min.js"></script>

<script>
  // Function to create a new Shepherd tour instance
  function createTour() {
    return new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true
      },
      // Enables the cancel (close) icon in the top-right corner
      cancelIcon: {
        enabled: true
      }
    });
  }

  // Function to add steps to the tour
  function addTourSteps(tour) {
    tour.addStep({
      id: 'intro',
      text: `
        <h3>Welcome to GovPreneurs Guided Tour!</h3>
        <p>This guided tour will help you discover the key features and functionalities of GovPreneurs, ensuring you have all the information you need to get started.</p>
      `,
      attachTo: { element: '.my-element', on: 'bottom' },
      buttons: [
        { text: 'Next', action: tour.next }
      ]
    });
  }

  // Initialize and start the tour on page load
  window.onload = function() {
    let tour = createTour();
    addTourSteps(tour);
    tour.start();

    // Attach event listeners to all elements with the class "startguide"
    document.querySelectorAll('.startguide').forEach(function(button) {
      button.addEventListener('click', function() {
        // Re-create the tour instance to restart the guide fully
        tour = createTour();
        addTourSteps(tour);
        tour.start();
      });
    });
  };
</script>
