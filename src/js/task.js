const element = document.body;
console.log("work");
const a = document.getElementsByClassName("message");
for (let index = 0; index < a.length; index++) {
  a[index].style.display="none";
  
}
// a.style.display = "none";
// element.onclick = function() {
//     alert('Thank you');
//   };
element.onclick = function() {
  for (let index = 0; index < a.length; index++) {
    a[index].style.display="block";
    
  }
    // element.innerHTML += 
    // `
    // <article class="message">This is article 1</article>
    // <article class="message">This is article 2</article>
    // <article class="message">This is article 3</article>
    // <article class="message">This is article 4</article>
    // <article class="message">This is article 5</article>
    // `
  };