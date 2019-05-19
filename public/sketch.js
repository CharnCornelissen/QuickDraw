let x, y;
let strokeIndex = 0;
let index = 0;
let cat;
let prevx, prevy;

function setup() {
    createCanvas(255, 255);
    background(255);

    loadJSON('/cat', gotCat);
}

function draw() {
    if (cat) {
        let x = cat[strokeIndex][0][index];
        let y = cat[strokeIndex][1][index];
        stroke(0);
        strokeWeight(3);
        if (prevx !== undefined) {
            line(prevx, prevy, x, y);
        }
        point(x, y)
        index++;
        if (index >= cat[strokeIndex][0].length) {
            strokeIndex++;
            prevx = undefined;
            prevy = undefined;
            index = 0;
            if (strokeIndex === cat.length) {
                cat = undefined;
                strokeIndex = 0;
                loadJSON('/cat', gotCat);
            }
        } else {
            prevx = x;
            prevy = y;
        }
    }
}

function gotCat(data) {
    background(255);
    cat = data.drawing;
    // console.log(data);
    // let drawing = data.drawing;
    // console.log(drawing);

    // for (let path of drawing) {
    //     noFill();
    //     stroke(0);
    //     strokeWeight(3);
    //     beginShape();
    //     for (let i = 0; i < path[0].length; i++) {
    //         let x = path[0][i];
    //         let y = path[1][i];
    //         vertex(x, y);
    //     }
    //     endShape();
    // }
    // loadJSON('/cat', gotRainbow);
}