var car =document.getElementById("car")
var bike = document.getElementById("bike")
var health = document.getElementById("health")
var life = document.getElementById("life")
var travel = document.getElementById("travel")
//banner

var carBanner = document.querySelector(".p-car-service-banner")
var bikeBanner =document.querySelector(".p-bike-service-banner")
var healthBanner = document.querySelector(".p-health-service-banner")
var lifeBanner = document.querySelector(".p-life-service-banner")
var travelBanner = document.querySelector(".p-travel-service-banner")


window.onload = function () {
    car.classList.add("active")
    //banner
    carBanner.classList.remove("d-none")
}
bike.addEventListener("click", function (event) {
    car.classList.remove("active")
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.add("active")
    //banner
    carBanner.classList.add("d-none")
    bikeBanner.classList.remove("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")

})
car.addEventListener("click", function (event) {
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    car.classList.add("active")
    //banner
    carBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})
health.addEventListener("click", function (event) {
    car.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    health.classList.add("active")

    //banner
    healthBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})
life.addEventListener("click", function (event) {
    car.classList.remove("active")
    health.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    life.classList.add("active")

    //banner
    lifeBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})
travel.addEventListener("click", function (event) {
    car.classList.remove("active")
    health.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    life.classList.remove("active")
    travel.classList.add("active")

    //banner
    travelBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
})