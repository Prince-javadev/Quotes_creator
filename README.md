# Customizable Quotes Creator

A web application that allows users to create and customize their own quotes card by changing various styles such as background color, text color, font size, dimensions, and more. The project is built using HTML, CSS, and JavaScript, enabling an interactive and real-time customization experience.

## Features

- **Custom Quote Input**: Users can type their own quote to display.
- **Real-time Customization**: Instantly see style changes applied to the quote card.
- **Background and Text Colors**: Options for changing the background color and text color.
- **Resizable Card**: Ability to adjust the width and height of the quote card.
- **Font Size Adjustment**: Change the font size of the quote text.

## How to Use

1. **Set Your Quote**:
   - Enter your quote in the "Type your quote here..." text area.
   - The quote will automatically update when you click outside the text area.

2. **Customize Appearance**:
   - **Background Color**: Use the color picker to change the background.
   - **Text Color**: Choose a color for the text.
   - **Font Size**: Adjust the font size (range from 10px to 50px).
   - **Card Dimensions**: Set the card width (100px to 800px) and height (100px to 500px).

3. **Live Preview**:
   - All changes are applied instantly to give a live preview of your customized quote.

## Project Structure


## Code Explanation

### HTML

The `index.html` file contains two main sections:
   - **Quote Section**: Displays the quote with customizable styles.
   - **Controls Section**: Contains input fields for customizing the quote.

### CSS

- Uses Flexbox for layout and ensures responsive design.
- Styles include basic properties for the background, font, and dimensions.

### JavaScript

- **`setUserQuote()`**: Updates the quote based on user input.
- **`applyStyle()`**: Applies the selected style changes (background, color, font size, width, height).

## Customization Tips

- Add more style options, such as font family, border styles, or shadow effects.
- Consider implementing a "Save as Image" feature to download the customized quote card.

## Requirements

Works in any modern web browser supporting HTML5, CSS3, and JavaScript.

## Live Demo

Open the `index.html` file in your web browser to see the Quotes Creator in action.

## License

This project is open-source and available under the MIT License.
