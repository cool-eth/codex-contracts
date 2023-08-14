import { ethers } from "hardhat";
import { Booster__factory, CdxStakingProxyV2__factory, ISmartWalletChecker__factory, LITDepositor__factory } from "../types";
import { BUNNI_SMART_WALLET_CHECKER } from "../test/config";

const main = async () => {
    const [deployer] = await ethers.getSigners();

    // const smartWalletChecker = ISmartWalletChecker__factory.connect(BUNNI_SMART_WALLET_CHECKER, deployer);
    // console.log(await smartWalletChecker.owner())
    // await smartWalletChecker.allowlistAddress("0x4716f43D1965c822E56C498c8B48a32d483E8403");

    // const litDepositor = LITDepositor__factory.connect('0x3134d1E4aB3d43148Caa66Af5485fAa7Bf41eD41', deployer);
    // await litDepositor.initialLock();

    // const booster = Booster__factory.connect('0x069e9eedceDAF9D9b64C9e2B5A3E006D3F90ACc8', deployer);
    // await booster.voteGaugeWeight(['0x910b9a14acC2b90ED5b09E1e4a59137e79F60414'],[10000]);

    // const booster = Booster__factory.connect('0x069e9eedceDAF9D9b64C9e2B5A3E006D3F90ACc8', deployer);
    // await booster.earmarkRewards(0);

    const cdxStakingProxy = CdxStakingProxyV2__factory.connect('0x267D00E89ADE99F2856432022D0618227d92dc35', deployer);
    // await cdxStakingProxy.setUseDistributorList(false);
    await cdxStakingProxy.distribute();
}

main()