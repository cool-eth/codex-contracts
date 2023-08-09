import { ethers } from "hardhat";
import { Booster__factory } from "../types";

const main = async () => {
    const [deployer] = await ethers.getSigners();
    const booster = Booster__factory.connect('0x447786d977Ea11Ad0600E193b2d07A06EfB53e5F', deployer);

    // increase 1 month
    await ethers.provider.send("evm_increaseTime", [60 * 60 * 24]);
    await ethers.provider.send("evm_mine", []);
    await booster.earmarkRewards(0);
}

main()