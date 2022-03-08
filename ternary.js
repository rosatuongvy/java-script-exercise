let greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';


const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));
 ///html 
 //<label for="theme">Select theme: </label>
//<select id="theme">
  //<option value="white">White</option>
  //<option value="black">Black</option>
//</select>

//<h1>This is my website</h1>
