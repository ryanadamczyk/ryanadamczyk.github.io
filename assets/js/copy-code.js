// Add a flag to global scope to prevent multiple initializations
if (!window.copyCodeInitialized) {
  window.copyCodeInitialized = true;
  
  document.addEventListener('DOMContentLoaded', function() {
    const copyIcon = `<svg width="24" height="24" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M700 50H200C175 50 150 75 150 100V150H650C675 150 700 175 700 200V650H750C775 650 800 625 800 600V100C800 75 775 50 750 50H700Z" fill="currentColor"/>
      <path d="M550 200H50C25 200 0 225 0 250V750C0 775 25 800 50 800H550C575 800 600 775 600 750V250C600 225 575 200 550 200Z" fill="currentColor"/>
    </svg>`;
    const successIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
    </svg>`;

    function copyWithFallback(text) {
      const temp = document.createElement('textarea');
      temp.value = text;
      temp.setAttribute('readonly', '');
      temp.style.position = 'absolute';
      temp.style.left = '-9999px';
      document.body.appendChild(temp);
      temp.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(temp);
      return copied;
    }

    function copyText(text) {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
      }

      return new Promise(function(resolve, reject) {
        if (copyWithFallback(text)) {
          resolve();
          return;
        }

        reject(new Error('Copy not supported'));
      });
    }

    // Function to add copy button
    function addCopyButton(codeBlock) {
      if (!codeBlock.parentElement) {
        return;
      }

      // Only add button if it's directly inside a highlight div
      if (!codeBlock.parentElement.classList.contains('highlight')) {
        return;
      }
      
      // Remove existing button if any
      const existingButton = codeBlock.parentElement.querySelector('.copy-button');
      if (existingButton) {
        existingButton.remove();
      }
      
      // Create button
      const copyButton = document.createElement('button');
      copyButton.type = 'button';
      copyButton.className = 'copy-button';
      copyButton.setAttribute('aria-label', 'Copy code to clipboard');
      copyButton.innerHTML = copyIcon;
      
      // Add button to the parent highlight div
      codeBlock.parentElement.appendChild(copyButton);
      
      // Add click handler
      copyButton.addEventListener('click', function() {
        copyText(codeBlock.textContent)
          .then(function() {
            // Visual feedback
            copyButton.innerHTML = successIcon;
            setTimeout(function() {
              copyButton.innerHTML = copyIcon;
            }, 2000);
          })
          .catch(function() {
            copyButton.textContent = 'X';
          });
      });
    }

    // Add copy buttons to all pre elements
    document.querySelectorAll('pre').forEach(addCopyButton);
  });
}
