import "./style.css";
import { TrashIcon } from "lucide-react";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail= useRef();

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios");

    setUsers(usersFromApi.data);
    console.log(users);
  }
  
  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value

    });
    getUsers()
  
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);

    getUsers()

  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input name="name" type="text" placeholder="Digite seu nome" required  ref={inputName}/>
        <input name="age" type="number" placeholder="Digite sua idade" required ref={inputAge} />
        <input name="email" type="email" placeholder="Digite seu melhor email" required ref={inputEmail} />

        <button onClick={createUsers} className="cadastro" type="button">
          Cadastrar
        </button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>

          <button className="delete" onClick={() => deleteUsers(user.id)}>
            <TrashIcon />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
