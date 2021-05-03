import React from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextBox, Select, Button, Container, Logo } from '../component/index';
// import { updateProfile } from "../redux/action/machineryAction"

const updateProfileSchema = Yup.object({
})

function updateProfile() {

  const router = useRouter();
  const updateProfile = (values) => {
    // dispatch(updateProfile(values))
    // .then(res =>
    router.push('/law-dashboard')
    // )
  }

  return <Formik
    initialValues={{
      name: "",
      mobile: "",
      place: "",
      account_type: ""
    }}
    validationSchema={updateProfileSchema}
    onSubmit={(values) => {
      updateProfile(values)
    }}
  >
    {({
      values,
      handleChange,
      handleBlur,
      handleSubmit
    }) => {

      return <Container>
        <Logo />
        <h1>Sign Up</h1>
        <TextBox
          label={'Name'}
          isRequired={true}
          value={values.name}
          handleChange={handleChange}
          name="name"
          placeholder='Name'
          onBlur={handleBlur}
        />
        <TextBox
          label={'Mobile Number'}
          isRequired={true}
          value={values.mobile}
          handleChange={handleChange}
          name="mobile"
          placeholder='Mobile Number'
          onBlur={handleBlur}
        />
        <Select
          label={'Place'}
          isRequired={true}
          value={values.place}
          handleChange={handleChange}
          name="place"
          placeholder='Place'
          onBlur={handleBlur}
          list={['Gujarat[GJ]']}
        />
        <Select
          label={'Account Type'}
          isRequired={true}
          value={values.account_type}
          handleChange={handleChange}
          name="account_type"
          placeholder='Account Type'
          onBlur={handleBlur}
          list={['CA', 'Advocate', 'Police', 'Public']}
        />
        <Button text='Update' type='Submit' 
        customClass ={'gradientButton'}
        onClick={handleSubmit} />
      </Container>
    }}
  </Formik>
};

export default updateProfile;