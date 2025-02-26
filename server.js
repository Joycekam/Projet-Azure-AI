const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { ComputerVisionClient } = require("@azure/cognitiveservices-computervision");
const { ApiKeyCredentials } = require("@azure/ms-rest-js");

dotenv.config({ path: './config/.env' });

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'publics')));

const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({ inHeader: { "Ocp-Apim-Subscription-Key": process.env.AZURE_COMPUTER_VISION_KEY } }),
  process.env.AZURE_COMPUTER_VISION_ENDPOINT
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/application', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/application.html'));
});

app.get('/apropos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/apropos.html'));
});

app.post('/detect-faces', async (req, res) => {
  try {
    const { imageData } = req.body;
    
    const isBase64 = imageData.startsWith('data:image');
    
    const features = ["Faces"];
    let results;
    
    if (isBase64) {
      results = await computerVisionClient.analyzeImageInStream(
        Buffer.from(imageData.split(',')[1], 'base64'),
        { visualFeatures: features }
      );
    } else {
      results = await computerVisionClient.analyzeImage(imageData, { visualFeatures: features });
    }

    if (results.faces && results.faces.length > 0) {
      res.json({ faces: results.faces });
    } else {
      res.json({ message: "No faces detected" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during face detection" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});