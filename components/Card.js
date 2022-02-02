import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
    /*  here we are excpting styes form outside so we  
    merge styles that copmes form outside ...props.style*/
  return <View style={{...styles.card,...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Card;
