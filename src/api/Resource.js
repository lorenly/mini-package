export default {
    createPackage: (package) => fetch(
        "http://localhost:8081/mini_package/booking", {
          mode: 'cors',
          method: 'POST',
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify(todo)
        }),
}