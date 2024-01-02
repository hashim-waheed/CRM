<template>
    <main>
  <h2>Freelancers</h2>

  <table table table-striped>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>1</td>
          <td>yasir</td>
          <td>yasir@gmail.com</td>
          <td>
              <button type="button" class="btn btn-danger">Delete</button>
              <button type="button" class="btn btn-light">Update</button>
          </td>
      </tr>
    </tbody>
  </table>
</main>
</template>


<script>
export default{
  name:'department-component'
}
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

nav {
  background-color: #eee;
  padding: 10px;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

main {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table, th, td {
  border: 1px solid #ddd;
}

th, td {
  padding: 10px;
  text-align: left;
}

th {
  background-color: #333;
  color: white;
}

form {
  margin-top: 20px;
}

input, button {
  padding: 10px;
  margin: 5px;
}

button {
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}
</style>