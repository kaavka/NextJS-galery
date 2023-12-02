Next Galery
Overview
next-galery is a Next.js project for building a beautiful image gallery using the Unsplash API. It leverages modern web technologies, such as React for the frontend, Next.js for server-side rendering, and various tools for styling and image optimization.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/next-galery.git
cd next-galery
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Visit http://localhost:3000 in your browser to see the gallery in action.

RootLayout
The RootLayout component serves as the foundational layout for my Next.js application. It includes the application's metadata, global styles, and the Header and Footer components.

Header
The Header component consists of three sections: logo, search bar, and navigation bar. It is in stiky position and transparent so it could be always accessible for user but dont prevent him form enjoying the pics.

Footer
The Footer component displays a simple footer with the Unsplash logo, a title, and links to various sections.

Photos Page
The Photos page is a Next.js component that displays a collection of photos fetched from the Unsplash API. It provides features for pagination, dynamic column layouts, and search functionality.

Features
Dynamic Column Layout: The page supports both three and five columns per page, providing a visually appealing grid layout for images.

Search Functionality: Users can perform searches based on a query parameter, enhancing the user experience by allowing them to find specific photos.

Pagination: The component includes a pagination feature, allowing users to navigate through multiple pages of photo results.

Photo Page
The Photo page is a Next.js component designed to display detailed information about a specific photo fetched from the Unsplash API. It provides an immersive experience by showcasing the full-sized image, along with details such as downloads, likes, and associated tags.

Features
Full-Sized Image: Displays the high-resolution version of the photo using the BigImage component.

Details Section: Presents key details about the photo, including the number of downloads, likes, author information, and a description.

Tag Section: Lists tags associated with the photo, providing additional context and search functionality.

Color Information: Retrieves and utilizes color information from the Unsplash API to enhance the visual presentation.

Scripts
dev: Start the development server.
build: Build the project for production.
start: Start the production server.
lint: Lint the project using ESLint.
format: Format the code using Prettier.
Dependencies
@fortawesome/fontawesome-free: Icon library for font icons.
@fortawesome/react-fontawesome: React component for Font Awesome icons.
classnames: Utility for conditionally joining class names.
next: Framework for building React applications.
plaiceholder: Library for generating blurred image placeholders.
react: JavaScript library for building user interfaces.
react-dom: React's entry point for the DOM rendering.
react-loading-skeleton: Skeleton loader for loading content.
sharp: High-performance image processing library.
uuid: Library for generating unique identifiers.
Development Dependencies
@types/node, @types/react, @types/react-dom: TypeScript type definitions.
@types/uuid: Type definitions for the uuid library.
eslint, eslint-config-next: Linting tools for maintaining code quality.
eslint-config-prettier, eslint-plugin-prettier: ESLint and Prettier integration.
prettier: Code formatter for consistent code styling.
sass: CSS preprocessor for styling.
stylelint, stylelint-config-standard, stylelint-config-standard-scss: Linting tools for maintaining style consistency.
typescript: TypeScript for static typing.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
