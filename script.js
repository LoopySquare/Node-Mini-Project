var inquirer = require("inquirer");
var fs = require("fs");

var profile = new Promise(function (resolve, reject) {
    resolve(inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your current job title?"
        },
        {
            type: "input",
            name: "location",
            message: "Where do you live?"
        },
        {
            type: "input",
            name: "bio",
            message: "Provide a short bio"
        },
        {
            type: "input",
            name: "linkedin",
            message: "Provide your Linkedin url"
        },
        {
            type: "input",
            name: "github",
            message: "Provide your Github url"
        },
        
    ])
    )
});

profile.then(function(data){
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.css" />
        <link rel="stylesheet" type="text/css" href="./style.css">
    </head>
    <body>
        <section class="hero is-success is-halfheight has-text-centered">
            <div class="hero-body">
                <div class="">
                <p class="title">
                    Hello, my name is
                </p>
                <p class="title">
                    ${data.name}
                </p>
                <p class="subtitle">
                    I am a ${data.title}
                </p>
                </div>
            </div>
        </section>
    <h1 class="profile">${data.name}</h1>
    <div class="profile">${data.title}</div>
    <div class="profile">${data.age}</div>
    <div class="profile">${data.location}</div>
    <div class="profile">${data.bio}</div>
    <script type="text/javascript" src="script.js"></script>
    </body>
    </html>  
`;
    fs.writeFile('index.html', html, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Success!');
    });
})


//------------------------------------------------------------------------------------
// inquirer.prompt([
//     {
//         type: "input",
//         name: "name",
//         message: "What is your name?"
//     },
//     {
//         type: "input",
//         name: "title",
//         message: "What is your title?"
//     },
//     {
//         type: "input",
//         name: "age",
//         message: "How old are you?"
//     },
//     {
//         type: "input",
//         name: "job",
//         message: "Describe your dream job"
//     },
//     {
//         type: "list",
//         name: "mastery",
//         message: "what would you say is your mastery level of this material?",
//         choices: [
//             "no clue what I am doing",
//             "some of it looks familiar",
//             "I understand the concepts",
//             "I can apply the concepts to build a functioning program",
//             "I can fully design and build applications from scratch"
//         ]
//     }
// ]).then(function (data) {
//     console.log(data.age)
//     const profile = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Document</title>
//         <link rel="stylesheet" type="text/css" href="./style.css">
//     </head>
//     <body>
//     <h1 class="profile">${data.name}</h1>
//     <div class="profile">${data.title}</div>
//     <div class="profile">${data.age}</div>
//     <div class="profile">${data.mastery}</div>
//     <script type="text/javascript" src="script.js"></script>
//     </body>
//     </html>  
// `;
//     fs.writeFile('index.html', profile, function (err) {
//         if (err) {
//             return console.log(err);
//         }

//         console.log('Success!');
//     });
// });

