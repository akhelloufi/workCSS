(function (w, d, b) {

	b.Modules.myTarget_branding_pixel = function (core) {

		core.on("event:state", function (state) {
			if (state === "ready") {

				var el = d.createElement("ins");
				el.className = "mrg-tag";
				el.style.display = "inline-block";
				el.style.width = "1px";
				el.style.height = "1px";
				el.style.textDecoration = "none";
				el.dataset.adClient = "ad-199847";
				el.dataset.adSlot = "199847";

				b.utils.loadScript("https://ad.mail.ru/static/ads-async.js", function () {
				});
				core.container.appendChild(el);
				(MRGtag = window.MRGtag || []).push({});
			}
		});

		core.trigger("remote_module_ready");
	}

})(window, document, Buzzoola);
