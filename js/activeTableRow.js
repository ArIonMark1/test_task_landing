document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("styledTable");
  const rows = table.querySelectorAll(".row");

  rows.forEach((row) => {
    row.addEventListener("click", function () {
      // Remove active class from all rows
      rows.forEach((r) => r.classList.remove("active"));

      // Add active class to the clicked row
      row.classList.add("active");
    });
  });
});
