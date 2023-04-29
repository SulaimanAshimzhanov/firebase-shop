

import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FieldValues, useForm } from 'react-hook-form';
import { auth } from '../../../firebase/firebase';
import { FormsInstrument } from '../../../helpers/forms';
import { HOOKS } from '../../../hooks';
import { Providers } from '../../../providers';
import { Components } from '../../../components/apps';

import cls from "./index.module.scss";


const Login: React.FunctionComponent = () => {
  const { actions } = HOOKS.useRedirect();
  const { setRender } = Providers.useAuth();

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

  const handleLogin = (data: FieldValues) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res: any) => {
        localStorage.setItem("accessToken", res?.user?.accessToken);
        actions.goToMain();
        reset();
        setRender("Reload!");
      })
  };
  

  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.login_page}>
          <h2>Login</h2>

          <form onSubmit={handleSubmit(handleLogin)}>
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

              <Components.Errors err={errors?.email && errors.email.message}/>
            </Components.Divider>

            <Components.Divider>
              <Components.AuthSubmit location="Login"/>
            </Components.Divider>

            <Components.Divider>
              <Components.AuthNavigate location="Login"/>
            </Components.Divider>

            <Components.Divider>
              <Components.AuthGoogle location="Login with Google"/>
            </Components.Divider>
          </form>
        </section>
      </Components.Container>
    </React.Fragment>
  )
}

export default Login;
