import "../scss/app.scss";
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const main =  document.querySelector(".main");

  document.body.addEventListener("click", () => {

    for (let index = 0; index < 5; index++) {
     
        let article = document.createElement("article");

        let text = " This is article ";
        
        article.classList.add("message");
        
        article.innerText = text + (index+1);
        
        main.appendChild(article);

        console.log("click")
      
    };

  });

});


