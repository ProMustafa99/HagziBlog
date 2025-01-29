import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azurePulse: "#3270fc",
        background: '#f5f7fb',
        oceandepth: '#144273',
        oceandepthHover: '#0f3a61',
        dustyhorizon: '#878c9f',
        cloudwhisper: '#f5f6fa',
        duskylavender: '#888da0',
      },
    },
  },
  plugins: [],
} satisfies Config;
