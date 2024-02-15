import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_inventory_management_invoice_item_list = createAsyncThunk(
  "invoiceItems/modules_inventory_management_invoice_item_list",
  async payload => {
    const response = await apiService.modules_inventory_management_invoice_item_list(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_invoice_item_create = createAsyncThunk(
  "invoiceItems/modules_inventory_management_invoice_item_create",
  async payload => {
    const response = await apiService.modules_inventory_management_invoice_item_create(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_invoice_item_retrieve = createAsyncThunk(
  "invoiceItems/modules_inventory_management_invoice_item_retrieve",
  async payload => {
    const response = await apiService.modules_inventory_management_invoice_item_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_invoice_item_update = createAsyncThunk(
  "invoiceItems/modules_inventory_management_invoice_item_update",
  async payload => {
    const response = await apiService.modules_inventory_management_invoice_item_update(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_invoice_item_partial_update = createAsyncThunk(
  "invoiceItems/modules_inventory_management_invoice_item_partial_update",
  async payload => {
    const response = await apiService.modules_inventory_management_invoice_item_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_inventory_management_invoice_item_destroy = createAsyncThunk(
  "invoiceItems/modules_inventory_management_invoice_item_destroy",
  async payload => {
    const response = await apiService.modules_inventory_management_invoice_item_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const invoiceItemsSlice = createSlice({
  name: "invoiceItems",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_inventory_management_invoice_item_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_retrieve.fulfilled,
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
        modules_inventory_management_invoice_item_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_update.fulfilled,
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
        modules_inventory_management_invoice_item_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_partial_update.fulfilled,
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
        modules_inventory_management_invoice_item_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_inventory_management_invoice_item_destroy.fulfilled,
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
        modules_inventory_management_invoice_item_destroy.rejected,
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
  modules_inventory_management_invoice_item_list,
  modules_inventory_management_invoice_item_create,
  modules_inventory_management_invoice_item_retrieve,
  modules_inventory_management_invoice_item_update,
  modules_inventory_management_invoice_item_partial_update,
  modules_inventory_management_invoice_item_destroy,
  slice: invoiceItemsSlice
}
