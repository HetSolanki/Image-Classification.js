const { loadData, getTrainData, getTestData } = require("./get-data.js");
const model = require("./create-model.js");

const train = async () => {
  loadData();

  const { images: trainImages, labels: trainLabels } = getTrainData();

  model.summary();

  await model.fit(trainImages, trainLabels, {
    epochs: 10,
    batchSize: 5,
    validationSplit: 0.2,
  });

  const { images: testImages, labels: testLabels } = getTestData();

  const evalOutput = model.evaluate(testImages, testLabels);

  const loss = evalOutput[0].dataSync()[0].toFixed(3);
  const accuracy = evalOutput[1].dataSync()[0].toFixed(3);

  console.log("Loss: ", loss);
  console.log("Accuracy: ", accuracy);

  await model.save("file://public/model");
};

train();
