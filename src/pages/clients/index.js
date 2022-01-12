import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Data  from '../../db.json'
export default function Clients() {
  const navigate = useNavigate(); //like usehistory
  const [clients, setClients] = useState([]); // stateClients is declared
  useEffect(() => {
    fetch("http://localhost:8000/clients") //api is fetched
      .then((res) => res.json())
      .then((response) => {
        setClients(response);
      }); // api response is assigned to blue coloured clients (state variable clients)
  }, []);
  const onDelete = (id) => {
    fetch("http://localhost:8000/clients/" + id, { method: "DELETE" }) //api is fetched
      .then((res) => res.json())
      .then((response) => {
        const filter = clients.filter((x) => x.id !== id);
        setClients(filter);
        console.log("delete", filter).catch((error) => {
          alert("error");
        });
      });
  };
   const onEdit = (id) =>{
     navigate(`/editClient/${id}`)
   }
  const addClick = () => {
    navigate("/addClient");
  };

  return (
    <section>
      <button onClick={addClick}>ADD client</button>

      <table className="table">
        <thead>
          <tr className="table-light">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Domain</th>
            <th scope="col">Manager id</th>
            <th scope="col">Revenue Per Year</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr className="table-primary">
              <th scope="row">{client.id}</th>
              <td>{client.Name}</td>
              <td>{client.domain}</td>
              <td>{client.manager_id}</td>
              <td>{client.RevenuePerYear}</td>
              <td>
                <a onClick={() => onEdit(client.id)}>edit</a>
              </td>
              <td>
                <button
                  onClick={() => onDelete(client.id)}
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                ></button>
              </td>
            </tr>
          ))}
          {/* state variable clients mapped to show rows */}
        </tbody>
      </table>
    </section>
  );
}
