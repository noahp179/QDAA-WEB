
# Project Name

## Introduction

## Setup
Follow these steps to get the project up and running on your local machine:

### Prerequisites
Ensure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Installation
1. **Clone the Repository**
   Clone the project repository to your local machine using the following command:
   ```bash
   git clone [https://github.com/noahp179/QDAA-WEB]
   ```

2. **Navigate to the Project Directory**
   Change into the project directory:
   ```bash
   cd [QDAA-WEB]
   ```

3. **Install Dependencies**
   Install the necessary Node.js packages:
   ```bash
   npm install
   ```

4. **Compile Tailwind CSS**
   Generate the CSS file from Tailwind source files:
   ```bash
   npx tailwindcss -i ./css/styles.css -o ./dist/styles.css --minify
   ```

### Running the Project
Open the `index.html` file in your web browser to view the project. Or set up a local development server:
```bash
npx http-server
```
This starts a simple HTTP server to serve static files.

### Important Commands
- **Build CSS**: To rebuild the Tailwind CSS after making changes:
  ```bash
  npx tailwindcss -i ./css/styles.css -o ./dist/styles.css --minify
  ```
- **Update Dependencies**: Keep your project's dependencies up to date with:
  ```bash
  npm update
  ```

## Compile Tailwind CSS
To compile Tailwind CSS into a minified CSS file, run the following command:
```bash
npx tailwindcss -i ./css/styles.css -o ./dist/styles.css --minify
```

## Usage

## Contributing

## License