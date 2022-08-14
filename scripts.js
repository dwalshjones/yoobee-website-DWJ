function addLi() {
  const text = document.querySelector('[data-input]').value;
  const li = document.createElement('li');
  li.textContent = text;

  const ul = document.querySelector('[data-list]');
  ul.appendChild(li);
  document.querySelector('[data-input]').value = '';
}

/* This JavaScript file detects the information entered into the text box via '[data-input]' and adds it to the list via '[data-list]' 
it does this by taking the information from '[data-input] abd appends the child of ul, in this case li.
it then takes the value of the text box/'[data-input]' and clears it so the user can enter another item.
*/
