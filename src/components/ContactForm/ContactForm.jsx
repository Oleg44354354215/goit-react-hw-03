import { Field, Form, Formik, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const ContactForm = ({ addContacts }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const hadleSubmit = (values, action) => {
    addContacts(values);
    action.resetForm();
  };

  const PatternPhone = /^(\d{3}-\d{2}-\d{2}|\d{7})$/;
  const PatternonlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "min 3 characters")
      .max(30, "max 50 characters")
      .required("This field is required")
      .matches(PatternonlyLetters, "Enter only letters"),
    number: Yup.string()
      .required("This field is required")
      .min(7, "min 7 numbers")
      .max(9, "max 7 numbers")
      .matches(PatternPhone, "Number format ХХХ-ХХ-ХХ"),
  });
  return (
    <div className={s.div}>
      <Formik
        initialValues={initialValues}
        onSubmit={hadleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={s.form}>
          <label className={s.labell}>
            Name
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="your name..."
            />
            <div>
              <ErrorMessage name="name" className={s.color} component="span" />
            </div>
          </label>
          <label className={s.label}>
            Number
            <Field
              className={s.input}
              type="text"
              name="number"
              placeholder="your number..."
            />
            <div>
              <ErrorMessage name="text" className={s.color} component="span" />
            </div>
          </label>
          <button className={s.but} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
