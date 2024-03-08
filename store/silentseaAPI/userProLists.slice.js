import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_user_profiles_list = createAsyncThunk(
  "userProLists/api_v1_user_profiles_list",
  async payload => {
    const response = await apiService.api_v1_user_profiles_list(payload)
    return response.data
  }
)
export const api_v1_user_profiles_create = createAsyncThunk(
  "userProLists/api_v1_user_profiles_create",
  async payload => {
    const response = await apiService.api_v1_user_profiles_create(payload)
    return response.data
  }
)
export const api_v1_user_profiles_retrieve = createAsyncThunk(
  "userProLists/api_v1_user_profiles_retrieve",
  async payload => {
    const response = await apiService.api_v1_user_profiles_retrieve(payload)
    return response.data
  }
)
export const api_v1_user_profiles_update = createAsyncThunk(
  "userProLists/api_v1_user_profiles_update",
  async payload => {
    const response = await apiService.api_v1_user_profiles_update(payload)
    return response.data
  }
)
export const api_v1_user_profiles_partial_update = createAsyncThunk(
  "userProLists/api_v1_user_profiles_partial_update",
  async payload => {
    const response = await apiService.api_v1_user_profiles_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_user_profiles_destroy = createAsyncThunk(
  "userProLists/api_v1_user_profiles_destroy",
  async payload => {
    const response = await apiService.api_v1_user_profiles_destroy(payload)
    return response.data
  }
)
export const api_v1_user_profiles_profile_retrieve = createAsyncThunk(
  "userProLists/api_v1_user_profiles_profile_retrieve",
  async payload => {
    const response = await apiService.api_v1_user_profiles_profile_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_user_profiles_profile_completion_retrieve = createAsyncThunk(
  "userProLists/api_v1_user_profiles_profile_completion_retrieve",
  async payload => {
    const response = await apiService.api_v1_user_profiles_profile_completion_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_user_profiles_update_profile_create = createAsyncThunk(
  "userProLists/api_v1_user_profiles_update_profile_create",
  async payload => {
    const response = await apiService.api_v1_user_profiles_update_profile_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userProListsSlice = createSlice({
  name: "userProLists",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_user_profiles_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_user_profiles_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_user_profiles_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_user_profiles_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_user_profiles_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_user_profiles_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_user_profiles_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_user_profiles_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_user_profiles_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_user_profiles_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_user_profiles_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_user_profiles_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_user_profiles_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_user_profiles_partial_update.fulfilled,
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
        api_v1_user_profiles_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_user_profiles_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_user_profiles_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_user_profiles_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_user_profiles_profile_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_user_profiles_profile_retrieve.fulfilled,
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
        api_v1_user_profiles_profile_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_user_profiles_profile_completion_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_user_profiles_profile_completion_retrieve.fulfilled,
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
        api_v1_user_profiles_profile_completion_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_user_profiles_update_profile_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_user_profiles_update_profile_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_user_profiles_update_profile_create.rejected,
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
  api_v1_user_profiles_list,
  api_v1_user_profiles_create,
  api_v1_user_profiles_retrieve,
  api_v1_user_profiles_update,
  api_v1_user_profiles_partial_update,
  api_v1_user_profiles_destroy,
  api_v1_user_profiles_profile_retrieve,
  api_v1_user_profiles_profile_completion_retrieve,
  api_v1_user_profiles_update_profile_create,
  slice: userProListsSlice
}
