document.addEventListener("DOMContentLoaded", () => {
	const themeToggle = document.querySelector('.theme-toggle');
	const themeIcon = document.getElementById('theme-icon');
	const bannerText = document.getElementById('banner-text');
	const bannerText1 = document.getElementById('banner-text-1');
	const bannerText2 = document.getElementById('banner-text-2');
	const button = document.querySelector('button')
	const highlightText = document.querySelector('.highlight');
	const highlight1 = document.querySelector('.highlight-1');
	const highlight2 = document.querySelector('.highlight-2');
	const highlight3 = document.querySelector('.highlight-3');
	const highlight4 = document.querySelector('.highlight-4');
	const highlight5 = document.querySelector('.highlight-5');
    const clearfixH1 = document.querySelector('.clearfix h1');
    const clearfixH3 = document.querySelector('.clearfix h3');
    const clearfixH4 = document.querySelector('.clearfix h4');
    const goals = document.getElementById('goals');
    const adapt = document.getElementById('adapt');
    const team = document.getElementById('team');
    const clearfixP = document.querySelector('.clearfix p');
    const technology1 = document.getElementById('technology-1');
    const industries = document.getElementById('industries');
    const retail = document.getElementById('retail');
    const manufacturing = document.getElementById('manufacturing');
    const agriculture = document.getElementById('agriculture');
    const projects = document.getElementById('projects');
    const accordion = document.querySelector('.accordion');
    const buttonHover = document.querySelector('button:hover')
    
    
    
	themeToggle.addEventListener('click', () => {
		document.body.classList.toggle('dark-theme');
		document.body.classList.toggle('light-theme');
		if (document.body.classList.contains('dark-theme')) {
			themeIcon.src = 'images/moon.svg';
			bannerText.classList.remove('light-theme-bg');
			bannerText.classList.add('dark-theme-bg');
			bannerText1.classList.remove('light-theme-bg');
			bannerText1.classList.add('dark-theme-bg');
			bannerText2.classList.remove('light-theme-bg');
			bannerText2.classList.add('dark-theme-bg');
			highlightText.classList.remove('light-theme-text');
			highlightText.classList.add('dark-theme-text');
			highlight1.classList.remove('light-theme-text');
			highlight1.classList.add('dark-theme-text');
			highlight2.classList.remove('light-theme-text');
			highlight2.classList.add('dark-theme-text');
			highlight3.classList.remove('light-theme-text');
			highlight3.classList.add('dark-theme-text');
			highlight4.classList.remove('light-theme-text');
			highlight4.classList.add('dark-theme-text');
			highlight5.classList.remove('light-theme-text');
			highlight5.classList.add('dark-theme-text');
            clearfixH1.classList.remove('light-theme-bg');
            clearfixH1.classList.add('dark-theme-bg');
            clearfixH3.classList.remove('light-theme-bg');
            clearfixH3.classList.add('dark-theme-bg');
            clearfixH4.classList.remove('light-theme-bg');
            clearfixH4.classList.add('dark-theme-bg');
            goals.classList.remove('light-theme-bg');
            goals.classList.add('dark-theme-bg');
            adapt.classList.remove('light-theme-bg');
            adapt.classList.add('dark-theme-bg');
            team.classList.remove('light-theme-bg');
            team.classList.add('dark-theme-bg');
            clearfixP.classList.remove('light-theme-bg');
            clearfixP.classList.add('dark-theme-bg');
            technology1.classList.remove('light-theme-bg');
            technology1.classList.add('dark-theme-bg');
            button.classList.remove('light-theme-bg');
            button.classList.add('dark-theme-bg');
            industries.classList.remove('light-theme-bg');
            industries.classList.add('dark-theme-bg');
            industries.style.boxShadow = '#191919';
            industries.style.width = '100%';
            retail.classList.remove('light-theme-bg');
            retail.classList.add('dark-theme-bg');
            retail.style.width = '100%';
            manufacturing.classList.remove('light-theme-bg');
            manufacturing.classList.add('dark-theme-bg');
            manufacturing.style.width = '100%';
            agriculture.classList.remove('light-theme-bg');
            agriculture.classList.add('dark-theme-bg');
            agriculture.style.width = '100%';
            accordion.classList.remove('light-theme-bg');
            accordion.classList.add('dark-theme-bg');
            buttonHover.classList.remove('light-theme-bg');
            buttonHover.classList.add('dark-theme-bg');
            projects.classList.remove('light-theme-bg');
            projects.classList.add('dark-theme-bg');
        

		} else {
			themeIcon.src = 'images/sun.svg';
			bannerText.classList.remove('dark-theme-bg');
			bannerText.classList.add('light-theme-bg');
			bannerText1.classList.remove('dark-theme-bg');
			bannerText1.classList.add('light-theme-bg');
			bannerText2.classList.remove('dark-theme-bg');
			bannerText2.classList.add('light-theme-bg');
			highlightText.classList.remove('dark-theme-text');
			highlightText.classList.add('light-theme-text');
			highlight1.classList.remove('dark-theme-text');
			highlight1.classList.add('light-theme-text');
			highlight2.classList.remove('dark-theme-text');
			highlight2.classList.add('light-theme-text');
			highlight3.classList.remove('dark-theme-text');
			highlight3.classList.add('light-theme-text');
			highlight4.classList.remove('dark-theme-text');
			highlight4.classList.add('light-theme-text');
			highlight5.classList.remove('dark-theme-text');
			highlight5.classList.add('light-theme-text');
            clearfixH1.classList.remove('dark-theme-bg');
            clearfixH1.classList.add('light-theme-bg');
            clearfixH3.classList.remove('dark-theme-bg');
            clearfixH3.classList.add('light-theme-bg');
            clearfixH4.classList.remove('dark-theme-bg');
            clearfixH4.classList.add('light-theme-bg');
            goals.classList.remove('dark-theme-bg');
            goals.classList.add('light-theme-bg');
            adapt.classList.remove('dark-theme-bg');
            adapt.classList.add('light-theme-bg');
            team.classList.remove('dark-theme-bg');
            team.classList.add('light-theme-bg');
            clearfixP.classList.remove('dark-theme-bg');
            clearfixP.classList.add('light-theme-bg');
            button.classList.remove('dark-theme-bg');
            button.classList.add('light-theme-bg');
            industries.classList.remove('dark-theme-bg');
            industries.classList.add('light-theme-bg');
            technology1.classList.remove('dark-theme-bg');
            technology1.classList.add('light-theme-bg');
            industries.style.boxShadow = '#FFFFFF';
            industries.style.width = '100%';
            retail.classList.remove('dark-theme-bg');
            retail.classList.add('light-theme-bg');
            retail.style.width = '100%';
            manufacturing.classList.remove('dark-theme-bg');
            manufacturing.classList.add('light-theme-bg');
            manufacturing.style.width = '100%';
            agriculture.classList.remove('dark-theme-bg');
            agriculture.classList.add('light-theme-bg');
            agriculture.style.width = '100%';
            accordion.classList.remove('dark-theme-bg');
            accordion.classList.add('light-theme-bg');
            buttonHover.classList.remove('dark-theme-bg');
            buttonHover.classList.add('light-theme-bg');
            projects.classList.remove('dark-theme-bg');
            projects.classList.add('light-theme-bg');
           
		}
	});
});

var acc = document.getElementsByClassName("accordion");
var i;

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function
    (){
        this.classList.toggle("active");
        this.parentElement.classList.toggle
        ("active");

        var pannel = this.nextElementSibling;

        if(pannel.style.display === "block"){
            pannel.style.display = "none";
        }else{
            pannel.style.display = "block";
        }
    })
}