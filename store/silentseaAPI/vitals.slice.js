import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const patient_vitals_list = createAsyncThunk(
  "vitals/patient_vitals_list",
  async payload => {
    const response = await apiService.patient_vitals_list(payload)
    return response.data
  }
)
export const patient_vitals_create = createAsyncThunk(
  "vitals/patient_vitals_create",
  async payload => {
    const response = await apiService.patient_vitals_create(payload)
    return response.data
  }
)
export const patient_vitals_retrieve = createAsyncThunk(
  "vitals/patient_vitals_retrieve",
  async payload => {
    const response = await apiService.patient_vitals_retrieve(payload)
    return response.data
  }
)
export const patient_vitals_update = createAsyncThunk(
  "vitals/patient_vitals_update",
  async payload => {
    const response = await apiService.patient_vitals_update(payload)
    return response.data
  }
)
export const patient_vitals_partial_update = createAsyncThunk(
  "vitals/patient_vitals_partial_update",
  async payload => {
    const response = await apiService.patient_vitals_partial_update(payload)
    return response.data
  }
)
export const patient_vitals_destroy = createAsyncThunk(
  "vitals/patient_vitals_destroy",
  async payload => {
    const response = await apiService.patient_vitals_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vitalsSlice = createSlice({
  name: "vitals",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(patient_vitals_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_vitals_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(patient_vitals_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_vitals_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_vitals_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(patient_vitals_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_vitals_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_vitals_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(patient_vitals_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_vitals_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_vitals_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(patient_vitals_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_vitals_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_vitals_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(patient_vitals_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_vitals_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_vitals_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(patient_vitals_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  patient_vitals_list,
  patient_vitals_create,
  patient_vitals_retrieve,
  patient_vitals_update,
  patient_vitals_partial_update,
  patient_vitals_destroy,
  slice: vitalsSlice
}
