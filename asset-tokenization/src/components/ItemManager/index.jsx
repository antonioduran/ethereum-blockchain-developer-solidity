import React, {useState, useEffect } from "react";
import MyToken from "../../client/src/contracts/MyToken.json";
import MyTokenSale from "../../client/src/contracts/MyTokenSale.json";
import KycContract from "../../client/src/contracts/KycContract.json";
import getWeb3 from "../../getWeb3";

import "../../App.css";

function ContractUser() {
   const [state, setState ] = useState({loaded:false, kycAddress: "0x123...", tokenSaleAddress: null, userTokens:0 });
   const [web3, setWeb3] = useState();
   const [accounts, setAccounts] = useState();
   const [networkId, setNetworkId] = useState();
   const [tokenInstance,setTokenInstance] = useState();
   const [tokenSaleInstance, setTokenSaleInstance] = useState();
   const [kycInstance, setKycInstance] = useState();
   const [loading, setLoading] = useState(true);

    // 1.) get web3 and store it in state
   useEffect(() => {
        async function initWeb3() {
            const _web3 = await getWeb3();
            setWeb3(_web3);
        }
        
        initWeb3();
    }, []);

    // 2.) use web3 to get the user's accounts
    useEffect(() => {
        async function getAccounts() {
            const _accounts = await web3.eth.getAccounts();
            setAccounts(_accounts);
        }

        if (web3) {
            getAccounts();
        }
    }, [web3]);

    // 3.) Get the network id
    useEffect(() => {
        async function getNetworkId() {
            const _id = await web3.eth.net.getId();
            setNetworkId(_id);
        }
        
        if (web3) {
            getNetworkId();
        }
    }, [web3]);

    // 4.) Get the Burst token instance
    // useEffect(() => {
    //     if (networkId) {
    //         const _instance = new web3.eth.Contract(
    //             Burst.abi,
    //             Burst.networks[networkId].address
    //         );

    //         setBurstContractInstance(_instance);
    //     }
    // }, [networkId]);

    // 5.) Get the Token saleinstance
    useEffect(() => {
        if (networkId) {
            const _instance = new web3.eth.Contract(
                MyTokenSale.abi,
                MyTokenSale.networks[networkId].address
            );
        
            setTokenSaleInstance(_instance);
        }
    }, [networkId,web3]);

    // 6.) Get the My Token
    useEffect(() => {
        if (networkId) {
            const _instance = new web3.eth.Contract(
                MyToken.abi,
                MyToken.networks[networkId].address
            );
            
            setTokenInstance(_instance);
        }
    }, [networkId, web3]);
 
    // 6.) Get the KycContract
    useEffect(() => {
        if (networkId) {
            const _instance = new web3.eth.Contract(
                KycContract.abi,
                KycContract.networks[networkId].address
            );

            setKycInstance(_instance);
        }
    }, [networkId, web3]);

    useEffect(() => {
        if (
            tokenInstance &&
            tokenSaleInstance &&
            kycInstance
        ) {
          setLoading(false);
        }
      }, [tokenInstance, tokenSaleInstance, kycInstance]);


 
 
//    let xxcomponentDidMount = async (web3) => {
//         try {
           

            

        

          
         
            
//             console.table("%%%%%%%%%%%%%%%%%%%%%%%%%<<< " + kycInstance)
//             // Set _web3, accounts, and contract to the state, and then proceed with an
//             // example of interacting with the contract's methods.
//             listenToTokenTransfer();
//             setState({loaded:true, tokenSaleAddress:MyTokenSale.networks[networkId].address}, updateUserTokens);
//         } catch (error) {
//             // Catch any errors for any of the above operations.
//             alert(
//             `Failed to load _web3, accounts, or contract. Check console for details.`,
//             );
//             console.error(error);
//         }
//     }
  
    

//    const updateUserTokens = async () => {
//         let userTokens = await tokenInstance.methods.balanceOf(accounts[0]).call();
//         setState({userTokens: userTokens});
//     }

    // const listenToTokenTransfer = () => {
    //     tokenInstance.events.Transfer({to: accounts[0]}).on("data",updateUserTokens);
    // }

    const handleBuyTokens = async() => {
         tokenSaleInstance.methods.buyTokens(accounts[0]).send({from: accounts[0], value: web3.utils.toWei("1","wei")});
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setState({
        [name]: value
        });
    }

   const handleKycWhitelisting = async () => {
        await kycInstance.methods.setKycCompleted(state.kycAddress).send({from: accounts[0]});
        alert("KYC for "+ state.kycAddress+" is completed");
    }

   
   
    if (loading) {
        return <div>Loading Web3, accounts, and contract...</div>;
    }
    
    return (
        <div className="App">
            <h1>StarDucks Cappucino Token Sale</h1>
            <p>Get your Tokens today!</p>
            <h2>Kyc Whitelisting</h2>
            Address to allow: <input type="text" name="kycAddress" value={state.kycAddress} onChange={handleInputChange} />
            <button type="button" onClick={handleKycWhitelisting}>Add to Whitelist</button>
            <h2>Buy Tokens</h2>
            <p>If you want to buy tokens, send Wei to this address: {state.tokenSaleAddress}</p>
            <p>You currently have: {state.userTokens} CAPPU Tokens</p>
            <button type="button" onClick={handleBuyTokens}>Buy more tokens</button>
        </div>
    );
};

export default ContractUser;


