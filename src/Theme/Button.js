import { border } from "@chakra-ui/react";

const Button ={
    baseStyle:{
        color:"rgb(107,70,193)",
        fontSize: "14px",
        fontWeight:"400"
    },
    variants:{
        solid:{
            color:"white",
            fontWeight:"600",
            backgroundImage:"linear-gradient(to right, var(--chakra-colors-purple-500), var(--chakra-colors-blue-500))"
        },
        outline:{
            color:"rgb(107,70,193)",
            borderColor:"rgb(107,70,193)"
        },
        ghost:{

        }
    }
}

export default Button;