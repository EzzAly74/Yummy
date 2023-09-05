new WOW().init();

$(window).on("load", function () {
  $(".lds-roller").fadeOut();
});

let secs = document.querySelectorAll("section");
const wid = $(".anim1").innerWidth();
let flag = false;
$("#barsIcon").click(function () {
  $("h4").addClass("animate__animated", "animate__bounceInUp");
  if (flag == false) {
    $("aside").animate({ "margin-left": `0px` }, 400);
    $(".links").addClass("animate__animated animate__bounceInUp");
    $("section").animate({ "margin-left": `${wid}` }, 400);
    $(".open-close-icon").addClass("fa-x");

    flag = true;
  } else {
    $("aside").animate({ "margin-left": `${-wid}` }, 400);
    $(".links").removeClass("animate__animated animate__bounceInUp");
    $("section").animate({ "margin-left": `0px` }, 400);

    $(".open-close-icon").removeClass("fa-x");
    flag = false;
  }
});

async function getRandomMeals() {
  let api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let res = await api.json();
  let total = ``;
  for (let i = 0; i < res.meals.length; i++) {
    total += `
    
    <div class = "imgContainer wow bounceInLeft randomMealsClick">
    <div class="overlay">
    <h2>${res.meals[i].strMeal}</h2>
    </div>
    <img src = ${res.meals[i].strMealThumb} class = "w-100 rounded" />
    </div>
    
    `;
  }
  document.querySelector("#randomMeals").innerHTML = total;
  let arr = document.querySelectorAll(".randomMealsClick");
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", () => {
      randomMealsClick(res.meals[i].idMeal);
    });
  }

  secs.forEach((s) => {
    s.classList.add("d-none");
  });
  document.querySelector("#randomMeals").classList.remove("d-none");
}

async function getCategories() {
  let api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let res = await api.json();
  let total = ``;
  for (let i = 0; i < res.categories.length; i++) {
    total += `
    <div class = "imgContainer wow bounceInLeft categoryClick">
    <div class="overlay">
    <h4>${res.categories[i].strCategory}</h4>
    <p>${splitter(res.categories[i].strCategoryDescription)}</p>
    </div>
    <img src = ${res.categories[i].strCategoryThumb} class = "w-100 rounded" />
    </div>
    `;
  }
  document.querySelector("#categories").innerHTML = total;
  let arr = document.querySelectorAll(".categoryClick");
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", () => {
      categoryClick(res.categories[i].strCategory);
    });
  }
  secs.forEach((s) => {
    s.classList.add("d-none");
  });
  document.querySelector("#categories").classList.remove("d-none");
  $("aside").animate({ "margin-left": `${-wid}` }, 400);
  $(".links").removeClass("animate__animated animate__bounceInUp");
  $("section").animate({ "margin-left": `0px` }, 400);
  $(".open-close-icon").removeClass("fa-x");

  flag = false;
}

async function getAreas() {
  let api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  let res = await api.json();
  let total = ``;
  for (let i = 0; i < res.meals.length; i++) {
    total += `
    <div class = "imgContainer wow bounceInLeft areaClick">
    <div class = "d-flex flex-column text-white text-center">
    <span id="iconContainer"> <i class = "fa-solid fa-house-laptop"></i></span>
    <h4>${res.meals[i].strArea}</h4>
    </div>
    </div>
    `;
  }
  document.querySelector("#area").innerHTML = total;
  let arr = document.querySelectorAll(".areaClick");
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", () => {
      areaClick(res.meals[i].strArea);
    });
  }
  secs.forEach((s) => {
    s.classList.add("d-none");
  });
  document.querySelector("#area").classList.remove("d-none");
  $("aside").animate({ "margin-left": `${-wid}` }, 400);
  $(".links").removeClass("animate__animated animate__bounceInUp");
  $("section").animate({ "margin-left": `0px` }, 400);
  $(".open-close-icon").removeClass("fa-x");

  flag = false;
}
async function getIngredients() {
  let api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  let res = await api.json();
  let total = ``;
  for (let i = 0; i < 20; i++) {
    total += `
    <div class = "imgContainer wow bounceInLeft ingredientClick">
    <div class = "d-flex flex-column text-white text-center">
    <span id="iconContainer"><i class = "fa-solid fa-drumstick-bite"></i></span>
    <h4>${res.meals[i].strIngredient}</h4>
    <p>${splitter(res.meals[i].strDescription)}</p>
    </div>
    </div>
    `;
  }
  document.querySelector("#ingredient").innerHTML = total;
  let arr = document.querySelectorAll(".ingredientClick");
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", () => {
      ingredientClick(res.meals[i].strIngredient);
    });
  }
  secs.forEach((s) => {
    s.classList.add("d-none");
  });
  document.querySelector("#ingredient").classList.remove("d-none");
  $("aside").animate({ "margin-left": `${-wid}` }, 400);
  $(".links").removeClass("animate__animated animate__bounceInUp");
  $("section").animate({ "margin-left": `0px` }, 400);
  $(".open-close-icon").removeClass("fa-x");

  flag = false;
}

