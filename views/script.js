document.addEventListener('DOMContentLoaded', () => {
  // Handle Edit buttons in project cards
  const editButtons = document.querySelectorAll(
    '.card .btn-outline-secondary:last-child'
  );

  editButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const cardBody = event.target.closest('.card-body');
      const editableElements = cardBody.querySelectorAll('[contenteditable]');

      // Toggle contenteditable attribute
      editableElements.forEach((el) => {
        const isEditable = el.getAttribute('contenteditable') === 'true';
        el.setAttribute('contenteditable', !isEditable);
      });

      // Update button text
      if (button.textContent.trim() === 'Edit') {
        button.textContent = 'Save';
      } else {
        button.textContent = 'Edit';
      }
    });
  });

  // Handle About Me Edit button
  const aboutMeButton = document.querySelector(
    '#about-me .btn-outline-secondary'
  );
  const aboutMeText = document.querySelector(
    '#about-me .lead.font-weight-normal'
  );

  aboutMeButton.addEventListener('click', () => {
    const isEditable = aboutMeText.getAttribute('contenteditable') === 'true';
    aboutMeText.setAttribute('contenteditable', !isEditable);

    // Update button text
    if (aboutMeButton.textContent.trim() === 'Edit') {
      aboutMeButton.textContent = 'Save';
    } else {
      aboutMeButton.textContent = 'Edit';
    }
  });
});
