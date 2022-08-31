
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        email: "test@gmail.com"
    },
    reducers: {
        addUser(state: object, action: PayloadAction<object>) {
            state = action.payload
        },
        removeUser(state: object, action: PayloadAction<object>) {
            state = { email: "" }
        }
    }
});




export const { addUser, removeUser } = UserSlice.actions

export default UserSlice.reducer;