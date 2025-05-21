# Medical Specialists Page

This project is a React-based implementation of a medical specialists page for Vikram Aura healthcare facility. It showcases various medical specialties and doctor profiles with their credentials and expertise.

## Features

- Responsive design that works on both desktop and mobile devices
- Organized sections for different medical specialties
- Detailed doctor profiles with credentials and descriptions
- Call-to-action buttons for booking appointments and learning more

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd medical-specialists-page
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

- `src/` - Source code
  - `components/` - React components
    - `Option01.tsx` - Main component
    - `HeroSection.tsx` - Hero section component
    - `SpecialtiesSection.tsx` - Medical specialties section
    - `SpecialtyIcon.tsx` - Individual specialty icon
    - `DoctorSection.tsx` - Section for a specific specialty
    - `DoctorProfile.tsx` - Individual doctor profile
    - `ActionButton.tsx` - Reusable button component
    - `types.ts` - Type definitions
  - `App.tsx` - App component
  - `main.tsx` - Entry point
  - `index.css` - Global styles

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS

## Notes

- The image URLs in the code are placeholders (https://cdn.builder.io/api/v1/image/assets/TEMP/17d03a30af8e94f24ad57282588f5e1e86ca1ee5?placeholderIfAbsent=true&apiKey=003a4bc7d72843b88f405864f9e7fccf, https://cdn.builder.io/api/v1/image/assets/TEMP/e933e88ec3450e2053e7d0c56198206502bfbf85?placeholderIfAbsent=true&apiKey=003a4bc7d72843b88f405864f9e7fccf, etc.) and should be replaced with actual image URLs before deployment.
- The "use client" directive at the top of component files is included for compatibility with frameworks like Next.js, but doesn't affect functionality in a standard React application.
