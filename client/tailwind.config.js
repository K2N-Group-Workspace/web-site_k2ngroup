/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "bg-gradient":
          "linear-gradient(180deg, rgba(9, 82, 40, 0) 0%, rgba(0, 53, 71, 0.54) 50%, #015E54 100%)",
      },
      borderRadius: {
        lg: "1.5rem",
        md: "1rem",
        sm: "0.5rem",
      },
      boxShadow: {
        light:
          "0 2px 4px rgba(21, 32, 51, 0.1), 0 4px 8px rgba(21, 32, 51, 0.1)",
        "dark-mode":
          "0 2px 4px rgba(255, 255, 255, 0.1), 0 4px 8px rgba(255, 255, 255, 0.1)",
      },
      lineHeight: {
        "extra-tight": "1.1",
        "extra-loose": "2.5",
      },
      colors: {
        primary: "#3FD959 ",
        secondary: "#298C39",
        destructive: "#f44336",
        "destructive-light": "#f6685e",
        "destructive-dark": "#c62828",
        success: "#4caf50",
        "success-light": "#81c784",
        "success-dark": "#388e3c",
        warning: "#ff9800",
        "warning-light": "#ffb74d",
        "warning-dark": "#f57c00",
        info: "#2196f3",
        "info-light": "#64b5f6",
        "info-dark": "#1976d2",
        dark: "#152033",
        primary: {
          text: "#152033",
          "text-dark": "#FFFFFF",
        },
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [animate],
};
