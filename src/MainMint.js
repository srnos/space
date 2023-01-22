import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import SpaceJets from "./SpaceJets.json"
import SPACEJETS from "./images/SPACEJETS.png"
import { Box, Button, Flex, Link, Image, Text } from '@chakra-ui/react';

const SpaceJetsNFTAddress = "0x9f974e9bfd3c445273c7fb4485ef13cd281a35ce";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                SpaceJetsNFTAddress,
                SpaceJets.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0 * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    };

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 10) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" height="90vh" paddingBottom="50px">
            <Box width="740px">
                <div>
                    <Text fontSize="0px" textShadow="0 5px #000000">
                    <Link href="/">
                    <Image src={SPACEJETS} boxwidth="462px" margin="0px" />
                </Link>
                    </Text>
            <h3>Escape the matrix, coming when sold out...</h3>
            </div>

            {isConnected ? (
            <div>
            <Flex align="center" justify="center">
            <Button 
            backgroundColor="#fffffF"
            borderRadius="5px"
            boxShadow="0px 0px 0px 0px #0F0F0F"
            cursor="pointer"

            onClick={handleDecrement}>-</Button>
            <input type="number" value={mintAmount} />
            <Button 
            backgroundColor="#fffffF"
            borderRadius="5px"
            boxShadow="0px 0px 0px 0px #0F0F0F"
            cursor="pointer"

            onClick={handleIncrement}>+</Button>
            </Flex>
            <Button 
            backgroundColor="#fffffF"
            borderRadius="5px"
            boxShadow="0px 0px 0px 0px #0F0F0F"
            cursor="pointer"
            onClick={handleMint}>Mint Now</Button>
            <br></br><br></br><br></br><br></br>
            
            
            <canvas></canvas>
            <script type="module" src="game.js"></script>
            </div>
            
            ) : (
                <p>You must be connected</p>
            )}
            </Box>
          <div>
          </div>
          </Flex>
    );
};

export default MainMint;