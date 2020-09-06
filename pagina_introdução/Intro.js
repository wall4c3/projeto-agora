const navSlide =() => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
		
		
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			}
			else {
				link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
			}
			
		});
		
		burger.classList.toggle('toggle');
	});
}

navSlide();


botao1.addEventListener('click', ()=>{
	document.getElementById("content_cards").style.background = "#010D26";
	document.querySelector("button").style.background = "#010D26";
	document.querySelector("button").style.border = "1.5px solid rgb(226,226,226)";
	document.querySelector("titulo").style.color = "rgb(226,226,226)";
	document.querySelector("conteudo").style.color = "rgb(226,226,226)";
	
});