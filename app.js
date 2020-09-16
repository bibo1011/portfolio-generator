const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
//     console.log('================');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// 1st method
// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());

// 2nd method
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Jane', 'janehub'));

// console.log(name, github);
// console.log(generatePage(name, github));
fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});



