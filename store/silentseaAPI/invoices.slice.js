import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_inventory_management_invoice_list = createAsyncThunk(
  "invoices/modules_inventory_management_invoice_list",
  async payload => {
    const response = await apiService.modules_inventory_management_invoice_list(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_invoice_create = createAsyncThunk(
  "invoices/modules_inventory_management_invoice_create",
  async payload => {
    const response = await apiService.modules_inventory_management_invoice_create(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_invoice_retrieve = createAsyncThunk(
  "invoices/modules_inventory_management_invoice_retrieve",
  async payload => {
    const response = await apiService.modules_inventory_management_invoice_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_invoice_update = createAsyncThunk(
  "invoices/modules_inventory_management_invoice_update",
  async payload => {
    const response = await apiService.modules_inventory_management_invoice_update(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_invoice_partial_update = createAsyncThunk(
  "invoices/modules_inventory_management_invoice_partial_update",
  async payload => {
    const response = await apiService.modules_inventory_management_invoice_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_invoice_destroy = createAsyncThunk(
  "invoices/modules_inventory_management_invoice_destroy",
  async payload => {
    const response = await apiService.modules_inventory_management_invoice_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_inventory_management_invoice_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_retrieve.fulfilled,
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
        modules_inventory_management_invoice_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_update.fulfilled,
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
        modules_inventory_management_invoice_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_partial_update.fulfilled,
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
        modules_inventory_management_invoice_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_destroy.fulfilled,
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
        modules_inventory_management_invoice_destroy.rejected,
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
  modules_inventory_management_invoice_list,
  modules_inventory_management_invoice_create,
  modules_inventory_management_invoice_retrieve,
  modules_inventory_management_invoice_update,
  modules_inventory_management_invoice_partial_update,
  modules_inventory_management_invoice_destroy,
  slice: invoicesSlice
}
