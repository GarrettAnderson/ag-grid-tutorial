const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello from ag-grid!'
  }
}

document.addEventListener('DOMContentLoaded', main)
