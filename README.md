<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/alchemyplatform/NFT-API-demo/">
          <img src="https://user-images.githubusercontent.com/72762629/152393096-1a99518a-6632-4f10-9c71-b29b20c380e2.png" alt="Logo" height="80" >
  </a>

  <h3 align="center">Alchemy NFT API Demo</h3>

  <p align="center">
    Find, verify, and display any NFT,  across all major blockchains, with ease.
    <br />
    <a href="https://docs.alchemy.com/alchemy/enhanced-apis/nft-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo (Coming soon)</a>
    ·
    <a href="https://github.com/alchemyplatform/NFT-API-demo/issues">Report Bug</a>
    ·
    <a href="https://github.com/alchemyplatform/NFT-API-demo/issues">Request Feature</a>
  </p>

</div>
  

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<img width="1600" alt="Screenshot 2022-02-03 at 18 11 09" src="https://user-images.githubusercontent.com/72762629/152393504-72162127-cf56-4de6-8f11-1653c24aa2b9.png">

Build your own multi-chain NFT Explorer using the new Alchemy NFT API! 


Built on top of ReactJs, this repo showcase the functionalities of the [Alchemy NFT API](https://www.alchemy.com/nft-api):
- Keep track of your NFTs on Polygon, Ethereum, and Mumbai.
- Search NFTs by collection
- Filter by Smart Contract address

and display the images, attributes, collection name, and creator of your favourite NFTs.

Supporting both ERC1155 and ERC721!

<p align="right">(<a href="#top">back to top</a>)</p>

![Jan-21-2022 19-33-50-min](https://user-images.githubusercontent.com/72762629/150807611-5bf5ab02-e9a9-4cfb-95c2-61f2bf0f0e2f.gif)


### Built With

* [Alchemy](https://www.alchemy.com)
* [Next.js](https://www.alchemy.com/)
* [React.js](https://reactjs.org/)
* [TailwindCSS](https://getbootstrap.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Getting started is super simple! Follow the following steps and start fetching NFTs on Ethereum, Polygon, and Flow!

### Prerequisites

- Node >= 16.13.x


### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/alchemyplatform/NFT-API-demo.git
   ```
2. Install the dependencies using npm or yarn
   ```sh
   npm install || yarn install
   ```
   
3. Create a .env file in the root folder
4. Create un account on [Alchemy.com](https://www.alchemy.com/)
5. Grab your Alchemy Endpoint URL following [This guide](https://docs.alchemy.com/alchemy/introduction/getting-started)
6. Enter your Alchemy Endpoint URL to your .env file for all the networks you'd like to use:
   ```js
   REACT_APP_ALCHEMY_ETHEREUM_ENDPOINT=YOUR_API_URL
   REACT_APP_ALCHEMY_POLYGON_ENDPOINT=YOUR_API_URL
   REACT_APP_ALCHEMY_MUMBAI_ENDPOINT=YOUR_API_URL
   ```
7. Run the application
  ```sh
  npm run start
  ```
  
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. Insert a wallet address in the input field to retrieve all Ethereum NFTs associated with that address
2. Insert the Smart contract address to retrieve owned NFTs by contract address

_For more examples, please refer to the [Documentation](https://docs.alchemy.com/alchemy/enhanced-apis/nft-api)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Implement Ethereum support
- [x] Implement Fetch by Owner
- [x] Implement Fetch by Smart Contract address
- [ ] Add Multichain support 
- [ ] UI/UX Update
- [ ] Implementing Fetch by collection 


See the [open issues](https://github.com/alchemyplatform/NFT-API-demo/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

 - [@AlchemyPlatform](https://twitter.com/AlchemyPlatform)
 - [Discord]()

<p align="right">(<a href="#top">back to top</a>)</p>



