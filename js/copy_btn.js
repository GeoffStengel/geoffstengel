

function copyContractAddress() {
    // Get the contract address text
    const addressElement = document.getElementById('contractAddress');
    const address = addressElement.textContent;
  
    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(address).then(() => {
      // Provide feedback to the user
      addressElement.classList.add('copied');
      addressElement.textContent = 'Success!';
      setTimeout(() => {
        addressElement.classList.remove('copied');
        addressElement.textContent = address;
      }, 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
      alert('Failed to copy the address. Please copy it manually.');
    });
}
    
/////////////////////////////////////////////////  


// Function to copy the shortened contract address
function copyShortAddress(icon) {
    const addressElement = icon.previousElementSibling;
    const fullAddress = addressElement.getAttribute('data-full-address');
    const originalText = addressElement.textContent; // Store the original shortened text
  
    // Use the Clipboard API to copy the full address
    navigator.clipboard.writeText(fullAddress).then(() => {
      // Feedback for icon (turns green)
      icon.classList.add('copied');
  
      // Update address text to "Success!"
      addressElement.textContent = 'Success!';
      addressElement.classList.add('copied-text'); // Optional: Add a class for styling
  
      // Reset after 2 seconds
      setTimeout(() => {
        addressElement.classList.remove('copied-text');
        addressElement.textContent = originalText; // Restore the shortened address
        icon.classList.remove('copied'); // Reset icon color
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      alert('Failed to copy the address. Please copy it manually.');
    });
  }
