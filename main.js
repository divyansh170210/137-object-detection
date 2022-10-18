img = "";

function preload() {
    img = loadImage("cr7_lm10.jpg")
    }
    
    function setup(){
        canvas = createCanvas(640, 420);
        canvas.center();
    }
    
    function draw() {
        image(img, 0, 0, 640, 420);
        fill("#FF099");
        text("LM10", 45, 75);
        noFill();
        stroke("#00ff00");
        rect(290, 10, 260, 405);
    
        fill("#00FFF0");
        text("CR7", 320, 120);
        noFill();
        stroke("#00fff0");
        rect(40, 70, 270, 340)
    }
    
    