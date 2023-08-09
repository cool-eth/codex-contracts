export const BUNNI_SMART_WALLET_CHECKER = '0x1A6f91eFE378BE77c905BdF3Af11C8cEE11d3081';
export const BALANCER_20WETH_80LIT = '0xF3a605DA753e9dE545841de10EA8bFfBd1Da9C75';
export const OLIT = "0x63390fB9257AaBF54fbB9aCCDE3b927Edd2fB4a2";

export const gauges = [
    {
        gauge: '0x910b9a14acC2b90ED5b09E1e4a59137e79F60414',
        bunniLp: '0xCe9F0944b0B326C7c647477B603aefC4Bdd2c825',
    }
]

export const whales = [
    {
        asset: BALANCER_20WETH_80LIT,
        whale: '0xdcEBc9195fE9b8867fd017440ab9516406f475d6',
    },
    {
        asset: gauges[0].bunniLp,
        whale: '0x910b9a14acC2b90ED5b09E1e4a59137e79F60414',
    }
]