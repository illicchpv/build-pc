(() => {
  const timerBlock = document.querySelector('.main-display__timer');
  const daysBlock = document.querySelector('.timer__days');
  const hoursBlock = document.querySelector('.timer__hours');
  const minutesBlock = document.querySelector('.timer__minutes');
  const secondsBlock = document.querySelector('.timer__seconds');

  let timerId;

  const ddl = timerBlock.dataset.ddl;
  const dateDeadline = new Date(ddl);
  console.log('dateDeadline: ', dateDeadline);

  // timer__item
  //    timer__seconds
  //    timer__text
  // 

  function f2(n) {if (n < 0) return '00'; else return String(n).padStart(2, '0');}
  const numWords = (value, words) => {
    const n = Math.abs(value) % 100;
    const lastNum = n % 10;
    if (n > 10 && n < 20) return words[2];
    if (lastNum > 1 && lastNum < 5) return words[1];
    if (lastNum === 1) return words[0];
    return words[2];
  };
  const changeBlock = (block, value, words) => {
    const newVal = f2(value);
    if (block.textContent !== newVal) {
      block.nextElementSibling.textContent = numWords(value, words);
      // block.closest('.timer__item').querySelector('.timer__text').textContent = numWords(value, words);
    }
    block.textContent = newVal;
  };

  const updateTimer = () => {
    const date = new Date();
    const timeRemaining = (dateDeadline - date) / 1000;

    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor(timeRemaining / 60 / 60) % 24;
    const minutes = Math.floor(timeRemaining / 60) % 60;
    const seconds = Math.floor(timeRemaining) % 60;

    changeBlock(daysBlock, days, ['день', 'дня', 'дней']);
    changeBlock(hoursBlock, hours, ['час', 'часа', 'часов']);
    changeBlock(minutesBlock, minutes, ['минута', 'минуты', 'минут']);
    changeBlock(secondsBlock, seconds, ['секунда', 'секунды', 'секунд']);

    if (timeRemaining <= 0) stopTimer();
  };

  function stopTimer() {
    clearInterval(timerId);
    timerId = null;
    timerBlock.classList.add('timer--end');
  }

  updateTimer();
  timerId = setInterval(updateTimer, 500);
})();


