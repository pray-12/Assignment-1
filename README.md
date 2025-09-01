# Assignment-2 Counter Application

A React application demonstrating both class and functional components with counter functionality.

## Features

- **Class Component Counter**: Traditional React class component with state management
- **Functional Component Counter**: Modern React functional component using hooks
- **Increment/Decrement Functionality**: Plus (+) and minus (-) buttons for counting
- **Zero Protection**: Counter cannot go below 0
- **Responsive Design**: Beautiful UI that works on all device sizes
- **Modern Styling**: Gradient backgrounds, shadows, and smooth animations

## Components

### ClassCounter.jsx
- Uses React class component with `this.state` and `this.setState`
- Implements increment and decrement methods
- Prevents counter from going below 0

### FunctionalCounter.jsx
- Uses React functional component with `useState` hook
- Implements increment and decrement functions
- Prevents counter from going below 0

## Technologies Used

- React 19.1.1
- Vite (Build tool)
- CSS3 with modern features (Grid, Flexbox, Gradients)
- Responsive design principles

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to the URL shown in the terminal (usually http://localhost:5173)

## Project Structure

```
src/
├── components/
│   ├── ClassCounter.jsx      # Class component counter
│   └── FunctionalCounter.jsx # Functional component counter
├── App.jsx                   # Main application component
├── App.css                   # Application styles
├── main.jsx                  # Application entry point
└── index.css                 # Global styles
```

## Key Features Implementation

- **State Management**: Both components maintain their own count state
- **Event Handling**: Click events for increment/decrement buttons
- **Conditional Rendering**: Decrement button is disabled when count is 0
- **Responsive Layout**: Components display in a row on desktop, stack on mobile
- **Modern UI**: Gradient backgrounds, shadows, hover effects, and smooth transitions

## Assignment Requirements Met

✅ Create an attractive UI
✅ Number cannot be less than 0
✅ Proper heading for Class and Function Components
✅ Show both components in a row
✅ Main heading "Assignment-2 Counter Application"

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
