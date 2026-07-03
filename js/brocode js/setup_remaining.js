const fs = require('fs');
const path = require('path');

const topics = [
    "46. nested objects",
    "47. arrays of objects",
    "48. sorting",
    "49. shuffle an array",
    "50. dates",
    "51. closures",
    "52. setTimeout()",
    "53. digital clock program",
    "54. stopwatch program",
    "55. es6 modules",
    "56. asynchronous code",
    "57. error handling",
    "58. calculator program",
    "59. what is the DOM?",
    "60. element selectors",
    "61. dom navigation",
    "62. add & change html",
    "63. mouse events",
    "64. key events",
    "65. hide/show html",
    "66. nodelists",
    "67. classlist",
    "68. rock paper scissors",
    "69. image slider",
    "70. callback hell?",
    "71. promises",
    "72. async/await",
    "73. json files",
    "74. fetch data from an api",
    "75. weather app project"
];

const baseDir = "c:\\Users\\anilk\\Desktop\\Qspiders\\webd\\js\\brocode js";

topics.forEach(topic => {
    const dir = path.join(baseDir, topic);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${topic}</title>
    <link rel="icon" href="data:,">
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <h1 id="myH1">welcome</h1>
    <script src="index.js"></script>
</body>
</html>
`;

    fs.writeFileSync(path.join(dir, "index.html"), htmlContent, 'utf-8');
    fs.writeFileSync(path.join(dir, "index.js"), `// ${topic}\n`, 'utf-8');
    fs.writeFileSync(path.join(dir, "index.css"), "/* CSS Stylesheet */\n", 'utf-8');
});

console.log("Remaining topics setup completed successfully!");
