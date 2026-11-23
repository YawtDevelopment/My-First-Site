(() => {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const context = canvas.getContext('2d');
  if (!context) return;

  const root = document.documentElement;
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
  const fontSize = 14;
  let matrixColor = '#00ff41';
  let columns = [];
  let canvasWidth = 0;
  let canvasHeight = 0;
  let animationFrame = 0;
  let lastFrameTime = 0;

  function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    canvas.width = Math.floor(canvasWidth * pixelRatio);
    canvas.height = Math.floor(canvasHeight * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    columns = Array.from({ length: Math.ceil(canvasWidth / fontSize) }, () => Math.random() * (canvasHeight / fontSize));
    context.fillStyle = '#030a04';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
  }

  function drawFrame(timestamp) {
    animationFrame = window.requestAnimationFrame(drawFrame);
    if (timestamp - lastFrameTime < 50) return;
    lastFrameTime = timestamp;

    context.fillStyle = 'rgba(3, 10, 4, 0.08)';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = matrixColor;
    context.font = `${fontSize}px monospace`;

    columns.forEach((drop, index) => {
      const character = characters.charAt(Math.floor(Math.random() * characters.length));
      context.fillText(character, index * fontSize, drop * fontSize);
      columns[index] = drop * fontSize > canvasHeight && Math.random() > 0.975
        ? 0
        : drop + 1;
    });
  }

  function startRain() {
    window.cancelAnimationFrame(animationFrame);
    resizeCanvas();
    if (!motionPreference.matches) animationFrame = window.requestAnimationFrame(drawFrame);
  }

  window.addEventListener('resize', startRain, { passive: true });
  motionPreference.addEventListener?.('change', startRain);
  startRain();

  const graduationDate = new Date(2028, 4, 15, 9, 0, 0).getTime();
  const countdownDisplay = document.getElementById('countdown-display');
  const dayValue = document.getElementById('days');
  const hourValue = document.getElementById('hours');
  const minuteValue = document.getElementById('minutes');
  const secondValue = document.getElementById('seconds');
  let timerInterval;

  function updateCountdown() {
    const distance = graduationDate - Date.now();
    if (distance <= 0) {
      window.clearInterval(timerInterval);
      countdownDisplay.textContent = '> GRADUATION_PROTOCOL_COMPLETE // CLASS OF 2028';
      return;
    }

    dayValue.textContent = Math.floor(distance / 86400000).toString();
    hourValue.textContent = String(Math.floor(distance / 3600000) % 24).padStart(2, '0');
    minuteValue.textContent = String(Math.floor(distance / 60000) % 60).padStart(2, '0');
    secondValue.textContent = String(Math.floor(distance / 1000) % 60).padStart(2, '0');
  }

  updateCountdown();
  if (graduationDate > Date.now()) timerInterval = window.setInterval(updateCountdown, 1000);

  const updateButton = document.getElementById('update-btn');
  const statusMessage = document.getElementById('status-message');
  const transmissions = [
    'WAKE UP, NEO... Spring 2028 graduation is approaching.',
    'SIGNAL LOCKED: All degree requirements tracking on schedule.',
    'SYSTEM ACCESS GRANTED: There is no spoon—only finals week.',
    'ENCRYPTED PACKET: Follow the white rabbit to commencement.'
  ];
  let messageIndex = 0;
  updateButton.addEventListener('click', () => {
    statusMessage.textContent = transmissions[messageIndex];
    messageIndex = (messageIndex + 1) % transmissions.length;
  });

  const textInput = document.getElementById('text-input');
  const colorInput = document.getElementById('color-input');
  const previewBox = document.getElementById('preview-box');
  const previewText = document.getElementById('preview-text');
  const defaultPreview = 'Type below or pick a hue to shift the Matrix rain & terminal frequency...';

  textInput.addEventListener('input', (event) => {
    const signal = event.target.value.trim();
    if (signal) {
      previewText.textContent = `> OVERRIDE ACTIVE: ${signal}`;
      previewBox.classList.add('highlighted');
      previewText.style.letterSpacing = '1.5px';
    } else {
      previewText.textContent = defaultPreview;
      previewBox.classList.remove('highlighted');
      previewText.style.letterSpacing = 'normal';
    }
  });

  colorInput.addEventListener('input', (event) => {
    matrixColor = event.target.value;
    root.style.setProperty('--matrix-color', matrixColor);
    previewText.style.textShadow = `0 0 10px ${matrixColor}`;
  });

  const objectiveForm = document.getElementById('objective-form');
  const itemInput = document.getElementById('item-input');
  const itemList = document.getElementById('item-list');
  const objectiveStatus = document.getElementById('objective-status');

  function addDirective(text) {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';

    const label = document.createElement('span');
    label.textContent = `> ${text}`;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = '[ PURGE ]';
    deleteButton.className = 'delete-btn';
    deleteButton.setAttribute('aria-label', `Remove objective: ${text}`);
    deleteButton.addEventListener('click', () => {
      listItem.remove();
      objectiveStatus.textContent = `Objective removed: ${text}`;
    });

    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
  }

  objectiveForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const directive = itemInput.value.trim();
    if (!directive) {
      itemInput.focus();
      return;
    }
    addDirective(directive);
    objectiveStatus.textContent = `Objective added: ${directive}`;
    itemInput.value = '';
    itemInput.focus();
  });

  addDirective('Complete Spring 2028 capstone');
})();
