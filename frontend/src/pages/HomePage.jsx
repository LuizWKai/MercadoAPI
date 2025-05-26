import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { userProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const {fetchProducts, products} = userProductStore();
  useEffect(() => {
    fetchProducts();},
    [fetchProducts]);
  console.log("Products", products);
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient="linear(to-l,rgb(108, 130, 224),rgb(86, 59, 129))"
          bgClip="text"
          textAlign={"center"}
        >
          Produtos disponíveis 🚀
        </Text>

        <SimpleGrid columns={{
          base: 1,
          md: 2,
          lg: 3
        }}
        spacing={10}
        w={"full"} 
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

          {products.length === 0 && (<Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight="bold"
          color=""
        >
          Nada encontrado 😭{" "}
          <Link to={"/create"}>
            <Text as="span" color={"rgb(108, 130, 224)"} _hover={{ textDecoration: "underline" }}>
              Adicione um produto
            </Text>
          </Link>
        </Text>
          )}
      </VStack>
    </Container>
  );
};

export default HomePage;
