import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

const initialState =[
    {
        Id: "ytrewq",
        name: "Positivity",
        des: "Description of Channel 1",
        messages: [
            {
                message: "Hi User!",
                sender: "ytrewq",
                timestamp: new Date(),
              },
              {
                message: "Welcome to Positvity Group",
                sender: "ytrewq",
                timestamp: new Date(),
              },
              
        ],
    },
    {
        Id: "jhgfds",
        name: "Party",
        des: "Description of Channel 2",
        messages: [
            {
                message: "Hi User!",
                sender: "jhgfds",
                timestamp: new Date(),
              },
              {
                message: "Welcome to Party Group",
                sender: "jhgfds",
                timestamp: new Date(),
              },
        ],
    },
];

export const channelSlice = createSlice ({
    name:'channels',
    initialState,
    reducers:{
        addChannel:  (state, action)=>{
            const newchannel = {
               Id:uuid(),
               name:action.payload.ChannelName,
               des:action.payload.Description,
               messages: [],
            }
            state.push(newchannel);
            
        },
        addMessageToChannel: (state, action) => {
            const { channelId, message, sender, timestamp } = action.payload;
            const channel = state.find(channel => channel.Id === channelId);
            if (channel) {
                channel.messages.push({ message, sender, timestamp });
            }
        },
        
        
    }
})

export const { addChannel, addMessageToChannel } = channelSlice.actions;

export default channelSlice.reducer;