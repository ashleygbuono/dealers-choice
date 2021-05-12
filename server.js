const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use((req, res, next)=> {
    next();
});

app.get('/assets/styles/css', (req, res, next)=> {
    res.sendFile(path.join(__dirname, 'assets/styles.css'));
});

const movies = [
    {id: 'the-fast-and-the-furious', name: 'The Fast and the Furious', pic: 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/the-fast-and-the-furious-poster.jpg?itok=S9Xyx-bk'},
    {id: '2fast-2furious', name: '2 Fast 2 Furious', pic: 'https://static.rogerebert.com/uploads/movie/movie_poster/2-fast-2-furious-2003/large_3CrNPUulPGbsJIH2ZnLYomGIVrk.jpg'},
    {id: 'tokyo-drift', name: 'The Fast and the Furious: Tokyo Drift', pic: 'https://flxt.tmsimg.com/assets/p159790_p_v10_an.jpg'},
    {id: 'fast-&-furious', name: 'Fast & Furious', pic: 'https://flxt.tmsimg.com/assets/p188702_p_v13_bf.jpg'},
    {id: 'fast-five', name: 'Fast Five', pic: 'https://flxt.tmsimg.com/assets/p8338313_p_v10_bb.jpg'},
    {id: 'fast-and-furious-6', name: 'Fast & Furious 6', pic: 'https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_.jpg'},
    {id: 'furious-7', name: 'Furious 7', pic: 'https://flxt.tmsimg.com/assets/p10679969_p_v10_av.jpg'},
    {id: 'the-fate-of-the-furious', name: 'The Fate of the Furious', pic: 'https://i5.walmartimages.com/asr/6bc90059-f329-48ad-ba9a-79435857b59a.0e0a281bfc829b6798969f31f03ca958.jpeg'},
    {id: 'hobbs-&-shaw', name: 'Fast & Furious Presents: Hobbs and Shaw', pic: 'https://img01.mgo-images.com/image/thumbnail/v2/content/MMV3C85D42E8C736DBF7405F03EFA645CA8C.jpeg'},
];

const  CSs = [
    {id: 'fast-&-furious-9', name: 'Fast & Furious 9', pic: 'https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg'},
    {id: 'fast-&-furious-10', name: 'Fast & Furious 10', pic: 'https://i.pinimg.com/originals/b6/59/4e/b6594e3ad9df34846c7f344d0292ce22.png'},
];

app.get('/', (req, res, next)=> {
    res.send(`
    <html>
        <head>
            <link rel='stylesheet' href='/assets/styles.css' />
            <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
        </head>
        <body>
            <nav>
            <a href='/' class='selected'>Home</a>
            <a href='/movies'>Movies</a>
            <a href='/coming-soon'>Coming Soon</a>
            </nav>
            <img src="https://www.vippng.com/png/full/329-3293723_the-fast-and-the-furious-graphics.png" alt=" " width="1000" height="400" class='pic'></img>
        </body>
    </html>
    `);
});


app.get('/movies', (req, res, next)=> {
    res.send(`
    <html>
        <head>
            <link rel='stylesheet' href='/assets/styles.css' />
            <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
        </head>
        <body>
            <nav>
            <a href='/'>Home</a>
            <a href='/movies' class='selected'>Movies</a>
            <a href='/coming-soon'>Coming Soon</a>
            </nav>
            <ul>
            ${
                movies.map(movie => {
                    return `<li>
                    <a href='/movies/${movie.id}'>
                    ${movie.name}
                    </li>`;
                }).join('')
            }
            </ul>
        </body>
    </html>
    `);
});

app.get('/movies/:id', (req, res, next)=> {
    res.send(`
    <html>
        <head>
            <link rel='stylesheet' href='/assets/styles.css' />
            <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
        </head>
        <body>
            <nav>
            <a href='/'>Home</a>
            <a href='/movies' class='selected'>Movies</a>
            <a href='/coming-soon'>Coming Soon</a>
            </nav>
            <ul>
            ${
                movies.filter(movie => movie.id === req.params.id).map(movie => {
                    return `<li>
                    <a href='/movies/${movie.id}'>
                    ${movie.name}
                    <div><img src="${movie.pic}" alt=" " width="250" height="350"></img></div>
                    </li>`;
                }).join('')
            }
            </ul>
        </body>
    </html>
    `);
});


app.get('/coming-soon', (req, res, next)=> {
    res.send(`
    <html>
        <head>
            <link rel='stylesheet' href='/assets/styles.css' />
            <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
        </head>
        <body>
            <nav>
            <a href='/'>Home</a>
            <a href='/movies'>Movies</a>
            <a href='/coming-soon' class='selected'>Coming Soon</a>
            </nav>
            <ul>
            ${
                CSs.map(CS => {
                    return `<li>
                    <a href='/coming-soon/${CS.id}'>
                    ${CS.name}
                    </li>`;
                }).join('')
            }
            </ul>
        </body>
    </html>
    `);
});

app.get('/coming-soon/:id', (req, res, next)=> {
    res.send(`
    <html>
        <head>
            <link rel='stylesheet' href='/assets/styles.css' />
            <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
        </head>
        <body>
            <nav>
            <a href='/'>Home</a>
            <a href='/movies'>Movies</a>
            <a href='/coming-soon' class='selected'>Coming Soon</a>
            </nav>
            <ul>
            ${
                CSs.filter(CS => CS.id === req.params.id).map(CS => {
                    return `<li>
                    <a href='/coming-soon/${CS.id}'>
                    ${CS.name}
                    <div><img src="${CS.pic}" alt=" " width="250" height="350"></img></div>
                    </li>`;
                }).join('')
            }
            </ul>
        </body>
    </html>
    `);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> {

});