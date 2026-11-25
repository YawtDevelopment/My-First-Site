(() => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = [
    { input: document.getElementById('name'), error: document.getElementById('name-error'), message: 'Please enter your full name.' },
    { input: document.getElementById('email'), error: document.getElementById('email-error'), message: 'Please enter a valid email address.' },
    { input: document.getElementById('subject'), error: document.getElementById('subject-error'), message: 'Please enter a subject or topic.' },
    { input: document.getElementById('message'), error: document.getElementById('message-error'), message: 'Please enter a message.' }
  ];

  function validateField(field) {
    const invalid = !field.input.value.trim() || !field.input.validity.valid;
    if (invalid) {
      field.input.setAttribute('aria-invalid', 'true');
      field.error.textContent = field.message;
      field.error.hidden = false;
    } else {
      field.input.removeAttribute('aria-invalid');
      field.error.textContent = '';
      field.error.hidden = true;
    }
    return !invalid;
  }

  fields.forEach((field) => {
    field.input.addEventListener('input', () => {
      if (field.input.value || field.input.getAttribute('aria-invalid') === 'true') validateField(field);
    });
    field.input.addEventListener('blur', () => {
      if (field.input.value || field.input.getAttribute('aria-invalid') === 'true') validateField(field);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalidFields = fields.filter((field) => !validateField(field));
    const status = document.getElementById('form-status');
    if (invalidFields.length) {
      status.textContent = 'Please correct the highlighted fields.';
      invalidFields[0].input.focus();
    } else {
      status.textContent = 'Your entries look complete. This static form cannot send messages; please use the email link above.';
    }
  });
})();
