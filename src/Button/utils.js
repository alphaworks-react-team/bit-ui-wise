
const returnPadding = (size) => {
        switch (size) {
            case "sm":
                return "5px 10px";
            case "md":
                return "8px 15px"
            case "lrg":
                return "10px 18px"
            default:
                return "8px 15px"
        }
    }

export default returnPadding;