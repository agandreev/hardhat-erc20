const hre = require("hardhat");

async function main() {
  const GLDToken = await hre.ethers.getContractFactory("R2DToken");
  console.log("Deploying R2DToken...");
  const token = await GLDToken.deploy("10000000000000000000000");

  await token.deployed();
  console.log("R2DToken deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
