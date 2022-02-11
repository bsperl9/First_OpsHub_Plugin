// Write to the log when loading
console.log('STARTING');

// Get the root element and the data
var element = EMBED.getRootElement();
var data = EMBED.getData();

// Query the button element
btn = element.find('#btn');

// Print Hello World to consol on button click
btn.click(function () {
    console.log('Hello World!');
});