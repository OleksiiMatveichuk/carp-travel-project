/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // images: {
  //   dangerouslyAllowSVG: true,
  //   contentDispositionType: "attachment",
  //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  // },

  theme: {
    colors: {
      prime: "rgba(255, 255, 255, 0.10)",
      "btn-hover": "rgba(255, 255, 255, 0.20)",
      "menu-bg": "rgba(1, 10, 5, 0.75)",
      input: "rgba(255, 255, 255, 0.05)",
      "input-error": "rgba(255, 87, 87, 1)",
      white: "var(--text-color)",
    },
    extend: {
      backgroundImage: {
        hero: "var(--bg-light), var(--bg-hero-img)",
        "we-offer-1": "var(--bg-we-offer-1-img)",
        "we-offer-2": "var(--bg-we-offer-2-img)",
        "we-offer-3": "var(--bg-we-offer-3-img)",
        "we-offer-4": "var(--bg-we-offer-4-img)",
        "we-offer-5": "var(--bg-we-offer-5-img)",
        "contact-us": "var(--bg-darck), var(--bg-contact-us-img)",
        offer: "var(--bg-light)",
      },
    },
    // container: {
    //   padding: {
    //     DEFAULT: "1.25rem",
    //     md: "2rem",
    //     xl: "1.25rem",
    //   },
    //   center: true,
    // },
    // screens: {
    //   xs: "320px",
    //   md: "768px",
    //   xl: "1280px",
    // },
  },
  plugins: [],
};
