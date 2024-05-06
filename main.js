Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function captureImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image src="'+data_uri+'"/>';  
      });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DHX1s761m/',model_loaded);

function model_loaded() {
    console.log('Model Loaded');
  }

  
  function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
   }


  function gotResult(error,results){
    if (error){
      console.error(error)
    } else {
     console.log(results);
     document.getElementById("answer").innerHTML = results[0].label;
     document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
  }