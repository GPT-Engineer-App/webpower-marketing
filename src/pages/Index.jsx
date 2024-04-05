import { Box, Button, Container, Flex, FormControl, FormLabel, Grid, Heading, Image, Input, Link, Stack, Text, Textarea, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaAngular, FaEnvelope, FaGithub, FaLinkedin, FaNodeJs, FaPhone, FaReact } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg={useColorModeValue("gray.100", "gray.700")} py={20}>
        <Container maxW="container.lg">
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Box flex={1} mr={{ md: 8 }}>
              <Heading as="h1" size="2xl" mb={4}>
                WEBPOWER
              </Heading>
              <Text fontSize="xl" mb={8}>
                We build powerful web applications using modern technologies like React, Node.js, .NET, and Angular. Leverage our expertise to bring your ideas to life and drive your business forward.
              </Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRlYW18ZW58MHx8fHwxNzEyMzI2NjEwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Development Team" rounded="md" shadow="md" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Services
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <Box bg={useColorModeValue("white", "gray.800")} p={6} rounded="md" shadow="md">
              <FaReact size={48} color="#61DAFB" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                React Development
              </Heading>
              <Text>We specialize in building interactive and performant web applications using React and its ecosystem.</Text>
            </Box>
            <Box bg={useColorModeValue("white", "gray.800")} p={6} rounded="md" shadow="md">
              <FaAngular size={48} color="#DD0031" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                Angular Development
              </Heading>
              <Text>We build robust and scalable web applications using Angular, leveraging its powerful features and ecosystem.</Text>
            </Box>
            <Box bg={useColorModeValue("white", "gray.800")} p={6} rounded="md" shadow="md">
              <FaNodeJs size={48} color="#339933" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                Node.js Development
              </Heading>
              <Text>Our team develops high-performance and scalable server-side applications using Node.js and its vast ecosystem of packages.</Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box bg={useColorModeValue("gray.100", "gray.700")} py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Team
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <Box bg={useColorModeValue("white", "gray.800")} p={6} rounded="md" shadow="md" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjE4NzA2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member" rounded="full" width={150} height={150} mx="auto" mb={4} />
              <Heading as="h3" size="md">
                John Doe
              </Heading>
              <Text>Senior React Developer</Text>
            </Box>
            {/* Add more team member boxes */}
          </Grid>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Portfolio
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1646723907212-a61af18b6884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzEyMzI2NjEwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" rounded="md" shadow="md" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Project 1
              </Heading>
              <Text>A short description of the project goes here.</Text>
            </Box>
            {/* Add more project boxes */}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box bg={useColorModeValue("gray.100", "gray.700")} py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Contact Us
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Box>
              <VStack spacing={4} align="flex-start">
                <Flex align="center">
                  <FaEnvelope size={20} mr={2} />
                  <Link href="mailto:info@webpower.com">info@webpower.com</Link>
                </Flex>
                <Flex align="center">
                  <FaPhone size={20} mr={2} />
                  <Link href="tel:+1234567890">+1 (234) 567-890</Link>
                </Flex>
                <Flex align="center">
                  <FaGithub size={20} mr={2} />
                  <Link href="https://github.com/webpower" isExternal>
                    GitHub
                  </Link>
                </Flex>
                <Flex align="center">
                  <FaLinkedin size={20} mr={2} />
                  <Link href="https://www.linkedin.com/company/webpower" isExternal>
                    LinkedIn
                  </Link>
                </Flex>
              </VStack>
            </Box>
            <Box>
              <form>
                <Stack spacing={4}>
                  <FormControl id="name">
                    <FormLabel>Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="message">
                    <FormLabel>Message</FormLabel>
                    <Textarea />
                  </FormControl>
                  <Button type="submit" colorScheme="blue">
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
