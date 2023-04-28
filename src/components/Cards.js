import { useDisclosure } from "@chakra-ui/hooks";
import {Card, Stack,Heading,Divider,ButtonGroup,Button, CardBody, CardFooter, Image, Text,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,} from '@chakra-ui/react'
import "../App.css"
function Cards(book) {
  const values=book.book.volumeInfo
  console.log("props:",values);
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div >
  <Card bg='#282c34' boxShadow='lg' minW='350px' minH="400px" maxW='350px' maxH="400px">
  <CardBody>
    <Image
      src={values.imageLinks?.thumbnail || "https://bookcart.azurewebsites.net/Upload/Default_image.jpg" }
      maxW="130px" maxH="250px"
      alt={values.title}
      borderRadius='lg'
      ml="30%"
    />
    <Stack mt='6' spacing='3'>
      <Heading  fontSize='2vh'> {values.title}</Heading>
      <Text color='gray.400' fontSize='2vh'>
        {values.authors}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup mx="auto" spacing='2'>
      <Button onClick={onOpen} variant='solid' colorScheme='blackAlpha'>
        Detay
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{values.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {values.description || "No Description"}
          </ModalBody>

          <ModalFooter>
            <Text mr="50%">Page Count:{values.pageCount}  </Text>
            
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Cards