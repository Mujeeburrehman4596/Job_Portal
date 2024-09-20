
    function submitForm(event) {
        event.preventDefault(); // Prevent the form from submitting
        alert("Your message has been sent!"); // Show an alert (you can replace this with actual submission logic)
        document.querySelector('form').reset(); // Reset the form
    }
