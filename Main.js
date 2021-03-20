let box = "<div class='box'>"
let closeDiv = "</div>"
let sizeBox = 8;
let box1 = "<div class='box1'>"
let box2 = "<div class='box2'>"

function writeBox1() {
    document.write(box1)
}

function writeBox2() {
    document.write(box2)
}

function writeBox() {
    document.write(box)
}

function endDiv() {
    document.write(closeDiv)
}

function createBox(sizeBox) {

    /*document.write("<div class='name'><a CLASS='YES'>CHESS TABLE IS OVER</a><div><a class='YES'>HERE IF YOU ARE BLIND:</a></div></div></div>")*/
    /*For blind people*/
    writeBox()
    for (let i = 0; i < sizeBox; i++) {
        writeBox1()
        for (let j = 0; j < sizeBox; j++) {
            writeBox2()
            endDiv()
        }
        endDiv()
    }
    endDiv()
}

createBox(8)