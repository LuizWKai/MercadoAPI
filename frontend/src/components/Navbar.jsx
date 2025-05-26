import { Flex, Container, Button, Text, HStack, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon, IoSunny } from "react-icons/io5";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Container maxW={"2000px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="linear(to-l,rgb(108, 130, 224),rgb(86, 59, 129))"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
          textAlign={"center"}
        >
          <Link to={"/"}>Loja de Produtos 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button
              color="white"
              bg="transparent"
              _hover={{ bg: "transparent" }}
            >
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? <IoMoon /> : <IoSunny />}</Button>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;
