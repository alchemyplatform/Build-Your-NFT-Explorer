import { Provider, chain, defaultChains } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import { WalletConnectConnector } from "wagmi/connectors/walletConnect"
import Nav from './components/nav';

function App() {
  const alchemyId = "YOUR_ALCHEMY_API_KEY"

  // initialize wagmi library connectors for Metamask and Walletconnect
  const connectors = ({ chainId }) => {
    const rpcUrl =defaultChains.find((x) => x.id === chainId)?.rpcUrls?.[0] ?? chain.mainnet.rpcUrls[0]
    return [
      new InjectedConnector({ defaultChains }),
      new WalletConnectConnector({
        options: {
          alchemyId,
          qrcode: true,
        },
      }),
    ]
  }

  return (
    <Provider autoConnect connectors={connectors}>
      <Nav>
      </Nav>
    </Provider>
  );
}

export default App;
