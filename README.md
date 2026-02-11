# VideoSDK Relay Demo

## Features

- Two rooms: Room A and Room B
- Normal switching
- Media relay (audio/video cloning)

## Setup

npm install
npm start

Add VideoSDK token in config.js

## Relay Explanation

Tracks are cloned using WebRTC `track.clone()`.

The participant stays active in Room A while the cloned
stream appears in Room B, simulating relay behavior.

## Limitations

True relay requires server SFU. This demo simulates relay
at client level.
