import { Container, Box, Heading, useColorModeValue, VStack, Input, Button, useToast} from "@chakra-ui/react";
import { useState } from "react";
import { userProductStore } from "../store/product";


const Createpage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    });
    const toast = useToast();
    const {createProduct} = userProductStore();

    const handleAddProduct = async () => {
       const {success, message} = await createProduct(newProduct);
       if(!success) {
        toast(
            {
                title: "Error",
                description: message,
                status: "error",
                isClosable: true
            })
        } else {
            toast({
                    title: "Success",
                    description: message,
                    status: "success",
                    isClosable: true
            })
        }
        setNewProduct({
            name: "",
            price: "",
            image: ""
        })
       };
    

    return <Container maxW={"container.sm"}>
        <VStack
            spacing={8}
        >
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} color={"blue.500"}>Create a new Product</Heading>
            <Box
               w={"full"}
               bg={useColorModeValue("white", "gray.800")}
               p={6}
               rounded={"lg"}
               shadow={"md"}
            >
                <VStack spacing={4}>
                    <Input
                        placeholder="Product Name"
                        name="name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    />
                      <Input
                        placeholder="Price"
                        name="number"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    />
                      <Input
                        placeholder="Image URL"
                        name="image"
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    />
                    <Button
                        colorScheme="blue"
                        size="md"
                        onClick={handleAddProduct}
                    >
                        Add Product
                    </Button>
                </VStack>
                
            </Box>
        </VStack>

    </Container>
}
export default Createpage