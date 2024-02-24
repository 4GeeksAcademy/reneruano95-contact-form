/* eslint-disable */
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

import "./style.css";

window.onload = function() {
  emailjs.init({
    publicKey: "lK60Ot8VEDjuTdBha",
  });

  const button = document.querySelector("#send-info");
  button.addEventListener("click", sendEmails);
};

async function sendEmails() {
  const name = document.querySelector("#name-input").value;
  const email = document.querySelector("#email-input").value;
  const message = document.querySelector("#message-input").value;

  const result = await emailjs.send("service_o73wfye", "template_glv2v6a", {
    to_name: name,
    to_email: email,
  });
  console.log(result);

  const result2 = await emailjs.send("service_o73wfye", "template_emjcl2t", {
    from_name: name,
    from_email: email,
    message: message,
  });
  console.log(result2);

  document.querySelector("#name-input").value = "";
  document.querySelector("#email-input").value = "";
  document.querySelector("#message-input").value = "";

  const toastLiveExample = document.getElementById("liveToast");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastBootstrap.show();
}
