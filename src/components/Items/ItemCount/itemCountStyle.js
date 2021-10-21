export const itemCountStyle = (theme) => {
  return {
    counterGroup: {
      marginTop:"2em",
      display: "flex",
      justifyContent: "left",
      "& :hover": {
        color:"#ffffff",
      },
    },
    button: {
      borderRadius: "50% 50% 50% 50% !important",
      color: "#ffffff",
      border: "1px solid #ff8037",
      height: "3em",
      width: "3em",
      minWidth: "32px",
      transition: "0.5s ease",
    },
    buttonCounter: {
      border: "none",
      marginRight: "1em",
      marginLeft: "1em",
      color: "#ffffff !important",
      fontSize: "1.1em",
    },
  };
};
