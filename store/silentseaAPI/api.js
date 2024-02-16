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
function modules_doctor_profile_doctors_list(payload) {
  return silentseaAPI.get(`/modules/doctor-profile/doctors/`)
}
function modules_doctor_profile_doctors_create(payload) {
  return silentseaAPI.post(`/modules/doctor-profile/doctors/`, payload)
}
function modules_doctor_profile_doctors_retrieve(payload) {
  return silentseaAPI.get(`/modules/doctor-profile/doctors/${payload.id}/`)
}
function modules_doctor_profile_doctors_update(payload) {
  return silentseaAPI.put(
    `/modules/doctor-profile/doctors/${payload.id}/`,
    payload
  )
}
function modules_doctor_profile_doctors_partial_update(payload) {
  return silentseaAPI.patch(
    `/modules/doctor-profile/doctors/${payload.id}/`,
    payload
  )
}
function modules_doctor_profile_doctors_destroy(payload) {
  return silentseaAPI.delete(`/modules/doctor-profile/doctors/${payload.id}/`)
}
function modules_instructor_profile_instructors_list(payload) {
  return silentseaAPI.get(`/modules/instructor-profile/instructors/`)
}
function modules_instructor_profile_instructors_create(payload) {
  return silentseaAPI.post(`/modules/instructor-profile/instructors/`, payload)
}
function modules_instructor_profile_instructors_retrieve(payload) {
  return silentseaAPI.get(
    `/modules/instructor-profile/instructors/${payload.id}/`
  )
}
function modules_instructor_profile_instructors_update(payload) {
  return silentseaAPI.put(
    `/modules/instructor-profile/instructors/${payload.id}/`,
    payload
  )
}
function modules_instructor_profile_instructors_partial_update(payload) {
  return silentseaAPI.patch(
    `/modules/instructor-profile/instructors/${payload.id}/`,
    payload
  )
}
function modules_instructor_profile_instructors_destroy(payload) {
  return silentseaAPI.delete(
    `/modules/instructor-profile/instructors/${payload.id}/`
  )
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
function modules_privacy_policy_list(payload) {
  return silentseaAPI.get(`/modules/privacy-policy/`)
}
function modules_privacy_policy_create(payload) {
  return silentseaAPI.post(`/modules/privacy-policy/`, payload)
}
function modules_privacy_policy_retrieve(payload) {
  return silentseaAPI.get(`/modules/privacy-policy/${payload.id}/`)
}
function modules_privacy_policy_update(payload) {
  return silentseaAPI.put(`/modules/privacy-policy/${payload.id}/`, payload)
}
function modules_privacy_policy_partial_update(payload) {
  return silentseaAPI.patch(`/modules/privacy-policy/${payload.id}/`, payload)
}
function modules_privacy_policy_destroy(payload) {
  return silentseaAPI.delete(`/modules/privacy-policy/${payload.id}/`)
}
function modules_push_notifications_notifications_list(payload) {
  return silentseaAPI.get(`/modules/push-notifications/notifications/`)
}
function modules_push_notifications_notifications_create(payload) {
  return silentseaAPI.post(
    `/modules/push-notifications/notifications/`,
    payload
  )
}
function modules_push_notifications_notifications_retrieve(payload) {
  return silentseaAPI.get(
    `/modules/push-notifications/notifications/${payload.id}/`
  )
}
function modules_push_notifications_notifications_destroy(payload) {
  return silentseaAPI.delete(
    `/modules/push-notifications/notifications/${payload.id}/`
  )
}
function modules_terms_and_conditions_list(payload) {
  return silentseaAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return silentseaAPI.post(`/modules/terms-and-conditions/`, payload)
}
function modules_terms_and_conditions_retrieve(payload) {
  return silentseaAPI.get(`/modules/terms-and-conditions/${payload.id}/`)
}
function modules_terms_and_conditions_update(payload) {
  return silentseaAPI.put(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload
  )
}
function modules_terms_and_conditions_partial_update(payload) {
  return silentseaAPI.patch(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload
  )
}
function modules_terms_and_conditions_destroy(payload) {
  return silentseaAPI.delete(`/modules/terms-and-conditions/${payload.id}/`)
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
  modules_doctor_profile_doctors_list,
  modules_doctor_profile_doctors_create,
  modules_doctor_profile_doctors_retrieve,
  modules_doctor_profile_doctors_update,
  modules_doctor_profile_doctors_partial_update,
  modules_doctor_profile_doctors_destroy,
  modules_instructor_profile_instructors_list,
  modules_instructor_profile_instructors_create,
  modules_instructor_profile_instructors_retrieve,
  modules_instructor_profile_instructors_update,
  modules_instructor_profile_instructors_partial_update,
  modules_instructor_profile_instructors_destroy,
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
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  modules_privacy_policy_retrieve,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_destroy,
  modules_push_notifications_notifications_list,
  modules_push_notifications_notifications_create,
  modules_push_notifications_notifications_retrieve,
  modules_push_notifications_notifications_destroy,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
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
