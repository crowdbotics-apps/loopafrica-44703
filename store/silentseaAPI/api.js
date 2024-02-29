import axios from "axios"
const silentseaAPI = axios.create({
  baseURL: "https://loopafrica-44703.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return silentseaAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_appointments_list(payload) {
  return silentseaAPI.get(`/api/v1/appointments/`)
}
function api_v1_appointments_create(payload) {
  return silentseaAPI.post(`/api/v1/appointments/`, payload)
}
function api_v1_appointments_retrieve(payload) {
  return silentseaAPI.get(`/api/v1/appointments/${payload.id}/`)
}
function api_v1_appointments_update(payload) {
  return silentseaAPI.put(`/api/v1/appointments/${payload.id}/`, payload)
}
function api_v1_appointments_partial_update(payload) {
  return silentseaAPI.patch(`/api/v1/appointments/${payload.id}/`, payload)
}
function api_v1_appointments_destroy(payload) {
  return silentseaAPI.delete(`/api/v1/appointments/${payload.id}/`)
}
function api_v1_changepassword_create(payload) {
  return silentseaAPI.post(`/api/v1/changepassword/`)
}
function api_v1_doctors_list(payload) {
  return silentseaAPI.get(`/api/v1/doctors/`)
}
function api_v1_doctors_create(payload) {
  return silentseaAPI.post(`/api/v1/doctors/`, payload)
}
function api_v1_doctors_retrieve(payload) {
  return silentseaAPI.get(`/api/v1/doctors/${payload.id}/`)
}
function api_v1_doctors_update(payload) {
  return silentseaAPI.put(`/api/v1/doctors/${payload.id}/`, payload)
}
function api_v1_doctors_partial_update(payload) {
  return silentseaAPI.patch(`/api/v1/doctors/${payload.id}/`, payload)
}
function api_v1_doctors_destroy(payload) {
  return silentseaAPI.delete(`/api/v1/doctors/${payload.id}/`)
}
function api_v1_edit_user_retrieve(payload) {
  return silentseaAPI.get(`/api/v1/edit-user/${payload.id}/`)
}
function api_v1_edit_user_update(payload) {
  return silentseaAPI.put(`/api/v1/edit-user/${payload.id}/`, payload)
}
function api_v1_edit_user_partial_update(payload) {
  return silentseaAPI.patch(`/api/v1/edit-user/${payload.id}/`, payload)
}
function api_v1_feedback_list(payload) {
  return silentseaAPI.get(`/api/v1/feedback/`)
}
function api_v1_feedback_create(payload) {
  return silentseaAPI.post(`/api/v1/feedback/`, payload)
}
function api_v1_feedback_retrieve(payload) {
  return silentseaAPI.get(`/api/v1/feedback/${payload.id}/`)
}
function api_v1_feedback_update(payload) {
  return silentseaAPI.put(`/api/v1/feedback/${payload.id}/`, payload)
}
function api_v1_feedback_partial_update(payload) {
  return silentseaAPI.patch(`/api/v1/feedback/${payload.id}/`, payload)
}
function api_v1_feedback_destroy(payload) {
  return silentseaAPI.delete(`/api/v1/feedback/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return silentseaAPI.post(`/api/v1/login/`, payload)
}
function api_v1_sendresetpasswordemail_create(payload) {
  return silentseaAPI.post(`/api/v1/sendresetpasswordemail/`)
}
function api_v1_signup_create(payload) {
  return silentseaAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_signup_with_email_create(payload) {
  return silentseaAPI.post(`/api/v1/signup-with-email/`, payload)
}
function api_v1_update_profile_pic_retrieve(payload) {
  return silentseaAPI.get(`/api/v1/update-profile-pic/${payload.id}/`)
}
function api_v1_update_profile_pic_update(payload) {
  return silentseaAPI.put(`/api/v1/update-profile-pic/${payload.id}/`, payload)
}
function api_v1_update_profile_pic_partial_update(payload) {
  return silentseaAPI.patch(
    `/api/v1/update-profile-pic/${payload.id}/`,
    payload
  )
}
function api_v1_user_profiles_list(payload) {
  return silentseaAPI.get(`/api/v1/user-profiles/`)
}
function api_v1_user_profiles_create(payload) {
  return silentseaAPI.post(`/api/v1/user-profiles/`, payload)
}
function api_v1_user_profiles_retrieve(payload) {
  return silentseaAPI.get(`/api/v1/user-profiles/${payload.id}/`)
}
function api_v1_user_profiles_update(payload) {
  return silentseaAPI.put(`/api/v1/user-profiles/${payload.id}/`, payload)
}
function api_v1_user_profiles_partial_update(payload) {
  return silentseaAPI.patch(`/api/v1/user-profiles/${payload.id}/`, payload)
}
function api_v1_user_profiles_destroy(payload) {
  return silentseaAPI.delete(`/api/v1/user-profiles/${payload.id}/`)
}
function api_v1_user_profiles_profile_retrieve(payload) {
  return silentseaAPI.get(`/api/v1/user-profiles/profile/`)
}
function api_v1_user_profiles_update_profile_create(payload) {
  return silentseaAPI.post(`/api/v1/user-profiles/update_profile/`, payload)
}
function modules_contact_us_contact_us_create(payload) {
  return silentseaAPI.post(`/modules/contact-us/contact_us/`)
}
function modules_inventory_management_category_list(payload) {
  return silentseaAPI.get(`/modules/inventory-management/category/`)
}
function modules_inventory_management_category_create(payload) {
  return silentseaAPI.post(`/modules/inventory-management/category/`, payload)
}
function modules_inventory_management_category_retrieve(payload) {
  return silentseaAPI.get(
    `/modules/inventory-management/category/${payload.id}/`
  )
}
function modules_inventory_management_category_update(payload) {
  return silentseaAPI.put(
    `/modules/inventory-management/category/${payload.id}/`,
    payload
  )
}
function modules_inventory_management_category_partial_update(payload) {
  return silentseaAPI.patch(
    `/modules/inventory-management/category/${payload.id}/`,
    payload
  )
}
function modules_inventory_management_category_destroy(payload) {
  return silentseaAPI.delete(
    `/modules/inventory-management/category/${payload.id}/`
  )
}
function modules_inventory_management_invoice_list(payload) {
  return silentseaAPI.get(`/modules/inventory-management/invoice/`)
}
function modules_inventory_management_invoice_create(payload) {
  return silentseaAPI.post(`/modules/inventory-management/invoice/`, payload)
}
function modules_inventory_management_invoice_item_list(payload) {
  return silentseaAPI.get(`/modules/inventory-management/invoice-item/`)
}
function modules_inventory_management_invoice_item_create(payload) {
  return silentseaAPI.post(
    `/modules/inventory-management/invoice-item/`,
    payload
  )
}
function modules_inventory_management_invoice_item_retrieve(payload) {
  return silentseaAPI.get(
    `/modules/inventory-management/invoice-item/${payload.id}/`
  )
}
function modules_inventory_management_invoice_item_update(payload) {
  return silentseaAPI.put(
    `/modules/inventory-management/invoice-item/${payload.id}/`,
    payload
  )
}
function modules_inventory_management_invoice_item_partial_update(payload) {
  return silentseaAPI.patch(
    `/modules/inventory-management/invoice-item/${payload.id}/`,
    payload
  )
}
function modules_inventory_management_invoice_item_destroy(payload) {
  return silentseaAPI.delete(
    `/modules/inventory-management/invoice-item/${payload.id}/`
  )
}
function modules_inventory_management_invoice_retrieve(payload) {
  return silentseaAPI.get(
    `/modules/inventory-management/invoice/${payload.id}/`
  )
}
function modules_inventory_management_invoice_update(payload) {
  return silentseaAPI.put(
    `/modules/inventory-management/invoice/${payload.id}/`,
    payload
  )
}
function modules_inventory_management_invoice_partial_update(payload) {
  return silentseaAPI.patch(
    `/modules/inventory-management/invoice/${payload.id}/`,
    payload
  )
}
function modules_inventory_management_invoice_destroy(payload) {
  return silentseaAPI.delete(
    `/modules/inventory-management/invoice/${payload.id}/`
  )
}
function modules_inventory_management_product_list(payload) {
  return silentseaAPI.get(`/modules/inventory-management/product/`)
}
function modules_inventory_management_product_create(payload) {
  return silentseaAPI.post(`/modules/inventory-management/product/`, payload)
}
function modules_inventory_management_product_retrieve(payload) {
  return silentseaAPI.get(
    `/modules/inventory-management/product/${payload.id}/`
  )
}
function modules_inventory_management_product_update(payload) {
  return silentseaAPI.put(
    `/modules/inventory-management/product/${payload.id}/`,
    payload
  )
}
function modules_inventory_management_product_partial_update(payload) {
  return silentseaAPI.patch(
    `/modules/inventory-management/product/${payload.id}/`,
    payload
  )
}
function modules_inventory_management_product_destroy(payload) {
  return silentseaAPI.delete(
    `/modules/inventory-management/product/${payload.id}/`
  )
}
function modules_inventory_management_stock_list(payload) {
  return silentseaAPI.get(`/modules/inventory-management/stock/`)
}
function modules_inventory_management_stock_create(payload) {
  return silentseaAPI.post(`/modules/inventory-management/stock/`, payload)
}
function modules_inventory_management_stock_retrieve(payload) {
  return silentseaAPI.get(`/modules/inventory-management/stock/${payload.id}/`)
}
function modules_inventory_management_stock_update(payload) {
  return silentseaAPI.put(
    `/modules/inventory-management/stock/${payload.id}/`,
    payload
  )
}
function modules_inventory_management_stock_partial_update(payload) {
  return silentseaAPI.patch(
    `/modules/inventory-management/stock/${payload.id}/`,
    payload
  )
}
function modules_inventory_management_stock_destroy(payload) {
  return silentseaAPI.delete(
    `/modules/inventory-management/stock/${payload.id}/`
  )
}
function modules_inventory_management_supplier_list(payload) {
  return silentseaAPI.get(`/modules/inventory-management/supplier/`)
}
function modules_inventory_management_supplier_create(payload) {
  return silentseaAPI.post(`/modules/inventory-management/supplier/`, payload)
}
function modules_inventory_management_supplier_retrieve(payload) {
  return silentseaAPI.get(
    `/modules/inventory-management/supplier/${payload.id}/`
  )
}
function modules_inventory_management_supplier_update(payload) {
  return silentseaAPI.put(
    `/modules/inventory-management/supplier/${payload.id}/`,
    payload
  )
}
function modules_inventory_management_supplier_partial_update(payload) {
  return silentseaAPI.patch(
    `/modules/inventory-management/supplier/${payload.id}/`,
    payload
  )
}
function modules_inventory_management_supplier_destroy(payload) {
  return silentseaAPI.delete(
    `/modules/inventory-management/supplier/${payload.id}/`
  )
}
function patient_patient_list(payload) {
  return silentseaAPI.get(`/patient/patient/`)
}
function patient_patient_create(payload) {
  return silentseaAPI.post(`/patient/patient/`, payload)
}
function patient_patient_retrieve(payload) {
  return silentseaAPI.get(`/patient/patient/${payload.id}/`)
}
function patient_patient_update(payload) {
  return silentseaAPI.put(`/patient/patient/${payload.id}/`, payload)
}
function patient_patient_partial_update(payload) {
  return silentseaAPI.patch(`/patient/patient/${payload.id}/`, payload)
}
function patient_patient_destroy(payload) {
  return silentseaAPI.delete(`/patient/patient/${payload.id}/`)
}
function patient_vitals_list(payload) {
  return silentseaAPI.get(`/patient/vitals/`)
}
function patient_vitals_create(payload) {
  return silentseaAPI.post(`/patient/vitals/`, payload)
}
function patient_vitals_retrieve(payload) {
  return silentseaAPI.get(`/patient/vitals/${payload.id}/`)
}
function patient_vitals_update(payload) {
  return silentseaAPI.put(`/patient/vitals/${payload.id}/`, payload)
}
function patient_vitals_partial_update(payload) {
  return silentseaAPI.patch(`/patient/vitals/${payload.id}/`, payload)
}
function patient_vitals_destroy(payload) {
  return silentseaAPI.delete(`/patient/vitals/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return silentseaAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return silentseaAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return silentseaAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return silentseaAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return silentseaAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return silentseaAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return silentseaAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return silentseaAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return silentseaAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return silentseaAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return silentseaAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_appointments_list,
  api_v1_appointments_create,
  api_v1_appointments_retrieve,
  api_v1_appointments_update,
  api_v1_appointments_partial_update,
  api_v1_appointments_destroy,
  api_v1_changepassword_create,
  api_v1_doctors_list,
  api_v1_doctors_create,
  api_v1_doctors_retrieve,
  api_v1_doctors_update,
  api_v1_doctors_partial_update,
  api_v1_doctors_destroy,
  api_v1_edit_user_retrieve,
  api_v1_edit_user_update,
  api_v1_edit_user_partial_update,
  api_v1_feedback_list,
  api_v1_feedback_create,
  api_v1_feedback_retrieve,
  api_v1_feedback_update,
  api_v1_feedback_partial_update,
  api_v1_feedback_destroy,
  api_v1_login_create,
  api_v1_sendresetpasswordemail_create,
  api_v1_signup_create,
  api_v1_signup_with_email_create,
  api_v1_update_profile_pic_retrieve,
  api_v1_update_profile_pic_update,
  api_v1_update_profile_pic_partial_update,
  api_v1_user_profiles_list,
  api_v1_user_profiles_create,
  api_v1_user_profiles_retrieve,
  api_v1_user_profiles_update,
  api_v1_user_profiles_partial_update,
  api_v1_user_profiles_destroy,
  api_v1_user_profiles_profile_retrieve,
  api_v1_user_profiles_update_profile_create,
  modules_contact_us_contact_us_create,
  modules_inventory_management_category_list,
  modules_inventory_management_category_create,
  modules_inventory_management_category_retrieve,
  modules_inventory_management_category_update,
  modules_inventory_management_category_partial_update,
  modules_inventory_management_category_destroy,
  modules_inventory_management_invoice_list,
  modules_inventory_management_invoice_create,
  modules_inventory_management_invoice_item_list,
  modules_inventory_management_invoice_item_create,
  modules_inventory_management_invoice_item_retrieve,
  modules_inventory_management_invoice_item_update,
  modules_inventory_management_invoice_item_partial_update,
  modules_inventory_management_invoice_item_destroy,
  modules_inventory_management_invoice_retrieve,
  modules_inventory_management_invoice_update,
  modules_inventory_management_invoice_partial_update,
  modules_inventory_management_invoice_destroy,
  modules_inventory_management_product_list,
  modules_inventory_management_product_create,
  modules_inventory_management_product_retrieve,
  modules_inventory_management_product_update,
  modules_inventory_management_product_partial_update,
  modules_inventory_management_product_destroy,
  modules_inventory_management_stock_list,
  modules_inventory_management_stock_create,
  modules_inventory_management_stock_retrieve,
  modules_inventory_management_stock_update,
  modules_inventory_management_stock_partial_update,
  modules_inventory_management_stock_destroy,
  modules_inventory_management_supplier_list,
  modules_inventory_management_supplier_create,
  modules_inventory_management_supplier_retrieve,
  modules_inventory_management_supplier_update,
  modules_inventory_management_supplier_partial_update,
  modules_inventory_management_supplier_destroy,
  patient_patient_list,
  patient_patient_create,
  patient_patient_retrieve,
  patient_patient_update,
  patient_patient_partial_update,
  patient_patient_destroy,
  patient_vitals_list,
  patient_vitals_create,
  patient_vitals_retrieve,
  patient_vitals_update,
  patient_vitals_partial_update,
  patient_vitals_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
