import { Button, Box, Container, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { checkPL } from "../utils/functions";

function Manualform() {

    const [initialAmount, setInitialAmount] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [currentAmount, setCurrentAmount] = useState(1);
    const [output, setOutput] = useState("");
    const [output2, setOutput2] = useState("");

    const inputProps = {
        step: 0.01,
        min: 1,
        style: {
            color: "var(--text-color)"
        }
    }

    const formControlStyle = {
        my: 1,
        mx: 2, 
        minWidth: 120
    }

    const transparentColorBox = {
        marginInlineStart: 0, 
        marginInlineEnd: 0, 
        marginBlockStart: 0, 
        marginBlockEnd: 0, 
        paddingInlineStart: "2rem", 
        paddingInlineEnd: "2rem", 
        paddingBlockStart: "1.5rem", 
        paddingBlockEnd: "1.5rem",
    }

    const inputLabelProps= {
        style: {
            color: "var(--blog-card-text-color)"
        }
    }

    function submitForm(e){
        e.preventDefault();
        const plObject = checkPL(initialAmount, quantity, currentAmount);
        setOutput(`Your ${plObject.profit? "profit" : "loss"} is INR ${plObject.totalAmount}. Your per stock ${plObject.profit? "profit" : "loss"} is INR ${plObject.amount}.`);
        setOutput2({percentage: plObject.percent, pl: plObject.profit});
    }

    return ( 
        <>
            <Box sx={transparentColorBox} component="form" onSubmit={(event) => submitForm(event)}>
                <Container maxWidth="md" align="center" >
                    <FormControl sx={formControlStyle} >
                        <TextField 
                        error={initialAmount < 1} 
                        required
                        class="before-adjust" 
                        inputProps={inputProps}
                        InputLabelProps={inputLabelProps} 
                        type="number" id="initialPrice" 
                        label="Initial Price" 
                        variant="standard" 
                        onChange={(e) => {
                            setInitialAmount(e.target.value)
                        }} 
                        />
                    </FormControl>
                    <FormControl sx={formControlStyle} >
                        <TextField 
                        error={quantity < 1} 
                        required 
                        inputProps={inputProps}
                        InputLabelProps={inputLabelProps} 
                        type="number" id="quantity" 
                        label="Quantity" 
                        variant="standard" 
                        onChange={(e) => {
                            setQuantity(e.target.value)
                        }} 
                        />
                    </FormControl>
                    <FormControl sx={formControlStyle} >
                        <TextField 
                        error={currentAmount < 1} 
                        required 
                        inputProps={inputProps}
                        InputLabelProps={inputLabelProps} 
                        type="number" id="currentAmount" 
                        label="Current Price" 
                        variant="standard" 
                        onChange={(e) => {
                            setCurrentAmount(e.target.value)
                        }} 
                        />
                    </FormControl>
                </Container>
                <Container maxWidth="md" align="center" sx={{ mt: 5}}>
                    <Button variant="contained" type="submit">Check</Button>
                </Container>
                <Container maxWidth="md" align="center" sx={{ mt: 5}}>
                    <Typography variant="h3" component="p">{output}</Typography>
                    <Typography 
                    variant="h3" 
                    component="p" 
                    class={ output2? output2.pl ? "profit pl-base" : "loss pl-base" : "d-none"} 
                    >Your {output2.pl ? "profit" : "loss"} is {output2.percentage}%</Typography>
                </Container>
            </Box>
        </>
     );
}

export default Manualform;