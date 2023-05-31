import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import { useContract, useTotalCount, useNFTs } from "@thirdweb-dev/react";
import { Card, Image, CardBody, CardFooter, Heading, Text, Stack, Divider, ButtonGroup, Button, SimpleGrid, Box, Center } from '@chakra-ui/react'
// import "./styles/Home.css";

export default function Home() {

  const { contract } = useContract("0xcD6fFa6362b161a8B1F8698Af6E5e3531Ffc03D6")
  const { data: count, isLoading, error } = useTotalCount(contract);
  const { data: nfts, isLoading: loading, error: err } = useNFTs(contract, { start: 0, count: 100 });


  
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        </h1>

        <p className="description">
          Get started by configuring your desired network in{" "}
          <code className="code">src/index.tsx</code>, then modify the{" "}
          <code className="code">src/App.tsx</code> file!
        </p>

        <div className="connect">
          <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center' }} />
        </div>
        <div>
          <Web3Button
            contractAddress="0xcD6fFa6362b161a8B1F8698Af6E5e3531Ffc03D6"
            action={async (contract) => contract.call("totalSupply")}
          >
            Call totalSupply from the connected wallet
          </Web3Button>
        </div>
        <div>{isLoading ? <p>Loading...</p> : <p>Contract Name: {count?.toString()}</p>}</div>
        
        <SimpleGrid columns={4} spacing={10}>
          {nfts?.map((nft)=>
            (
              
              <Card align={"center"} border={"2px"} borderColor={"white"}>
                <CardBody >
                  <Image
                    src={nft.metadata.image!} 
                    alt=""
                    borderRadius='lg'
                    boxSize={'300px'}
                    objectFit="contain"
                    align={"center"}
                  />
                  <Stack 
                    mt='2' 
                    spacing='1' 
                    align='center'
                    textAlign='center'>
                    <Heading size='md'>{nft.metadata.name!}</Heading>
                    <Text w={"300px"}>
                      {nft.metadata.description!} 
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                      Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>

            ))}
              </SimpleGrid>



        <div className="grid">
          <a href="https://portal.thirdweb.com/" className="card">
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              thirdweb.
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className="card">
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a href="https://portal.thirdweb.com/templates" className="card">
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