async function getsearch() {
  let searchName = document.querySelector("#searchName");
  let searchFirstLetter = document.querySelector("#searchFirstLetter");
  let totalNm = ``;
  searchName.addEventListener("input", () => {
    // document.querySelector("#searchDiv").innerHTML = "";
    async function fet() {
      let val = searchName.value;
      let apiName = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
      );
      let res = await apiName.json();
      console.log(res);
      for (let i = 0; i < res.meals.length; i++) {
        totalNm += `
      <div class = "imgContainer wow bounceInLeft col-md-12 sNClick">
      <div class="overlay">
      <h4>${res.meals[i].strMeal}</h4>
      </div>
      <img src = ${res.meals[i].strMealThumb} class = "w-100 rounded" />
      </div>
        `;
      }
      document.querySelector("#searchDiv").innerHTML = totalNm;
      let arr = document.querySelectorAll(".sNClick");
      for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("click", () => {
          randomMealsClick(res.meals[i].idMeal);
        });
      }
      totalNm = ``;
    }
    fet();
  });

  let totallt = ``;
  searchFirstLetter.addEventListener("input", async function () {
    let val = searchFirstLetter.value;
    let apiLetter = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${val}`
    );
    let reslt = await apiLetter.json();
    for (let i = 0; i < reslt.meals.length; i++) {
      totallt += `
      <div class = "imgContainer wow bounceInLeft sFLClick">
      <div class="overlay">
      <h4>${reslt.meals[i].strMeal}</h4>
      </div>
      <img src = ${reslt.meals[i].strMealThumb} class = "w-100 rounded" />
      </div>
      `;
    }

    document.querySelector("#searchDiv").innerHTML = totallt;
    let arr = document.querySelectorAll(".sFLClick");
    for (let i = 0; i < arr.length; i++) {
      arr[i].addEventListener("click", () => {
        randomMealsClick(reslt.meals[i].idMeal);
      });
    }
  });

  secs.forEach((s) => {
    s.classList.add("d-none");
  });
  document.querySelector("#search").classList.remove("d-none");
  document.querySelector("#searchDiv").classList.remove("d-none");
  $("aside").animate({ "margin-left": `${-wid}` }, 400);
  $(".links").removeClass("animate__animated animate__bounceInUp");
  $("section").animate({ "margin-left": `0px` }, 400);
  $(".open-close-icon").removeClass("fa-x");

  flag = false;
}
function splitter(str) {
  return str.split(" ").splice(0, 20).join(" ");
}
function getContact() {
  secs.forEach((s) => {
    s.classList.add("d-none");
  });
  document.querySelector("#contact").classList.remove("d-none");
  $("aside").animate({ "margin-left": `${-wid}` }, 400);
  $(".links").removeClass("animate__animated animate__bounceInUp");
  $("section").animate({ "margin-left": `0px` }, 400);
  $(".open-close-icon").removeClass("fa-x");

  flag = false;
}
async function randomMealsClick(mealID) {
  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
  );
  let res = await api.json();
  let tags =
    res.meals[0].strTags != null
      ? res.meals[0].strTags.includes(",")
        ? res.meals[0].strTags.split(",")
        : res.meals[0].strTags
      : (res.meals[0].strTags = "");

  let cartona = ``;
  let cartonaTags = ``;

  if (typeof tags == "object") {
    Array.from(tags);
    for (let i = 0; i < tags.length; i++)
      cartonaTags += `<span class="alert alert-danger text-danger p-1">${tags[i]}</span>`;
  } else if (typeof tags == "string" && tags != "") {
    cartonaTags = `<span class="alert alert-danger text-danger p-1">${tags}</span>`;
  }
  if ((res.meals[0].strTags = "")) cartonaTags = ``;

  if (
    res.meals[0].strIngredient1 != "" &&
    res.meals[0].strIngredient1 != " " &&
    res.meals[0].strMeasure1 != "" &&
    res.meals[0].newstrMeasure1 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure1} ${res.meals[0].strIngredient1}</span>`;

  if (
    res.meals[0].strIngredient2 != "" &&
    res.meals[0].strIngredient2 != " " &&
    res.meals[0].strMeasure2 != "" &&
    res.meals[0].newstrMeasure2 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure2} ${res.meals[0].strIngredient2}</span>`;

  if (
    res.meals[0].strIngredient3 != "" &&
    res.meals[0].strIngredient3 != " " &&
    res.meals[0].strMeasure3 != "" &&
    res.meals[0].newstrMeasure3 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure3} ${res.meals[0].strIngredient3}</span>`;

  if (
    res.meals[0].strIngredient4 != "" &&
    res.meals[0].strIngredient4 != " " &&
    res.meals[0].strMeasure4 != "" &&
    res.meals[0].newstrMeasure4 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure4} ${res.meals[0].strIngredient4}</span>`;

  if (
    res.meals[0].strIngredient5 != "" &&
    res.meals[0].strIngredient5 != " " &&
    res.meals[0].strMeasure5 != "" &&
    res.meals[0].newstrMeasure5 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure5} ${res.meals[0].strIngredient5}</span>`;
  if (
    res.meals[0].strIngredient6 != "" &&
    res.meals[0].strIngredient6 != " " &&
    res.meals[0].strMeasure69 != "" &&
    res.meals[0].newstrMeasure6 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure6} ${res.meals[0].strIngredient6}</span>`;
  if (
    res.meals[0].strIngredient7 != "" &&
    res.meals[0].strIngredient7 != " " &&
    res.meals[0].strMeasure7 != "" &&
    res.meals[0].newstrMeasure7 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure7} ${res.meals[0].strIngredient7}</span>`;
  if (
    res.meals[0].strIngredient8 != "" &&
    res.meals[0].strIngredient8 != " " &&
    res.meals[0].strMeasure8 != "" &&
    res.meals[0].newstrMeasure8 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure8} ${res.meals[0].strIngredient8}</span>`;
  if (
    res.meals[0].strIngredient9 != "" &&
    res.meals[0].strIngredient9 != " " &&
    res.meals[0].strMeasure9 != "" &&
    res.meals[0].newstrMeasure9 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure9} ${res.meals[0].strIngredient9}</span>`;
  if (
    res.meals[0].strIngredient10 != "" &&
    res.meals[0].strIngredient10 != " " &&
    res.meals[0].strMeasure10 != "" &&
    res.meals[0].newstrMeasure10 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure10} ${res.meals[0].strIngredient10}</span>`;
  if (
    res.meals[0].strIngredient11 != "" &&
    res.meals[0].strIngredient11 != " " &&
    res.meals[0].strMeasure11 != "" &&
    res.meals[0].newstrMeasure11 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure11} ${res.meals[0].strIngredient11}</span>`;
  if (
    res.meals[0].strIngredient12 != "" &&
    res.meals[0].strIngredient12 != " " &&
    res.meals[0].strMeasure12 != "" &&
    res.meals[0].newstrMeasure12 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure12} ${res.meals[0].strIngredient12}</span>`;
  if (
    res.meals[0].strIngredient13 != "" &&
    res.meals[0].strIngredient13 != " " &&
    res.meals[0].strMeasure13 != "" &&
    res.meals[0].newstrMeasure13 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure13} ${res.meals[0].strIngredient13}</span>`;
  if (
    res.meals[0].strIngredient14 != "" &&
    res.meals[0].strIngredient14 != " " &&
    res.meals[0].strMeasure14 != "" &&
    res.meals[0].newstrMeasure14 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure14} ${res.meals[0].strIngredient14}</span>`;
  if (
    res.meals[0].strIngredient15 != "" &&
    res.meals[0].strIngredient15 != " " &&
    res.meals[0].strMeasure15 != "" &&
    res.meals[0].newstrMeasure15 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure15} ${res.meals[0].strIngredient15}</span>`;
  if (
    res.meals[0].strIngredient16 != "" &&
    res.meals[0].strIngredient16 != " " &&
    res.meals[0].strMeasure16 != "" &&
    res.meals[0].newstrMeasure16 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure16} ${res.meals[0].strIngredient16}</span>`;
  if (
    res.meals[0].strIngredient17 != "" &&
    res.meals[0].strIngredient17 != " " &&
    res.meals[0].strMeasure17 != "" &&
    res.meals[0].newstrMeasure17 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure17} ${res.meals[0].strIngredient17}</span>`;
  if (
    res.meals[0].strIngredient18 != "" &&
    res.meals[0].strIngredient18 != " " &&
    res.meals[0].strMeasure18 != "" &&
    res.meals[0].newstrMeasure18 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure18} ${res.meals[0].strIngredient18}</span>`;
  if (
    res.meals[0].strIngredient19 != "" &&
    res.meals[0].strIngredient19 != " " &&
    res.meals[0].strMeasure19 != "" &&
    res.meals[0].newstrMeasure19 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure19} ${res.meals[0].strIngredient19}</span>`;
  if (
    res.meals[0].strIngredient20 != "" &&
    res.meals[0].strIngredient20 != " " &&
    res.meals[0].strMeasure20 != "" &&
    res.meals[0].newstrMeasure20 != " "
  )
    cartona += `<span>${res.meals[0].strMeasure20} ${res.meals[0].strIngredient20}</span>`;

  document.querySelector("#customClick").innerHTML = `<div class="container">
  <div class="row text-white">
    <div class="col-md-4">
      <img
        src="${res.meals[0].strMealThumb}"
        alt=""
        class="w-100 rounded-3"
      />
      <h2 class="my-3">${res.meals[0].strMeal}</h2>
    </div>
    <div class="col-md-8">
      <h3>Instructions</h3>
      <p>
        ${res.meals[0].strInstructions}
      </p>
      <div>
        <h3>Area : ${res.meals[0].strArea}</h3>
        <h3>Category : ${res.meals[0].strCategory}</h3>

        <h3>Recipes :</h3>
        <div class="spans">
        
          ${cartona}
        </div>
        <h3 class="my-3">tags :</h3>
        <div class="d-flex gap-2">
        ${cartonaTags}
        </div>
        <div class="buttons my-4 d-flex column-gap-2">
          <button class="btn btn-success" id=${res.meals[0].strSource}>Source</button>
          <button class="btn btn-danger"  id=${res.meals[0].strYoutube} >Youtube</button>
        </div>
      </div>
    </div>
  </div>
</div>`;

  document.querySelectorAll("#customClick .btn-success").forEach((b) => {
    b.addEventListener("click", () => {
      window.open(b.getAttribute("id"), "_blank");
    });
  });
  document.querySelectorAll("#customClick .btn-danger").forEach((b) => {
    b.addEventListener("click", () => {
      window.open(b.getAttribute("id"), "_blank");
    });
  });
  secs.forEach((s) => {
    s.classList.add("d-none");
  });
  document.querySelector("#customClick").classList.remove("d-none");
  $("aside").animate({ "margin-left": `${-wid}` }, 400);
  $(".links").removeClass("animate__animated animate__bounceInUp");
  $("section").animate({ "margin-left": `0px` }, 400);
  $(".open-close-icon").removeClass("fa-x");

  flag = false;
}

async function categoryClick(strCategory) {
  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
  );
  let res = await api.json();
  let total = ``;
  for (let i = 0; i < res.meals.length; i++) {
    total += `<div class = "imgContainer wow bounceInLeft CatClick">
  <div class="overlay">
  <h4>${res.meals[i].strMeal}</h4>
  </div>
  <img src = ${res.meals[i].strMealThumb} class = "w-100 rounded" />
  </div>`;
  }
  document.getElementById("categoryClick").innerHTML = total;
  let arr = document.querySelectorAll(".CatClick");
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", () => {
      randomMealsClick(res.meals[i].idMeal);
    });
  }
  secs.forEach((s) => {
    s.classList.add("d-none");
  });
  document.querySelector("#categoryClick").classList.remove("d-none");
  $("aside").animate({ "margin-left": `${-wid}` }, 400);
  $(".links").removeClass("animate__animated animate__bounceInUp");
  $("section").animate({ "margin-left": `0px` }, 400);
  $(".open-close-icon").removeClass("fa-x");

  flag = false;
}

