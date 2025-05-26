import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {  Box,  Heading,  IconButton,  Text,  Image,  useToast,  useDisclosure,  ModalOverlay,  ModalContent,  Modal,  ModalHeader,  ModalCloseButton,  HStack,  ModalBody, ModalFooter, Button,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { userProductStore } from "../store/product";
import { VStack, Input } from "@chakra-ui/react";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const textColor = useColorModeValue("gray.800", "gray.300");
  const bg = useColorModeValue("gray.200", "gray.700");

  const { deleteProduct, updateProduct } = userProductStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    await updateProduct(pid, updatedProduct);
    onClose();
  }
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        w="100%"
        h={48}
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <p>R$: {product.price}</p>
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} 
          onClick={onOpen}
          colorScheme="blue" />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atualizar Produto</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack spacing={4}>
                <Input placeholder="Product Name" name="name"
                value={updatedProduct.name}
                onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
                />
                <Input placeholder="Price" name="price" type="number"
                value={updatedProduct.price}
                onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}/>
                <Input placeholder="Image URL"name="image"
                value={updatedProduct.image}
                onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}/>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}
            onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </Box>
  );
};

export default ProductCard;
