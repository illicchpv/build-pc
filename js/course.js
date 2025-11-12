// course__wrap
(() => {
  const targetAmount = +getRandomNumber(350000, 800000).toFixed(0);
  const duration = 3_000; // 3 секунды анимация
  const steps = 100;
  const stepDuration = duration / steps;
  const stepAmount = targetAmount / steps;

  const courseWrap = document.querySelector('.course__wrap');
  const progressElement = document.querySelector('.course__progress-element progress');
  const targetAmountElement = document.querySelector('.course__progress-label .course__number');

  targetAmountElement.textContent = targetAmount + ' ₽';

  let currentAmount = 0;
  let currentStep = 0;

  function trackCentralPosition(element, callback) {
    let wasInCenter = false;

    function checkPosition() {
      const rect = element.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const windowRange = window.innerHeight / 4;

      const isInCenter = center > windowRange && center < windowRange * 3;

      if (isInCenter && !wasInCenter) {
        callback('enter', element);
        wasInCenter = true;
      } else if (!isInCenter && wasInCenter) {
        callback('leave', element);
        wasInCenter = false;
      }
    }

    window.addEventListener('scroll', checkPosition, {passive: true});
    window.addEventListener('resize', checkPosition);

    checkPosition();

    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }

  const stopTracking = trackCentralPosition(
    courseWrap,
    (action, element) => {
      console.log('action: ', action);
      if (action === 'enter') {
        animateCounter();
      }
      setTimeout(doStopTracking, 1);
    }
  );

  function doStopTracking() {
    stopTracking();
  }

  function animateCounter() {
    if (currentStep < steps) {
      currentAmount += stepAmount;
      currentStep++;

      progressElement.value = currentAmount;
      targetAmountElement.textContent = `${currentAmount.toFixed(0)} из ${targetAmount.toFixed(0)} ₽`;
      setTimeout(animateCounter, stepDuration);
    } else {
      progressElement.value = targetAmount;
      targetAmountElement.textContent = `${targetAmount.toFixed(0)} ₽`;
    }
  }

  function getRandomNumber(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
})();  