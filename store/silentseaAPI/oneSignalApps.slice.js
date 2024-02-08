import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_push_notifications_list = createAsyncThunk(
  "oneSignalApps/modules_push_notifications_list",
  async payload => {
    const response = await apiService.modules_push_notifications_list(payload)
    return response.data
  }
)
export const modules_push_notifications_create = createAsyncThunk(
  "oneSignalApps/modules_push_notifications_create",
  async payload => {
    const response = await apiService.modules_push_notifications_create(payload)
    return response.data
  }
)
export const modules_push_notifications_retrieve = createAsyncThunk(
  "oneSignalApps/modules_push_notifications_retrieve",
  async payload => {
    const response = await apiService.modules_push_notifications_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_push_notifications_update = createAsyncThunk(
  "oneSignalApps/modules_push_notifications_update",
  async payload => {
    const response = await apiService.modules_push_notifications_update(payload)
    return response.data
  }
)
export const modules_push_notifications_partial_update = createAsyncThunk(
  "oneSignalApps/modules_push_notifications_partial_update",
  async payload => {
    const response = await apiService.modules_push_notifications_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_push_notifications_destroy = createAsyncThunk(
  "oneSignalApps/modules_push_notifications_destroy",
  async payload => {
    const response = await apiService.modules_push_notifications_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const oneSignalAppsSlice = createSlice({
  name: "oneSignalApps",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(modules_push_notifications_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_push_notifications_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(modules_push_notifications_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(modules_push_notifications_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_push_notifications_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(modules_push_notifications_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(modules_push_notifications_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        modules_push_notifications_retrieve.fulfilled,
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
        modules_push_notifications_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(modules_push_notifications_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_push_notifications_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(modules_push_notifications_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        modules_push_notifications_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_push_notifications_partial_update.fulfilled,
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
        modules_push_notifications_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(modules_push_notifications_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        modules_push_notifications_destroy.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.filter(
              record => record.id !== action.meta.arg?.id
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(modules_push_notifications_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  modules_push_notifications_list,
  modules_push_notifications_create,
  modules_push_notifications_retrieve,
  modules_push_notifications_update,
  modules_push_notifications_partial_update,
  modules_push_notifications_destroy,
  slice: oneSignalAppsSlice
}
