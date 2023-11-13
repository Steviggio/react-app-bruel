import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { useState } from "react"

type FormData = {
  email: string,
  password: string,
}

export default function Identify() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
  })

  // let formBody = JSON.stringify(data);

  //   try {
  //     const response = await fetch("http://localhost:5678/api/users/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: formBody,
  //     });

  //     if (response.ok) {
  //       const responseData = await response.json();
  //       console.log(responseData);

  //       if (responseData.token) {
  //         window.localStorage.setItem("data", JSON.stringify(responseData));
  //         alert('Connection successful');
  //         // Rediriger ici après le succès
  //         navigate("/");
  //       } else {
  //         alert("Email or password is incorrect");
  //       }
  //     } else {
  //       alert("An error occurred during connection");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred", error);
  //   }


  return (
    <>
      <main>
        <section className="login">
          <h2>Se connecter</h2>
          <form onSubmit={onSubmit}>
            <label htmlFor="email">E-mail</label>
            <input id="email" {...register("email")} />
            <label htmlFor="password">Mot de passe</label>
            <input id="password" {...register("password", { required: true })} />
            {errors.password && <span> This field is required</span>}
            <input id="btn-connect" type="submit" value="Se connecter" />
          </form>
          <a href="">Mot de passe oublié</a>
        </section>
      </main>
    </>
  )
}