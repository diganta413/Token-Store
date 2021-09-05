import React, { useState, useEffect } from 'react'
import getWeb3 from "./getWeb3"
const App2 = () => {

    const [web3, setWeb3] = useState(null)

    useEffect(() => {
        const connect = async () => {
            try {
                // Get network provider and web3 instance.
                const web3 = await getWeb3();

                // Use web3 to get the user's accounts.
                const accounts = await web3.eth.getAccounts();

                // Get the contract instance.
                // const networkId = await web3.eth.net.getId();
                // const deployedNetwork = SimpleStorageContract.networks[networkId];
                // const instance = new web3.eth.Contract(
                //     SimpleStorageContract.abi,
                //     deployedNetwork && deployedNetwork.address,
                // );

                // Set web3, accounts, and contract to the state, and then proceed with an
                // example of interacting with the contract's methods.
                // this.setState({ web3, accounts, contract: instance }, this.runExample);
            } catch (error) {
                // Catch any errors for any of the above operations.
                
                console.error(error);
            }
        }

        connect()

    }, [])

    if (!web3) {
        return <div>Loading Web3, accounts, and contract...</div>;
    }

    return (
        <div className="App">
            <h1>Good to Go!</h1>
            <p>Your Truffle Box is installed and ready.</p>
            <h2>Smart Contract Example</h2>
            <p>
                If your contracts compiled and migrated successfully, below will show
                a stored value of 5 (by default).
            </p>
            <p>
                Try changing the value stored on <strong>line 42</strong> of App.js.
            </p>
            <div>The stored value is: {this.state.storageValue}</div>
        </div>
    );
}

export default App2
