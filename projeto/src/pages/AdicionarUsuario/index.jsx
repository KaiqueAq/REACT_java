import React, { useState } from "react";

export default function AdicionarUsuario() {
const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const[usuarios, setUsuarios] = useState("");





  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoUsuario = {
      nome,
      email
    }

  };

  return (
    <div>
      <h1>Adicionar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <button type="submit">Adicionar</button>
      </form>

      <hr />
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            {usuario.nome} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

