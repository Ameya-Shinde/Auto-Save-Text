# Textarea Content Saver

A simple web application that allows users to save and retrieve text in a textarea using local storage.

## Usage

1. Open the web page in your browser.
2. Type in the textarea, and your input will be automatically saved to the browser's local storage.
3. To clear the content of the textarea, click the "Clear" button.

## Functionality

- When the user types in the textarea, the input is saved to the browser's local storage in real-time.
- If there is previously saved content, it will be loaded into the textarea when the page is opened.
- The "Clear" button removes the saved content from local storage and clears the textarea.

## Hosted Link
https://ameya-shinde.github.io/Auto-Save-Text/

## JavaScript Functionality

The JavaScript code in this project provides the following key functionalities:

- **Saving to Local Storage**: The `saveToLocalStorage` function is triggered whenever the user types in the textarea. It saves the current value of the textarea to the browser's local storage.

- **Loading from Local Storage**: If there is previously saved content, the code retrieves it from local storage and populates the textarea with this saved content when the page is opened.

- **Clearing Content**: The "Clear" button, when clicked, triggers the `clearContent` function. This function removes the saved content from local storage and clears the textarea.

- **Event Listeners**: Event listeners are used to capture user interactions. The `addEventListener` method is employed to respond to input events in the textarea and clicks on the "Clear" button.

- **LocalStorage Interaction**: The `localStorage` object is used to store and retrieve data on the client side. The `setItem` and `getItem` methods are utilized for saving and retrieving data respectively.

- **Conditional Execution**: The code checks if there is saved content in `localStorage` when the page loads, and if so, it populates the textarea with this content.

This JavaScript code creates a seamless user experience for saving and retrieving text in the textarea using local storage.
