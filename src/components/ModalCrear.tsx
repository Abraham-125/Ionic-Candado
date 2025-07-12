// src/components/ModalCrear.tsx
import {
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonInput,
} from "@ionic/react";
import { OverlayEventDetail } from "@ionic/core/components";
import { useRef } from "react";

interface ModalCrearProps {
  dismiss: (data?: any, role?: string) => void;
}

const ModalCrear: React.FC<ModalCrearProps> = ({ dismiss }) => {
  const inputRef = useRef<HTMLIonInputElement>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={() => dismiss(null, "cancel")}>
              Cancelar
            </IonButton>
          </IonButtons>
          <IonTitle>Crear nueva cuenta</IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={() => dismiss(inputRef.current?.value, "confirm")}
              strong={true}
            >
              Guardar
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput
            ref={inputRef}
            labelPlacement="stacked"
            label="Nombre de plataforma"
            placeholder="Ej: Google"
          />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default ModalCrear;
