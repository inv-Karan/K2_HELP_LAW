import React from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextBox, Button, Container, Logo } from '../component/index';
import { checkOTP } from "../redux/action/userAction"
import { useDispatch } from 'react-redux'

const addVerificationSchema = Yup.object({
  otp: Yup.string()
    .required("OTP is required")
    .min(6, "6 digit varification code is required!")
})

function addVerification() {

  const router = useRouter(); 
  const dispatch = useDispatch();
  const addVerification = (values) => {
    dispatch(checkOTP(values))
    .then(res =>
    router.push('/update-profile')
    )
  }

  return <Formik
    initialValues={{
      otp: ""
    }}
    validationSchema={addVerificationSchema}
    onSubmit={(values) => {
      addVerification(values)
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit
    }) => {

      return <Container>
        <Logo />
        <h1>Sign Up</h1>
        <TextBox
          label={'Verification Code'}
          isRequired={true}
          value={values.otp}
          handleChange={handleChange}
          name="otp"
          placeholder='Verification Code'
          onBlur={handleBlur}
        />
        {errors.otp && touched.otp ? (
          <div className={'error'}>{errors.otp}</div>
        ) : null}

        <Button text='Proceed' type='Submit' 
        customClass={'gradientButton'}
        onClick={handleSubmit} />
        <p onClick={() => {}}>Resend OTP</p>
      </Container>
    }}
  </Formik>
};

export default addVerification;