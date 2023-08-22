import React from 'react'

const UserForm = () => {
  return (
    <div><div className="App">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="card col-8 mt-5">
        <h1>UserForm</h1>
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <form>
            <div class="form-group mb-4">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputName">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                placeholder="Name"
              />
            </div>
            <div class="form-group mb-4">
              <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
                Gender
              </label>
              <select
                class="custom-select my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
              >
                <option selected>Choose...</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Others</option>
              </select>
            </div>

            <div class="form-group mb-4">
              <label for="exampleInputdob">Date of Birth</label>
              <input
                type="date"
                class="form-control"
                id="exampleInputdob"
                // max="<?= date('Y-m-d'); ?>"
                max={new Date().toISOString().split("T")[0]}
                placeholder="DOB"
              />
            </div>
            <button type="submit " class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default UserForm