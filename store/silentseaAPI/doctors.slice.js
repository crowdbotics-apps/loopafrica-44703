import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_doctor_profile_doctors_list = createAsyncThunk(
  "doctors/modules_doctor_profile_doctors_list",
  async payload => {
    const response = await apiService.modules_doctor_profile_doctors_list(
      payload
    )
    return response.data
  }
)
export const modules_doctor_profile_doctors_create = createAsyncThunk(
  "doctors/modules_doctor_profile_doctors_create",
  async payload => {
    const response = await apiService.modules_doctor_profile_doctors_create(
      payload
    )
    return response.data
  }
)
export const modules_doctor_profile_doctors_retrieve = createAsyncThunk(
  "doctors/modules_doctor_profile_doctors_retrieve",
  async payload => {
    const response = await apiService.modules_doctor_profile_doctors_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_doctor_profile_doctors_update = createAsyncThunk(
  "doctors/modules_doctor_profile_doctors_update",
  async payload => {
    const response = await apiService.modules_doctor_profile_doctors_update(
      payload
    )
    return response.data
  }
)
export const modules_doctor_profile_doctors_partial_update = createAsyncThunk(
  "doctors/modules_doctor_profile_doctors_partial_update",
  async payload => {
    const response = await apiService.modules_doctor_profile_doctors_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_doctor_profile_doctors_destroy = createAsyncThunk(
  "doctors/modules_doctor_profile_doctors_destroy",
  async payload => {
    const response = await apiService.modules_doctor_profile_doctors_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(modules_doctor_profile_doctors_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        modules_doctor_profile_doctors_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_doctor_profile_doctors_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_doctor_profile_doctors_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_doctor_profile_doctors_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_doctor_profile_doctors_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_doctor_profile_doctors_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_doctor_profile_doctors_retrieve.fulfilled,
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
        modules_doctor_profile_doctors_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_doctor_profile_doctors_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_doctor_profile_doctors_update.fulfilled,
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
        modules_doctor_profile_doctors_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_doctor_profile_doctors_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_doctor_profile_doctors_partial_update.fulfilled,
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
        modules_doctor_profile_doctors_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_doctor_profile_doctors_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_doctor_profile_doctors_destroy.fulfilled,
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
        modules_doctor_profile_doctors_destroy.rejected,
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
  modules_doctor_profile_doctors_list,
  modules_doctor_profile_doctors_create,
  modules_doctor_profile_doctors_retrieve,
  modules_doctor_profile_doctors_update,
  modules_doctor_profile_doctors_partial_update,
  modules_doctor_profile_doctors_destroy,
  slice: doctorsSlice
}
