import React from "react";
import Twitter from "./images/twitter.png";
import Opensea from "./images/opensea.png";
import Etherscan from "./images/etherscan.png";
import Play from "./Play";
import ethBalance from "./MainMint"
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }
    
    const ownerInventory = Boolean(accounts[0]);

    return (
        <Flex justif="space-between" align="center" padding="30xp">
            {/*LEFT*/}
            <Flex justif="space-between" width="60%" padding="0 75xp">
                <Link href="https://www.twitter.com/">
                    <Image src={Twitter} boxSize="42px" margin="0 15px" />
                </Link>
                <Spacer />
                <Link href="https://www.opensea.io/">
                    <Image src={Opensea} boxSize="42px" margin="0 15px" />
                </Link>
                <Spacer />
                <Link href="https://www.etherscan.io/">
                    <Image src={Etherscan} boxSize="42px" margin="0 25px" />
                </Link>
                <Spacer />
                <Spacer />
            </Flex>
            {/*RIGHT*/}
            <Flex
            justify="space-around"
            align="center"
            width="40%"
            padding="30px"
            >
            <Button 
            backgroundColor="#fffffF"
            borderRadius="5px"
            boxShadow="0px 0px 0px 0px #0F0F0F"
            cursor="pointer"
             onClick="/Play">Play</Button>
             <Button 
            backgroundColor="#fffffF"
            borderRadius="5px"
            boxShadow="0px 0px 0px 0px #0F0F0F"
            cursor="pointer"
             onClick={ownerInventory}>Inventory</Button>
            {/*CONNECT*/}
            {isConnected ? (
                <Button
                backgroundColor="#00bb16"
                borderRadius="5px"
                boxShadow="0px 0px 0px 0px #0F0F0F"
                >Connected
                </Button>
            ) : (
                <Button 
                backgroundColor="#fffffF"
                borderRadius="5px"
                boxShadow="0px 0px 0px 0px #0F0F0F"
                cursor="pointer"

                onClick={connectAccount}>Connect Wallet</Button>
            )}

            </Flex>
        </Flex>
    );

};

export default NavBar;