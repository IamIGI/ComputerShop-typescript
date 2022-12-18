import * as yup from 'yup';

export const registerSchema = yup
    .object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(4).max(15).required(),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null])
            .required(),
        shopRules: yup.bool().required(),
    })
    .required();

export const loginSchema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    })
    .required();

export const accountSettingsStringField = yup
    .object({
        editedField: yup.string().required(),
        password: yup.string().required(),
    })
    .required();

export const accountSettingsEmail = yup
    .object({
        editedField: yup.string().email().required(),
        password: yup.string().required(),
    })
    .required();

export const accountSettingsPassword = yup
    .object({
        editedField: yup.string().min(4).max(15).required(),
        password: yup.string().required(),
    })
    .required();

export const accountSettingsEnlistments = yup
    .object({
        email: yup.bool().required(),
        sms: yup.bool().required(),
        phone: yup.bool().required(),
        adjustedOffers: yup.bool().required(),
    })
    .required();

export const accountSettingsDelete = yup
    .object({
        password: yup.string().min(4).max(15).required(),
        confirmPassword: yup.string().min(4).max(15).required(),
    })
    .required();

export const recipientDetails = yup
    .object({
        name: yup
            .string()
            .matches(/^[\s\p{L}]+$/u)
            .required(),
        street: yup.string().required(),
        zipCode: yup
            .string()
            .matches(/^\d{2}(?:[-]\d{3})?$/)
            .required(),
        place: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup
            .string()
            .matches(/^(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/)
            .required(),
    })
    .required();
