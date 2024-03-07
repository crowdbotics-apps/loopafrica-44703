import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const patient_test_results_list = createAsyncThunk(
  "testResults/patient_test_results_list",
  async payload => {
    const response = await apiService.patient_test_results_list(payload)
    return response.data
  }
)
export const patient_test_results_create = createAsyncThunk(
  "testResults/patient_test_results_create",
  async payload => {
    const response = await apiService.patient_test_results_create(payload)
    return response.data
  }
)
export const patient_test_results_retrieve = createAsyncThunk(
  "testResults/patient_test_results_retrieve",
  async payload => {
    const response = await apiService.patient_test_results_retrieve(payload)
    return response.data
  }
)
export const patient_test_results_update = createAsyncThunk(
  "testResults/patient_test_results_update",
  async payload => {
    const response = await apiService.patient_test_results_update(payload)
    return response.data
  }
)
export const patient_test_results_partial_update = createAsyncThunk(
  "testResults/patient_test_results_partial_update",
  async payload => {
    const response = await apiService.patient_test_results_partial_update(
      payload
    )
    return response.data
  }
)
export const patient_test_results_destroy = createAsyncThunk(
  "testResults/patient_test_results_destroy",
  async payload => {
    const response = await apiService.patient_test_results_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testResultsSlice = createSlice({
  name: "testResults",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(patient_test_results_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_test_results_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(patient_test_results_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_test_results_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_test_results_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(patient_test_results_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_test_results_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_test_results_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(patient_test_results_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_test_results_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_test_results_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(patient_test_results_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_test_results_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        patient_test_results_partial_update.fulfilled,
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
        patient_test_results_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(patient_test_results_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_test_results_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(patient_test_results_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  patient_test_results_list,
  patient_test_results_create,
  patient_test_results_retrieve,
  patient_test_results_update,
  patient_test_results_partial_update,
  patient_test_results_destroy,
  slice: testResultsSlice
}
