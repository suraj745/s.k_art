const gallery_card_data = [
  {
    id: 1,
    img: `/images/Home/Gallery image 2.jpg`,
    content: `Mr. Alok Ranjan Tiwari, CEO & Editor-in-Chief of Abhyuday
    Vatsalyam News Magazine, welcoming Mr. Nadir Godrej, Chairman
    & Managing Director, Godrej Industries Limited.`,
  },
  {
    id: 2,
    img: `/images/Home/Gallery image 3.jpg`,
    content: `Mr. Alok Ranjan Tiwari, CEO & Editor-in-Chief of Abhyuday
    Vatsalyam News Magazine, welcoming Mr. Deepak Parekh, Chairman
    of HDFC Group.`,
  },
  {
    id: 3,
    img: `/images/Home/Gallery image 4.jpg`,
    content: `  Mr. Alok Ranjan Tiwari, CEO & Editor-in-Chief of Abhyuday
    Vatsalyam News Magazine, welcoming Mr. Shailesh Haribhakti,
    Chairman of Shailesh Haribhakti & Associates, Blue Star
    Limited and board member in various companies.`,
  },
  {
    id: 4,
    img: `/images/Home/Gallery image 5.jpg`,
    content: `   Mr. Alok Ranjan Tiwari, CEO & Editor-in-Chief of Abhyuday
    Vatsalyam News Magazine, welcoming Mrs. Rajshree Birla,
    Chairperson of Aditya Birla Centre for Community Initiatives
    and Rural Development.`,
  },
  {
    id: 5,
    img: `/images/Home/Gallery image 6.jpg`,
    content: `  Mrs. Rajshree Birla, Mr. Nadir Godrej, Mr. Deepak Parekh, Mr.
    Shailesh Haribhakti, Mr. Kripashankar Tiwari and Mr. Alok
    Ranjan Tiwari launching the coffee table book - "Sashakt
    Bharat: The Glorious Story of India's Development".`,
  },
  {
    id: 6,
    img: `/images/Home/Gallery image 7.jpg`,
    content: ` From Left: Mr. Akshat Saxena, Co-Founder of ePayLater, Mrs.
    Purvi Sheth, CEO of Shilputsi India and Independent Director
    of Ambuja Cements Limited, Deepak Nitrite Limited, Boat
    Lifestyle, Kirloskar Oil Engines Limited, Mr. Abhay Tewari, MD
    & CEO, Star nion Dai-Ichi Life Insurance Company Limited, Mr.
    Kripashankar Tiwari, Founder Editor of Abhyuday Vatsalyam News
    Magazine, Mr. Shailesh Haribhakti, Chairman of Shailesh
    Haribhakti & Associates and Mr. Navneet Munot, MD & CEO of
    HDFC Mutual Fund launching the "Sashakt Bharat" Coffee Table
    Book`,
  },
  {
    id: 7,
    img: `/images/Home/Gallery image 8.jpg`,
    content: `  bhyuday Vatsalyam News Magazine's CEO & Editor-ln-Chief, Mr.
    Alok Ranjan Tiwari and Mr. Deepak Parekh, Chairman of HDFC
    Group shaking hands with each other at "Sashakt Bharat" coffee
    table book launch event.`,
  },
  {
    id: 8,
    img: `/images/Home/Gallery image 9.jpg`,
    content: ` Abhyuday Vatsalyam News Magazine's CEO & Editor-ln-Chief, Mr.
    Alok Ranjan Tiwari interviewing Mr. Deepak Parekh, Chairman of
    HDFC Group.`,
  },
  {
    id: 9,
    img: `/images/Home/Gallery image 10.jpg`,
    content: `  Mrs. Rajshree Birla, Mr. Nadir Godrej, Mr. Deepak Parekh, Mr.
    Shailesh Haribhakti, Mr. Kripashankar Tiwari and Mr. Alok
    Ranjan Tiwari launching the coffee table book - "Sashakt
    Bharat: The Glorious Story of India's Development".`,
  },
];

const gGrid = document.querySelector(".gallery_grid");

function loadGalleryCard(data) {
  gGrid.innerHTML = data
    .map((value, index) => {
      return `<ul class="gallery_card">
<li>
  <img src='${value.img}' alt="" />
</li>
<li>
  <p class="p-4">
   ${value.content}
  </p>
</li>
</ul>`;
    })
    .join(" ");
}

loadGalleryCard(gallery_card_data);

const gCard = document.querySelectorAll(".gallery_card");
const gModal = document.querySelector(".gallery_modal");
const galleryContainer = document.querySelector(".gallery_container");

gCard.forEach((value, index) => {
  value.addEventListener("click", () => {
    gModal.classList.add("show-modal");
    galleryContainer.innerHTML = ` <ul class="modal_card">
      <li>
        <i class="fa-solid fa-xmark g-modal-close" style="cursor:pointer"></i>
      </li>
      <li>
        <img src="${
          gCard[index].querySelector(".gallery_card > :nth-child(1) img")
            .attributes[0].nodeValue
        }" alt="" />
      </li>
      <li>
        <p class="p-4">
        ${
          gCard[index].querySelector(".gallery_card > :nth-child(2) p")
            .textContent
        }
        </p>
      </li>
    </ul>`;

    const closeModal = document.querySelector(".g-modal-close");

    closeModal.addEventListener("click", () => {
      gModal.classList.remove("show-modal");
    });
  });
});
