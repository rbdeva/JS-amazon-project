const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response); //this response is a string so can be stored in a variable
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
