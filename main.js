navigator.mediaDevices.getUserMedia({ audio: true });

ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mm0HSDO6-/model.json");

modelReady()
{
    classifier.classify();
    gotResults()
}

gotResults(error, results)
{
    if (error) {
        console.error(error);
    }
}