async function areaClick(strArea) {
  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`
  );
  let res = await api.json();
  let total = ``;
  for (let i = 0; i < res.meals.length; i++) {
    total += `<div class = "imgContainer wow bounceInLeft areClick">
  <div class="overlay">
  <h4>${res.meals[i].strMeal}</h4>
  </div>
  <img src = ${res.meals[i].strMealThumb} class = "w-100 rounded" />
  </div>`;
  }
  document.getElementById("areaClick").innerHTML = total;
  let arr = document.querySelectorAll(".areClick");
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", () => {
      randomMealsClick(res.meals[i].idMeal);
    });
  }
  secs.forEach((s) => {
    s.classList.add("d-none");
  });
  document.querySelector("#areaClick").classList.remove("d-none");
  $("aside").animate({ "margin-left": `${-wid}` }, 400);
  $(".links").removeClass("animate__animated animate__bounceInUp");
  $("section").animate({ "margin-left": `0px` }, 400);
  $(".open-close-icon").removeClass("fa-x");

  flag = false;
}

async function ingredientClick(strIngredient) {
  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${strIngredient}`
  );
  let res = await api.json();
  let total = ``;
  for (let i = 0; i < res.meals.length; i++) {
    total += `<div class = "imgContainer wow bounceInLeft ingClick">
  <div class="overlay">
  <h4>${res.meals[i].strMeal}</h4>
  </div>
  <img src = ${res.meals[i].strMealThumb} class = "w-100 rounded" />
  </div>`;
  }
  document.getElementById("ingredientClick").innerHTML = total;
  let arr = document.querySelectorAll(".ingClick");
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", () => {
      randomMealsClick(res.meals[i].idMeal);
    });
  }
  secs.forEach((s) => {
    s.classList.add("d-none");
  });
  document.querySelector("#ingredientClick").classList.remove("d-none");
  $("aside").animate({ "margin-left": `${-wid}` }, 400);
  $(".links").removeClass("animate__animated animate__bounceInUp");
  $("section").animate({ "margin-left": `0px` }, 400);
  $(".open-close-icon").removeClass("fa-x");

  flag = false;
}

