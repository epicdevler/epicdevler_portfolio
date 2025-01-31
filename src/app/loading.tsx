import { Center, Spinner, Text } from "@chakra-ui/react";
import { leckerliOne } from "./fonts";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  const radius = 15
  return <Center textAlign={'center'} flexDir={'column'} gap={'3'} h={'100vh'} textColor={'white'} bg={'black'}>
    <Spinner />
    <Text fontSize={'larger'} >
      Nwadike Philip
      <Text as={'span'} className={leckerliOne.className}> (epicdevler)</Text>
    </Text>
  </Center>
}