function playSlider() {
	let listSlide = document.querySelectorAll('#slider .slide');
	for (let i = 0; i < listSlide.length; i++) {
		if (listSlide[i].style.display == 'block') {
			listSlide[i].style.display = 'none';
			if (i == listSlide.length - 1) {
				listSlide[0].style.display = 'block';
			}
			else listSlide[i + 1].style.display = 'block';
			break;
		}
	}
}
setInterval(playSlider, 4000);
//Set mobile menu button
const menuButton = document.querySelector("#header .mobile-menu");
const nav = document.querySelector("#header #nav");
let navHeight = nav.clientHeight;
menuButton.onclick = function () {
	let isClosed = nav.clientHeight ===navHeight;
	if(isClosed) {
		nav.style.height = 'auto';
	}
	else{
		nav.style.height = null;
	}
}

const listMenuItems = document.querySelectorAll("#header ul a[href*='#']");
listMenuItems.forEach((menuItem, index) => {
	menuItem.onclick = (event) => {
		let isParent = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains("sub-nav");
		if(!isParent) {
			nav.style.height = null;
		}
		else{
			event.preventDefault();
		}
	}	
})
// Open tickets modal
const listBuyTicKetButton = document.querySelectorAll(".tickets-list .buy-ticket-btn");
const modal = document.querySelector(".modal");
listBuyTicKetButton.forEach((listBuyTicKetButton)=>{
	listBuyTicKetButton.onclick = (event)=>{
		event.preventDefault();
		modal.style.display="flex";
	}
})
//Close tickets modal
const modalTicketClose = document.querySelector(".modal .modal-close");
modalTicketClose.onclick = ()=>{
	modal.style.display="none";
}