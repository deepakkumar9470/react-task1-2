import axios from "axios";

const { createSlice ,createAsyncThunk} = require("@reduxjs/toolkit");



export const fetchweatherAction = createAsyncThunk(
    'weather/fetch',
    async (payload , {rejectWithValue,getState,dispatch})=>{
       
          try {

            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${process.env.REACT_WEATHER_API_KEY}`)
            
            return data; 
          } catch (error) {
              
              if(!error?.response){
                  throw error
              }else{

                  return rejectWithValue(error?.response?.data)
              }
          }
                 
     
     }
)


export const weatherSlice = createSlice({
    name : 'weather',
    initialState:{data: "Loading..."},
    extraReducers : builder => {
        // Pending case

        builder.addCase(fetchweatherAction.pending, (state,action)=>{
            state.loading = true;
        });
        // Fulfilled case
        builder.addCase(fetchweatherAction.fulfilled, (state,action)=>{
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
         // Rejected case
         builder.addCase(fetchweatherAction.rejected, (state,action)=>{
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;;
        });
        
    }
})

// export const {increment,decrement} = weatherSlice.actions;
export default weatherSlice.reducer;

