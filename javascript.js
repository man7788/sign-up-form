const ps = document.querySelector('input[name="password"]');
const conps = document.querySelector('input[name="firm-password"]');
const button = document.querySelector('button[type="submit"]');
const match = document.querySelector('.match');

function passwordErrorStyle() {
  match.style.color = 'crimson';
  match.style.fontSize = '0.45rem';
  ps.style.border = '1px solid crimson';
  conps.style.border = '1px solid crimson';
};

function passwordEmpty() {
  match.textContent = '*Passwords cannot be empty';
  passwordErrorStyle();
  removeFocusOut();
};

function passwordNotMatch() {
  match.textContent = '*Passwords do not match';
  passwordErrorStyle();
  removeFocusOut();
  removeFocus();
};

function passwordMatch() {
  match.textContent = '';
  ps.style.border = '1px solid #E5E7EB';
  conps.style.border = '1px solid #E5E7EB';
  addFocusOut();
  addFocus();
};

function focus() {
  this.style.border = '1px solid dodgerblue';
};

function removeFocus() {
  ps.removeEventListener('focus', focus);
  conps.removeEventListener('focus', focus);
};

function removeFocusOut() {
  ps.removeEventListener('focusout', passwordMatch);
  conps.removeEventListener('focusout', passwordMatch);
};

function addFocus() {
  ps.addEventListener('focus', focus);
  conps.addEventListener('focus', focus);
};

function addFocusOut() {
  ps.addEventListener('focusout', passwordMatch);
  conps.addEventListener('focusout', passwordMatch);
};

function checkPassword() {
    ps.addEventListener('input', checkPassword);
    if (ps.value === '' && conps.value === '') {
      passwordEmpty();
      button.type = 'button';
      return;
    } else if (ps.value !== conps.value) {
      passwordNotMatch();
      button.type = 'button';
      return;
    } else if (ps.value === conps.value) {
      passwordMatch();
      button.type = 'submit';
    };
};

button.addEventListener('click', checkPassword);

ps.addEventListener('focus', focus);
ps.addEventListener('focusout', passwordMatch);

conps.addEventListener('focus', focus);
conps.addEventListener('focusout', passwordMatch);
conps.addEventListener('input', checkPassword);