function validation() {
  let regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let regexPhone = /^01[0125][0-9]{8}$/;
  let regexAge = /^\S[0-9]{0,3}$/;
  let regexPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const inputName = document.getElementById("inputName");
  const inputEmail = document.getElementById("inputEmail");
  const inputPhone = document.getElementById("inputPhone");
  const inputAge = document.getElementById("inputAge");
  const inputPass = document.getElementById("inputPass");
  const inputRepeatPass = document.getElementById("inputRepeatPass");
  const alertName = document.querySelector(".alertName");
  const alertEmail = document.querySelector(".alertEmail");
  const alertPhone = document.querySelector(".alertPhone");
  const alertAge = document.querySelector(".alertAge");
  const alertPass = document.querySelector(".alertPass");
  const alertRepeatPass = document.querySelector(".alertRepeatPass");
  const submitButton = document.getElementById("submitButton");

  let valN = 0,
    valE = 0,
    valP = 0,
    valA = 0,
    valPass = 0,
    valRepass = 0;

  inputName.addEventListener("input", () => {
    if (regexName.test(inputName.value)) {
      $(".alertName").animate({ opacity: "0" }, 500);
      valN = 1;
    } else {
      alertName.innerHTML = "Please Enter Valid Name";
      $(".alertName").animate({ opacity: "1" }, 500);
      setTimeout(() => {
        $(".alertName").animate({ opacity: "0" }, 500);
      }, 5000);
      valN = 0;
    }
    check();
  });

  inputEmail.addEventListener("input", () => {
    if (regexEmail.test(inputEmail.value)) {
      $(".alertEmail").animate({ opacity: "0" }, 500);
      valE = 1;
    } else {
      alertEmail.innerHTML = "Please Enter Valid Email";
      $(".alertEmail").animate({ opacity: "1" }, 500);
      setTimeout(() => {
        $(".alertEmail").animate({ opacity: "0" }, 500);
      }, 5000);
      valE = 0;
    }
    check();
  });

  inputPhone.addEventListener("input", () => {
    if (regexPhone.test(inputPhone.value)) {
      $(".alertPhone").animate({ opacity: "0" }, 500);
      valP = 1;
    } else {
      $(".alertPhone").animate({ opacity: "1" }, 500);
      alertPhone.innerHTML = "Please Enter Valid Phone Number";
      setTimeout(() => {
        $(".alertPhone").animate({ opacity: "0" }, 500);
      }, 5000);
      valP = 0;
    }
    check();
  });

  inputAge.addEventListener("input", () => {
    if (regexAge.test(inputAge.value)) {
      $(".alertAge").animate({ opacity: "0" }, 500);
      valA = 1;
    } else {
      $(".alertAge").animate({ opacity: "1" }, 500);
      alertAge.innerHTML = "Please Enter Valid Age";
      setTimeout(() => {
        $(".alertAge").animate({ opacity: "0" }, 500);
      }, 5000);
      valA = 0;
    }
    check();
  });

  inputPass.addEventListener("input", () => {
    if (regexPass.test(inputPass.value)) {
      $(".alertPass").animate({ opacity: "0" }, 500);
      valPass = 1;
    } else {
      $(".alertPass").animate({ opacity: "1" }, 500);
      alertPass.innerHTML = "Please Enter Valid Password";
      setTimeout(() => {
        $(".alertPass").animate({ opacity: "0" }, 500);
      }, 5000);
      valPass = 0;
    }
    check();
  });

  inputRepeatPass.addEventListener("input", () => {
    if (
      inputRepeatPass.value == inputPass.value &&
      regexPass.test(inputPass.value)
    ) {
      $(".alertRepeatPass").animate({ opacity: "0" }, 500);
      valRepass = 1;
    } else {
      $(".alertRepeatPass").animate({ opacity: "1" }, 500);
      alertRepeatPass.innerHTML = "Password Dosent Match";
      setTimeout(() => {
        $(".alertRepeatPass").animate({ opacity: "0" }, 500);
      }, 5000);
      valRepass = 0;
    }
    check();
  });
  function check() {
    if (valN && valE && valP && valA && valPass && valRepass) {
      $("#submitButton").removeAttr("disabled");
    } else {
      $("#submitButton").attr("disabled", "disabled");
    }
  }
}

getRandomMeals();

$("#Categories").click(getCategories);
$("#Area").click(getAreas);
$("#Ingredients").click(getIngredients);
$("#Search").click(getsearch);
$("#Contact").click(getContact);

validation();
