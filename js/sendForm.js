(() => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
  const form = document.querySelector('.modal');
  // const text = form.querySelector('.modal__input[type="text"]');
  // const tel = form.querySelector('.modal__input[type="tel"]');
  // const email = form.querySelector('.modal__input[type="email"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const sendObject = Object.fromEntries(formData);
    console.log('sendObject:', sendObject);

    // const sendObject = {
    //   name: text.value,
    //   phone: tel.value,
    //   email: email.value,
    // };
    // console.log(sendObject);

    // ---------------------------------------

    // console.log('fetch get');
    // fetch(`${BASE_URL}/4`,
    //   {method: 'GET', accept: 'application/json', 'Content-type': 'application/json; charset=UTF-8'}
    // )
    //   .then((response) => {
    //     console.log(response);
    //     if (!response.ok)
    //       throw new Error(`Error ${response.status} -- ${response.statusText || 'Not found'}`);
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.warn(error.message);
    //   })
    //   .finally(() => {
    //     console.log('finally');
    //   });

    // ---------------------------------------

    console.log('fetch post');
    fetch(`${BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify(sendObject),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(`Error ${response.status} -- ${response.statusText || 'Not found'}`);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        alert('✅ Заявка отправлена');
      })
      .catch((error) => {
        console.warn(error.message);
        alert('❌ Заявка не отправлена \r\n\r\n' + error.message);
      })
      .finally(() => {
        console.log('finally');
        form.reset();
      });
  });
})();