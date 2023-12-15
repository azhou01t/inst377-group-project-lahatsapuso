const express = require('express');
const bodyParser = require('body-parser');
const supabaseClient = require('@supabase/supabase-js');
const cors = require('cors'); 
const path = require('path'); 
require('dotenv').config();


const app = express();
const port = 3000;
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


const supabaseUrl = 'https://wkwoqigwrujhrxjaouwg.supabase.co' // Add your Supabase URL here
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indrd29xaWd3cnVqaHJ4amFvdXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0OTE3MzYsImV4cCI6MjAxODA2NzczNn0.p3kjYHRg86hRPFMUFFKkhBPL3vYOO8zFuqeAbZCKbyw'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/home.html')); 
});

app.get('/games', async (req, res) => {
    console.log('GET /games');
    try {
        const { data, error } = await supabase
            .from('Game')
            .select('*');

        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while fetching data.' });
            return;
        } else if (data) {
            res.status(200).json(data);
            return;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

app.post('/games', async (req, res) => {
    try {
        console.log('POST / games');
        console.log(`Here's the request body: ${JSON.stringify(req.body)}`);
        var title = req.body.title;
        var price = req.body.price;
        var date = req.body.date;

        console.log(`title: ${title}`);
        console.log(`price: ${price}`);
        console.log(`date: ${date}`);
        console.log("Adding to database");


        // Insert the new customer into the database
        const { data, error } = await supabase
            .from('Game')
            .insert([{ game_title: title, game_price: price, game_date: date }])
            .select('*');

        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while adding the game.' });
            return;
        }

        if (data) {
            res.status(201).json(data); 
            return;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


