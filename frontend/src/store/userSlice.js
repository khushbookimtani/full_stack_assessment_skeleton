import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'users',
    initialState: {
        value : '',
        selectedUser : ''
    },

    reducers : {
        setUsers : function(state, action) {
           return {
            value : action.payload
           }
        },
        setSelectedUser(state,action) {
            state.selectedUser = action.payload
        }
    }
})

export const { setUsers, setSelectedUser } = userSlice.actions

const userReducer = userSlice.reducer;
export default userReducer;
