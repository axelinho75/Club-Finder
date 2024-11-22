import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Parametres() {
  const [modalVisible, setModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [confirmationPasswordVisible, setConfirmationPasswordVisible] = useState(false);
  const [oldEmail, setOldEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [deleteAccountVisible, setDeleteAccountVisible] = useState(false);
  const router = useRouter();

  const handleEmailChange = async () => {
    if (newEmail === confirmEmail) {
      try {
        const response = await fetch('http://127.0.0.1:3000/change-email', { // Remplacez par votre adresse IP locale
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ oldEmail, newEmail }),
        });
        const data = await response.json();
        if (response.ok) {
          setConfirmationVisible(true);
          setModalVisible(false); // Fermer le modal après succès
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert("Les adresses e-mail ne correspondent pas !");
    }
  };

  const handlePasswordChange = async () => {
    if (newPassword === confirmPassword) {
      try {
        const response = await fetch('http://127.0.0.1:3000/change-password', { // Remplacez par votre adresse IP locale
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: oldEmail, oldPassword, newPassword }),
        });
        const data = await response.json();
        if (response.ok) {
          setConfirmationPasswordVisible(true);
          setPasswordModalVisible(false); // Fermer le modal après succès
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert("Les mots de passe ne correspondent pas !");
    }
  };

  const handleLogout = () => {
    setLogoutVisible(false);
    setTimeout(() => {
      router.push('/');
    }, 300); // Ajoutez un délai pour permettre au modal de se fermer avant la redirection
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/delete-account', { // Remplacez par votre adresse IP locale
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: oldEmail }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Account deleted successfully');
        router.push('/');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Paramètres</Text>
      </View>
     
     <View style={styles.buttoncontainer}>
      <TouchableOpacity style={styles.button} onPress={() => setLocationModalVisible(true)}>
        <Text style={styles.buttonText}>Paramètre de localisation</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.buttoncontainer}>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Modifier l'adresse e-mail</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.buttoncontainer}>
      <TouchableOpacity style={styles.button} onPress={() => setPasswordModalVisible(true)}>
        <Text style={styles.buttonText}>Modifier le mot de passe</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.buttoncontainer}>
      <TouchableOpacity style={styles.button} onPress={() => setLogoutVisible(true)}>
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.buttoncontainer}>
      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => setDeleteAccountVisible(true)}>
        <Text style={styles.buttonText}>Supprimer ce compte</Text>
      </TouchableOpacity>
      </View>

      {/* Modal pour activer la localisation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={locationModalVisible}
        onRequestClose={() => {
          setLocationModalVisible(!locationModalVisible);
       }}
>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Voulez-vous activer la localisation ?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.confirmButton, styles.yesButton]} onPress={() => setLocationModalVisible(false)}>
                <Text style={styles.buttonText}>Oui</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.confirmButton, styles.noButton]} onPress={() => setLocationModalVisible(false)}>
                <Text style={styles.buttonText}>Non</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal pour modifier l'email */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Changer l'email</Text>
            <TextInput
              style={styles.input}
              placeholder="Ancien email"
              value={oldEmail}
              onChangeText={setOldEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Nouvel email"
              value={newEmail}
              onChangeText={setNewEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmer le nouvel email"
              value={confirmEmail}
              onChangeText={setConfirmEmail}
            />
            <Button title="Changer l'email" onPress={handleEmailChange} />
            <Button title="Annuler" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal de confirmation pour l'email */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmationVisible}
        onRequestClose={() => {
          setConfirmationVisible(!confirmationVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text>Email modifié avec succès !</Text>
            <Button title="OK" onPress={() => setConfirmationVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal pour modifier le mot de passe */}
      <Modal visible={passwordModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Changer le mot de passe</Text>
            <TextInput
              style={styles.input}
              placeholder="Ancien mot de passe"
              value={oldPassword}
              onChangeText={setOldPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Nouveau mot de passe"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmer le nouveau mot de passe"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
            <Button title="Changer le mot de passe" onPress={handlePasswordChange} />
            <Button title="Annuler" onPress={() => setPasswordModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal de confirmation pour le mot de passe */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmationPasswordVisible}
        onRequestClose={() => {
          setConfirmationPasswordVisible(!confirmationPasswordVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text>Mot de passe modifié avec succès !</Text>
            <Button title="OK" onPress={() => setConfirmationPasswordVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal de confirmation pour la suppression de compte */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteAccountVisible}
        onRequestClose={() => {
          setDeleteAccountVisible(!deleteAccountVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Êtes-vous sûr de vouloir supprimer ce compte ?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.confirmButton, styles.yesButton]} onPress={handleDeleteAccount}>
                <Text style={styles.buttonText}>Oui</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.confirmButton, styles.noButton]} onPress={() => setDeleteAccountVisible(false)}>
                <Text style={styles.buttonText}>Non</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal de confirmation pour la déconnexion */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutVisible}
        onRequestClose={() => {
          setLogoutVisible(!logoutVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Êtes-vous sûr de vouloir vous déconnecter ?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.confirmButton, styles.yesButton]} onPress={handleLogout}>
                <Text style={styles.buttonText}>Oui</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={[styles.confirmButton, styles.noButton]} onPress={() => setLogoutVisible(false)}>
                <Text style={styles.buttonText}>Non</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
},
header: {
  position: 'absolute',
  top: 50, 
  left: 130,
  width: 215,
  height: 46, 
},
title: {
    fontSize: 32,
    color: '#B3995B',
    fontWeight: 'bold',
    marginBottom: 10,
},

buttoncontainer: {
  marginVertical: 20,
  width: '100%',
  alignItems: 'center',
},

  button: {
    backgroundColor: '#B3995B',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginVertical: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderColor: '#B3995B',
   color : '#B3995B',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    flex: 1,
  },
  yesButton: {
    backgroundColor: 'green',
  },
  noButton: {
    backgroundColor: 'red',
  },
});
