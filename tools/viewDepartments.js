function viewDepartments() {
    console.log("Currently in viewDepartments.js")

    console.table([
        {
          name: 'foo',
          age: 10
        }, {
          name: 'bar',
          age: 20
        }
      ]);
}

module.exports = viewDepartments;