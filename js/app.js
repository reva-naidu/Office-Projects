document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const bannerText = document.getElementById("banner-text");
  const bannerText1 = document.getElementById("banner-text-1");
  const bannerText2 = document.getElementById("banner-text-2");
  const clearfixH2 = document.querySelector(".clearfix h2");
  const clearfixH5 = document.querySelector(".clearfix h5");
  const goals = document.getElementById("goals");
  const adapt = document.getElementById("adapt");
  const team = document.getElementById("team");
  const send = document.getElementById("send");
  const sendHover = document.getElementById("send:hover");
  const button = document.querySelector("button");
  const technology1 = document.getElementById("technology-1");
  const industries = document.getElementById("industries");
  const retail = document.getElementById("retail");
  const manufacturing = document.getElementById("manufacturing");
  const agriculture = document.getElementById("agriculture");
  const projects = document.getElementById("projects");
  const highlight = document.querySelector(".highlight");
  const highlight1 = document.querySelector(".highlight-1");
  const highlight2 = document.querySelector(".highlight-2");
  const highlight3 = document.querySelector(".highlight-3");
  const highlight4 = document.querySelector(".highlight-4");
  const highlight5 = document.querySelector(".highlight-5");
  const clearfixH1 = document.querySelector(".clearfix h1");
  const clearfixH3 = document.querySelector(".clearfix h3");
  const clearfixH4 = document.querySelector(".clearfix h4");
  const clearfixP = document.querySelector(".clearfix p");
  const buttonHover = document.querySelector("button:hover");
  const accordion = document.querySelectorAll(".accordion");
  // const accordion1 = document.querySelector(".accordion-1");
  // const accordion2 = document.querySelector(".accordion-2");
  // const accordion3 = document.querySelector(".accordion-3");
  // const accordion4 = document.querySelector(".accordion-4");
  // const accordion5 = document.querySelector(".accordion-5");
  const accordionHover = document.querySelectorAll(".accordion:hover");
  const accordion1Hover = document.querySelector(".accordion-1:hover");
  const accordion2Hover = document.querySelector(".accordion-2:hover");
  const accordion3Hover = document.querySelector(".accordion-3:hover");
  const accordion4Hover = document.querySelector(".accordion-4:hover");
  const accordion5Hover = document.querySelector(".accordion-5:hover");
  const pannel = document.querySelectorAll(".pannel");
  const pannelP = document.querySelectorAll(".pannel p");
  const form = document.querySelector(".form");
  const input = document.querySelectorAll("input");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("dark-theme")) {
      themeIcon.src = "images/moon.svg";
      clearfixH2.classList.remove("light-theme-bg");
      clearfixH2.classList.add("dark-theme-bg");
      clearfixH5.classList.remove("light-theme-bg");
      clearfixH5.classList.add("dark-theme-bg");
      bannerText.classList.remove("light-theme-bg");
      bannerText.classList.add("dark-theme-bg");
      bannerText1.classList.remove("light-theme-bg");
      bannerText1.classList.add("dark-theme-bg");
      bannerText2.classList.remove("light-theme-bg");
      bannerText2.classList.add("dark-theme-bg");
      highlight.classList.remove("light-theme-text");
      highlight.classList.add("dark-theme-text");
      highlight1.classList.remove("light-theme-text");
      highlight1.classList.add("dark-theme-text");
      highlight2.classList.remove("light-theme-text");
      highlight2.classList.add("dark-theme-text");
      highlight3.classList.remove("light-theme-text");
      highlight3.classList.add("dark-theme-text");
      highlight4.classList.remove("light-theme-text");
      highlight4.classList.add("dark-theme-text");
      highlight5.classList.remove("light-theme-text");
      highlight5.classList.add("dark-theme-text");
      clearfixH1.classList.remove("light-theme-bg");
      clearfixH1.classList.add("dark-theme-bg");
      clearfixH3.classList.remove("light-theme-bg");
      clearfixH3.classList.add("dark-theme-bg");
      clearfixH4.classList.remove("light-theme-bg");
      clearfixH4.classList.add("dark-theme-bg");
      goals.classList.remove("light-theme-bg");
      goals.classList.add("dark-theme-bg");
      adapt.classList.remove("light-theme-bg");
      adapt.classList.add("dark-theme-bg");
      team.classList.remove("light-theme-bg");
      team.classList.add("dark-theme-bg");
      clearfixP.classList.remove("light-theme-bg");
      clearfixP.classList.add("dark-theme-bg");
      technology1.classList.remove("light-theme-bg");
      technology1.classList.add("dark-theme-bg");
      button.classList.remove("light-theme-bg");
      button.classList.add("dark-theme-bg");
      industries.classList.remove("light-theme-bg");
      industries.classList.add("dark-theme-bg");
      retail.classList.remove("light-theme-bg");
      retail.classList.add("dark-theme-bg");
      manufacturing.classList.remove("light-theme-bg");
      manufacturing.classList.add("dark-theme-bg");
      agriculture.classList.remove("light-theme-bg");
      agriculture.classList.add("dark-theme-bg");
      accordion.forEach((item) => item.classList.remove("light-theme-bg"));
      accordion.forEach((item) => item.classList.add("dark-theme-bg"));
      // accordion1.classList.remove("light-theme-bg");
      // accordion1.classList.add("dark-theme-bg");
      // accordion2.classList.remove("light-theme-bg");
      // accordion2.classList.add("dark-theme-bg");
      // accordion3.classList.remove("light-theme-bg");
      // accordion3.classList.add("dark-theme-bg");
      // accordion4.classList.remove("light-theme-bg");
      // accordion4?.classList?.add("dark-theme-bg");
      // accordion5.classList.remove("light-theme-bg");
      // accordion5.classList.add("dark-theme-bg");
      buttonHover?.classList?.remove("light-theme-bg");
      buttonHover?.classList?.add("dark-theme-bg");
      send.classList.remove("light-theme-bg");
      send.classList.add("dark-theme-bg");
      sendHover?.classList?.remove("light-theme-bg");
      sendHover?.classList?.add("dark-theme-bg");
      projects.classList.remove("light-theme-bg");
      projects.classList.add("dark-theme-bg");

      accordionHover?.classList?.remove("light-theme-bg");
      accordionHover?.classList?.add("dark-theme-bg");
      accordion1Hover?.classList?.remove("light-theme-bg");
      accordion1Hover?.classList?.add("dark-theme-bg");
      accordion2Hover?.classList?.remove("light-theme-bg");
      accordion2Hover?.classList?.add("dark-theme-bg");
      accordion3Hover?.classList?.remove("light-theme-bg");
      accordion3Hover?.classList?.add("dark-theme-bg");
      accordion4Hover?.classList?.remove("light-theme-bg");
      accordion4Hover?.classList?.add("dark-theme-bg");
      accordion5Hover?.classList?.remove("light-theme-bg");
      accordion5Hover?.classList.add("dark-theme-bg");
      pannel.forEach((item) => item.classList.remove("light-theme-bg"));
      pannel.forEach((item) => item.classList.add("dark-theme-bg"));
      pannelP.forEach((item) => item.classList.remove("light-theme-bg"));
      pannelP.forEach((item) => item.classList.add("dark-theme-bg"));
      form.classList.remove("light-theme-bg");
      form.classList.add("dark-theme-bg");
      input.forEach((item) => item.classList.remove("light-theme-bg"));
      input.forEach((item) => item.classList.add("dark-theme-bg"));
    } else {
      themeIcon.src = "images/sun.svg";
      clearfixH2.classList.remove("dark-theme-bg");
      clearfixH2.classList.add("light-theme-bg");
      clearfixH5.classList.remove("dark-theme-bg");
      clearfixH5.classList.add("light-theme-bg");

      bannerText.classList.remove("dark-theme-bg");
      bannerText.classList.add("light-theme-bg");
      bannerText1.classList.remove("dark-theme-bg");
      bannerText1.classList.add("light-theme-bg");
      bannerText2.classList.remove("dark-theme-bg");
      bannerText2.classList.add("light-theme-bg");
      highlight.classList.remove("dark-theme-text");
      highlight.classList.add("light-theme-text");
      highlight1.classList.remove("dark-theme-text");
      highlight1.classList.add("light-theme-text");
      highlight2.classList.remove("dark-theme-text");
      highlight2.classList.add("light-theme-text");
      highlight3.classList.remove("dark-theme-text");
      highlight3.classList.add("light-theme-text");
      highlight4.classList.remove("dark-theme-text");
      highlight4.classList.add("light-theme-text");
      highlight5.classList.remove("dark-theme-text");
      highlight5.classList.add("light-theme-text");
      clearfixH1.classList.remove("dark-theme-bg");
      clearfixH1.classList.add("light-theme-bg");
      clearfixH3.classList.remove("dark-theme-bg");
      clearfixH3.classList.add("light-theme-bg");
      clearfixH4.classList.remove("dark-theme-bg");
      clearfixH4.classList.add("light-theme-bg");
      goals.classList.remove("dark-theme-bg");
      goals.classList.add("light-theme-bg");
      adapt.classList.remove("dark-theme-bg");
      adapt.classList.add("light-theme-bg");
      team.classList.remove("dark-theme-bg");
      team.classList.add("light-theme-bg");
      clearfixP.classList.remove("dark-theme-bg");
      clearfixP.classList.add("light-theme-bg");
      button.classList.remove("dark-theme-bg");
      button.classList.add("light-theme-bg");
      industries.classList.remove("dark-theme-bg");
      industries.classList.add("light-theme-bg");
      technology1.classList.remove("dark-theme-bg");
      technology1.classList.add("light-theme-bg");
      retail.classList.remove("dark-theme-bg");
      retail.classList.add("light-theme-bg");
      manufacturing.classList.remove("dark-theme-bg");
      manufacturing.classList.add("light-theme-bg");
      agriculture.classList.remove("dark-theme-bg");
      agriculture.classList.add("light-theme-bg");
      accordion.forEach((item) => item.classList.remove("dark-theme-bg"));
      accordion.forEach((item) => item.classList.add("light-theme-bg"));
      // accordion1.classList.remove("dark-theme-bg");
      // accordion1.classList.add("light-theme-bg");
      // accordion2.classList.remove("dark-theme-bg");
      // accordion2.classList.add("light-theme-bg");
      // accordion3.classList.remove("dark-theme-bg");
      // accordion3.classList.add("light-theme-bg");
      // accordion4.classList.remove("dark-theme-bg");
      // accordion4.classList.add("light-theme-bg");
      // accordion5.classList.remove("dark-theme-bg");
      // accordion5.classList.add("light-theme-bg");
      buttonHover?.classList?.remove("dark-theme-bg");
      buttonHover?.classList?.add("light-theme-bg");
      send.classList.remove("dark-theme-bg");
      send.classList.add("light-theme-bg");
      sendHover?.classList?.remove("dark-theme-bg");
      sendHover?.classList?.add("light-theme-bg");
      projects.classList.remove("dark-theme-bg");
      projects.classList.add("light-theme-bg");
      accordionHover.forEach((item) =>
        item?.classList?.remove("dark-theme-bg"),
      );
      accordionHover.forEach((item) => item?.classList?.add("light-theme-bg"));
      accordion1Hover?.classList?.remove("dark-theme-bg");
      accordion1Hover?.classList?.add("light-theme-bg");
      accordion2Hover?.classList?.remove("dark-theme-bg");
      accordion2Hover?.classList?.add("light-theme-bg");
      accordion3Hover?.classList?.remove("dark-theme-bg");
      accordion3Hover?.classList?.add("light-theme-bg");
      accordion4Hover?.classList?.remove("dark-theme-bg");
      accordion4Hover?.classList?.add("light-theme-bg");
      accordion5Hover?.classList?.remove("dark-theme-bg");
      accordion5Hover?.classList?.add("light-theme-bg");
      pannel.forEach((item) => item.classList.remove("dark-theme-bg"));
      pannel.forEach((item) => item.classList.add("light-theme-bg"));
      pannelP.forEach((item) => item.classList.remove("dark-theme-bg"));
      pannelP.forEach((item) => item.classList.add("light-theme-bg"));
      form.classList.remove("dark-theme-bg");
      form.classList.add("light-theme-bg");
      input.forEach((item) => item.classList.remove("dark-theme-bg"));
      input.forEach((item) => item.classList.add("light-theme-bg"));
    }
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
var acc = document.getElementsByClassName("accordion-1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
var acc = document.getElementsByClassName("accordion-2");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
var acc = document.getElementsByClassName("accordion-3");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
var acc = document.getElementsByClassName("accordion-4");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
var acc = document.getElementsByClassName("accordion-5");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
