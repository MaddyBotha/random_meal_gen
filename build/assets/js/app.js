const getMeal=document.getElementById("get_meal");console.log(getMeal);const mealContainer=document.getElementById("meal");console.log(mealContainer),getMeal.addEventListener("click",()=>{fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(e=>e.json()).then(e=>{createMeal(e.meals[0])}).catch(e=>{console.warn(e)})});const createMeal=e=>{const t=[];for(let n=1;n<=20&&e[`strIngredient${n}`];n++)t.push(`${e[`strIngredient${n}`]} - ${e[`strMeasure${n}`]}`);const n=`\n<div class="grid">\n <div class="feature-card">\n  <img src="${e.strMealThumb}" alt="Meal Image">\n\n \t${e.strCategory?`<p class="big"><strong>Category:</strong> ${e.strCategory}</p>`:""}\n\t\t${e.strArea?`<p class="big"><strong>Area:</strong> ${e.strArea}</p>`:""}\n\t\t${e.strTags?`<p class="big"><strong>Tags:</strong> ${e.strTags.split(",").join(", ")}</p>`:""}\n\n  <h5 class="big">Ingredients: </h5>\n   <ul>\n    ${t.map(e=>`<li>${e}</li>`).join("")}\n  <h4>${e.strMeal}</h4>\n  <p>${e.strInstructions}</p>\n   </ul>\n </div>\n${e.strYoutube?`\n</div>\n<div>\n <div class="feature-card flex-video">\n  <iframe src="https://www.youtube.com/embed/${e.strYoutube.slice(-11)}" frameborder="0"></iframe>\n </div>\n</div>`:""} `;mealContainer.innerHTML=n},floating_btn=document.querySelector(".floating-btn"),close_btn=document.querySelector(".close-btn"),social_panel_container=document.querySelector(".social-panel-container");floating_btn.addEventListener("click",()=>{social_panel_container.classList.toggle("visible")}),close_btn.addEventListener("click",()=>{social_panel_container.classList.remove("visible")});