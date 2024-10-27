import { Box, Flex, Spacer, Image, Text, useMediaQuery } from "@chakra-ui/react";
import footer1 from "../img/footer1.png"
import footerSmall from "../img/footerSmall.png"
import { SimpleGrid } from '@chakra-ui/react'



const Footer = () => {

    const [foot1] = useMediaQuery('(min-width: 800px)')




    return (
        
       <>
        
       { foot1 &&
           <Flex mt="60px"  lineHeight={"35px"} paddingTop="80px" style={{border: "outset"}} >
             <Spacer/>
            <Box >
            <Image w="32%" src="https://res.cloudinary.com/dgtxkoybf/image/upload/v1730043165/pfrujbk7ghqhgtlnjxok.png" alt="image" />
            <Text>© DawnFood Inc.</Text>         
            </Box>
            <Spacer/>

            <Box>
                <Text fontSize={"2xl"}>Company</Text>
           <Text > Careers</Text>
            <Text>Contact Us</Text>
            <Text>Press</Text>
            <Text>Terms</Text>
            <Text> Privacy </Text>
            <Text> Affiliates </Text>
            <Text>Partnerships</Text>
            </Box>
            <Spacer/>

            <Box>
                <Text fontSize={"2xl"} >Learn More</Text>
                <Text>Plans & Menu</Text>
                <Text>Why DawnFood?</Text>
                <Text>Gifts</Text>
                <Text>FAQs</Text>
                <Text>Blog</Text>
                <Text>Students</Text>
            </Box>
            <Spacer/>
            
            <Box>
            <Text fontSize={"2xl"}>Join Us</Text>
            <Image src={footer1} ></Image>
                
            </Box>
           
            <Spacer/>
            <Spacer/>
        </Flex>
        }
        {
            !foot1 &&  <Box mt="60px"  style={{border: "outset"}} w="100%" lineHeight={"35px"}  paddingLeft={["7%","20%"]} paddingRight={["7%","20%"]} >
                <SimpleGrid    columns={[3,4]} spacing='2%'>
                <Text>FAQs</Text>
                <Text>Blog</Text>
                <Text>Students</Text> 
                <Text>Plans</Text>
                <Text>Gifts</Text>
                <Text>FAQs</Text>
                <Text>Blog</Text>
                <Text>Students</Text>         
                </SimpleGrid>
                <Flex>
                    <Image src={footerSmall} ></Image>
                </Flex>
                
            </Box>
        }
       </>
       
    )
}

export default Footer;