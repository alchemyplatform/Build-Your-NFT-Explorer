<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Alchemy NFT API Demo</h3>

  <p align="center">
    Find, verify, and display any NFT with ease.
    <br />
     <a href="https://www.youtube.com/watch?v=YehktV6LSqw"><strong>Full YouTube Tutorial »</strong></a>
    <br />
    <br />
     <a href="https://docs.alchemy.com/alchemy/enhanced-apis/nft-api">Explore the docs</a>
    ·
    <a href="https://github.com/alchemyplatform/Build-Your-NFT-Explorer/issues">Report Bug</a>
    ·
    <a href="https://github.com/alchemyplatform/Build-Your-NFT-Explorer/issues">Request Feature</a>
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
- Keep track of your NFTs
- Search NFTs by collection
- Filter by an NFT Smart Contract address

and display the images, attributes, collection name, and creator of your favorite NFTs.

Supporting both ERC1155 and ERC721!

<p align="right">(<a href="#top">back to top</a>)</p>

![Jan-21-2022 19-33-50-min](https://user-images.githubusercontent.com/72762629/150807611-5bf5ab02-e9a9-4cfb-95c2-61f2bf0f0e2f.gif)


### Built With

* [Alchemy](https://www.alchemy.com)
* [React.js](https://reactjs.org/)
* [TailwindCSS](https://getbootstrap.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Getting started is super simple! Follow the following steps and start fetching NFTs on Ethereum!

### Prerequisites

- Node >= 16.13.x


### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/alchemyplatform/Build-Your-NFT-Explorer.git
   ```
2. Install the dependencies
   ```sh
   npm install
   ```
   
3. Create an account on [Alchemy.com](https://www.alchemy.com/)
4. Grab your Alchemy API Key
5. Update `const apiKey = "demo";` in `src/utils/fetchNFTs.js` with your Alchemy API Key
6. Run the application
  ```sh
  npm start
  ```
  
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. Insert a wallet address in the input field to retrieve all Ethereum NFTs associated with that address
2. Insert the Smart contract address to retrieve owned NFTs by contract address

_For more examples, please refer to the [Documentation](https://docs.alchemy.com/alchemy/enhanced-apis/nft-api)_

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
 - [Discord](https://www.alchemy.com/discord)

 This repo was originally created by the wonderful:

- [@VittoStack](https://twitter.com/VittoStack)
- [@thatguyintech](https://twitter.com/thatguyintech)

<p align="right">(<a href="#top">back to top</a>)</p>



