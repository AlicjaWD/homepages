{
  const welcome = () => {
    console.log("Hej :)");
  }
  welcome();

  const ToogleBackground = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".js-themeName");
    body.classList.toggle("body--red");
    themeName.innerText = body.classList.contains("body--red") ? "kasztanowy" : "brązowy";
  };
  const ToggleLanguage = () => {
    const headerPl = document.querySelector(".js-header__pl");
    const sectionHeaderPl = document.querySelector(".js-section__HeaderPl");
    const sectionPl = document.querySelector(".js-section__paragraph");
    const namePl = document.querySelector(".js-namePl");
    headerPl.classList.toggle("language__De");
    sectionHeaderPl.classList.toggle("language__De");
    sectionPl.classList.toggle("language__De");
    headerPl.innerText = headerPl.classList.contains("language__De") ? "Witam" : "Herzlich Wilkommen";
    sectionHeaderPl.innerText = sectionHeaderPl.classList.contains("language__De") ? "Kilka słów o mnie...✍️" : "Ein paar Worte über mich...✍️";
    sectionPl.innerText = sectionPl.classList.contains("language__De") ? "Mam na imię Alicja. Mam 25 lat, niedawno skończyłam studia magisterskie z mikrotechnologii, a od prawie dwóch lat pracuję jako fizyk medyczny. Mieszkam na Śląsku, ale chętnie, gdy tylko mam okazję uciekam poza jego granice. Lubię aktywną wspinaczkę górską jak i spokojny spacer brzegiem morza. Kontakt z naturą jest dla mnie bardzo ważny." : "Ich heiße Alicja. Ich bin 25 Jahre alt. Ich  arbeite seit fast zwei Jahren als Medizinphysiker. Ich lebe in Schlesien. Ich mag Berg erklimmen und am Strand spazieren. Der Kontakt zur Natur ist mir sehr wichtig.";
    namePl.classList.toggle("language__button");
    namePl.innerText = namePl.classList.contains("language__button") ? "na niemiecki" : "na polski";
  };
  const onDeleteImageClick = () => {
    const sectionImage = document.querySelector(".js-section__image");
    sectionImage.remove();
  };
  const init = () => {
    const background = document.querySelector(".js-background");
    const changeLanguage = document.querySelector(".js-changeLanguage");
    const deleteImage = document.querySelector(".js-deleteImage");
    background.addEventListener("click", ToogleBackground);
    changeLanguage.addEventListener("click", ToggleLanguage);
    deleteImage.addEventListener("click", onDeleteImageClick);
  };
  init();

}