const express = require('express')
const app = express()
const path = require('path')
const clanTag = "UNTY"

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/overlay.html'));
});

app.get('/overlay.exe', (req, res) => {
    res.sendFile(path.join(__dirname, '/overlay.exe'));
    console.log('Overlay downloaded')
});

app.get('/overlay.zip', (req, res) => {
    res.sendFile(path.join(__dirname, '/overlay.zip'));
    console.log('Overlay downloaded')
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

app.get(`/api/${clanTag}`, async (req, res) => {
    try {
        const apiUrl = `https://biggamesapi.io/api/clan/${clanTag}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const chalk = require('chalk')
console.log(`[WEB MOUNT] Clan Overlay Host has loaded`)
module.exports = {app}