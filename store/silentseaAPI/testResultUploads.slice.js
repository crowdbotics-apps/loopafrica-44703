import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const patient_test_results_upload_list = createAsyncThunk(
  "testResultUploads/patient_test_results_upload_list",
  async payload => {
    const response = await apiService.patient_test_results_upload_list(payload)
    return response.data
  }
)
export const patient_test_results_upload_create = createAsyncThunk(
  "testResultUploads/patient_test_results_upload_create",
  async payload => {
    const response = await apiService.patient_test_results_upload_create(
      payload
    )
    return response.data
  }
)
export const patient_test_results_upload_retrieve = createAsyncThunk(
  "testResultUploads/patient_test_results_upload_retrieve",
  async payload => {
    const response = await apiService.patient_test_results_upload_retrieve(
      payload
    )
    return response.data
  }
)
export const patient_test_results_upload_update = createAsyncThunk(
  "testResultUploads/patient_test_results_upload_update",
  async payload => {
    const response = await apiService.patient_test_results_upload_update(
      payload
    )
    return response.data
  }
)
export const patient_test_results_upload_partial_update = createAsyncThunk(
  "testResultUploads/patient_test_results_upload_partial_update",
  async payload => {
    const response = await apiService.patient_test_results_upload_partial_update(
      payload
    )
    return response.data
  }
)
export const patient_test_results_upload_destroy = createAsyncThunk(
  "testResultUploads/patient_test_results_upload_destroy",
  async payload => {
    const response = await apiService.patient_test_results_upload_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testResultUploadsSlice = createSlice({
  name: "testResultUploads",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(patient_test_results_upload_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(patient_test_results_upload_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(patient_test_results_upload_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(patient_test_results_upload_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        patient_test_results_upload_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(patient_test_results_upload_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        patient_test_results_upload_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        patient_test_results_upload_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        patient_test_results_upload_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(patient_test_results_upload_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        patient_test_results_upload_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(patient_test_results_upload_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        patient_test_results_upload_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        patient_test_results_upload_partial_update.fulfilled,
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
        patient_test_results_upload_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(patient_test_results_upload_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        patient_test_results_upload_destroy.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.filter(
              record => record.id !== action.meta.arg?.id
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        patient_test_results_upload_destroy.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  patient_test_results_upload_list,
  patient_test_results_upload_create,
  patient_test_results_upload_retrieve,
  patient_test_results_upload_update,
  patient_test_results_upload_partial_update,
  patient_test_results_upload_destroy,
  slice: testResultUploadsSlice
}
