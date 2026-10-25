import { useState } from "react";

const initialForm = {
  name: "",
  designation: "",
  location: "",
  salary: ""
};

function EmployeeForm() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Assignment says no need to post data to a backend.
    setSubmitted(true);
  };

  return (
    <section className="form-page">
      <div className="mb-4">
        <p className="eyebrow mb-1">EMPLOYEE DETAILS</p>
        <h1 className="display-6 fw-bold mb-2">Employee Form</h1>
        <p className="text-secondary mb-0">
          Enter employee information below. This form is for frontend
          demonstration only.
        </p>
      </div>

      <div className="card dashboard-card border-0">
        <div className="card-body p-4 p-md-5">
          {submitted && (
            <div className="alert alert-success">
              Employee details submitted successfully for demonstration.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter employee name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="designation" className="form-label">
                  Designation
                </label>
                <input
                  id="designation"
                  name="designation"
                  type="text"
                  className="form-control"
                  placeholder="e.g. Software Developer"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className="form-control"
                  placeholder="Enter location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="salary" className="form-label">
                  Salary
                </label>
                <input
                  id="salary"
                  name="salary"
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Enter salary"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 d-flex gap-2 pt-2">
                <button type="submit" className="btn btn-primary px-4">
                  Submit
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary px-4"
                  onClick={() => {
                    setFormData(initialForm);
                    setSubmitted(false);
                  }}
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EmployeeForm;