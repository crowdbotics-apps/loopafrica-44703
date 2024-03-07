import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const patient_medical_records_list = createAsyncThunk(
  "medicalRecords/patient_medical_records_list",
  async payload => {
    const response = await apiService.patient_medical_records_list(payload)
    return response.data
  }
)
export const patient_medical_records_create = createAsyncThunk(
  "medicalRecords/patient_medical_records_create",
  async payload => {
    const response = await apiService.patient_medical_records_create(payload)
    return response.data
  }
)
export const patient_medical_records_retrieve = createAsyncThunk(
  "medicalRecords/patient_medical_records_retrieve",
  async payload => {
    const response = await apiService.patient_medical_records_retrieve(payload)
    return response.data
  }
)
export const patient_medical_records_update = createAsyncThunk(
  "medicalRecords/patient_medical_records_update",
  async payload => {
    const response = await apiService.patient_medical_records_update(payload)
    return response.data
  }
)
export const patient_medical_records_partial_update = createAsyncThunk(
  "medicalRecords/patient_medical_records_partial_update",
  async payload => {
    const response = await apiService.patient_medical_records_partial_update(
      payload
    )
    return response.data
  }
)
export const patient_medical_records_destroy = createAsyncThunk(
  "medicalRecords/patient_medical_records_destroy",
  async payload => {
    const response = await apiService.patient_medical_records_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const medicalRecordsSlice = createSlice({
  name: "medicalRecords",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(patient_medical_records_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_medical_records_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(patient_medical_records_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_medical_records_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_medical_records_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(patient_medical_records_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_medical_records_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_medical_records_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(patient_medical_records_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_medical_records_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_medical_records_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(patient_medical_records_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        patient_medical_records_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        patient_medical_records_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        patient_medical_records_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(patient_medical_records_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_medical_records_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(patient_medical_records_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  patient_medical_records_list,
  patient_medical_records_create,
  patient_medical_records_retrieve,
  patient_medical_records_update,
  patient_medical_records_partial_update,
  patient_medical_records_destroy,
  slice: medicalRecordsSlice
}
