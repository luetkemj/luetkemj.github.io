const fs = require('fs');
const path = require('path');

// Directory containing the markdown files
const directoryPath = './dophs'; // Update this with your actual directory

// Function to convert the title to title case
const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Read the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log(`Unable to scan directory: ${err}`);
  }

  // Filter markdown files and process each
  files.forEach(file => {
    if (path.extname(file) === '.md') {
      // Extract the date and title from the filename
      const fileNamePattern = /^(\d{4}-\d{2}-\d{2})-(.+)\.md$/;
      const match = file.match(fileNamePattern);

      if (match) {
        const date = match[1];
        const title = toTitleCase(match[2].replace(/-/g, ' '));

        // Create the front matter content
        const frontMatter = `---
layout: post
title: '${title}'
date: ${date} 06:00:00
categories: dophs
---
`;

        // Read the file content
        const filePath = path.join(directoryPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');

        // Write the new content to the file
        const updatedContent = frontMatter + '\n' + fileContent;
        fs.writeFileSync(filePath, updatedContent, 'utf8');

        console.log(`Updated file: ${file}`);
      } else {
        console.log(`Filename not in the expected format: ${file}`);
      }
    }
  });
});
