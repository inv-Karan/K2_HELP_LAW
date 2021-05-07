import React from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextBox, Button, Container, Logo } from '../component/index';
import { sendOTP } from '../redux/action/userAction'

const addMobileSchema = Yup.object({
  mobile: Yup.string()
    .required("Mobile number is required")
    .min(10, "10 digit mobile number is required!")
})

function addMobile() {

  const router = useRouter();
  const sendOTP = (values) => {
    router.push('/add-verification')
  }

  return <Formik
    initialValues={{
      mobile: ""
    }}
    validationSchema={addMobileSchema}
    onSubmit={(values) => {
      sendOTP(values)
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
          label={'Mobile Number'}
          isRequired={true}
          value={values.mobile}
          handleChange={handleChange}
          name="mobile"
          placeholder='Mobile Number'
          onBlur={handleBlur}
        />
        {errors.mobile && touched.mobile ? (
          <div className={'error'}>{errors.mobile}</div>
        ) : null}

        <Button text='Proceed' type='Submit' 
        customClass={'gradientButton'}
        onClick={handleSubmit} />
      </Container>
    }}
  </Formik>
};

export default addMobile;