console.log("Claw Agent Running...");

const fs = require("fs");

if (fs.existsSync("./skills/clawcredit/SKILL.md")) {
  console.log("ClawCredit skill detected");
}

console.log("Capabilities:");
console.log("- Web search");
console.log("- API calls");
console.log("- Autonomous tasks");