$(window)
  .on("resize", function (e) {
    var initLib = $(".plans-group").data("init-slider");

    if (window.innerWidth < 376) {
      if (initLib != 1) {
        $(".plans-group")
          .slick({
            arrows: false,
            centerMode: true,
            centerPadding: "60px",
            slidesToShow: 1,
            infinite: false,
            initialSlide: 1,
            variableWidth: true,
          })
          .data({ "init-slider": 1 });
      }
    } else {
      if (initLib == 1) {
        $(".plans-group").slick("unslick").data({ "init-slider": 0 });
      }
    }
  })
  .trigger("resize");

const buttons = document.querySelectorAll(".star-input");
const form = document.querySelector(".registration-form");
const password = document.querySelector(".password");
const passwordReType = document.querySelector(".password-re-type");

buttons.forEach((radio) => {
  radio.addEventListener("change", function () {
    const checkedNumber =
      document.querySelector(".star-input:checked").value || undefined;

    buttons.forEach((item) => {
      const currentLabel = item.previousElementSibling;
      if (item.value <= checkedNumber) {
        currentLabel.classList.add("check");
      } else {
        currentLabel.classList.remove("check");
      }
    });
  });
});

form.addEventListener("input", () => {
  if (password.value === passwordReType.value) {
    password.style.borderColor = "green";
    passwordReType.style.borderColor = "green";
  } else {
    password.style.borderColor = "red";
    passwordReType.style.borderColor = "red";
    e.preventDefault();
  }
});
