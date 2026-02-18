const jobForm = document.querySelector("#jobForm");
const companyInput = document.querySelector("#company");
const statusSelect = document.querySelector("#status");
const jobList = document.querySelector("#jobList");

let jobs = [];

jobForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const company = companyInput.value.trim();
  const status = statusSelect.value;

  if (company === "") return;

  const job = {
    id: Date.now(),
    company,
    status
  };

  jobs.push(job);
  renderJobs();

  companyInput.value = "";
});

function renderJobs() {
  jobList.innerHTML = "";

  jobs.forEach(job => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${job.company} - ${job.status}</span>
      <button data-id="${job.id}">Delete</button>
    `;

    jobList.appendChild(li);
  });
}

jobList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = Number(e.target.dataset.id);
    jobs = jobs.filter(job => job.id !== id);
    renderJobs();
  }
});