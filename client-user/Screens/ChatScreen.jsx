import { addDoc, onSnapshot } from 'firebase/firestore';
import  { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import db from '../firebaseConfig/connection';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
     const collection = collection(db,'chats')
     const q =query(collection,ref => ref.orderby('createdAt','desc'))

     const unsubscribe  = onSnapshot(q,snapshot =>{
        console.log(`snapshot`)
        setMessages(
            snapshot.docs.map(doc=>({
                _id:doc.id,
                createdAt: doc.data().createdAt,
                text: doc.data().text,
                user: doc.data().user
            }))
        )
     })
    return unsubscribe
    
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))

    const{id,createdAt,text,user} = messages[0];
    addDoc(collection(db,'chats'),{
        id,
        createdAt,
        text,
        user
    });
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}
