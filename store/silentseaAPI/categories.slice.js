import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_inventory_management_category_list = createAsyncThunk(
  "categories/modules_inventory_management_category_list",
  async payload => {
    const response = await apiService.modules_inventory_management_category_list(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_category_create = createAsyncThunk(
  "categories/modules_inventory_management_category_create",
  async payload => {
    const response = await apiService.modules_inventory_management_category_create(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_category_retrieve = createAsyncThunk(
  "categories/modules_inventory_management_category_retrieve",
  async payload => {
    const response = await apiService.modules_inventory_management_category_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_category_update = createAsyncThunk(
  "categories/modules_inventory_management_category_update",
  async payload => {
    const response = await apiService.modules_inventory_management_category_update(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_category_partial_update = createAsyncThunk(
  "categories/modules_inventory_management_category_partial_update",
  async payload => {
    const response = await apiService.modules_inventory_management_category_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_category_destroy = createAsyncThunk(
  "categories/modules_inventory_management_category_destroy",
  async payload => {
    const response = await apiService.modules_inventory_management_category_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_inventory_management_category_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_retrieve.fulfilled,
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
        modules_inventory_management_category_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_update.fulfilled,
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
        modules_inventory_management_category_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_partial_update.fulfilled,
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
        modules_inventory_management_category_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_category_destroy.fulfilled,
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
        modules_inventory_management_category_destroy.rejected,
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
  modules_inventory_management_category_list,
  modules_inventory_management_category_create,
  modules_inventory_management_category_retrieve,
  modules_inventory_management_category_update,
  modules_inventory_management_category_partial_update,
  modules_inventory_management_category_destroy,
  slice: categoriesSlice
}
