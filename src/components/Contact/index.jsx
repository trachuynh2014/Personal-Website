import React, { useState } from "react";
import axios from "axios";
import { Formik, useField } from "formik";
import * as Yup from "yup";
import {
  ContactContainer,
  ContactH1,
  ContactRow,
  ContactWrapper,
  Column1,
  Column2,
  ImgWrap,
  Img,
  BtnWrap,
  GroupButton,
  FormGroup,
  GroupLabel,
  GroupInput,
  StyledErrorMessage,
  SuccessfulMessage,
} from "./ContactElements";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

function Contact({ lightBg, id, imgStart, img, alt }) {
  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <GroupLabel htmlFor={props.id || props.name}>{label}</GroupLabel>
        <GroupInput className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <StyledErrorMessage>{meta.error}</StyledErrorMessage>
        ) : null}
      </>
    );
  };

  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xzbkkqpz",
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thanks!");
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <React.Fragment>
      <ContactContainer lightBg={lightBg} id={id}>
        <ContactH1>LET'S GET IN TOUCH</ContactH1>
        <ContactWrapper>
          <ContactRow imgStart={imgStart}>
            <Column1>
              <Formik
                initialValues={{ email: "", message: "" }}
                onSubmit={handleOnSubmit}
                validationSchema={formSchema}
              >
                {({ isSubmitting }) => (
                  <FormGroup id="fs-frm" noValidate>
                    <MyTextInput
                      label="Name:"
                      name="name"
                      type="text"
                      placeholder="Finn Huynh"
                    />
                    <MyTextInput
                      label="Email:"
                      name="email"
                      type="email"
                      placeholder="you@yourdomain.ltd"
                    />
                    <MyTextInput
                      label="Message:"
                      name="message"
                      type="text"
                      placeholder="Message"
                      component="textarea"
                    />
                    <BtnWrap>
                      <GroupButton disabled={isSubmitting} type="submit">
                        Send Message
                      </GroupButton>
                      {serverState && (
                        <SuccessfulMessage
                          className={!serverState.ok ? "errorMsg" : ""}
                        >
                          {serverState.msg}
                        </SuccessfulMessage>
                      )}
                    </BtnWrap>
                  </FormGroup>
                )}
              </Formik>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </React.Fragment>
  );
}

export default Contact;
