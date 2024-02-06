import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = [
  {
    Id:"Abcedef",
    name: "Haripriya",
    des: "haripriya@gmail.com",
    messages: [
      {
        message: "Hi User! Welcome",
        sender: "Abcedef",
        timestamp: new Date(),
      },
      {
        message: "I am HariPriya",
        sender: "Abcedef",
        timestamp: new Date(),
      },
      {
        message: "Nice to meet You",
        sender: "Abcedef",
        timestamp: new Date(),
      },
    ],
  },
  {
    Id: "rmodcdi",
    name: "Karthikeyan",
    des: "karthikeyan@gmail.com",
    messages: [
      {
        message: "Hi User! Welcome",
        sender: "rmodcdi",
        timestamp: new Date(),
      },
      {
        message: "I am Karthikeyan",
        sender: "rmodcdi",
        timestamp: new Date(),
      },
      {
        message: "Nice to meet You",
        sender: "rmodcdi",
        timestamp: new Date(),
      },
    ],
  },
  {
    Id: "pidbdwh",
    name: "DeepaKarthikeyan",
    des: "Deepakarthikeyan@gmail.com",
    messages: [
      {
        message: "Hi User! Welcome",
        sender: "pidbdwh",
        timestamp: new Date(),
      },
      {
        message: "I am DeepaKarthikeyan",
        sender: "pidbdwh",
        timestamp: new Date(),
      },
      {
        message: "Nice to meet You",
        sender: "pidbdwh",
        timestamp: new Date(),
      },
    ],
  },
  {
    Id: "guhjdbed",
    name: "Agnish",
    des: "Agnish@gmail.com",
    messages: [
      
        {
          message: "Hi User! Welcome",
          sender: "guhjdbed",
          timestamp: new Date(),
        },
        {
          message: "I am Agnish",
          sender: "guhjdbed",
          timestamp: new Date(),
        },
        {
          message: "Nice to meet You",
          sender: "guhjdbed",
          timestamp: new Date(),
        },
      
    ],
  },
];

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    addPeople: (state, action) => {
      const newPerson = {
        Id: uuid(),
        name: action.payload.UserName,
        des: action.payload.Email,
        messages: [],
      };
      state.push(newPerson);
    },
    addMessageToPeople: (state, action) => {
      const { userId, message, sender, timestamp } = action.payload;
      const user = state.find((user) => user.Id === userId);
      if (user) {
        user.messages.push({ message, sender, timestamp });
      }
    },
  },
});

export const { addPeople, addMessageToPeople } = peopleSlice.actions;

export default peopleSlice.reducer;
