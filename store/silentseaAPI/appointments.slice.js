import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_appointments_list = createAsyncThunk(
  "appointments/api_v1_appointments_list",
  async payload => {
    const response = await apiService.api_v1_appointments_list(payload)
    return response.data
  }
)
export const api_v1_appointments_create = createAsyncThunk(
  "appointments/api_v1_appointments_create",
  async payload => {
    const response = await apiService.api_v1_appointments_create(payload)
    return response.data
  }
)
export const api_v1_appointments_retrieve = createAsyncThunk(
  "appointments/api_v1_appointments_retrieve",
  async payload => {
    const response = await apiService.api_v1_appointments_retrieve(payload)
    return response.data
  }
)
export const api_v1_appointments_update = createAsyncThunk(
  "appointments/api_v1_appointments_update",
  async payload => {
    const response = await apiService.api_v1_appointments_update(payload)
    return response.data
  }
)
export const api_v1_appointments_partial_update = createAsyncThunk(
  "appointments/api_v1_appointments_partial_update",
  async payload => {
    const response = await apiService.api_v1_appointments_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_appointments_destroy = createAsyncThunk(
  "appointments/api_v1_appointments_destroy",
  async payload => {
    const response = await apiService.api_v1_appointments_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_appointments_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_appointments_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_appointments_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_appointments_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_appointments_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_appointments_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_appointments_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_appointments_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_appointments_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_appointments_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_appointments_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_appointments_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_appointments_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_appointments_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_appointments_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_appointments_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_appointments_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_appointments_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_appointments_list,
  api_v1_appointments_create,
  api_v1_appointments_retrieve,
  api_v1_appointments_update,
  api_v1_appointments_partial_update,
  api_v1_appointments_destroy,
  slice: appointmentsSlice
}
