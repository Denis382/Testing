
gsap.to(document.querySelectorAll('.service-row'),{
    opacity: 1,
    stagger: .1,
    duration: .4,
    opacity: 1
})
const haircut = document.querySelector(".woman-haircut");
const hairStyling = document.querySelector(".hair-styling");
const hairTwist = document.querySelector(".hair-twist")
const hardLevel = document.querySelector(".hard-level")
const hairBraiding = document.querySelector(".hair-braiding")
const hairCut = document.querySelector(".haircut")
const mensHaircut = document.querySelector(".mens-haircut")

const womanHairCut = document.getElementById('1');
const hairStylingScroll = document.getElementById('2')
const hairTwistScroll = document.getElementById('3')
const hardLevelScroll = document.getElementById("4")
const hairBraidingScroll = document.getElementById("5")
const hairCutScroll = document.getElementById("6")
const mensHaircutScroll = document.getElementById("7")

function handleButtonClick() {
    haircut.scrollIntoView({block: "center", behavior: "smooth"});
}
function hairStylingYakor() {
    hairStyling.scrollIntoView({block: "center", behavior: "smooth"});
}
function hairTwistYakor() {
    hairTwist.scrollIntoView({block: "center", behavior: "smooth"});
}
function hardLevelYakor() {
    hardLevel.scrollIntoView({block: "center", behavior: "smooth"});
}
function hairBraidingYakor() {
    hairBraiding.scrollIntoView({block: "center", behavior: "smooth"});
}
function hairCutYakor() {
    hairCut.scrollIntoView({block: "center", behavior: "smooth"});
}
function mensHaircutYakor() {
    mensHaircut.scrollIntoView({block: "center", behavior: "smooth"});
}
womanHairCut.addEventListener('click', handleButtonClick);
hairStylingScroll.addEventListener('click', hairStylingYakor);
hairTwistScroll.addEventListener('click', hairTwistYakor);
hardLevelScroll.addEventListener('click', hardLevelYakor);
hairBraidingScroll.addEventListener('click', hairBraidingYakor);
hairCutScroll.addEventListener('click', hairCutYakor);
mensHaircutScroll.addEventListener('click', mensHaircutYakor)
