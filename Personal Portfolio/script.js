// Google Apps Script URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbwuNFm6k78trE94pX1jgC3CmAldZxKBc1BTzK1_9F4Tx92FcGen4IhfrfvOExcgAXddug/exec';

// Wait for the DOM content load all available information
document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms['submit-to-google-sheet']; 
  const msg = document.getElementById('msg'); 

  // Event listener for form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Send form data to Google Sheets using fetch
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        // Display success message
        msg.innerHTML = 'Message sent successfully!';
        setTimeout(() => {
          msg.innerHTML = ''; // Clear message after 5 seconds
        }, 5000);

        form.reset();
      })
      // Error handling 
      .catch((error) => {
        console.error('Error!', error.message);
        msg.innerHTML = 'Message failed to send. Please try again.';
      });
  });
});
