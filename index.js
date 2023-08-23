const { Client } = require('discord-rpc');
require("dotenv").config();

const client = new Client({
    transport: 'ipc'
});

client.on('ready', async () => {
    console.log("Loading Rich Presence...");
    try {
        await client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: {
                details: process.env.DETAILS,
                state: process.env.STATE,
                timestamps: {
                    start: Date.now()
                },
                assets: { //comment this part if you don't want to add images or comment a specific part
                    large_image: process.env.LARGE_IMAGE,
                    large_text: process.env.LARGE_TEXT,
                    small_image: process.env.SMALL_IMAGE,
                    small_text: process.env.SMALL_TEXT
                },
                buttons: [
                    { label: process.env.BUTTON_1_LABEL, url: process.env.BUTTON_1_URL },
                    { label: process.env.BUTTON_2_LABEL, url: process.env.BUTTON_2_URL }
                ]
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