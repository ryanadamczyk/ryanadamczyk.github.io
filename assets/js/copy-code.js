// Add a flag to global scope to prevent multiple initializations
if (window.copyCodeInitialized) {
  console.log('Copy code already initialized, skipping');
} else {
  window.copyCodeInitialized = true;
  
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');
    
    // Function to add copy button
    function addCopyButton(codeBlock) {
      // Only add button if it's directly inside a highlight div
      if (!codeBlock.parentElement.classList.contains('highlight')) {
        return;
      }
      
      // Remove existing button if any
      const existingButton = codeBlock.parentElement.querySelector('.copy-button');
      if (existingButton) {
        existingButton.remove();
      }
      
      console.log('Processing code block');
      // Create button
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M700 50H200C175 50 150 75 150 100V150H650C675 150 700 175 700 200V650H750C775 650 800 625 800 600V100C800 75 775 50 750 50H700Z" fill="currentColor"/>
        <path d="M550 200H50C25 200 0 225 0 250V750C0 775 25 800 50 800H550C575 800 600 775 600 750V250C600 225 575 200 550 200Z" fill="currentColor"/>
      </svg>`;
      
      // Add button to the parent highlight div
      codeBlock.parentElement.appendChild(copyButton);
      console.log('Added button to code block');
      
      // Add click handler
      copyButton.addEventListener('click', function() {
        const textToCopy = codeBlock.textContent;
        
        // Copy to clipboard
        navigator.clipboard.writeText(textToCopy).then(function() {
          // Visual feedback
          copyButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
          </svg>`;
          setTimeout(function() {
            copyButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M700 50H200C175 50 150 75 150 100V150H650C675 150 700 175 700 200V650H750C775 650 800 625 800 600V100C800 75 775 50 750 50H700Z" fill="currentColor"/>
              <path d="M550 200H50C25 200 0 225 0 250V750C0 775 25 800 50 800H550C575 800 600 775 600 750V250C600 225 575 200 550 200Z" fill="currentColor"/>
            </svg>`;
          }, 2000);
        }).catch(function(error) {
          console.error('Copy failed:', error);
          copyButton.textContent = '❌';
        });
      });
    }

    // Add copy buttons to all pre elements
    const codeBlocks = document.querySelectorAll('pre');
    console.log('Found code blocks:', codeBlocks.length);
    codeBlocks.forEach(addCopyButton);

    // Watch for any new code blocks being added
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeName === 'PRE') {
            addCopyButton(node);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
} 