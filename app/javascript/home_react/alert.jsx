const Alert = (content, type) => {
  const duration = 3000
  let container = document.createElement('div')
  container.classList.add("alert")
  if (type !== undefined) {
    container.classList.add("alert-"+type)
  }
  container.textContent = content
  document.body.appendChild(container)

  setTimeout((function() {
    container.classList.add("alert--show");
  }), 100);
  setTimeout((function() {
    container.classList.add("alert--dismiss");
  }), duration);
};

export default Alert;
