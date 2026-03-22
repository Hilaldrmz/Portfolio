# CV Download Tracking Setup

## Google Analytics Setup

To enable proper CV download tracking, you need to:

1. **Get your Google Analytics Measurement ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property or use an existing one
   - Go to Admin → Property → Data Streams → Web
   - Copy the "Measurement ID" (format: G-XXXXXXXXXX)

2. **Update the tracking code:**
   - In `index.html`, replace `GA_MEASUREMENT_ID` with your actual Measurement ID
   - The code should look like: `gtag('config', 'G-XXXXXXXXXX');`

3. **Verify tracking:**
   - Open browser developer tools (F12)
   - Go to Network tab
   - Click the "Download CV" button
   - Look for requests to `google-analytics.com` or `googletagmanager.com`

## Features

- **Google Analytics Events:** Tracks CV downloads as custom events
- **Local Counter:** Shows download count in the UI (persisted in localStorage)
- **Console Logging:** Logs download events for debugging

## Event Details

- **Event Name:** `cv_download`
- **Category:** `engagement`
- **Label:** `cv_download`
- **Value:** `1`

## Notes

- The local counter is for demonstration purposes only
- For production, rely on Google Analytics for accurate tracking
- The CV file should be replaced with your actual PDF resume