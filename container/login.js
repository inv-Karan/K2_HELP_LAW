import React from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextBox, Button, Container, Logo } from '../component/index';
import { setUser } from "../redux/action/userAction"
import { useDispatch } from 'react-redux'
import { getLaws, findLawById } from "../redux/action/lawAction"
import { getJudgements, findJudgementById } from '../redux/action/judgementAction'
import { getSections, findSectionById } from '../redux/action/sectionAction'

const logInSchema = Yup.object({
})

function logIn() {

  const router = useRouter();
  const dispatch = useDispatch();
  const signIn = (values) => {
    dispatch(setUser(values))
    .then(res =>
    router.push('/law-dashboard'),
    dispatch(getLaws()),
    dispatch(getJudgements()),
    dispatch(findLawById()),
    dispatch(findJudgementById()),
    dispatch(getSections()),
    dispatch(findSectionById())
    )
  }

  return <Formik
    initialValues={{
      email: "",
      password: ""
    }}
    validationSchema={logInSchema}
    onSubmit={(values) => {
      signIn(values)
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
        <h1>Sign In</h1>
        <TextBox
          label={'Email ID'}
          isRequired={true}
          value={values.email}
          handleChange={handleChange}
          name="email"
          placeholder='Enter your Email'
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
        <Button text='Sign In' type='Submit' 
        customClass ={'gradientButton'}
        onClick={handleSubmit} />
      </Container>
    }}
  </Formik>
};

export default logIn;