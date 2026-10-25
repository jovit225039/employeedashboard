import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Unable to fetch employee data.");
        }

        const data = await response.json();
        setEmployees(data);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  return (
    <section>
      <div className="dashboard-header mb-4">
        <div>
          <p className="eyebrow mb-1">EMPLOYEE MANAGEMENT</p>
          <h1 className="display-6 fw-bold mb-2">Employee Dashboard</h1>
          <p className="text-secondary mb-0">
            Employee information fetched from an external API.
          </p>
        </div>

        <div className="employee-count">
          <span>{employees.length}</span>
          <small>Employees</small>
        </div>
      </div>

      {loading && (
        <div className="card dashboard-card text-center p-5">
          <div className="spinner-border mb-3" role="status"></div>
          <p className="mb-0">Loading employee data...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="card dashboard-card border-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>
                      <span className="id-badge">{employee.id}</span>
                    </td>
                    <td className="fw-semibold">{employee.name}</td>
                    <td>
                      <a
                        className="email-link"
                        href={`mailto:${employee.email}`}
                      >
                        {employee.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dashboard;