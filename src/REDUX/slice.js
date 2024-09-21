



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      movies:[],
      loading:false,
      error:null,

      SelectedMovies:{},

      events:[],

      

    
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovieList(state, action) {
      state.movies=action.payload
      state.loading= false
      state.error =false
    },

    setloading(state){
      state.loading=true
      state.error= false
    },

    seterror(state,action) {
      state.error=action.payload
      state.loading= false
    },
     

    setSelectedMovies(state,action){
      state.SelectedMovies=action.payload
      state.loading=false
      state.error=null
    },


    setevents(state,action){
      state.events=action.payload
      state.loading=false
      state.error=null
    },

     

  },
});

export const { setMovieList,setloading,seterror,setSelectedMovies,setevents, setbookingstatus } = moviesSlice.actions;
export default moviesSlice.reducer;





