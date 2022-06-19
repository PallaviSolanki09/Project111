//https://teachablemachine.withgoogle.com/models/utqYjd1Cs/

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(selfie){
        document.getElementById("result").innerHTML="<img id='capture_img' src="+selfie+">";
    });
}

console.log("ml5 version is:",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/utqYjd1Cs/model.json",modelloded);

function modelloded(){
    console.log("Model is loded");
}
