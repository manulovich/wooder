new Vue({
	el: "#wooder",
	data: {
		langNow: "en",
		langOne: "en",
		langTwo: "ru",
		menu_status_active: false,
		lang_status_active: false,
		info_status_active: false,
		share_status_active: false,
		screenTwo_status: false,
		pageNow: "01",
		more_one_status_active: false,
		more_two_top_status_active: false,
		more_two_bottom_status_active: false,
		video_three_one_status_active: false,
		video_three_two_status_active: false,
		video_three_three_status_active: false,
		video_four_status_active: false,
		more_five_status_active: false,
	},
	methods: {
		textLang__on(lang){
			this.langNow = lang;
			this.lang_status_active = false;
		},
		translate(lang){
			if(lang === "en"){
				document.querySelectorAll(".textLangRU").forEach(function(item){
					item.style.display = "none";
				});
				document.querySelectorAll(".textLangEN").forEach(function(item){
					item.style.display = "inline-block";
				});
			} else if(lang === "ru"){
				document.querySelectorAll(".textLangEN").forEach(function(item){
					item.style.display = "none";
				});
				document.querySelectorAll(".textLangRU").forEach(function(item){
					item.style.display = "inline-block";
				});
			}
		},
		animation(){
			//screenTwo
			let screenTwo_top = document.querySelector(".screenTwo__top").offsetTop;
			let screenTwo_botom = document.querySelector(".screenTwo__bottom").offsetTop;
			if(window.pageYOffset >= (screenTwo_top+200)){
				document.querySelectorAll(".screenTwo__leftTopContent").forEach(function(item){
					item.classList.add("screenTwo__leftTopContent_active");
				});
			}
			if(window.pageYOffset >= (screenTwo_botom+250)){
				document.querySelectorAll(".screenTwo__rightBottomContent").forEach(function(item){
					item.classList.add("screenTwo__rightBlock_active");
				});
			}
			//screenThree
			let screenThree = document.querySelector(".screenThree").offsetTop;
			if(window.pageYOffset >= screenThree){
				document.querySelectorAll(".screenThree__videoWrapper").forEach(function(item){
					item.classList.add("screenThree__videoWrapper_active");
				});
			}
			//screenFive
			let screenFive = document.querySelector(".screenFive").offsetTop;
			if(window.pageYOffset >= (screenFive-100)){
				document.querySelectorAll(".screenFive__rightBlock").forEach(function(item){
					item.classList.add("screenFive__rightBlock_active");
				});
			}
		},
		pageActive(){
			//variable
			let screenOne = document.querySelector(".screenOne").offsetTop;
			let screenTwo = document.querySelector(".screenTwo").offsetTop;
			let screenThree = document.querySelector(".screenThree").offsetTop;
			let screenFour = document.querySelector(".screenFour").offsetTop;

			function removeActivePage(x){
				document.querySelectorAll(".pageNumber__punkt").forEach(function(item, i){
					if ((i !== x) && (item.classList.contains("pageNumber__punkt_active") === true)){
						item.classList.remove("pageNumber__punkt_active");
					}
				});
				document.querySelectorAll(".pageNumber__punkt")[x].classList.add("pageNumber__punkt_active");
			}

			//screenOne
			if(window.pageYOffset >= screenOne && window.pageYOffset < screenTwo){
				this.pageNow = "01";
				removeActivePage(0);
			}

			//screenTwo
			if(window.pageYOffset >= screenTwo && window.pageYOffset < screenThree){
				this.pageNow = "02";
				removeActivePage(1);
			}

			//screenThree
			if(window.pageYOffset >= screenThree && window.pageYOffset < screenFour){
				this.pageNow = "03";
				removeActivePage(2);
			}

			//screenFour
			if(window.pageYOffset >= screenFour){
				this.pageNow = "04";
				removeActivePage(3);
			}
		},
		adBodyFixed(){
			document.body.style.overflow = "hidden";
		},
		removeBodyFixed(){
			document.body.style.overflow = "auto";
		},
		fixed(){
			if(window.pageYOffset >= 500){
				document.querySelector(".menu").classList.add("menu_fixed");
				document.querySelector(".header__menuNav").classList.add("header__menuNav_fixed");
				document.querySelector(".pageNumber").classList.add("pageNumber_fixed");
			} else if(window.pageYOffset < 500){
				document.querySelector(".menu").classList.remove("menu_fixed");
				document.querySelector(".header__menuNav").classList.remove("header__menuNav_fixed");
				document.querySelector(".pageNumber").classList.remove("pageNumber_fixed");
			}
		},
		heightFonPreview(){
			let height = 0;
			document.querySelectorAll(".screenThree__preview").forEach(function(video){
				height = video.offsetWidth;
			});
			document.querySelectorAll(".screenThree__preview").forEach(function(preview){
				preview.style.height = height + "px";
			});
		},
		activeHome(){
			let screenOne = document.querySelector(".screenOne");
			screenOne.scrollIntoView({block: "center", behavior: "smooth"});
		},
		activeProducts(){
			let screenTwo = document.querySelector(".screenTwo");
			screenTwo.scrollIntoView({behavior: "smooth"});
		},
		activeAbout(){
			let screenThree = document.querySelector(".screenThree");
			screenThree.scrollIntoView({behavior: "smooth"});
		},
		interval(){
			this.fixed();
			this.heightFonPreview();
			this.animation();
			this.pageActive();
		}
	},
	created: function(){
		this.translate("en");
		setInterval(this.interval, 100);
	}
})
