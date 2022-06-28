import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import { Load } from '@components/Animations/Load';
import { Order, OrderProps } from '@components/Controllers/Order';
import { Container, Header, Title, Counter } from './styles';

export function Orders() {
  const [status, setStatus] = useState('open');
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<OrderProps[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const subscriber = firestore()
    .collection('orders')
    .orderBy("created_at", "desc")
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }) as OrderProps[];

      setOrders(data);
      setIsLoading(false);
    });

    return () => subscriber();
  },[status]);

  return (
    <Container>

      
      {
        isLoading ?
          <Load />
          : <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Order data={item} />}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          />
      }
    </Container>
  );
}