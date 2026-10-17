// App Logic & Micro-interactions
(function() {
  const taskCards = document.querySelectorAll('.task-card');
  const progressRatio = document.getElementById('progressRatio');
  const progressPercent = document.getElementById('progressPercent');
  const progressBarFill = document.getElementById('progressBarFill');
  const btnCompleteAll = document.getElementById('btnCompleteAll');
  const btnResetList = document.getElementById('btnResetList');
  const toastPill = document.getElementById('toastPill');
  const toastText = document.getElementById('toastText');
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const toggleAudioBtn = document.getElementById('toggleAudioBtn');

  let soundEnabled = true;
  let audioCtx = null;

  // Init Web Audio Synth for gentle magical bedtime chimes
  function playLullabyChime(freq = 523.25, type = 'sine') {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Soft bell attack & dreamy decay
      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.9);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.95);
    } catch(e) {
      // Audio fallback gracefully
    }
  }

  function playCelebrationChords() {
    if (!soundEnabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((note, idx) => {
      setTimeout(() => {
        playLullabyChime(note, 'triangle');
      }, idx * 130);
    });
  }

  // Toggle Sound
  function toggleSound() {
    soundEnabled = !soundEnabled;
    const icon = soundEnabled ? 'volume_up' : 'volume_off';
    audioToggleBtn.innerHTML = `<span class="material-symbols-rounded" style="font-size: 11px;">${icon}</span>`;
    if (toggleAudioBtn) {
      toggleAudioBtn.innerHTML = `
        <span class="material-symbols-rounded" style="font-size: 16px;">${soundEnabled ? 'music_note' : 'music_off'}</span>
        <span>Suoni ninna nanna: ${soundEnabled ? 'ON' : 'OFF'}</span>
      `;
    }
    showToast(soundEnabled ? 'Suoni ninna nanna attivati 🎵' : 'Suoni disattivati 🤫');
  }

  audioToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSound();
  });

  if (toggleAudioBtn) {
    toggleAudioBtn.addEventListener('click', toggleSound);
  }

  // Show Toast Notification
  let toastTimer = null;
  function showToast(msg) {
    toastText.textContent = msg;
    toastPill.classList.add('active');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastPill.classList.remove('active');
    }, 2200);
  }

  // Update progress metrics
  function updateProgress() {
    const total = taskCards.length;
    let checkedCount = 0;

    taskCards.forEach(card => {
      if (card.classList.contains('is-checked')) {
        checkedCount++;
      }
    });

    const percent = Math.round((checkedCount / total) * 100);
    progressRatio.textContent = `${checkedCount} di ${total} completati`;
    progressPercent.textContent = `${percent}%`;
    progressBarFill.style.width = `${percent}%`;

    // If all 5 completed
    if (checkedCount === total) {
      progressBarFill.style.background = 'linear-gradient(90deg, #FFB300 0%, #FFD54F 50%, #FFE680 100%)';
    } else {
      progressBarFill.style.background = 'linear-gradient(90deg, #6074B2 0%, #8C7CBE 45%, #FFE680 100%)';
    }

    return { checkedCount, total };
  }

  // Toggle task card state
  function toggleCard(card) {
    const isCurrentlyChecked = card.classList.contains('is-checked');
    const checkbox = card.querySelector('.custom-checkbox');

    if (isCurrentlyChecked) {
      card.classList.remove('is-checked');
      checkbox.className = 'custom-checkbox unchecked';
      checkbox.innerHTML = '';
      playLullabyChime(392.00); // G4
    } else {
      card.classList.add('is-checked');
      checkbox.className = 'custom-checkbox checked';
      checkbox.innerHTML = '<span class="material-symbols-rounded star-icon">star</span>';
      playLullabyChime(659.25); // E5
      spawnStarBurst(checkbox);
    }

    const { checkedCount, total } = updateProgress();
    if (checkedCount === total) {
      showToast('🌟 Bravissimo! Tutto completato!');
      launchConfetti();
      playCelebrationChords();
    }
  }

  // Click listener for task cards
  taskCards.forEach(card => {
    card.addEventListener('click', () => {
      toggleCard(card);
    });
  });

  // Primary Cloud CTA: "Ho fatto tutto, vado a letto!"
  btnCompleteAll.addEventListener('click', () => {
    taskCards.forEach(card => {
      if (!card.classList.contains('is-checked')) {
        card.classList.add('is-checked');
        const checkbox = card.querySelector('.custom-checkbox');
        checkbox.className = 'custom-checkbox checked';
        checkbox.innerHTML = '<span class="material-symbols-rounded star-icon">star</span>';
      }
    });
    updateProgress();
    showToast('🛌 Tutti i passaggi completati! Buonanotte stellare! ✨');
    launchConfetti();
    playCelebrationChords();
  });

  // Quick complete toolbar button
  const quickCompleteBtn = document.getElementById('quickCompleteBtn');
  if (quickCompleteBtn) {
    quickCompleteBtn.addEventListener('click', () => {
      btnCompleteAll.click();
    });
  }

  // Secondary Action: "Azzera lista"
  btnResetList.addEventListener('click', () => {
    taskCards.forEach(card => {
      card.classList.remove('is-checked');
      const checkbox = card.querySelector('.custom-checkbox');
      checkbox.className = 'custom-checkbox unchecked';
      checkbox.innerHTML = '';
    });
    updateProgress();
    playLullabyChime(329.63); // E4
    showToast('Lista azzerata con successo 🔄');
  });

  // Star Burst Particle Effect when checking a box
  function spawnStarBurst(element) {
    const rect = element.getBoundingClientRect();
    const screenRect = document.getElementById('appScreen').getBoundingClientRect();
    const x = rect.left - screenRect.left + rect.width / 2;
    const y = rect.top - screenRect.top + rect.height / 2;

    for (let i = 0; i < 8; i++) {
      particles.push(new StarParticle(x, y));
    }
  }

  // Canvas Confetti / Star Particles Animation
  function resizeCanvas() {
    const appScreen = document.getElementById('appScreen');
    canvas.width = appScreen.clientWidth;
    canvas.height = appScreen.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  let particles = [];

  class StarParticle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 2;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed - 1.5;
      this.size = Math.random() * 6 + 4;
      this.life = 1;
      this.decay = Math.random() * 0.03 + 0.02;
      const colors = ['#FFD54F', '#FFB300', '#B39DDB', '#90CAF9', '#FFF9C4', '#F48FB1'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.rotation = Math.random() * Math.PI;
      this.rotSpeed = (Math.random() - 0.5) * 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.08; // subtle gravity
      this.rotation += this.rotSpeed;
      this.life -= this.decay;
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.life);
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = this.color;
      // Draw a soft 4-point star
      ctx.beginPath();
      const r = this.size;
      for (let i = 0; i < 4; i++) {
        ctx.lineTo(Math.cos(i * Math.PI / 2) * r, Math.sin(i * Math.PI / 2) * r);
        ctx.lineTo(Math.cos((i * Math.PI / 2) + Math.PI / 4) * (r * 0.4), Math.sin((i * Math.PI / 2) + Math.PI / 4) * (r * 0.4));
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }

  function launchConfetti() {
    const w = canvas.width;
    const h = canvas.height;
    for (let i = 0; i < 45; i++) {
      particles.push(new StarParticle(w * 0.5 + (Math.random() - 0.5) * 100, h * 0.4 + (Math.random() - 0.5) * 100));
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      p.draw(ctx);
      if (p.life <= 0) {
        particles.splice(i, 1);
      }
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

})();
