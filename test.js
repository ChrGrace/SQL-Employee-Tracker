const figlet = require('figlet');

figlet.text("Employee\nTracker", {
    font: "Big",
}, (err, data) => {
    if (err) {console.dir(err); return}
    console.log(data);
});