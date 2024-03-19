const express = require('express')
const app = express()
const path = require('path')
const clanTag = "UNTY" // put your clan tag here :D
const port = 3000

app.get('/', (req, res) => {
    res.send('Clan API Overlay')
});

app.get('/api/clans', async (req, res) => {
    try {
        const apiUrl = `https://biggamesapi.io/api/clans?page=1&pageSize=100&sort=Points&sortOrder=desc&unix=${Math.round(new Date() / 10)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/ids', async (req, res) => {
    try {
        const apiUrl = `https://users.roblox.com/v1/users/${req.query.id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get(`/api/:clan`, async (req, res) => {
    try {
        const apiUrl = `https://biggamesapi.io/api/clan/${req.params.clan}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

console.log(`[WEB MOUNT] Clan Overlay API has loaded`)
app.listen(port)
