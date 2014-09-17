var Page = {

	init: function() {
		this.$winHeight = $(window).innerHeight();
	}

};

var NavMenu = {

	init: function() {
		this.$body = $("body");
		this.$navMenu = this.$body.find(".nav-menu");
		this.$menuIcon = this.$body.find(".main-header__menu-group");
		this.initEvents();
	},

	initEvents: function() {
		this.$menuIcon.on("click", this.toggleMenu.bind(this));
		this.$body.on("click", this.closeMenuCheck.bind(this));
	},

	toggleMenu: function(e) {
		e.preventDefault();
		this.$navMenu.toggleClass("visible");
		e.stopPropagation();  // prevent from bubbling up to body for close menu check
	},

	closeMenuCheck: function(e) {
		if (this.$navMenu.hasClass("visible")) {
			this.$navMenu.removeClass("visible");
		}
	}

};

var Gateway = {

	init: function() {
		this.$gateway = $(".gateway");
		this.$gatewaySections = this.$gateway.find(".gateway-section");
		this.$coachOverlay = this.$gateway.find(".coach-overlay");
		this.$runnerOverlay = this.$gateway.find(".runner-overlay");
		this.$coachButton = this.$gateway.find(".gateway__coach-button");
		this.$runnerButton = this.$gateway.find(".gateway__runner-button");
		this.initDom();
		this.initEvents();
	},

	initDom: function() {
		this.$gateway.css("height", Page.$winHeight);
	},

	initEvents: function() {
		this.$gatewaySections.hover(this.changeHoverStates.bind(this));
	},

	changeHoverStates: function(e){
		var isRunnerGateway = $(e.target).hasClass("runner-overlay");
		if (isRunnerGateway) {
			this.$coachOverlay.addClass("not-hover");
			this.$runnerOverlay.removeClass("not-hover");
		} else {
			this.$runnerOverlay.addClass("not-hover");
			this.$coachOverlay.removeClass("not-hover");
		}
	}
};

$(document).ready(function() {

	Page.init();
	NavMenu.init();
	Gateway.init();
	
});