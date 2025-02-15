import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import s from "./ContactForm.module.css";

const ContactForm = ({ handleSubmit, fieldValidation }) => {
  return (
    <Formik initialValues={{ name: "", number: "" }} validationSchema={fieldValidation} onSubmit={handleSubmit}>
      <Form>
        <div className={s.forma}>
          <div>
            <label className={s.contact} htmlFor="name">
              Name
            </label>
            <Field className={s.input} name="name" id="name" placeholder="Enter name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div>
            <label className={s.contact} htmlFor="number">
              Number
            </label>
            <Field className={s.input} name="number" id="number" placeholder="Enter phone number" />
            <ErrorMessage className={s.error} name="number" component="span" />
          </div>
          <button className={s.btnAdd} type="submit">Add Contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
