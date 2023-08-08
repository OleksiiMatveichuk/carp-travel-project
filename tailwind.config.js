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
    },
    extend: {
      backgroundImage: {
        hero: "var(--bg-hero-img)",
        "we-offer": "var(--bg-we-offer-img)",
        "contact-us": "var(--bg-contact-us-img)",
        light: "var(--bg-light)",
      },
    },
  },
  plugins: [],
};
