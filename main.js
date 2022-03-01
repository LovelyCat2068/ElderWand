song = "";
rightwrX = 0;
rightwrY = 0;
leftwrX = 0;
leftwrY = 0;
function preload(){
    song = loadSound("Harry Potter.mp3");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    Co = ml5.poseNet(video, modelL0aded);
    Co.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
        rightwrX = results[0].pose.rightWrist.x;
        rightwrY = results[0].pose.rightWrist.y;
        leftwrX = results[0].pose.leftWrist.x;
        leftwrY = results[0].pose.leftWrist.y;
    }
}

function modelL0aded(){
    console.log("Posenet is initialised");
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function pumpkinPasties(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}