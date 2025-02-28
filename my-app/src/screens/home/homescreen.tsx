import { Button } from "@/src/components/Button";
import { ImageViewer } from "@/src/components/ImageViewer";
import { ThemedView } from "@/src/components/ThemedView";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import ModalScreen from "@/src/components/ModalScreen";
import Registro from "@/src/components/Registro";
import { useState } from "react";

const PlaceholderImage = require("@/assets/images/matrix.jpg");

export function HomeScreen() {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const onModalClose = () => {
        setIsModalVisible(false);
    };
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} />
            </ThemedView>
            <ThemedView style={styles.footerContainer}>
                <Button theme="primary" label="Modal" onPress=
                    {() => setIsModalVisible(true)} />
            </ThemedView>
            <Registro isVisible={isModalVisible} onClose={onModalClose}/>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        flex: 1,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
    },
});