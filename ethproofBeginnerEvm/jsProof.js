/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftDeathsquad = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _ko, _killnumber) {
  const newNFT = {
    name: _name,
    ko: _ko,
    killnumber: _kill number
  };
  nftDeathsquad.push(newNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (const nft of nftDeathsquad) {
    console.log("Name: " + nft.name);
    console.log("Ko: " + nft.ko);
    console.log("Killnumber: " + nft.killnumber);
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  }
}


// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftDeathsquad.length;
}

mintNFT("Angrybirds", "Smash", "97");

// call your functions below this line
console.log("List of NFTs:");
listNFTs();

getTotalSupply();
