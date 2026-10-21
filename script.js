// ========================================================
// 海底撈期間限定優惠券 - 互動腳本 (繁體中文版)
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. 倒計時器邏輯 (設定 3 小時 45 分鐘倒數)
  let totalSeconds = 3 * 3600 + 45 * 60 + 28;
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateTimer() {
    if (totalSeconds <= 0) {
      // 倒數完畢重置或維持少量時間
      totalSeconds = 1800;
    }
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = Math.floor(totalSeconds % 60);

    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');

    totalSeconds--;
  }

  setInterval(updateTimer, 1000);
  updateTimer();

  // 2. 剩餘張數配額動態變化
  let stock = 23;
  const totalStock = 200;
  const stockCountEl = document.getElementById('stockCount');
  const stockProgressEl = document.getElementById('stockProgress');

  function updateStockDisplay() {
    if (stockCountEl) stockCountEl.textContent = stock;
    if (stockProgressEl) {
      const percentage = (stock / totalStock) * 100;
      stockProgressEl.style.width = `${Math.max(10, percentage)}%`;
    }
  }

  // 偶爾減少一張，維持緊張熱門感，最低保留 3 張
  function simulateStockReduction() {
    if (stock > 3) {
      stock--;
      updateStockDisplay();
    }
    const nextInterval = Math.floor(Math.random() * 12000) + 8000;
    setTimeout(simulateStockReduction, nextInterval);
  }

  setTimeout(simulateStockReduction, 7000);

  // 3. 實時領取動態 Toast 提示輪播
  const users = [
    { name: '王*婷', time: '10秒前' },
    { name: '陳*華', time: '剛剛' },
    { name: '李*豪', time: '25秒前' },
    { name: '張*翔', time: '40秒前' },
    { name: '林*妤', time: '剛剛' },
    { name: '黃*廷', time: '1分鐘前' },
    { name: '蔡*倫', time: '剛剛' },
    { name: '吳*萱', time: '15秒前' }
  ];

  const toastEl = document.getElementById('liveToast');
  const toastUserEl = document.getElementById('toastUser');

  function showToast() {
    if (!toastEl || !toastUserEl) return;
    const randomUser = users[Math.floor(Math.random() * users.length)];
    toastUserEl.textContent = `${randomUser.name} ${randomUser.time}已領取`;

    toastEl.classList.add('show');

    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3800);

    const nextDelay = Math.floor(Math.random() * 8000) + 6000;
    setTimeout(showToast, nextDelay);
  }

  setTimeout(showToast, 3500);

  // 4. 按鈕點擊交互反饋
  const claimBtn = document.getElementById('claimBtn');
  if (claimBtn) {
    claimBtn.addEventListener('click', (e) => {
      // 點擊反饋動畫效果
      claimBtn.style.transform = 'scale(0.97)';
      setTimeout(() => {
        claimBtn.style.transform = '';
      }, 150);
    });
  }
});
