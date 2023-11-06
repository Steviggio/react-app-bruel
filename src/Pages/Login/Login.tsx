const Login = () => {


  return (
    <>
      <main>
        <section className="login">
          <h2>Log in</h2>
          <form action="/login" method="post">
            <label htmlFor="email" >E-mail</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password" >Mot de passe</label>
            <input type="password" name="password" id="password" />
            <input id="btn-connect" type="submit" value="Se connecter" />
          </form>
          <a href="">Mot de passe oublié</a>
        </section>
      </main>
    </>
  )
}

export default Login;