import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import SpaceJets from "./SpaceJets.json"
import Web3 from 'web3';

const Play = ({ accounts, setAccounts }) => {
    return(
        <div>
            <canvas></canvas>
                <script type="module" src="game.js"></script>
        </div>

    )
}

export default Play;