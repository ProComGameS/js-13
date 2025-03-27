

This repository showcases a web development project built with Gulp to automate essential tasks. The project demonstrates key skills, such as working with SCSS, live browser reloads, vendor prefixing, style optimization.
Features

    🎨 SCSS compilation into CSS for a flexible and efficient styling process.

    🔄 Live browser reloads for seamless development experience.

    🌍 Vendor prefixing for better cross-browser compatibility.

    🛠️ Minimized and optimized CSS files for faster load times.


Folder Structure
project/
│
├── src/               # Source files
│   ├── scss/          # SCSS files
│   │   ├── styles.scss  # Main SCSS file
│   ├── js/            # JavaScript files
│   │   └── script.js    # JS
│   └── index.html     # HTML entry point
│
├── dist/              # Compiled and output files
│   ├── css/           # Compiled CSS
│   ├── js/            # Compiled JavaScript
│   └── index.html     # Output HTML
│
├── gulpfile.js        # Gulp configuration
├── package.json       # Project dependencies
└── README.md          # Project documentation


Getting Started

Follow these steps to set up and run the project locally.
Prerequisites

Make sure you have the following installed on your machine:
Node.js (at least version 14 or higher)
NPM

Setup Instructions

    Clone the repository:
git clone <repository-url>
cd <repository-name>

Install dependencies: Run the following command to install all the required Node.js packages:

npm install


Run the development server: Start the Gulp tasks and open the project in your default browser:

gulp


Tasks and Functionality
Gulp Tasks:

Task Name	      Description
scss	     Compiles SCSS files to CSS and outputs to dist/css
scripts	   Copies JavaScript files to dist/js
prefix	   Adds vendor prefixes to CSS properties
minify	   Minifies CSS for smaller file sizes
serve	     Starts a local server with live reload enabled
default	   Runs scss, scripts, minify, and serve tasks


Usage
SCSS Compilation

Edit your styles in src/scss/styles.scss or src/scss/stars.scss, then run:

gulp scss

The compiled CSS will be available in dist/css.


Live Reload

When using the gulp default task, BrowserSync automatically reloads the page when you make changes to HTML, CSS, or JavaScript files.




Contributing

If you'd like to contribute to the project, feel free to open issues or submit pull requests. Contributions are always welcome!




