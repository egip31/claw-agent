console.log("Claw Agent Running...");

const fs = require("fs");

if (fs.existsSync("./skills/clawcredit/SKILL.md")) {
  console.log("ClawCredit skill detected");
} else {
  console.log("Skill not found");
}