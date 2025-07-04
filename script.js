document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = parseInt(document.getElementById('age').value.trim(), 10);
  const hobbies = document.getElementById('hobbies').value.trim();
  const messageEl = document.getElementById('message');

  messageEl.textContent = '';

  if (!validateField('Full Name', fullName)) return;
  if (!validateField('Email', email)) return;
  if (!validateEmail(email)) {
    showMessage('Please enter a valid email address.');
    return;
  }
  if (!validateAge(age)) return;

  if (age > 18) {
    addPersonToList({ fullName, email, age, hobbies });
    document.getElementById('userForm').reset();
  } else {
    showMessage('You must be over 18 to submit.');
  }
});

function validateField(fieldName, value) {
  if (!value) {
    showMessage(`${fieldName} is required.`);
    return false;
  }
  return true;
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateAge(age) {
  if (isNaN(age) || age <= 0) {
    showMessage('Age must be a number greater than 0.');
    return false;
  }
  return true;
}

function addPersonToList(person) {
  const list = document.getElementById('people-list');
  const li = document.createElement('li');
  li.textContent = `Full Name: ${person.fullName}, Email: ${person.email}, Age: ${person.age}`;
  list.appendChild(li);
}

function showMessage(msg) {
  const messageEl = document.getElementById('message');
  messageEl.textContent = msg;
}
