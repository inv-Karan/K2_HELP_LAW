import React from 'react';
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
      email: "",
      state: "",
      role: ""
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
          label={'Email ID'}
          isRequired={true}
          value={values.mobile}
          handleChange={handleChange}
          name="mobile"
          placeholder='Enter your Email'
          onBlur={handleBlur}
        />
        <Select
          label={'State'}
          isRequired={true}
          value={values.place}
          handleChange={handleChange}
          name="place"
          placeholder='Select your State'
          onBlur={handleBlur}
          list={['Gujarat[GJ]']}
        />
        <Select
          label={'Role'}
          isRequired={true}
          value={values.account_type}
          handleChange={handleChange}
          name="account_type"
          placeholder='Select your Role'
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