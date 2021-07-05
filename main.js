difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,500);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#969A97');

    textSize(difference);
    fill('#87CEEB');
    text('Hamilton', 50, 400);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX);
    }
}