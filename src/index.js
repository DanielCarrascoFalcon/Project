import app from "./app";

async function main() {
  await app.listen(7000);
  console.log("Server on port 7000");
}

main();
