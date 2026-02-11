# VideoSDK Dual Room Relay Demo

## Overview

This project demonstrates:

1. Two active VideoSDK rooms
2. Seamless switching
3. Media relay between rooms

A participant's media is cloned and mirrored into another room,
simulating relay behavior.

---

## Setup

npm install
npm start

Add VideoSDK token in config.js

---

## Normal Switching

User leaves Room A and joins Room B.
Connection renegotiates.

---

## Media Relay

Media tracks are cloned using WebRTC track cloning.

Participant remains active in Room A
while relayed media appears in Room B.

This simulates SFU relay behavior.

---

## Limitations

- True server relay requires backend SFU
- Browser cloning still introduces minimal delay
- WebRTC renegotiation unavoidable
