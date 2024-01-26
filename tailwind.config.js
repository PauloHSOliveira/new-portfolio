module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#22d3ee',
          secondary: '#5eead4',
          accent: '#f3f4f6',
          neutral: '#ffffff',
          'gray-900': '#363636',
          'base-100': '#2D1B69',
          info: '#53C0F3',
          success: '#71EAD2',
          warning: '#F3CC30',
          error: '#E24056',
        },
      },
    ],
  },
}
