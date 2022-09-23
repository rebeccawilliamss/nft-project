const main = async () => {

    // compile contract and generate files in artifacts folder
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');

    // create a local eth network
    const nftContract = await nftContractFactory.deploy();

    // wait until contract is deployed
    await nftContract.deployed();

    // gives us the address of the deployed contract
    console.log("Contract deployed to:", nftContract.address);

    // Call the function.
    let txn = await nftContract.makeAnEpicNFT()

    // Wait for NFT to be mined.
    await txn.wait()

    // Mint another NFT for fun.
    txn = await nftContract.makeAnEpicNFT()

    // Wait for it to be mined.
    await txn.wait()
  };

  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  runMain();