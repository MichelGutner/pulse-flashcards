import { Text } from "@/components/ThemedText";
import { useThemeContext } from "@/src/context/ThemeContext";
import React, { useEffect, useRef, useState } from "react";
import {
    Keyboard,
    Modal,
    Pressable,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { Button } from "../button";
import { LayoutWithSafeArea } from "../templates/layout/safeArea";
import { TModalAddItemsProps } from "./types";

export const ModalAddItems = ({
  visible: isVisible,
  onClose,
  onSave,
  description,
  title,
  firstInput,
  secondInput,
}: TModalAddItemsProps) => {
  const [visible, setVisible] = useState(false);
  const { theme } = useThemeContext();
  const firstInputRef = useRef<TextInput>(null);
  const secondInputRef = useRef<TextInput>(null);

  const dismissModal = () => {
    setVisible(false);
    onClose?.();
  };

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Pressable onPress={dismissModal} style={styles.backdrop}>
        <LayoutWithSafeArea>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{
                ...styles.container,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.outline,
                shadowColor: theme.colors.elevation.level5,
              }}
            >
              <Text type="subtitle" style={{ marginBottom: 10 }}>
                {title}
              </Text>
              <Text type="bodyMedium" style={{ color: theme.colors.outline }}>
                {description}
              </Text>

              <Text
                type="bodyMedium"
                style={{ marginTop: 10, color: theme.colors.text }}
              >
                {firstInput?.label}
              </Text>
              <TextInput
                {...firstInput?.input}
                autoFocus
                ref={firstInputRef}
                returnKeyType="next"
                placeholder={firstInput?.input?.placeholder}
                placeholderTextColor={theme.colors.outline}
                onSubmitEditing={() => secondInputRef.current?.focus()}
                submitBehavior="newline"
                style={{
                  ...styles.input,
                  borderColor: theme.colors.outline,
                  color: theme.colors.text,
                }}
              />

              <Text
                type="bodyMedium"
                style={{ marginTop: 8, color: theme.colors.text }}
              >
                {secondInput?.label}
              </Text>
              <TextInput
                {...secondInput?.input}
                ref={secondInputRef}
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
                placeholder={secondInput?.input?.placeholder}
                placeholderTextColor={theme.colors.outline}
                textAlignVertical="top"
                multiline
                style={{
                  ...styles.input,
                  height: 100,
                  borderColor: theme.colors.outline,
                  color: theme.colors.text,
                }}
              />
              <View style={styles.buttonContainer}>
                <Button
                  title="Cancelar"
                  variant="secondary"
                  style={{ flex: 1 }}
                  onPress={dismissModal}
                />
                <Button
                  title="Criar Deck"
                  variant="primary"
                  style={{ flex: 1 }}
                  onPress={onSave}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </LayoutWithSafeArea>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
  },
  container: {
    width: "90%",
    padding: 20,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 50,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 8,
    marginTop: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    gap: 10,
  },
});
