import React, { useRef,useState } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import firebase from 'firebase'
import { db } from '../firebase'

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState('')

    const sendMessage = (e) => {
        e.preventDefault() // prevents refresh

        if(!channelId){
            return false
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user:'Abel',
            userImage:'D:\Win-Sem 21\Web Dev\chat-app\chat-app\src\images\the-weeknd-red.jpg' 
        })
        setInput('')
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder={`Message ${channelName}`}/>
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form{
        display: flex;
        position:relative;
        justify-content: center;
    }

    > form > input{
        position:fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        padding: 20px;
        outline: none;
    }
    > form > button{
        display: none !important;
    }
`
