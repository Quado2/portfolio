function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			textColor: {
				skin: {
					base: withOpacity("--color-text-base"),
					muted: withOpacity("--color-text-muted"),
					hover: withOpacity("--color-text-hover"),
					button: withOpacity("--color-button"),
				},
			},
			borderColor: {
				skin: {
					button: withOpacity("--color-button"),
					base: withOpacity("--color-text-base"),
					muted: withOpacity("--color-text-muted"),
					hover: withOpacity("--color-text-hover"),
				},
			},

			backgroundColor: {
				skin: {
					button: withOpacity("--color-button"),
					base: withOpacity("--color-text-base"),
					muted: withOpacity("--color-text-muted"),
					hover: withOpacity("--color-text-hover"),
					logo: withOpacity("--color-background-logo"),
					general: withOpacity("--color-background-general"),
					nav: withOpacity("--color-background-nav"),
				},
			},

			animation: {
				"appear-in": "appear 1s ease-in-out forwards 1.2s",
				"appear-now": "appearNow .7s ease-in-out forwards",
				"slow-in": "slowIn .5s ease-in-out forwards",
				"disappear": "disappear .5s ease-in-out forwards"
			},
			width:{
				'7/6': '116%',
				'130':'130%',
				'9/6': '150%',
			}
		},
		keyframes: {
			appear: {
				"0%": { opacity: "0", transform: "translateY(10px)" },
				"100%": { opacity: "1", transform: "translateY(0)" },
			},
			appearNow: {
				"0%": { opacity: "0"},
				"10%":{ opacity: "0"},
				"100%": { opacity: "1"},
			},
			slowIn:{
				"0%":{opacity:"0"},
				"30%":{opacity:"0", transform: "translateY(-4px)"},
				"100%":{transform: "translateY(0)", opacity: "1"}
			},

			disappear: {
				"0%":{opacity:"1"},
				"70%":{opacity:"0", transform: "translateY(-4px)"},
				"100%":{transform: "translateY(-50vh)", opacity: "0"}
				
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
