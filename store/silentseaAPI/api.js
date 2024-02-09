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
function modules_push_notifications_list(payload) {
  return silentseaAPI.get(`/modules/push-notifications/`)
}
function modules_push_notifications_create(payload) {
  return silentseaAPI.post(`/modules/push-notifications/`, payload)
}
function modules_push_notifications_retrieve(payload) {
  return silentseaAPI.get(`/modules/push-notifications/${payload.id}/`)
}
function modules_push_notifications_update(payload) {
  return silentseaAPI.put(`/modules/push-notifications/${payload.id}/`, payload)
}
function modules_push_notifications_partial_update(payload) {
  return silentseaAPI.patch(
    `/modules/push-notifications/${payload.id}/`,
    payload
  )
}
function modules_push_notifications_destroy(payload) {
  return silentseaAPI.delete(`/modules/push-notifications/${payload.id}/`)
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
  api_v1_feedback_list,
  api_v1_feedback_create,
  api_v1_feedback_retrieve,
  api_v1_feedback_update,
  api_v1_feedback_partial_update,
  api_v1_feedback_destroy,
  api_v1_login_create,
  api_v1_signup_create,
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
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  modules_privacy_policy_retrieve,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_destroy,
  modules_push_notifications_list,
  modules_push_notifications_create,
  modules_push_notifications_retrieve,
  modules_push_notifications_update,
  modules_push_notifications_partial_update,
  modules_push_notifications_destroy,
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
