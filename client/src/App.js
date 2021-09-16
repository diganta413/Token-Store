import React, { useState, useEffect } from 'react'
import "./App.css"
import getWeb3 from "./getWeb3"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Home from './modules/Home/home'
import Auth from './modules/Authentication/auth'
import { GlobalContext } from './utils/Context'
import MainMenu from './components/MainMenu'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
})


const App = () => {

    const [web3, setWeb3] = useState(null)

    const curUser = JSON.parse(localStorage.getItem('currentUser'))

    // Gloabl States

    const [menuOpen, setMenuOpen] = useState(false)
    const [user, setUser] = useState(null)

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

    useEffect(() => {
        if (curUser && !user) {
            setUser(curUser)
        }
    }, [curUser])

    return (
        <ApolloProvider client={client}>
            <GlobalContext.Provider value={{ menuOpen, setMenuOpen, user }}>
                <div className="App">
                    <Router>
                        <Header />
                        <MainMenu />
                        <div className="page-container">
                            <Switch>
                                <Route path="/login" exact component={Auth} />
                                {/* <PrivateRoute path="/" component={Home}></PrivateRoute>
                                <PrivateRoute path="/shop" component={Home}></PrivateRoute> */}
                                <Route path="/" component={Home}></Route>
                                <Route path="/shop" component={Home}></Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </GlobalContext.Provider>
        </ApolloProvider>
    );
}

export default App
