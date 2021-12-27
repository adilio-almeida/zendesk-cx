// Start client and resize app
let client = ZAFClient.init();

client.on("app.registered", (e) => {
  client.invoke("resize", { width: "100%", height: "130px" });
});

const Elements = async () => {
  const dateOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }
  var elements = document.createElement('element');
  var html = `<div id="elements">
                <input id="input" class="input" >
                <button id="button" class="button">Alterar assunto<button/>
            <div/>`
  const App = document.getElementById("app");
  elements.innerHTML = html;

  App.appendChild(elements);

  var button = document.getElementById('button');
  var input = document.querySelector("#input");
  
  button.onclick = function () {
    client.set('ticket.subject', input.value + " " + new Date().toLocaleDateString("pt-br", dateOptions)).then(function (data) {
      input.value = '';
    });
  }
};

// Create screen context
import Main from "./Main.js";
Main();
Elements();
