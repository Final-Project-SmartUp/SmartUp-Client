// import { useState, useCallback, useEffect } from "react"
// import { GiftedChat } from "react-native-gifted-chat"
// import firebase from "firebase"
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// export default function ChatScreen() {
//     const [messages, setMessages] = useState([])
//     useEffect(() => {
//         // Initialize Firebase
//         const firebaseConfig = {
//             // Insert your Firebase configuration here
//             apiKey: "AIzaSyDcm63Fb4tRJ3VcRpfM-K--LRCf7jJq3Gs",
//             authDomain: "smartup-ba538.firebaseapp.com",
//             projectId: "smartup-ba538",
//             storageBucket: "smartup-ba538.appspot.com",
//             messagingSenderId: "649665150843",
//             appId: "1:649665150843:web:7df5b26c165910eaa307de",
//             measurementId: "G-RTJ0N4X69R",
//         }
//         if (!firebase.apps.length) {
//          initializeApp(firebaseConfig)
//         }

//         const db = firebase.firestore()
//         const unsubscribe = db
//             .collection("messages")
//             .orderBy("createdAt", "desc")
//             .onSnapshot((snapshot) => {
//                 const messages = snapshot.docs.map((doc) => {
//                     const data = doc.data()
//                     return {
//                         _id: doc.id,
//                         text: data.text,
//                         createdAt: data.createdAt.toDate(),
//                         user: {
//                             _id: data.user._id,
//                             name: data.user.name,
//                         },
//                     }
//                 })
//                 setMessages(messages)
//             })

//         return () => {
//             unsubscribe()
//         }
//     }, [])

//     return (
//         <GiftedChat
//             messages={messages}
//             onSend={(messages) => onSend(messages)}
//             user={{
//                 _id: 1,
//             }}
//         />
//     )
// }
