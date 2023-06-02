import { useEffect, useState } from 'react';
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import { useContract, useTotalCount, useNFTs } from "@thirdweb-dev/react";
import { Card, Image, CardBody, CardFooter, Heading, Text, Stack, Divider, ButtonGroup, Button, SimpleGrid, Box, Center } from '@chakra-ui/react'
import { ThreeDots } from 'react-loader-spinner';
 import Map from "./Map";

export default function Home() {


  const { contract } = useContract("0xcD6fFa6362b161a8B1F8698Af6E5e3531Ffc03D6")
  const { data: count, isLoading, error } = useTotalCount(contract);
  const { data: nfts, isLoading: cargando, error: err } = useNFTs(contract, { start: 0, count: 100 });
  const [loading, setLoading] = useState(false);
  const [lands, setLands] = useState<React.ReactNode[]>()

  var items: string[][]
  const localLands: React.ReactNode[] = []

  useEffect( () => {
    const loadPost = async () => {
      setLoading(true);
      console.log("useeffect 1")
      fetch('./test.txt').then(function (response) {
        response.text().then(function (text) {
          items = text.split("\r\n").map(function (el) { return el.split(" "); });
          getLands()
          console.log("useefect item filled")
          setLoading(false);
        });
      });
    }
    loadPost();
  }, []);

 


  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://thirdweb.com/">Eglaria</a>!
        </h1>
        {loading ? (
          <>
            <h2>Loading map</h2>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          </>)
          :
          (
            <Map lands={lands} />
          )
        }
      </main>
    </div>
  );
}
