const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Run build
console.log('Running build...');
execSync('npm run build', { stdio: 'inherit' });

// Ensure the dist directory exists
const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  console.error('Build failed: dist directory not found');
  process.exit(1);
}

console.log('Build completed successfully');
