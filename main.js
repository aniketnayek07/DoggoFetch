//Constants:
/* BREEDS ARRAY */
const BREEDS = [
  "affenpinscher",
  "african",
  "airedale",
  "akita",
  "appenzeller",
  "shepherd australian",
  "basenji",
  "beagle",
  "bluetick",
  "borzoi",
  "bouvier",
  "boxer",
  "brabancon",
  "briard",
  "norwegian buhund",
  "boston bulldog",
  "english bulldog",
  "french bulldog",
  "staffordshire bullterrier",
  "australian cattledog",
  "chihuahua",
  "chow",
  "clumber",
  "cockapoo",
  "border collie",
  "coonhound",
  "cardigan corgi",
  "cotondetulear",
  "dachshund",
  "dalmatian",
  "great dane",
  "scottish deerhound",
  "dhole",
  "dingo",
  "doberman",
  "norwegian elkhound",
  "entlebucher",
  "eskimo",
  "lapphund finnish",
  "bichon frise",
  "germanshepherd",
  "italian greyhound",
  "groenendael",
  "havanese",
  "afghan hound",
  "basset hound",
  "blood hound",
  "english hound",
  "ibizan hound",
  "plott hound",
  "walker hound",
  "husky",
  "keeshond",
  "kelpie",
  "komondor",
  "kuvasz",
  "labradoodle",
  "labrador",
  "leonberg",
  "lhasa",
  "malamute",
  "malinois",
  "maltese",
  "bull mastiff",
  "english mastiff",
  "tibetan mastiff",
  "mexicanhairless",
  "mix",
  "bernese mountain",
  "swiss mountain",
  "newfoundland",
  "otterhound",
  "caucasian ovcharka",
  "papillon",
  "pekinese",
  "pembroke",
  "miniature pinscher",
  "pitbull",
  "german pointer",
  "germanlonghair pointer",
  "pomeranian",
  "medium poodle",
  "miniature poodle",
  "standard poodle",
  "toy poodle",
  "pug",
  "puggle",
  "pyrenees",
  "redbone",
  "chesapeake retriever",
  "curly retriever",
  "flatcoated retriever",
  "golden retriever",
  "rhodesian ridgeback",
  "rottweiler",
  "saluki",
  "samoyed",
  "schipperke",
  "giant schnauzer",
  "miniature schnauzer",
  "english setter",
  "gordon setter",
  "irish setter",
  "sharpei",
  "english sheepdog",
  "shetland sheepdog",
  "shiba",
  "shihtzu",
  "blenheim spaniel",
  "brittany spaniel",
  "cocker spaniel",
  "irish spaniel",
  "japanese spaniel",
  "sussex spaniel",
  "welsh spaniel",
  "english springer",
  "stbernard",
  "american terrier",
  "australian terrier",
  "bedlington terrier",
  "border terrier",
  "cairn terrier",
  "dandie terrier",
  "fox terrier",
  "irish terrier",
  "kerryblue terrier",
  "lakeland terrier",
  "norfolk terrier",
  "norwich terrier",
  "patterdale terrier",
  "russell terrier",
  "scottish terrier",
  "sealyham terrier",
  "silky terrier",
  "tibetan terrier",
  "toy terrier",
  "welsh terrier",
  "westhighland terrier",
  "wheaten terrier",
  "yorkshire terrier",
  "tervuren",
  "vizsla",
  "spanish waterdog",
  "weimaraner",
  "whippet",
  "irish wolfhound",
];

const Rand_Dog_Url = "https://dog.ceo/api/breeds/image/random";

//Functions:
/* Fetching url of random Dog image */
const GetRandImg = async () => {
  const Response = await fetch(Rand_Dog_Url);
  const Data = await Response.json();
  return Data.message;
};
/* Getting breed name from the random URL */
const GetBreedfromURL = (url) => {
  const Split1 = url.split("/breeds/");
  const Split2 = Split1[1].split("/");
  const Split3 = Split2[0].split("-");
  const Join = Split3.join(" ");
  return Join;
};
/* Getting two random names from the BREEDS array */
const GetChoices = (n, CorrectAnswer, arr) => {
  const FinalAnswers = [CorrectAnswer];
  while (FinalAnswers.length < n) {
    let RandomIndex = Math.floor(Math.random(BREEDS) * BREEDS.length);
    if (FinalAnswers.indexOf(arr[RandomIndex]) < 0) {
      FinalAnswers.push(arr[RandomIndex]);
    }
  }
  return ShuffleArr(FinalAnswers);
};
/* Function for Shuffling the order of the buttons */
const ShuffleArr = (arr) => {
  return arr.sort((a, b) => Math.random() - 0.5);
};
/* Function for handling and rendering the buttons */
const RenderButtons = (Choices, Answer) => {
  var Options = document.getElementById("Buttonid");
  const HandleCLickEvent = (e) => {
    if (e.target.value.toLowerCase() === Answer) {
      e.target.classList.remove("bg-slate-300");
      e.target.classList.add("bg-green-500");
    } else {
      e.target.classList.remove("bg-slate-300");
      e.target.classList.add("bg-red-500");

      document
        .querySelector(`button[value="${Answer.toUpperCase()}"]`)
        .classList.add("bg-green-500");
    }
    setTimeout(() => {
      location.reload();
    }, 1000);
  };
  Choices.map((item) => {
    var Button = document.createElement("button");
    Button.name = Button.textContent = Button.value = item.toUpperCase();
    Button.classList.add("h-12");
    Button.classList.add("w-full");
    Button.classList.add("bg-slate-300");
    Button.addEventListener("click", HandleCLickEvent);
    // h-12 w-full bg-slate-300
    Options.appendChild(Button);
  });
};

const url = await GetRandImg();

/* Main Body*/
document.getElementById("Rand").textContent = "Loading Doggo.....";

let image = document.createElement("img");
image.src = url;
image.classList.add("h-72");
image.addEventListener("load", () => {
  document.getElementById("Rand").replaceChildren(image);
});

var Finalans = GetBreedfromURL(url);

RenderButtons(GetChoices(3, Finalans, BREEDS), Finalans);
