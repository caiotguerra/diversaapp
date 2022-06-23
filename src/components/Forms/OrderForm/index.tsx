import React, { useState } from 'react';

import firestore from '@react-native-firebase/firestore';

import { Form, Title } from './styles';
import { Input } from '@components/Controllers/Input';
import { Button } from '@components/Controllers/Button';
import { TextArea } from '@components/Controllers/TextArea';
import { Alert } from 'react-native';

export function OrderForm() {
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNewOrder() {
    setIsLoading(true);

    firestore()
    .collection('orders')
    .add({
      patrimony,
      description,
      status: 'open',
      created_at: firestore.FieldValue.serverTimestamp()
    })
    .then(() => Alert.alert("Despesa", "Despesa registrada com Sucesso!"))
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false));
  }

  return (
    <Form>
      <Title>Nova Despesa</Title>
      <Input placeholder="Valor" onChangeText={setPatrimony} />
      <TextArea placeholder="Descrição" onChangeText={setDescription} />

      <Button title="Registrar Despesa" isLoading={isLoading} onPress={handleNewOrder} />
    </Form>
  );
}