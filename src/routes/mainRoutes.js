import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PlaceholderComponent from '../components/placeholderComponent';

let placeholderComponent = React.createFactory( PlaceholderComponent );

export default function MainRoutes(app) {

    app.get('/', (req, res) => {

        var html = ReactDOMServer.renderToString( placeholderComponent({}) );

        res.render('index.ejs', {reactOutput: html});

    });

}

