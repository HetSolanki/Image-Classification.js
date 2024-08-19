# Custom Image Classification Model with TensorFlow.js

This project is an image classification tool that allows users to draw shapes on a canvas, and the model predicts the shape. Currently, the model is trained to recognize circles and triangles. If you'd like to extend the model to recognize additional shapes, follow the steps below:

## Adding Custom Shapes

To train the model with additional shapes:

1. **Fork the Repository**: Start by forking the repository to your GitHub account.

2. **Run the Project**: Use the following command to run the project:
   ```bash
   npm run dev
3. **Draw and Save Shapes**:
    - Draw the new shapes you want the model to recognize on the canvas.
    - Download these drawings.
    - Save them in the data directory.
4. **Update Shape Array**: Add the name of the new shape(s) to the custom shape array in the project code. This will require a minor modification to ensure the model knows about the new shapes.
5. **Train the Model**: Run the following command to train the model with the new shape data:
   ```bash
    node train-drawings.js
6. **Test the Model**: After training, rerun the project using npm run dev, and try drawing the new shapes to see the predictions.
