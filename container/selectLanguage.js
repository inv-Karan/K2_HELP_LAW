import React from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Select, Button } from '../component/index';
// import { selectLanguage } from "../redux/action/machineryAction"


const selectLanguageSchema = Yup.object({
  language: Yup.string()
    .required("Language is required")
})

function selectLanguage() {

  const router = useRouter();
  const selectLanguage = (values) => {
    // dispatch(selectLanguage(values))
    // .then(res =>
    router.push('/add-mobile')
    // )
  }

  return <Formik
    initialValues={{
      language: ""
    }}
    validationSchema={selectLanguageSchema}
    onSubmit={(values) => {
      selectLanguage(values)
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
        <Select
          label={'Select Language'}
          isRequired={true}
          value={values.language}
          handleChange={handleChange}
          name="language"
          placeholder='Select Language'
          onBlur={handleBlur}
          list={['English', 'हिन्दी', 'ગુજરાતી']}
        />
        {errors.language && touched.language ? (
          <div className={'error'}>{errors.language}</div>
        ) : null}

        <Button text='Next' type='Submit' onClick={handleSubmit} />
      </div>
    }}
  </Formik>
};
export default selectLanguage;