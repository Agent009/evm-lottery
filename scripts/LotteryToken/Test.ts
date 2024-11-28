import * as readline from "node:readline";

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(
    "Pick an operation: \n Options: \n [1]: Message signature \n [2]: Random from a sealed seed \n [3]: Random from block hash plus a sealed seed \n",
    (answer) => {
      console.log(`You picked: ${answer}`);
      const option = Number(answer);
      switch (option) {
        case 1:
          // TODO
          break;
        case 2:
          // TODO
          break;
        case 3:
          // TODO
          break;
        default:
          console.log("Invalid");
          break;
      }
      rl.close();
    }
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
