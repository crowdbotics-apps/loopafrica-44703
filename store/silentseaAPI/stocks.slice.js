import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_inventory_management_stock_list = createAsyncThunk(
  "stocks/modules_inventory_management_stock_list",
  async payload => {
    const response = await apiService.modules_inventory_management_stock_list(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_stock_create = createAsyncThunk(
  "stocks/modules_inventory_management_stock_create",
  async payload => {
    const response = await apiService.modules_inventory_management_stock_create(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_stock_retrieve = createAsyncThunk(
  "stocks/modules_inventory_management_stock_retrieve",
  async payload => {
    const response = await apiService.modules_inventory_management_stock_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_stock_update = createAsyncThunk(
  "stocks/modules_inventory_management_stock_update",
  async payload => {
    const response = await apiService.modules_inventory_management_stock_update(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_stock_partial_update = createAsyncThunk(
  "stocks/modules_inventory_management_stock_partial_update",
  async payload => {
    const response = await apiService.modules_inventory_management_stock_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_stock_destroy = createAsyncThunk(
  "stocks/modules_inventory_management_stock_destroy",
  async payload => {
    const response = await apiService.modules_inventory_management_stock_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_inventory_management_stock_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_retrieve.fulfilled,
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
        modules_inventory_management_stock_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_update.fulfilled,
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
        modules_inventory_management_stock_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_partial_update.fulfilled,
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
        modules_inventory_management_stock_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_stock_destroy.fulfilled,
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
        modules_inventory_management_stock_destroy.rejected,
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
  modules_inventory_management_stock_list,
  modules_inventory_management_stock_create,
  modules_inventory_management_stock_retrieve,
  modules_inventory_management_stock_update,
  modules_inventory_management_stock_partial_update,
  modules_inventory_management_stock_destroy,
  slice: stocksSlice
}
