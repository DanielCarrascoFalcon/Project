import app from "./app";

async function main() {
  await app.listen(process.env.PORT || 7000);
  console.log("Server on port 7000");
}

main();
