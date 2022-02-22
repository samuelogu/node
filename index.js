/*
let slugify = require('slugify');
const requestIp = require('request-ip');

let text = "Energistically foster e-business best practices for highly.";
let slug = slugify(text);

console.log(slug);

const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req);
    console.log(clientIp);
};*/

const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');
// Creates a client
const client = new textToSpeech.TextToSpeechClient();
async function quickStart() {
    // The text to synthesize
    const text = 'Energetically foster e-business best practices for highly.';

    // Construct the request
    const request = {
        input: {text: text},
        // Select the language and SSML voice gender (optional)
        voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
        // select the type of audio encoding
        audioConfig: {audioEncoding: 'MP3'},
    };

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);
    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile);
    await writeFile('speech.mp3', response.audioContent, 'binary');
    console.log('Audio content written to file: speech.mp3');
}
quickStart();