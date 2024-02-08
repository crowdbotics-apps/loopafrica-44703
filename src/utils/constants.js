import {
  PRIVACY_POLICY,
  TERMS,
  CHANGE_PASSWORD,
  SUPPORT,
  CONTACT_US,
  DELETE
} from "./images"

export const AGE_RANGE = [
  { id: 1, name: "18 - 29", value: "18-29", select: false },
  { id: 2, name: "30 - 39", value: "30-39", select: false },
  { id: 3, name: "40 - 49", value: "40-49", select: false },
  { id: 4, name: "50 - 59", value: "50-59", select: false },
  { id: 5, name: "60 - 69", value: "50-69", select: false },
  { id: 6, name: "70 and above", value: "70-100", select: false }
]

export const GENDER = [
  { id: 1, name: "Man", value: "Man", select: false },
  { id: 2, name: "Woman", value: "Woman", select: false },
  {
    id: 3,
    name: "Prefer not to say",
    value: "Prefer not to say",
    select: false
  }
]

export const FEEL_TODAY = [
  {
    id: 1,
    name: "I am the healthiest I have ever been",
    value: "I am the healthiest I have ever been",
    select: false
  },
  {
    id: 2,
    name: "It is ok but could be better",
    value: "It is ok but could be better",
    select: false
  },
  {
    id: 3,
    name: "My health is challenging",
    value: "My health is challenging",
    select: false
  }
]

export const AVERAGE_DAY = [
  {
    id: 1,
    name: "Barely any time for myself",
    value: "Barely any time for myself",
    select: false
  },
  {
    id: 2,
    name: "I am busy but reserve some time for myself",
    value: "I am busy but reserve some time for myself",
    select: false
  },
  { id: 3, name: "I'm not too busy", value: "I'm not too busy", select: false }
]

export const WELLNESS_GOAL = [
  {
    id: 1,
    name: "Improving Immune Health",
    value: "Improving Immune Health",
    select: false
  },
  {
    id: 2,
    name: "Losing Weight",
    value: "Losing Weight",
    select: false
  },
  {
    id: 3,
    name: "Reducing Stress",
    value: "Reducing Stress",
    select: false
  },
  {
    id: 4,
    name: "Optimizing Diet & Exercise",
    value: "Optimizing Diet & Exercise",
    select: false
  },
  {
    id: 5,
    name: "Sleeping Better",
    value: "Sleeping Better",
    select: false
  },
  { id: 6, name: "Overall Wellness", value: "Overall Wellness", select: false }
]

export const CONTINUE1 = [
  { id: 1, name: "Continue", value: "Continue", select: false }
]

export const CONTINUE2 = [
  { id: 1, name: "Continue", value: "Continue", select: false }
]

export const ACCOUNT_SETTING = [
  {
    name: "Privacy policy",
    image: PRIVACY_POLICY,
    navigation: "PrivacyPolicy"
  },
  {
    name: "Terms and conditions",
    image: TERMS,
    navigation: "Terms"
  },
  {
    name: "Change password",
    image: CHANGE_PASSWORD,
    navigation: "ChangePassword"
  },
  {
    name: "Support/Send Feedback",
    image: SUPPORT,
    navigation: "SupportFeedback"
  },
  {
    name: "Contact us",
    image: CONTACT_US,
    navigation: "ContactUs"
  },
  {
    name: "Delete account",
    image: DELETE,
    navigation: ""
  }
]
