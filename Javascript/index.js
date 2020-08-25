$(".nav-click-me").on("click", function () {

    alert("I do coding, so here is one of the things I've coded;")
    alert("I call it my task app, so you can keep track of all your tasks!")

})

$(".credit").on("click", function () {

    alert("This website was specialy made...")
    alert("...by Bachtiar's own son. So check his website out!")

})

$(".span-description-eagan").on("mouseover", function () {

    alert("Who is Eagan you ask? He is a talentful develop-")
    alert("Elaine: Just say your his child!")
    alert("Fine! I'm his son.")

})

$(".span-description-eagan").on("click", function () {

    alert("Who is Eagan you ask?")
    alert("He is a talentful develop-")
    alert("Elaine: Just say your his child!")
    alert("Fine!")
    alert("I'm his son.")

})

$(".span-description-elaine").on("mouseover", whoIsElaine)

$(".span-description-elaine").on("click", whoIsElaine)

function whoIsElaine() {

    alert("Who is Elaine you ask?")
    alert("She's Bachtiar's Daughter")

}
