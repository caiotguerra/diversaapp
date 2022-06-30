import React, { useState } from 'react';

import firestore from '@react-native-firebase/firestore';

import { Form, Title } from './styles';
import { Input } from '@components/Controllers/Input';
import { Button } from '@components/Controllers/Button';
import { Alert } from 'react-native';

export function OrderForm() {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNewOrder() {
    if(description.length > 2){
      setIsLoading(true);
      firestore()
      .collection('orders')
      .add({
        amount,
        description,
        date,
        created_at: firestore.FieldValue.serverTimestamp()
      })
      
      .then(() => Alert.alert("Despesa", "Despesa registrada com Sucesso!"))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    }else{

      Alert.alert('Opa!', 'Por favor preencha todos os campos da sua despesa', [
        {text: 'Entendido', onPress: () => console.log('alerta fechado')}
      ])
    }
   
  }

  return (
    <Form>
      <Title>Nova Despesa</Title>
      <Input placeholder="Valor" onChangeText={setAmount} keyboardType="numeric" />
      <Input placeholder="Descrição" onChangeText={setDescription} />
      <Input placeholder="Data" onChangeText={setDate} />
      

      <Button title="Registrar Despesa" isLoading={isLoading} onPress={handleNewOrder} />
    </Form>
  );
}