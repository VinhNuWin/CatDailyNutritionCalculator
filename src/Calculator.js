import { useState } from 'react';
import { 
    chakra,
    Input, 
    Text, 
    Stack,  
    Stat,
    StatLabel,
    StatNumber,
    StatGroup,
    Button,
    useDisclosure,
    ScaleFade,
    Box,
    HStack
     } from '@chakra-ui/react';
import './styles.css';
import { motion, isValidMotionProp } from 'framer-motion';
import { containerVariants, dropUpVariants } from './animation';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: isValidMotionProp,
  })

function Calculator () {
    const { isOpen, onToggle } = useDisclosure();

    const [weight, setWeight] = useState(2);

    const protein = (1.2 * weight);
    const fat = (.68 * weight);
    const carbohydrates = (.45 * weight);
    const fiber = (.42 * weight);
    const water = (27 * weight);
           
    const dailyNutrition = [protein, fat, carbohydrates, fiber, water];


    return (
        <div>
        { isOpen ? (
        <HStack spacing={8} className='pt-24 place-content-center'>
        <div className='visible invisible' ></div>
        <motion.div
            className='mt-28 p-3 inline-grid grid-cols-5 place-content-center border bg-white rounded-lg'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          <motion.Box variants={dropUpVariants}>
            <Box p={5} shadow='md' borderWidth='1px' background='white'>
            <Stat >
                <StatLabel fontSize='lg' fontWeight='semibold' >Protein</StatLabel>
                <StatNumber>{protein} g</StatNumber>
            </Stat>
            </Box>
          </motion.Box>
          <motion.Box variants={dropUpVariants}>
          <Box p={5} shadow='md' borderWidth='1px'>
            <Stat >
                <StatLabel fontSize='lg' fontWeight='semibold' >Fat</StatLabel>
                <StatNumber>{fat} g</StatNumber>
            </Stat>
            </Box>
          </motion.Box>
          <motion.Box variants={dropUpVariants}>
          <Box p={5} shadow='md' borderWidth='1px'>
            <Stat >
                <StatLabel fontSize='lg' fontWeight='semibold' >Carbohydrates</StatLabel>
                <StatNumber>{carbohydrates} g</StatNumber>
            </Stat>
            </Box>
          </motion.Box>
          <motion.Box variants={dropUpVariants}>
          <Box p={5} shadow='md' borderWidth='1px'>
            <Stat >
                <StatLabel fontSize='lg' fontWeight='semibold' >Fiber</StatLabel>
                <StatNumber>{fiber} g</StatNumber>
            </Stat>
            </Box>
          </motion.Box>
          <motion.Box variants={dropUpVariants}>
          <Box p={5} shadow='md' borderWidth='1px'>
            <Stat >
                <StatLabel fontSize='lg' fontWeight='semibold' >Water</StatLabel>
                <StatNumber>{water} ml</StatNumber>
            </Stat>
            </Box>
          </motion.Box>
        </motion.div>
        </HStack>
        ) : (
            <div>
            </div>
        )}

                <div className='absolute inset-x-96 bottom-96 h-16'>
                <center>
                    <Stack spacing={1} >
                        <Input background='white' onChange={(e) => setWeight(e.target.value)} variant='filled' placeholder='weight in lbs' size='md' value={weight} />
                        <Button size='lg' onClick={onToggle}>Get Nutrition</Button>
                    </Stack>
                </center>
                </div>

            </div>
    )
}

export default Calculator;