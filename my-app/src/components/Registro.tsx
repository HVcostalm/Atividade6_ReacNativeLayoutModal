import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "./Button";
import ModalScreen from "./ModalScreen";
import { useState } from "react";
import * as Crypto from 'expo-crypto';
import { ThemedText } from "./ThemedText";

type Props = {
    isVisible: boolean;
    onClose: () => void;
}

export default function Registro({ isVisible, onClose}: Props) {
    const [emailUUID, setUUID] = useState<string>("");
    const GerarUUID = () => {
            setUUID(Crypto.randomUUID())
        }
    return (
        <ModalScreen isVisible={isVisible} onClose={onClose} title="Registro de UUID">
            <Text style={styles.title}>Email:</Text>
            <TextInput
                style={{
                    color:'white',
                    height: 40,
                    borderColor: 'white',
                    borderWidth: 1,
                  }}
                  placeholder="Digite o email"
            />
            <Button theme="primary" label="Gerar UUID" onPress={() => GerarUUID()} />
            <ThemedText style={styles.title}>{emailUUID}</ThemedText>
        </ModalScreen>
    );
}


const styles = StyleSheet.create({
    modalContent: {
        height: "25%",
        width: "100%",
        backgroundColor: "#25292e",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0,
    },
    titleContainer: {
        height: "16%",
        backgroundColor: "#464C55",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        color: "#fff",
        fontSize: 16,
    },
});