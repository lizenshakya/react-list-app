import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk('movies/getMovies', 
    async(data, thunkApi) => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            return await response.json();
        } catch(error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

interface MovieState {
    loading: boolean;
    error: null | string;
    data: null | any[]
}

const initialState: MovieState = {
    loading: false,
    error: null,
    data: null,
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getMovies.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getMovies.fulfilled, 
            (state, action: PayloadAction<any[]>) => {
                state.loading = false;
                state.data = action.payload;
            }
        );
        builder.addCase(
            getMovies.rejected,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload
            }
        )
    }
})

export default movieSlice.reducer;