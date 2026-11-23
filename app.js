// Contact page interactions: a keyboard-operable show/hide control and validation.
const contactInfoToggle = document.querySelector('.contact-toggle');
const contactInfo = document.querySelector('#contact-info');

if (contactInfoToggle && contactInfo) {
  contactInfoToggle.addEventListener('click', () => {
    const isExpanded = contactInfoToggle.getAttribute('aria-expanded') === 'true';
    contactInfoToggle.setAttribute('aria-expanded', String(!isExpanded));
    contactInfo.hidden = isExpanded;
    contactInfoToggle.textContent = isExpanded ? 'Show contact info' : 'Hide contact info';
  });
}

const form = document.querySelector('#contact-form');

if (form) {
  const fields = [
    { input: form.querySelector('#name'), error: form.querySelector('#name-error'), message: 'Please enter your name.' },
    { input: form.querySelector('#email'), error: form.querySelector('#email-error'), message: 'Please enter a valid email address.' },
    { input: form.querySelector('#message'), error: form.querySelector('#message-error'), message: 'Please enter a message.' }
  ];
  const status = form.querySelector('#form-status');

  function validateField(field) {
    const empty = !field.input.value.trim();
    const invalid = empty || !field.input.validity.valid;
    field.input.setAttribute('aria-invalid', String(invalid));
    field.error.textContent = invalid ? field.message : '';
    field.error.hidden = !invalid;
    return !invalid;
  }

  fields.forEach((field) => {
    field.input.addEventListener('input', () => {
      // Do not show an error before submit/blur; once shown, clear it as soon as valid.
      if (field.input.getAttribute('aria-invalid') === 'true') {
        validateField(field);
      }
      if (fields.every((item) => item.input.getAttribute('aria-invalid') !== 'true')) {
        status.textContent = '';
      }
    });
    field.input.addEventListener('blur', () => {
      if (field.input.value || field.input.getAttribute('aria-invalid') === 'true') {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalidFields = fields.filter((field) => !validateField(field));

    if (invalidFields.length > 0) {
      status.textContent = 'Please correct the highlighted fields.';
      invalidFields[0].input.focus();
      return;
    }

    status.textContent = 'Your entries look complete. This static form cannot send messages; please use the email link above.';
  });
}
