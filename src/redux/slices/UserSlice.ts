
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";

interface userState {
    email: string | null
    authenticated: boolean
}

const userInitialState: userState = {
    email: "test@gmail.com",
    authenticated: false
}

const UserSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        addUser(state, action: PayloadAction<any>) {
            state = action.payload
        }
    }
});




export const { addUser } = UserSlice.actions

export default UserSlice.reducer;