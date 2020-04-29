import app from "./app";

async function main() {
  await app.listen(500);
  console.log("Server on port 500");
}

main();
