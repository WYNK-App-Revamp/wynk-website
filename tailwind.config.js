/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      wynkPurple: {
        100: '#EBEBF9',
        200: '#211E8A',
      },
      footerBackground: '#1B2124',
      wynkOffWhite: '#F9F9F9',
      wynkGrey: '#667085',
      captainDashboardRed: '#E74C4D'
    }
  },
};
export const plugins = [];

