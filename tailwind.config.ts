// tailwind.config.js
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure the paths to all of your template files
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Use the 'dark' class strategy for theme switching
  darkMode: 'class',
  theme: {
    extend: {
      // === Migrated from @theme block ===
      colors: {
        // Success & Destructive (from --color-* variables)
        success: {
          100: 'var(--color-success-100)', // or directly '#49de50'
          200: 'var(--color-success-200)', // or directly '#42c748'
        },
        destructive: {
          100: 'var(--color-destructive-100)', // or directly '#f75353'
          200: 'var(--color-destructive-200)', // or directly '#c44141'
          // Also add the oklch version used in .dark
          DEFAULT: 'oklch(var(--destructive))',
          // No foreground defined, assuming you might need one later
        },
        // Primary (from --color-* variables)
        primary: {
          100: 'var(--color-primary-100)', // or directly '#dddfff'
          200: 'var(--color-primary-200)', // or directly '#cac5fe'
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))',
        },
        // Light (from --color-* variables)
        light: {
          100: 'var(--color-light-100)', // or directly '#d6e0ff'
          400: 'var(--color-light-400)', // or directly '#6870a6'
          600: 'var(--color-light-600)', // or directly '#4f557d'
          800: 'var(--color-light-800)', // or directly '#24273a'
        },
        // Dark (from --color-* variables)
        dark: {
          100: 'var(--color-dark-100)', // or directly '#020408'
          200: 'var(--color-dark-200)', // or directly '#27282f'
          300: 'var(--color-dark-300)', // or directly '#242633'
        },
        // Mapped from :root/.dark CSS variables (via @theme inline)
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted))',
          foreground: 'oklch(var(--muted-foreground))', // Note: .dark uses var(--light-100) here
        },
        accent: {
          DEFAULT: 'oklch(var(--accent))',
          foreground: 'oklch(var(--accent-foreground))',
        },
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring))',
        // Chart colors
        chart: {
          1: 'oklch(var(--chart-1))',
          2: 'oklch(var(--chart-2))',
          3: 'oklch(var(--chart-3))',
          4: 'oklch(var(--chart-4))',
          5: 'oklch(var(--chart-5))',
        },
         // Sidebar colors
        sidebar: {
          DEFAULT: 'oklch(var(--sidebar))',
          foreground: 'oklch(var(--sidebar-foreground))',
          primary: {
             DEFAULT: 'oklch(var(--sidebar-primary))',
             foreground: 'oklch(var(--sidebar-primary-foreground))',
          },
          accent: {
             DEFAULT: 'oklch(var(--sidebar-accent))',
             foreground: 'oklch(var(--sidebar-accent-foreground))',
          },
          border: 'oklch(var(--sidebar-border))',
          ring: 'oklch(var(--sidebar-ring))',
        },
      },
      fontFamily: {
        // Migrated from @theme block
        'mona-sans': ['var(--font-mona-sans)', 'sans-serif'], // Use the CSS var
      },
      backgroundImage: {
        // Migrated from @theme block
        'pattern': 'var(--bg-pattern)', // Use the CSS var
        // Migrated from @utility directives
        'dark-gradient': 'linear-gradient(to bottom, #1A1C20, #08090D)',
        'border-gradient': 'linear-gradient(to bottom, #4B4D4F, #4B4D4F33)',
        'blue-gradient-dark': 'linear-gradient(to bottom, #171532, #08090D)',
        'blue-gradient': 'linear-gradient(to left, #FFFFFF, #CAC5FE)',
      },
      borderRadius: {
        // Migrated from @theme inline (using CSS vars defined in :root)
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
      },
      // === Migrated from @keyframes ===
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(5px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        // Add keyframes used by tailwindcss-animate if needed explicitly,
        // but usually the plugin handles this.
      },
      // === Migrated from @utility animate-fadeIn ===
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
    },
  },
  plugins: [
    // === Migrated from @plugin "tailwindcss-animate" ===
    require('tailwindcss-animate'),

    // === Migrated from @custom-variant dark (&:is(.dark *)); ===
    plugin(function({ addVariant }:any) {
      // Add a `dark:` variant based on the `.dark` class existing on an ancestor
      addVariant('dark', ':is(.dark &)');
      // Note: The original `&:is(.dark *)` selector is slightly different. It targets any descendant of `.dark`.
      // The common `darkMode: 'class'` strategy targets elements *when* `.dark` is present on an ancestor (usually html or body).
      // If you *specifically* needed the original behavior (styling `.a` inside `.dark .b .a`),
      // you might need a more complex variant, but ':is(.dark &)' is the standard and usually desired behavior.
    }),

    // Optional: Plugin to add custom utilities if preferred over CSS layer
    // plugin(function({ addUtilities }) {
    //   addUtilities({
    //     '.flex-center': {
    //       '@apply flex items-center justify-center': {},
    //     },
    //     '.pattern': { // If you don't want to use bg-pattern utility
    //        '@apply bg-[url("/pattern.png")] bg-top bg-no-repeat': {}
    //     }
    //     // Add other @utility directives here if needed
    //   })
    // })
  ],
};