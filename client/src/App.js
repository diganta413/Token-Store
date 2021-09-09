import React, { useState, useEffect } from 'react'
import "./App.css"
import getWeb3 from "./getWeb3"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './modules/Home/home'
import Auth from './modules/Authentication/auth'
import { GlobalContext } from './utils/Context'
import MainMenu from './components/MainMenu'


const App = () => {

    const [web3, setWeb3] = useState(null)

    // Gloabl States

    const [menuOpen, setMenuOpen] = useState(false)

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

    // if (!web3) {
    //     return <div>Loading Web3, accounts, and contract...</div>;
    // }

    return (
        <GlobalContext.Provider value={{ menuOpen, setMenuOpen }}>
            <div className="App">
                <Router>
                    <Header />
                    <MainMenu />
                    <div className="page-container">
                        <Switch>
                            <Route path="/login" component={Auth} />
                            <Route path="/" component={Home} />
                            <Route path="/shop" component={Home} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </GlobalContext.Provider>
    );
}

export default App
