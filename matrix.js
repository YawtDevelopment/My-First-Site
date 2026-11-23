(() => {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);

  const context = canvas.getContext('2d');
  if (!context) return;

  const glyphs = 'アカサタナハマヤラワ012345789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const fontSize = 16;
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let columns = [];
  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let lastFrameTime = 0;

  function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    columns = Array.from({ length: Math.ceil(width / fontSize) }, () => Math.random() * (height / fontSize));
    context.fillStyle = '#07120f';
    context.fillRect(0, 0, width, height);
  }

  function drawStaticFrame() {
    context.font = `${fontSize}px monospace`;
    context.fillStyle = 'rgba(7, 18, 15, 0.16)';
    context.fillRect(0, 0, width, height);
    columns.forEach((y, index) => {
      context.fillStyle = '#3bff8f';
      context.fillText(glyphs.charAt(Math.floor(Math.random() * glyphs.length)), index * fontSize, y * fontSize);
    });
  }

  function drawFrame(timestamp) {
    animationFrame = window.requestAnimationFrame(drawFrame);
    if (timestamp - lastFrameTime < 45) return;
    lastFrameTime = timestamp;

    context.fillStyle = 'rgba(7, 18, 15, 0.12)';
    context.fillRect(0, 0, width, height);
    context.font = `${fontSize}px monospace`;

    columns.forEach((y, index) => {
      const glyph = glyphs.charAt(Math.floor(Math.random() * glyphs.length));
      context.fillStyle = Math.random() > 0.97 ? '#d9ffe8' : '#3bff8f';
      context.fillText(glyph, index * fontSize, y * fontSize);
      columns[index] = y * fontSize > height && Math.random() > 0.975
        ? 0
        : y + 0.45 + Math.random() * 0.45;
    });
  }

  function startRain() {
    window.cancelAnimationFrame(animationFrame);
    resizeCanvas();
    if (motionPreference.matches) drawStaticFrame();
    else animationFrame = window.requestAnimationFrame(drawFrame);
  }

  window.addEventListener('resize', startRain, { passive: true });
  motionPreference.addEventListener?.('change', startRain);
  startRain();
})();
