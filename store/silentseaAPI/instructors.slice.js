import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_instructor_profile_instructors_list = createAsyncThunk(
  "instructors/modules_instructor_profile_instructors_list",
  async payload => {
    const response = await apiService.modules_instructor_profile_instructors_list(
      payload
    )
    return response.data
  }
)
export const modules_instructor_profile_instructors_create = createAsyncThunk(
  "instructors/modules_instructor_profile_instructors_create",
  async payload => {
    const response = await apiService.modules_instructor_profile_instructors_create(
      payload
    )
    return response.data
  }
)
export const modules_instructor_profile_instructors_retrieve = createAsyncThunk(
  "instructors/modules_instructor_profile_instructors_retrieve",
  async payload => {
    const response = await apiService.modules_instructor_profile_instructors_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_instructor_profile_instructors_update = createAsyncThunk(
  "instructors/modules_instructor_profile_instructors_update",
  async payload => {
    const response = await apiService.modules_instructor_profile_instructors_update(
      payload
    )
    return response.data
  }
)
export const modules_instructor_profile_instructors_partial_update = createAsyncThunk(
  "instructors/modules_instructor_profile_instructors_partial_update",
  async payload => {
    const response = await apiService.modules_instructor_profile_instructors_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_instructor_profile_instructors_destroy = createAsyncThunk(
  "instructors/modules_instructor_profile_instructors_destroy",
  async payload => {
    const response = await apiService.modules_instructor_profile_instructors_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const instructorsSlice = createSlice({
  name: "instructors",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_instructor_profile_instructors_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_retrieve.fulfilled,
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
        modules_instructor_profile_instructors_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_update.fulfilled,
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
        modules_instructor_profile_instructors_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_partial_update.fulfilled,
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
        modules_instructor_profile_instructors_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_instructor_profile_instructors_destroy.fulfilled,
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
        modules_instructor_profile_instructors_destroy.rejected,
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
  modules_instructor_profile_instructors_list,
  modules_instructor_profile_instructors_create,
  modules_instructor_profile_instructors_retrieve,
  modules_instructor_profile_instructors_update,
  modules_instructor_profile_instructors_partial_update,
  modules_instructor_profile_instructors_destroy,
  slice: instructorsSlice
}
