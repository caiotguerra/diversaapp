import React, { useState } from 'react';

import firestore from '@react-native-firebase/firestore';

import { Form, Title } from './styles';
import { Input } from '@components/Controllers/Input';
import { Button } from '@components/Controllers/Button';
import { Alert } from 'react-native';

export function OrderForm() {
  const [patrimony, setPatrimony] = useState('');
  const [equipment, setEquipment] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNewOrder() {
    if(description.length > 3){
      setIsLoading(true);
      firestore()
      .collection('orders')
      .add({
        patrimony,
        description,
        equipment,
        status: 'open',
        created_at: firestore.FieldValue.serverTimestamp()
      })
      
      .then(() => Alert.alert("Despesa", "Despesa registrada com Sucesso!"))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    }else{

      Alert.alert('Opa!', 'Por favor inclua a descrição da sua despesa', [
        {text: 'Entendido', onPress: () => console.log('alerta fechado')}
      ])
    }
   
  }

  return (
    <Form>
      <Title>Nova Despesa</Title>
      <Input placeholder="Valor" onChangeText={setPatrimony} keyboardType="numeric" />
      <Input placeholder="Descrição" onChangeText={setDescription} />
      <Input placeholder="Data" onChangeText={setEquipment} />
      

      <Button title="Registrar Despesa" isLoading={isLoading} onPress={handleNewOrder} />
    </Form>
  );
}