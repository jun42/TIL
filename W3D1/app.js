const process = require("process");

console.log("node-version:", process.version);

const { exec } = require("child_process");

exec("npm -v", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`npm version: ${stdout.trim()}`);
});
