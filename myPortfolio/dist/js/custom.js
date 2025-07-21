const projects = [
  {
    title: "Brag House",
    url: "https://braghouse.gcs-web.com/?auth_token=46e7c0b0-d6d8-46c5-b403-d906ef4f665f",
    img: "dist/images/braghouse.png",
    navy: true
  },
  {
    title: "Tempus",
    url: "https://tempus.gcs-web.com/?auth_token=efe380ef-93a7-4bf2-ab80-80c9b7f82f4a",
    img: "dist/images/tempus_black.svg"
  },
  {
    title: "Eversource",
    url: "https://eversource.gcs-web.com/?auth_token=07521f3c-7c85-4804-8ec3-f58b4167a465",
    img: "dist/images/ever.svg"
  },
  {
    title: "KVH Redesign",
    url: "https://kvh-redesign.gcs-web.com/?auth_token=c706d201-fcdd-4b30-b735-5bf910ff2f45",
    img: "dist/images/kvh_logo.svg"
  },
  {
    title: "Ultralife Corporation",
    url: "https://ultralifecorporation-redesign.gcs-web.com/?auth_token=6bbe8db5-8c93-4205-95fd-d3578ad64c20",
    img: "dist/images/Ultralife-Logo_White_outlined.svg"
  },
  {
    title: "Chime",
    url: "https://chime.gcs-web.com/?auth_token=3c827cdb-bb4e-465d-be2e-1131ec807a82",
    img: "dist/images/chime-logo.svg"
  },
  {
    title: "Deme Dredging",
    url: "https://demedredging.gcs-web.com/?auth_token=c3ebd243-cd6d-42fe-8859-3e8475f9c183",
    img: "dist/images/DEME.BR_BIG.png"
  },
  {
    title: "IMAB",
    url: "https://imab.gcs-web.com/",
    img: "dist/images/imab-logo.svg"
  },
  {
    title: "Beta Bionics",
    url: "https://betabionics.gcs-web.com/?auth_token=f29cf4b3-3bb6-4918-ae18-fd4ecd54e4ce",
    img: "dist/images/betabionics-logo-two-color.svg"
  },
  {
    title: "Nurix Therapeutics",
    url: "https://nurixtx.gcs-web.com/",
    img: "dist/images/nurix.svg",
    navy: true
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("portfolio");

  if (!container) return;

  projects.forEach((project) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 mb-4";

    col.innerHTML = `
      <div class="portfolio-item active " tabindex="0" role="button" aria-expanded="true" aria-label="Toggle ${project.title} screenshot">
        <div class="site-title">${project.title}</div>
        <a href="${project.url}" target="_blank" class="btn btn-custom-visit mt-2">
          <i class="bi bi-link-45deg"></i> Visit Site
        </a>
        <div class="site-link mt-3 ${project.navy ? 'screenshot-navy' : ''}">
          <img src="${project.img}" alt="${project.title} screenshot" class="site-screenshot img-fluid" />
        </div>
      </div>
    `;

    container.appendChild(col);
  });
});
