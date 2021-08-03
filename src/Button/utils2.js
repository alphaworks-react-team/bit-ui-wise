


const returnFontSize = (size) => {
    switch (size) {
        case "sm":
            return "0.8em";
        case "md":
            return "1em"
        case "lrg":
            return "1.15em"
        default:
            return "1em"
    }
}

export default returnFontSize;