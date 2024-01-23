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
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_update_profile_pic_retrieve,
  api_v1_update_profile_pic_update,
  api_v1_update_profile_pic_partial_update,
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
