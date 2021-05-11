import React from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextBox, Select, Button, Container, Logo } from '../component/index';
import { updateUser } from "../redux/action/userAction"
import { getLaws } from "../redux/action/lawAction"
import { useDispatch } from 'react-redux'
import { getJudgements } from '../redux/action/judgementAction';

const updateProfileSchema = Yup.object({
})

function updateProfile() {

  const router = useRouter();
  const dispatch = useDispatch();
  const updateProfile = (values) => {
    dispatch(updateUser(values))
    .then(res =>
    router.push('/law-dashboard'),
    dispatch(getLaws()),
    dispatch(getJudgements())
    )
  }

  return <Formik
    initialValues={{
      phone: "",
      name: "",
      email: "",
      state: "",
      city: "",
      role: "",
      language: "",
      firebaseToken: "",
      password: ""
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
          label={'Phone'}
          isRequired={true}
          value={values.phone}
          handleChange={handleChange}
          name="phone"
          placeholder='Phone'
          onBlur={handleBlur}
          type={'number'}
        />
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
          value={values.email}
          handleChange={handleChange}
          name="email"
          placeholder='Enter your Email'
          onBlur={handleBlur}
        />
        <Select
          label={'State'}
          isRequired={true}
          value={values.state}
          handleChange={handleChange}
          name="state"
          placeholder='Select your state'
          onBlur={handleBlur}
          list={['Gujarat[GJ]']}
        />
        <Select
          label={'City'}
          isRequired={true}
          value={values.city}
          handleChange={handleChange}
          name="city"
          placeholder='Select your City'
          onBlur={handleBlur}
          list={['Surat[ST]']}
        />
        <Select
          label={'Role'}
          isRequired={true}
          value={values.role}
          handleChange={handleChange}
          name="role"
          placeholder='Select your Role'
          onBlur={handleBlur}
          list={['CA', 'Advocate', 'Police', 'Citizen']}
        />
        <Select
          label={'Language'}
          isRequired={true}
          value={values.language}
          handleChange={handleChange}
          name="language"
          placeholder='Select your Language'
          onBlur={handleBlur}
          list={['English', 'हिन्दी', 'ગુજરાતી', 'मराठी']}
        />
        <TextBox
          label={'Firebase Token'}
          isRequired={true}
          value={values.firebaseToken}
          handleChange={handleChange}
          name="firebaseToken"
          placeholder='Firebase Token'
          onBlur={handleBlur}
        />
        <TextBox
          label={'Password'}
          isRequired={true}
          value={values.password}
          handleChange={handleChange}
          name="password"
          placeholder='Password'
          onBlur={handleBlur}
          type={'number'}
        />
        <Button text='Update' type='Submit' 
        customClass ={'gradientButton'}
        onClick={handleSubmit} />
      </Container>
    }}
  </Formik>
};

export default updateProfile;