import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md">My Blog</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Blog</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="lg" mb={4}>Blog Posts</Heading>
          <Box mb={8} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md">First Blog Post</Heading>
            <Text mt={2}>This is a summary of the first blog post...</Text>
          </Box>
          <Box mb={8} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md">Second Blog Post</Heading>
            <Text mt={2}>This is a summary of the second blog post...</Text>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>Recent Post 1</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>Recent Post 2</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>Recent Post 3</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" mt={8} p={4}>
        <Flex justify="center" mb={4}>
          <Link href="#" mx={2}><FaTwitter /></Link>
          <Link href="#" mx={2}><FaFacebook /></Link>
          <Link href="#" mx={2}><FaInstagram /></Link>
        </Flex>
        <Text textAlign="center">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;