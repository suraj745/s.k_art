const eventsData = {
  womenAcheivers: [
    {
      id: 1,
      img: `/images/events/Image_10.jpg`,
      para: `Ms. Advaitesha Birla received award on
    behalf of her mother Mrs. Neerja Birla`,
    },
    {
      id: 2,
      img: `/images/events/Image_11.jpg`,
      para: `Mrs. Bhavna Doshi,
    Partner, Bhavna Doshi &
    Associates receiving the
    "Financial Leader of The Year
    Award" at Women Achievers
    Award.`,
    },
    {
      id: 3,
      img: `/images/events/Image_12.jpg`,
      para: `Mr. Alok Ranjan Tiwari, sharing his
    fruitful thoughts`,
    },
    {
      id: 4,
      img: `/images/events/Image_14.jpg`,
      para: ` Guest of Honours sitting on the
    dais at "Women Achievers Award-2022"
    organised by Abhyuday Vatsalyam
    National Hindi News Magazine.`,
    },
    {
      id: 5,
      img: `/images/events/Image_16.jpg`,
      para: `Dr. Pallvi Saple, Dean, JJ Group of
    Hospitals received the "Covid
    Warrior Award" at Women Achievers
    Award-2022.`,
    },
    {
      id: 6,
      img: `/images/events/Image_17.jpg`,
      para: `Mrs. Sheetal Karulkar, Vice
    Chairman, Karulkar Pratishthan
    received the "Exemplary Women in Human
    Welfare" award.`,
    },
  ],

  Sakshat_Bharat: [
    {
      id: 1,
      img: `/images/Home/Gallery image 6.jpg`,
      para: ` Mrs. Rajshree Birla, Mr. Nadir Godrej, Mr. Deepak Parekh, Mr.
      Shailesh Haribhakti, Mr. Kripashankar Tiwari and Mr. Alok Ranjan
      Tiwari launching the coffee table book - "Sashakt Bharat: The
      Glorious Story of India's Development".`,
    },
    {
      id: 2,
      img: `/images/Home/Gallery image 2.jpg`,
      para: ` Mr. Alok Ranjan Tiwari, CEO & Editor-in-Chief of Abhyuday
      Vatsalyam News Magazine, welcoming Mr. Nadir Godrej,
      Chairman & Managing Director, Godrej Industries Limited.`,
    },
    {
      id: 3,
      img: `/images/Home/Gallery image 3.jpg`,
      para: ` Mr. Alok Ranjan Tiwari, CEO & Editor-in-Chief of Abhyuday
      Vatsalyam News Magazine, welcoming Mr. Deepak Parekh,
      Chairman of HDFC Group.`,
    },
    {
      id: 4,
      img: `/images/Home/Gallery image 4.jpg`,
      para: `Mr. Alok Ranjan Tiwari, CEO & Editor-in-Chief of Abhyuday
      Vatsalyam News Magazine, welcoming Mr. Shailesh
      Haribhakti, Chairman of Shailesh Haribhakti & Associates,
      Blue Star Limited and board member in various companies.`,
    },
    {
      id: 5,
      img: `/images/Home/Gallery image 5.jpg`,
      para: `  Mr. Alok Ranjan Tiwari, CEO & Editor-in-Chief of Abhyuday
      Vatsalyam News Magazine, welcoming Mrs. Rajshree Birla,
      Chairperson of Aditya Birla Centre for Community
      Initiatives and Rural Development.`,
    },
    {
      id: 6,
      img: `/images/Home/Gallery image 6.jpg`,
      para: ` Mrs. Rajshree Birla, Mr. Nadir Godrej, Mr. Deepak Parekh,
      Mr. Shailesh Haribhakti, Mr. Kripashankar Tiwari and Mr.
      Alok Ranjan Tiwari launching the coffee table book -
      "Sashakt Bharat: The Glorious Story of India's
      Development`,
    },
  ],
};
const eventGrid = document.querySelector(".event_bottom_grid_women");
const eventGrid2 = document.querySelector(".sahkshat_bharat");

function loadEventData(data, query) {
  query.innerHTML = data
    .map((value, index) => {
      console.log(value);
      return `<ul class="gallery_card">
  <li>
    <img src='${value.img}' alt="" />
  </li>
  <li>
    <p class="p-4">
     ${value.para}
    </p>
  </li>
  </ul>`;
    })
    .join(" ");
}

loadEventData(eventsData.womenAcheivers, eventGrid);
loadEventData(eventsData.Sakshat_Bharat, eventGrid2);

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

    galleryContainer.addEventListener("click", () => {
      gModal.classList.remove("show-modal");
    });

    document.querySelector(".modal_card").addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
});
