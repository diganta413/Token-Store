import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import "./auth.css"
import Logo from "../../assets/logo.png"
import Web3Modal, { getProviderInfoByName } from "web3modal"
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
import WalletLink from "walletlink"
import Web3 from 'web3'
import { useMutation } from '@apollo/client'
import { GET_NONCE } from '../../graphql/Mutation'
import UserFormModal from '../../components/Modals/UserFormModal'

const Auth = () => {

    const [getNonce] = useMutation(GET_NONCE)

    const coinbase = getProviderInfoByName('Coinbase')

    const walletLink = new WalletLink({
        appName: "TokenStore",
        appLogoUrl: "https://example.com/logo.png",
        darkMode: "false"
    })

    const ethereum = walletLink.makeWeb3Provider(
        "https://ropsten.infura.io/v3/195b896d02ff45e784884ca3828719f5", 1
    )

    const options = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: "195b896d02ff45e784884ca3828719f5",
            }
        },
        fortmatic: {
            package: Fortmatic,
            options: {
                key: "pk_test_0D0B4C0730A3193A"
            }
        },
        "custom-coinbase": {
            display: {
                logo: coinbase.logo,
                name: coinbase.name
            },
            package: ethereum,
            connector: async () => {
                const provider = ethereum;
                await provider.enable()
                return provider;
            }
        }
    };

    const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions: options,
        theme: "dark",
        show: true
    });


    const signMessage = (web3, account, nbj) => {
        let message = `You are signing in to Token Store: ${nbj.nonce}`
        web3.eth.personal.sign(message, account, async (err, result) => {
            if (err)
                console.log(err)
            else {
                const signingAddress = await web3.eth.accounts.recover(message,
                    result);
                if (account === signingAddress) {
                    localStorage.setItem('publicAddress', account)

                    if (nbj.status === 0) {
                        alert("Created")
                        // history.push("/create")
                    }
                    else {
                        // userLogin(nonce.token)
                        console.log(nbj)
                    }
                }
                else {
                    alert("Signature not verified.")
                }
            }
        })
    }

    const connectWallet = async () => {
        await web3Modal.clearCachedProvider()
        const provider = await web3Modal.connect();
        const wb = new Web3(provider);
        let accounts = await wb.eth.getAccounts()
            .then(acc => acc)

        let res = await getNonce({ variables: { address: accounts[0] } })
            .then(res => res.data.getNonce)
        console.log(res)
        signMessage(wb, accounts[0], res)
    }

    return (
        <div className="auth-container">
            <UserFormModal />
            <div className="auth-box">
                <div className="brand">
                    <img src={Logo} alt="/" />
                </div>
                <p>Connect your desired wallet.</p>
                <CustomButton
                    action={connectWallet}
                    label="Connect Wallet"
                    margin={"16px auto 0 auto"} />
            </div>
        </div>
    )
}

export default Auth
