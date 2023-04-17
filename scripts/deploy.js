const hre = require('hardhat');

// console.log(hre);

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEARS_IN_SECONDS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEARS_IN_SECONDS;

  const lockedAmount = hre.ethers.utils.parseEther('1');

  //   console.log(currentTimestampInSeconds);
  //   console.log(ONE_YEARS_IN_SECONDS);
  //   console.log(unlockTime);
  //   console.log(lockAmount);
  const MyTest = await hre.ethers.getContractFactory('MyTest');
  const myTest = await MyTest.deploy(unlockTime, { value: lockedAmount });

  await myTest.deployed();

  console.log(`Contract contain 1 ETH & address: ${myTest.address}`);
  console.log(myTest);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
