
const returnPadding = (size) => {
        switch (size) {
            case "small":
                return "5px 10px";
            case "medium":
                return "8px 15px"
            case "large":
                return "10px 18px"
            default:
                return "8px 15px"
        }
    }
export default returnPadding;