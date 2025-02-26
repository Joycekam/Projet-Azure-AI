// Fonction pour démarrer la caméra
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.autoplay = true;
        videoElement.id = 'cameraFeed';
        const canvas = document.createElement('canvas');
        canvas.id = 'cameraCanvas';
        document.getElementById("card-body").appendChild(canvas);

        const ctx = canvas.getContext('2d');

        videoElement.addEventListener('loadedmetadata', () => {
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
        });

        function drawVideo() {
            ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            requestAnimationFrame(drawVideo);
        }

        videoElement.addEventListener('play', () => {
            drawVideo();
        });

        return videoElement;
    } catch (error) {
        console.error("Erreur d'accès à la caméra : ", error);
        return null;
    }
}

// Fonction pour capturer une image depuis le canvas
function captureImage() {
    const canvas = document.getElementById('cameraCanvas');
    return canvas.toDataURL('image/jpeg');
}

// Fonction pour envoyer l'image au serveur pour la détection faciale
async function detectFaces(imageData) {
    try {
        const response = await fetch('/detect-faces', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageData }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Fonction pour mettre à jour l'interface utilisateur avec les résultats
function updateUI(result) {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        if (result && result.faces && result.faces.length > 0) {
            resultElement.innerHTML = `Nombre de visages détectés : ${result.faces.length}<br><br>`;
            result.faces.forEach((face, index) => {
                resultElement.innerHTML += `Visage ${index + 1}:<br>`;
                if (face.age) resultElement.innerHTML += `Âge estimé: ${face.age}<br>`;
                if (face.gender) resultElement.innerHTML += `Genre: ${face.gender}<br>`;
                if (face.emotion) {
                    resultElement.innerHTML += 'Émotions:<br>';
                    Object.entries(face.emotion).forEach(([emotion, score]) => {
                        resultElement.innerHTML += `${emotion}: ${score.toFixed(2)}<br>`;
                    });
                }
                resultElement.innerHTML += '<br>';
            });
        } else {
            resultElement.textContent = "Aucun visage détecté dans l'image.";
        }
    }
}

// Fonction principale
async function main() {
    const videoElement = await startCamera();
    if (!videoElement) return;

    const analyzeButton = document.createElement('button');
    analyzeButton.textContent = "Analyser le visage";
    analyzeButton.onclick = async () => {
        const imageData = captureImage();
        const result = await detectFaces(imageData);
        updateUI(result);
    };
    document.getElementById("card-body").appendChild(analyzeButton);

    const resultElement = document.createElement('div');
    resultElement.id = 'result';
    document.getElementById("card-body").appendChild(resultElement);
}

// Exécuter la fonction principale
main();