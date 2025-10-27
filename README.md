# Glorify - Chrome Extension

A beautiful Chrome extension that displays inspirational Bible verses with stunning background images from Unsplash.

## Recent Modernization (2024)

This project has been completely overhauled and modernized:

### ✅ What's Been Updated

- **React 18**: Upgraded from React 16 to React 18 with modern APIs
- **Functional Components**: Converted all class components to functional components with hooks
- **Modern Hooks**: Using useState, useEffect, useCallback, useRef, and React.memo
- **Chrome Extension Manifest V3**: Updated from deprecated Manifest V2
- **Improved Error Handling**: Added proper error states and retry functionality
- **Performance Optimization**: Added React.memo, useCallback for better performance
- **Modern JavaScript**: Updated to use async/await, proper error handling
- **Security Improvements**: Added rel="noopener noreferrer" to external links
- **Accessibility**: Improved alt text and semantic HTML

### 🚀 Features

- Beautiful landscape images from Unsplash
- Inspirational Bible verses (with fallback content)
- Responsive design that adapts to different screen sizes
- Loading states with smooth animations
- Error handling with retry functionality
- Chrome extension for new tab replacement

### 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### 📦 Chrome Extension Installation

1. Build the project: `npm run build`
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the `build` folder
5. The extension will now replace your new tab page

### 🔧 Technical Details

- **React 18.2.0** with createRoot API
- **Modern ES6+** features and async/await
- **Chrome Extension Manifest V3** compatible
- **Responsive CSS** with modern flexbox/grid
- **Performance optimized** with React.memo and useCallback
- **Error boundaries** and fallback content

### 📝 Notes

- The Bible verse API has been updated with fallback content for reliability
- All external links include proper security attributes
- The extension is now compatible with modern Chrome versions
- Performance has been significantly improved with modern React patterns
