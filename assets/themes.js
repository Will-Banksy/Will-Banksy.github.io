class Theme {
	constructor(name, assets_path,
		col_text, col_text_intense, col_accent,
		col_back_light, col_back_mid, col_back_dark, col_back_vdark) {
		this.name = name;
		this.assets_path = assets_path;
		this.col_text = col_text;
		this.col_text_intense = col_text_intense;
		this.col_accent = col_accent;
		this.col_back_light = col_back_light;
		this.col_back_mid = col_back_mid;
		this.col_back_dark = col_back_dark;
		this.col_back_vdark = col_back_vdark;
	}
}

const themes = [
	new Theme("Fire", "assets/theme/fire",
		"#fff2b0", "#fade4e", "#e43242", "#a22e41", "#752a3f", "#441d33", "#1c0c18"),
	new Theme("Ocean", "assets/theme/ocean",
		"#c6fffb", "#39f0e2", "#00cfd3", "#4d8a8b", "#26504f", "#152f2c", "#051917")
];

var currThemeIdx = 0;

function SwitchTheme() {
	var oldThemeIdx = currThemeIdx;

	// Increment theme index
	currThemeIdx++;
	if(currThemeIdx >= themes.length) {
		currThemeIdx = 0;
	}

	// If we've not changed theme (if there's only one theme) then don't bother changing anything in dom
	if(currThemeIdx == oldThemeIdx) {
		return;
	}

	var currTheme = themes[currThemeIdx];

	// Set all of the colour variables
	var rootStyle = document.documentElement.style;
	rootStyle.setProperty("--text", currTheme.col_text);
	rootStyle.setProperty("--text-intense", currTheme.col_text_intense);
	rootStyle.setProperty("--accent", currTheme.col_accent);
	rootStyle.setProperty("--back-vdark", currTheme.col_back_vdark);
	rootStyle.setProperty("--back-dark", currTheme.col_back_dark);
	rootStyle.setProperty("--back-mid", currTheme.col_back_mid);
	rootStyle.setProperty("--back-light", currTheme.col_back_light);

	// Change the images
	var logoImgs = document.getElementsByClassName("theme-img-logo");
	for(var i = logoImgs.length - 1; i >= 0; i--) {
		logoImgs[i].src = currTheme.assets_path + "/icon.png";
	}

	var calImgs = document.getElementsByClassName("theme-img-calendar");
	for(var i = calImgs.length - 1; i >= 0; i--) {
		calImgs[i].src = currTheme.assets_path + "/calendar.png";
	}

	var ghImgs = document.getElementsByClassName("theme-img-github");
	for(var i = ghImgs.length - 1; i >= 0; i--) {
		ghImgs[i].src = currTheme.assets_path + "/github.png";
	}
}