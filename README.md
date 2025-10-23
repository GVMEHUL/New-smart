# Smart Recipe Generator

Smart Recipe Generator is a React single-page application that suggests recipes based on the ingredients you have. Users can input ingredients manually or upload photos for automatic recognition and specify dietary preferences like vegetarian, vegan, or gluten-free.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
- [Build](#build)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

## About
Smart Recipe Generator is a web application designed to help users create delicious and personalized recipes based on the ingredients they have at hand. It allows users to input ingredients manually or upload photos for automatic ingredient recognition. The app accommodates dietary preferences such as vegetarian, vegan, or gluten-free, ensuring tailored recipe suggestions.

The system uses a recipe matching algorithm to generate multiple recipe options, providing detailed cooking instructions, nutritional information, and estimated calories. Users can filter recipes by difficulty, cooking time, and dietary restrictions, as well as adjust serving sizes. The platform includes at least 20 recipes covering a variety of cuisines, with complete ingredient lists, preparation steps, and nutrition details.

Smart Recipe Generator enhances user engagement by enabling recipe ratings, saving favorite recipes, and providing personalized suggestions based on previous interactions. Its responsive design ensures a seamless experience across desktop and mobile devices. The project emphasizes clean, production-quality code, proper error handling, and intuitive UI/UX.

## Features
- Input ingredients manually or via image upload
- Specify dietary preferences (vegetarian, vegan, gluten-free)
- Generate multiple recipe suggestions with instructions
- Display nutritional information (calories, protein, etc.)
- Filter recipes by difficulty, cooking time, and dietary restrictions
- Adjust serving sizes
- Rate and save favorite recipes
- Personalized recipe suggestions based on user ratings
- Mobile-responsive UI

## Tech Stack
- Frontend: React, Vite
- Styling: CSS / Tailwind CSS
- Image Recognition: TensorFlow.js (or other AI/ML API used)
- Hosting: Netlify

## Run Locally
Clone the project:

```bash
git clone https://github.com/GVMEHUL/smart-recipe-generator.git
cd smart-recipe-generator
npm install
npm run dev
