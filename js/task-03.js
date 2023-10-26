const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryList = document.querySelector("ul.gallery");
let galleryItems = "";
images.forEach((image) => {
	const listItem = `<li><img src="${image.url}" alt="${image.alt}"></li>`;
	galleryItems += listItem;
});
galleryList.insertAdjacentHTML("afterbegin", galleryItems);
const style = document.createElement("style");
style.innerHTML = `
.gallery {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
}
.gallery li {
  margin: 15px;
  flex: 1;
  border: 4px solid black;
  padding: 10px;
  display: flex;
  align-items: center;
}
.gallery li img {
  max-width: 100%;
  height: auto;
}
`;
document.head.appendChild(style);

