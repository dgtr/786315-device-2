  var link = document.querySelector(".write-us-button");
  var popup = document.querySelector(".modal-write-us");
  var close = popup.querySelector(".modal-close");
  var uname = popup.querySelector("[name=user-name]");
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    uname.focus();
  });
  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
