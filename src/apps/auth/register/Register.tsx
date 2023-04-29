

import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FieldValues, useForm } from 'react-hook-form';
import { auth } from '../../../firebase/firebase';
import { FormsInstrument } from '../../../helpers/forms';
import { HOOKS } from '../../../hooks';
import { Components } from '../../../components/apps';

import cls from "./index.module.scss";


const Register: React.FunctionComponent = () => {
  const { actions } = HOOKS.useRedirect();

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm(
    {
      mode: "onSubmit"
    }
  );

  const handleRegister = (data: FieldValues) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res: any) => {
        reset();
        localStorage.setItem("accessToken", res?.user?.accessToken);
        actions.goToLogin();
      })
  };
  

  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.register_page}>
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit(handleRegister)}>
            <Components.Divider>
              <Components.TextInput
                type='email'
                placeholder='Email'
                {...register("email", {
                  required: {
                    message: "This area is required!",
                    value: true
                  },
                  maxLength: {
                    message: FormsInstrument.LengthOfValue("max", "Email", 25),
                    value: 25
                  },
                  minLength: {
                    message: FormsInstrument.LengthOfValue("min", "Email", 3),
                    value: 3
                  }
                })}
              />

              <Components.Errors err={errors?.email && errors.email.message}/>
            </Components.Divider>
            <Components.Divider>
              <Components.TextInput
                type='password'
                placeholder='Password'
                {...register("password", {
                  required: true,
                  maxLength: {
                    message: FormsInstrument.LengthOfValue("max", "Password", 15),
                    value: 15
                  },
                  minLength: {
                    message: FormsInstrument.LengthOfValue("min", "Password", 3),
                    value: 3
                  }
                })}
              />

              <Components.Errors err={errors?.password && errors.password.message}/>
            </Components.Divider>

            <Components.Divider>
              <Components.AuthSubmit location="Sign Up"/>
            </Components.Divider>

            <Components.Divider>
              <Components.AuthNavigate location="Sign Up"/>
            </Components.Divider>

            <Components.Divider>
              <Components.AuthGoogle location="Sign Up with Google"/>
            </Components.Divider>
          </form>
        </section>
      </Components.Container>
    </React.Fragment>
  )
}

export default Register;
