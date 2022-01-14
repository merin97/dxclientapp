import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/pagination";

export default function Clients() {
  const pageSize = 10;

  const navigate = useNavigate();
  const [clients, setClients] = useState([]); // stateClients is declared
  const [currentPage, setCurrentPage] = useState(1);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/clients") //api is fetched
      .then((res) => res.json())
      .then((response) => {
        setClients(response);
        setFiltered(response);
      });
  }, []);

  const onDelete = (id) => {
    fetch("http://localhost:8000/clients/" + id, { method: "DELETE" }) //api is fetched
      .then((res) => res.json())
      .then((response) => {
        const filter = clients.filter((x) => x.id !== id);
        setClients(filter);
      })
      .catch((error) => {
        alert("error");
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const onSearch = (e) => {
    setFiltered(
      clients.filter((x) =>
        x.Name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setCurrentPage(1);
  }

  const getData = (data) => {
    const startIndex = currentPage * pageSize - pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };

  const onEdit = (id) => {
    navigate(`/editClient/${id}`);
  };
  const addClick = () => {
    navigate("/addClient");
  };

  return (
    <section className="my-3 container">
      <div className="d-flex justify-content-end mb-3">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          onChange={onSearch}
          autoComplete="off"
        />
        <button
          className=" mx-5 btn rounded-pill btn-primary"
          onClick={addClick}
        >
          ADD client
        </button>
      </div>
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
          {getData(filtered).map(({ id, Name, domain, manager_id, RevenuePerYear }) => (
            <tr key={id} className="table-primary">
              <th scope="row">{id}</th>
              <td>{Name}</td>
              <td>{domain}</td>
              <td>{manager_id}</td>
              <td>{RevenuePerYear}</td>
              <td>
                <a onClick={() => onEdit(id)}>edit</a>
              </td>
              <td>
                <button
                  onClick={() => onDelete(id)}
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
      <Pagination
        itemCount={filtered.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
