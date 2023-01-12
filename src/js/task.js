const element = document.body;
console.log("work");
// element.onclick = function() {
//     alert('Thank you');
//   };
element.onclick = function() {
    element.innerHTML += 
    `
    <article class="message">This is article 1</article>
    <article class="message">This is article 2</article>
    <article class="message">This is article 3</article>
    <article class="message">This is article 4</article>
    <article class="message">This is article 5</article>
    `
  };