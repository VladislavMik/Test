import React from "react";
import { Button } from "react-native";

const ButtonComponent = ({title, onPress, style}) => {
    return <Button
        title={title}
        onPress={onPress}
        style={style}
    />
}



export default ButtonComponent