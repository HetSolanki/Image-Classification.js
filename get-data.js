const tf = require("@tensorflow/tfjs-node-gpu");
const fs = require("fs");
const path = require("path");

const trainImagesDir = "./data/train";
const testImagesDir = "./data/test";

let trainData, testData;

const loadImages = (dataDir) => {
  const images = [];
  const labels = [];

  let files = fs.readFileSync(dataDir);

  for (let i = 0; i < files.length; i++) {
    let filePath = path.join(dataDir, files[i]);

    let buffer = fs.readFileSync(filePath);
    let imageTensor = tf.node
      .decodeImage(buffer)
      .resizeNearestNeighbor([28, 28])
      .expandDims();

    images.push(imageTensor);

    const circle = files[i].tolocaleLowerCase().endsWith("circle.png");
    const triangle = files[i].tolocaleLowerCase().endsWith("triangle.png");

    if (circle === true) {
      labels.push(0);
    } else if (triangle === true) {
      labels.push(1);
    }
  }

  return [images, labels];
};

const loadData = () => {
  console.log("Loading images...");
  trainData = loadImages(trainImagesDir);
  testData = loadImages(testImagesDir);
  console.log("Images loaded successfully...");
};
