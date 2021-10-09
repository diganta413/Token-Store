import React, { useState, useEffect } from 'react'
import "./App.css"
import getWeb3 from "./getWeb3"
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom'
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
import Shop from './modules/Shop/shop'
import Product from './modules/Product/product'
import EditAccount from './modules/EditAccount/EditAccount'
import PaymentPage from "./modules/PaymentPage/PaymentPage"
import Payment from "./contracts/Payment.json";
import Dai from "./contracts/Dai.json";

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
})


const App = () => {

    

    const history = useHistory()

    const curUser = JSON.parse(localStorage.getItem('User'))
    console.log(curUser)

    // Gloabl States

    const [menuOpen, setMenuOpen] = useState(false)
    const [user, setUser] = useState(null)
    const [page, setPage] = useState('Home')
    const [web3, setWeb3] = useState(null)
    const [paymentContract, setPaymentContract] = useState(null)
    const [daiContract, setDaiContract] = useState(null)

    useEffect(() => {
        const connect = async () => {
            try {
                // Get network provider and web3 instance.
                const web3 = await getWeb3();

                // Use web3 to get the user's accounts.
                const account = curUser.walletAddress

                // Get the contract instance.
                const networkId = await web3.eth.net.getId();

                // For payment contract
                const deployedNetwork_payment = Payment.networks[networkId];
                const payment_instance = new web3.eth.Contract(
                    Payment.abi,
                    deployedNetwork_payment && deployedNetwork_payment.address,
                );

                // For dai contract
                const deployedNetwork_dai = Dai.networks[networkId];
                const dai_instance = new web3.eth.Contract(
                    Payment.abi,
                    deployedNetwork_dai && deployedNetwork_dai.address,
                );

                // Set state

                setPaymentContract(payment_instance)
                setDaiContract(dai_instance)
                setWeb3(web3)

            } catch (error) {
                console.error(error);
            }
        }

        if(curUser) connect()
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
            <GlobalContext.Provider value={{ menuOpen, setMenuOpen, user, setPage, setUser, setWeb3 }}>
                <div className="App">
                    <Router>
                        <Header page={page} />
                        <MainMenu />
                        <div className="page-container">
                            <Switch>
                                <Route path="/login" exact component={Auth} />
                                <Route path="/logout" exact render={(props) => {
                                    localStorage.removeItem('User')
                                    window.location.href= "/login"
                                    return null
                                }} />
                                <PrivateRoute path="/" exact component={Home}></PrivateRoute>
                                <PrivateRoute path="/shop" exact component={Shop}></PrivateRoute>
                                <PrivateRoute path="/product/:id" component={Product} exact></PrivateRoute>
                                <PrivateRoute path="/edit/user" exact component={EditAccount}></PrivateRoute>
								<PrivateRoute path="/:prod_id/payment" exact component={PaymentPage}></PrivateRoute>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </GlobalContext.Provider>
        </ApolloProvider>
    );
}

export default App
