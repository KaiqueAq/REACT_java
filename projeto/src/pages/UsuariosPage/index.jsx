import { useState, useEffect } from "react";
import api from "../../services/api";
import "./styles.css";

function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const response = await api.get('/usuarios');
        setUsuarios(response.data)
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        setErro("Não foi possível carregar os usuários. Verifique se o servidor está ativo.");
      }
    }

    fetchUsuarios();
  }, []);

  return (
    <main className="page usuarios-page">
      <h1>Usuários</h1>
      <p>Página de usuários.</p>

      {erro && <p role="alert">{erro}</p>}

      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            <strong>{usuario.nome}</strong> — {usuario.email} ({usuario.telefone})
          </li>
        ))}
      </ul>
    </main>
  );
}

export default UsuariosPage;
