import { StyleSheet } from "react-native";


const buttonStyle = StyleSheet.create({

    greenNoBorder: {    
        width: 183,
        height: 36,
        padding: 6,
        marginVertical: 4,  
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,    
        backgroundColor: "#7ECA9C"  
    },
    greenBorder:{
        width: 183,        
        height: 36,
        padding: 6,
        marginVertical: 4,  
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: "#7ECA9C",
        borderWidth: 1,
        borderColor: "#000000"
    },
    dark: {
        width: 183,        
        height: 36,
        padding: 6,
        marginVertical: 4,  
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: "#1C1427"
    },
    grey: {
        width: 183,        
        height: 36,
        padding: 6,
        marginVertical: 4,  
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: "#DADADA",      
    },
    white:{
        width: 183,        
        height: 36,
        padding: 6,
        marginVertical: 4,  
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#000000"
    },
    lightGreen:{
        width: 183,        
        height: 36,
        padding: 6,
        marginVertical: 4,  
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: "#CCFFBD",
        borderWidth: 1,
        borderColor: "#000000"
    }
});

export default buttonStyle;