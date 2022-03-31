noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,500);
    canvas.position(560,130);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialized!");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.y;
        difference=floor(leftWristX-rightWristX);
        console.log("rightWristX="+rightWristX+"leftWristX="+leftWristX+"difference="+difference);
    }
}

function draw(){
    background("#227799");
    fill("#997722");
    stroke("#237596");
    textSize(difference);
    text('Kantan', noseX, noseY);
}