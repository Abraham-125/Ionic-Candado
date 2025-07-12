import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  useIonModal,
  IonFooter,
} from "@ionic/react";

import { useState } from "react";
import ModalCrear from "../components/ModalCrear";

const Principal: React.FC = () => {
  const [plataformas, setPlataformas] = useState<string[]>([]);
  const [present, dismiss] = useIonModal(ModalCrear, {
    dismiss: (data: string, role: string) => dismiss(data, role),
  });

  const abrirModal = () => {
    present({
      onWillDismiss: (event) => {
        if (event.detail.role === "confirm" && event.detail.data) {
          setPlataformas([...plataformas, event.detail.data]);
        }
      },
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Gestor de Contraseñas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Acordeones dinámicos */}
        <IonAccordionGroup expand="inset">
          {plataformas.map((nombre, idx) => (
            <IonAccordion key={idx} value={nombre}>
              <IonItem slot="header">
                <IonLabel>{nombre}</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Usuario: --- <br />
                Contraseña: ---
              </div>
            </IonAccordion>
          ))}
        </IonAccordionGroup>
      </IonContent>

      {/* ⬇️ Barra inferior con botones */}
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton expand="block" onClick={abrirModal}>
                  Crear
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="block" color="warning">
                  Modificar
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="block" color="danger">
                  Eliminar
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Principal;
