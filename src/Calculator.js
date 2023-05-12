import { useState } from 'react';
import { 
    Input, 
    Text, 
    Stack,  
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Button,
    useDisclosure,
    ScaleFade,
    Box
     } from '@chakra-ui/react';
import './styles.css';

function Calculator () {
    const { isOpen, onToggle } = useDisclosure();

    const [weight, setWeight] = useState(0);

    const protein = (1.2 * weight);
    const fat = (.68 * weight);
    const carbohydrates = (.45 * weight);
    const fiber = (.42 * weight);
    const water = (27 * weight);
           
    const dailyNutrition = [protein, fat, carbohydrates, fiber, water];


    return (
        <div className='max-w-full'>
        <center>
        <div className='p-20'>
            <Stack spacing={3} >
                <Text mb='8px'>Cat's Weight:</Text>
                <Input background='white' onChange={(e) => setWeight(e.target.value)} variant='filled' placeholder='weight in lbs' size='lg' value={weight} />
                <Button onClick={onToggle}>Get Nutrition</Button>
            </Stack>
        </div>
        </center>
        <div className='pt-20 text-center grid-row'>
            <ScaleFade initialScale={0.9} in={isOpen}>
                <StatGroup >
                <Box background='white' p={4} maxW='xlg' borderWidth='2px' borderRadius='lg' overflow='hidden' color='black'>
                    <Box borderWidth='1px' p={10} alignItems='baseline' borderRadius='lg' >
                <Stat >
                    <StatLabel fontSize='lg' fontWeight='semibold' >Protein</StatLabel>
                    <StatNumber>{protein} g</StatNumber>
                </Stat>
                </Box>
                </Box>
                <Box background='white' p={4} maxW='xlg' borderWidth='2px' borderRadius='lg' overflow='hidden' color='black'>
                    <Box borderWidth='1px' p={10} alignItems='baseline' borderRadius='lg' >
                <Stat >
                    <StatLabel fontSize='lg' fontWeight='semibold' >Fat</StatLabel>
                    <StatNumber>{fat} g</StatNumber>
                </Stat>
                </Box>
                </Box>
                <Box background='white' p={4} maxW='xlg' borderWidth='2px' borderRadius='lg' overflow='hidden' color='black'>
                    <Box borderWidth='1px' p={10} alignItems='baseline' borderRadius='lg' >
                <Stat >
                    <StatLabel fontSize='lg' fontWeight='semibold' >Carbohydrates</StatLabel>
                    <StatNumber>{carbohydrates} g</StatNumber>
                </Stat>
                </Box>
                </Box>
                <Box background='white' p={4} maxW='xlg' borderWidth='2px' borderRadius='lg' overflow='hidden' color='black'>
                <Box borderWidth='1px' p={10} alignItems='baseline' borderRadius='lg' >
                <Stat >
                    <StatLabel fontSize='lg' fontWeight='semibold' >Fiber</StatLabel>
                    <StatNumber>{fiber} g</StatNumber>
                </Stat>
                </Box>
                </Box>
                <Box background='white' p={4} maxW='xlg' borderWidth='2px' borderRadius='lg' overflow='hidden' color='black'>
                    <Box borderWidth='1px' p={10} alignItems='baseline' borderRadius='lg' >
                <Stat >
                    <StatLabel fontSize='lg' fontWeight='semibold' >Water</StatLabel>
                    <StatNumber>{water} ml</StatNumber>
                </Stat>
                </Box>
                </Box>
            </StatGroup>
            </ScaleFade>
        </div>
        </div>
    )
}

export default Calculator;