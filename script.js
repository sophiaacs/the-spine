
document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('add-book-form').addEventListener('submit', function(event) {
        event.preventDefault();
//for user inputs
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const status = document.getElementById('status').value;
	const rating = document.getElementById('rating').value;
	const thoughts = document.getElementById('thoughts').value;

        const newBook = document.createElement('p');
        newBook.textContent = `title: ${title}, author: ${author}, status: ${status}, rating: ${rating}, thoughts: ${thoughts}`;

        document.getElementById('my-books').appendChild(newBook);
//the user input prints
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('status').value = 'read';
	document.getElementById('rating').value = '';
	document.getElementById('thoughts').value = '';
    });
});
//tab
function openTab(evt, Tab) {
  
  var i, tabcontent, tablinks;

 
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }


  document.getElementById(Tab).style.display = "block";
  evt.currentTarget.className += " active";
}
