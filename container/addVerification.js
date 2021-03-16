import React from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextBox, Button } from '../component/index';
// import { addVerification } from "../redux/action/machineryAction"

const addVerificationSchema = Yup.object({
  otp: Yup.string()
    .required("OTP is required")
    .min(4, "4 digit varification code is required!")
})

function addVerification() {

  const router = useRouter();
  const addVerification = (values) => {
    // dispatch(addVerification(values))
    // .then(res =>
    router.push('/update-profile')
    // )
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

      return <div className={styles.main}>
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

        <Button text='Proceed' type='Submit' onClick={handleSubmit} />
      </div>
    }}
  </Formik>
};

export default addVerification;