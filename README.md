# CakerBaker

UI SETUP
USE VS CODE....

This UI is created using Next-JS and Next Auth and contains a working login system.

To use this ensure you have Node.JS 15 or greater installed and Docker Desktop.

In the terminal navigate to the UI folder and run "npm install" and then "npm run dev"

The application should now be running in http://localhost:3000

The auth provider is FusionAuth. To bring the auth provider online ensure you have docker desktop installed and then
in the ui folder Right Click on the file named docker-compose yaml and choose Compose Up.

In here you will have to configure the fusion auth using these settings:
https://next-auth.js.org/providers/fusionauth
https://fusionauth.io/docs/v1/tech/5-minute-setup-guide

In the OAuth settings for your application, configure the following.

Redirect URL
https://localhost:3000/api/auth/callback/fusionauth
Enabled grants
Make sure Authorization Code is enabled.
You will need to make sure the signing algorithm is RS256, you can create an RS256 key pair by going to Settings, Key Master, generate RSA and choosing SHA-256 as algorithm. After that, go to the JWT settings of your application and select this key as Access Token signing key and Id Token signing key.

Database Setup

Express Setup
