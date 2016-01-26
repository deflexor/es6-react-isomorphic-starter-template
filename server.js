import mainRoutes from './src/routes/mainRoutes';
import express  from 'express';
import path from 'path';

const PORT = process.env.PORT || 8000;

let app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use( '/dist', express.static('dist') );

mainRoutes(app);

app.use((req, res) => {
    res.status(404).send('Page not found');
});

export default {
    start: function() {
        app.listen(PORT);
        console.log('Started server on port', PORT);
    }
};
