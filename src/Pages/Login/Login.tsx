import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const chargeUtileText = {
      "email": email,
      "password": password
    };

    const chargeUtile = JSON.stringify(chargeUtileText);

    try {
      const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: chargeUtile
      });

      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          window.localStorage.setItem("data", JSON.stringify(data));
        } else {
          alert("Erreur dans le mot de passe ou l'identifiant");
        }
      } else {
        alert("Erreur lors de la connexion");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <>
      <main>
        <section className="login">
          <h2>Se connecter</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input id="btn-connect" type="submit" value="Se connecter" />
          </form>
          <a href="">Mot de passe oublié</a>
        </section>
      </main>
    </>
  );
};

export default Login;
