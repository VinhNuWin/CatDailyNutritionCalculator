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
      <div className='flex justify-center mt-5'>
      <center>
          <Stack spacing={1} >
              <Input background='white' onChange={(e) => setWeight(e.target.value)} variant='filled' placeholder='weight in lbs' value={weight} />
              <Button colorScheme='orange' variant='outline' size='sm' onClick={onToggle}>Get Nutrition</Button>
          </Stack>
      </center>
      </div>
      <div className='h-64'>
      </div>
      <div>
        <div className='flex justify-center h-96 mr-8'>
        { isOpen ? (
        <HStack spacing={8} className=''>
        <div className='' ></div>
        <motion.div
            className='flex content-between'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          <motion.Box variants={dropUpVariants}>
            <Box p={5} shadow='md' borderWidth='2px' background='white'>
            <Stat >
                <StatLabel fontSize='lg' fontWeight='semibold' >Protein</StatLabel>
                <StatNumber>{protein} g</StatNumber>
            </Stat>
            </Box>
          </motion.Box>
          <motion.Box variants={dropUpVariants}>
          <Box p={5} shadow='md' borderWidth='2px' background='white'>
            <Stat >
                <StatLabel fontSize='lg' fontWeight='semibold' >Fat</StatLabel>
                <StatNumber>{fat} g</StatNumber>
            </Stat>
            </Box>
          </motion.Box>
          <motion.Box variants={dropUpVariants}>
          <Box p={5} shadow='md' borderWidth='2px' background='white'>
            <Stat >
                <StatLabel fontSize='lg' fontWeight='semibold' >Carbohydrates</StatLabel>
                <StatNumber>{carbohydrates} g</StatNumber>
            </Stat>
            </Box>
          </motion.Box>
          <motion.Box variants={dropUpVariants}>
          <Box p={5} shadow='md' borderWidth='2px' background='white'>
            <Stat >
                <StatLabel fontSize='lg' fontWeight='semibold' >Fiber</StatLabel>
                <StatNumber>{fiber} g</StatNumber>
            </Stat>
            </Box>
          </motion.Box>
          <motion.Box variants={dropUpVariants}>
          <Box p={5} shadow='md' borderWidth='2px' background='white'>
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
                                </div>
                                </div>
                                </div>
    )
}

export default Calculator;