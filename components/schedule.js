import { PopupWidget } from "react-calendly";


const Schedule = () => {
    return (
        <PopupWidget url="https://calendly.com/bouaziz-tech" 
                    rootElement={document.getElementById("__next")}
                    text = "Claim your Free Audit"
                    textColor="#ffffff"
                    color="#00a2ff" />            
    )
}

export default Schedule