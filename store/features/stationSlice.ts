import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Station {
  id: string;
  name: string;
  lat: number;
  lon: number;
  free_bikes: number;
  empty_slots: number;
}

interface StationState {
  stations: Station[];
  selectedStation: Station | null;
  hoveredStation: Station | null;
  loading: boolean;
}

const initialState: StationState = {
  stations: [],
  selectedStation: null,
  hoveredStation: null,
  loading: false,
};

const stationSlice = createSlice({
  name: "station",
  initialState,
  reducers: {
    setStations: (state, action: PayloadAction<Station[]>) => {
      state.stations = action.payload;
    },

    setSelectedStation: (state, action: PayloadAction<Station | null>) => {
      state.selectedStation = action.payload;
    },

    setHoveredStation: (state, action: PayloadAction<Station | null>) => {
      state.hoveredStation = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setStations,
  setSelectedStation,
  setHoveredStation,
  setLoading,
} = stationSlice.actions;

export default stationSlice.reducer;
