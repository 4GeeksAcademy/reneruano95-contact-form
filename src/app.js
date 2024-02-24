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

  // const toastLiveExample = document.getElementById("liveToast");
  // if (button) {
  //   const toastBootstrap = bootstrap.Toast.getOrCreateInstance(
  //     toastLiveExample
  //   );
  //   button.addEventListener("click", () => {
  //     toastBootstrap.show();
  //   });
  // }
};

const sendEmails = () => {
  const name = document.querySelector("#name-input").value;
  const email = document.querySelector("#email-input").value;
  const message = document.querySelector("#message-input").value;

  emailjs.send("service_o73wfye", "template_glv2v6a", {
    to_name: name,
    to_email: email,
  });

  emailjs.send("service_o73wfye", "template_emjcl2t", {
    from_name: name,
    from_email: email,
    message: message,
  });

  document.querySelector("#name-input").value = "";
  document.querySelector("#email-input").value = "";
  document.querySelector("#message-input").value = "";

  const toastLiveExample = document.getElementById("liveToast");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastBootstrap.show();
};
