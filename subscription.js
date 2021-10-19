window.onload = function () {
  const d = document;

  const form = d.querySelector('.contact-form');
  const inputs = d.querySelectorAll('.contact-form [required]');
  console.log(inputs);

  inputs.forEach((input) => {
    const span = d.createElement('span');
    span.id = input.name;
    span.textContent = input.title;
    span.classList.add('contact-form-error', 'none');
    input.insertAdjacentElement('afterend', span);
  });

  d.addEventListener('keyup', (e) => {
    if (e.target.matches('.contact-form [required]')) {
      let input = e.target;
      pattern = input.pattern;
      console.log(input, pattern);
      if (pattern && input.value !== '') {
        let regex = new RegExp(pattern);
        return !regex.exec(input.value)
          ? d.getElementById(input.name).classList.add('is-active')
          : d.getElementById(input.name).classList.remove('is-active');
      }
      if (!pattern) {
        return input.value === ''
          ? d.getElementById(input.name).classList.add('is-active')
          : d.getElementById(input.name).classList.remove('is-active');
      }
    }
  });

  // form.addEventListener('submit', (e) => {
  //   const formCorrect = document.getElementById('mssgOkForm');
  //   const formWrong = document.getElementById('mssgErrForm');
  //   e.preventDefault();
  //   if (campos.mail && campos.name && campos.pass) {
  //     const nameValue = document.getElementById('name').value;
  //     const mailRegValue = document.getElementById('email').value;
  //     const passRegValue = document.getElementById('pass').value;
  //     var url = 'http://localhost:4000/register';
  //     var data = { nameValue, mailRegValue, passRegValue };
  //     formCorrect.classList.add('mssgOkForm-active');
  //     formCorrect.style.display = 'flex';
  //     showValues();
  //     fetch(url, {
  //       method: 'POST', // or 'PUT'
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data), // data can be `string` or {object}!
  //     })
  //       .then((res) => res.json())
  //       .then((json) => console.log(json));
  //     setTimeout(() => {
  //       document
  //         .getElementById('mssgOkForm')
  //         .classList.remove('mssgOkForm-active');
  //       formCorrect.style.display = 'none';
  //       form.reset();
  //     }, 5000);
  //   } else {
  //     formWrong.classList.add('mssgErrForm-active');
  //     formWrong.style.display = 'flex';
  //   }
  // });

  // function showValues() {
  //   document.getElementById('result1').innerHTML =
  //     document.getElementById('email').value;
  //   document.getElementById('result2').innerHTML =
  //     document.getElementById('name').value;
  // }

  // function filinfDiv() {
  //   if (nameInput.value.length !== 0) {
  //     bonusDiv.innerHTML = 'Welcome' + nameInput.value;
  //   }
  // }
  // nameInput.addEventListener('keydown', fillingDiv);
};
