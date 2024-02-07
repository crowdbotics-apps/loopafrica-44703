import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_feedback_list = createAsyncThunk(
  "feedbacks/api_v1_feedback_list",
  async payload => {
    const response = await apiService.api_v1_feedback_list(payload)
    return response.data
  }
)
export const api_v1_feedback_create = createAsyncThunk(
  "feedbacks/api_v1_feedback_create",
  async payload => {
    const response = await apiService.api_v1_feedback_create(payload)
    return response.data
  }
)
export const api_v1_feedback_retrieve = createAsyncThunk(
  "feedbacks/api_v1_feedback_retrieve",
  async payload => {
    const response = await apiService.api_v1_feedback_retrieve(payload)
    return response.data
  }
)
export const api_v1_feedback_update = createAsyncThunk(
  "feedbacks/api_v1_feedback_update",
  async payload => {
    const response = await apiService.api_v1_feedback_update(payload)
    return response.data
  }
)
export const api_v1_feedback_partial_update = createAsyncThunk(
  "feedbacks/api_v1_feedback_partial_update",
  async payload => {
    const response = await apiService.api_v1_feedback_partial_update(payload)
    return response.data
  }
)
export const api_v1_feedback_destroy = createAsyncThunk(
  "feedbacks/api_v1_feedback_destroy",
  async payload => {
    const response = await apiService.api_v1_feedback_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const feedbacksSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_feedback_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_feedback_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_feedback_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_feedback_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_feedback_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_feedback_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_feedback_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_feedback_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_feedback_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_feedback_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_feedback_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_feedback_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_feedback_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_feedback_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_feedback_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_feedback_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_feedback_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_feedback_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_feedback_list,
  api_v1_feedback_create,
  api_v1_feedback_retrieve,
  api_v1_feedback_update,
  api_v1_feedback_partial_update,
  api_v1_feedback_destroy,
  slice: feedbacksSlice
}
