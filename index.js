const { Client } = require('discord-rpc');
const { DETAILS, STATE, LARGE_IMAGE, LARGE_TEXT, SMALL_IMAGE, SMALL_TEXT, BUTTONS } = require('./config');
const checkConfig = require('./helpers/checkConfig');
require("dotenv").config();
checkConfig();
const client = new Client({
    transport: 'ipc'
});

client.on('ready', async () => {
    console.log("Loading Rich Presence...");
    try {
        await client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: {
                details: DETAILS,
                state: STATE,
                timestamps: {
                    start: Date.now()
                },
                assets: { //comment this part if you don't want to add images or comment a specific part
                    large_image: LARGE_IMAGE,
                    large_text: LARGE_TEXT,
                    small_image: SMALL_IMAGE,
                    small_text: SMALL_TEXT
                },
                buttons: BUTTONS
            }
        });
        console.log("Rich Presence loaded successfully");
    } catch (error) {
        console.error("Error loading Rich Presence", error);
    }
});

client.login({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
});