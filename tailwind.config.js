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
			},
		},
		keyframes: {
			appear: {
				"0%": { opacity: "0", transform: "translateY(10px)" },
				"100%": { opacity: "1", transform: "translateY(0)" },
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
