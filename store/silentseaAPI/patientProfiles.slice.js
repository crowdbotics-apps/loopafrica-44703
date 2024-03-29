import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const patient_patient_list = createAsyncThunk(
  "patientProfiles/patient_patient_list",
  async payload => {
    const response = await apiService.patient_patient_list(payload)
    return response.data
  }
)
export const patient_patient_create = createAsyncThunk(
  "patientProfiles/patient_patient_create",
  async payload => {
    const response = await apiService.patient_patient_create(payload)
    return response.data
  }
)
export const patient_patient_retrieve = createAsyncThunk(
  "patientProfiles/patient_patient_retrieve",
  async payload => {
    const response = await apiService.patient_patient_retrieve(payload)
    return response.data
  }
)
export const patient_patient_update = createAsyncThunk(
  "patientProfiles/patient_patient_update",
  async payload => {
    const response = await apiService.patient_patient_update(payload)
    return response.data
  }
)
export const patient_patient_partial_update = createAsyncThunk(
  "patientProfiles/patient_patient_partial_update",
  async payload => {
    const response = await apiService.patient_patient_partial_update(payload)
    return response.data
  }
)
export const patient_patient_destroy = createAsyncThunk(
  "patientProfiles/patient_patient_destroy",
  async payload => {
    const response = await apiService.patient_patient_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const patientProfilesSlice = createSlice({
  name: "patientProfiles",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(patient_patient_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_patient_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(patient_patient_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_patient_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_patient_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(patient_patient_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_patient_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_patient_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(patient_patient_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_patient_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_patient_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(patient_patient_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_patient_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_patient_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(patient_patient_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_patient_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_patient_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(patient_patient_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  patient_patient_list,
  patient_patient_create,
  patient_patient_retrieve,
  patient_patient_update,
  patient_patient_partial_update,
  patient_patient_destroy,
  slice: patientProfilesSlice
}
