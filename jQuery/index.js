// The jquery is a library we need to import it to our project by adding a script linking to that version
//It should be before our script or it will throw error

// document.querySelector -> $() or jQuery()
// style -> css(property,value) if 1 else css({p1:v1, p2:v2})
// innerText -> text()
// innerHtml -> html
// classList.add/remove -> addClass or removeClass
//. addAttribute -> attr() to add value attr(property, value)

// addEventListener("type", "callback")  -> 2 ways, 1) .on("type like click", function (){}),
//  direct method 2) .click(function (){}) or keypress()
//no need to have a for loop or anything it fully based on selector, if it has more elements than applies to all



$("h1").text("Say Hi!!");
setTimeout(function (){
    $("h1").html("<em>Hello Anna</em>");
    setTimeout(function (){
        $("h1").addClass("bigger-font addMargin");
        setTimeout(function (){
            $("h1").removeClass("bigger-font").on("mouseover", function (){
                $("h1").css("color", "red");
            });
        }, 1000);
    }, 1000);
}, 2000)

setTimeout(function (){
    $("button").css("background-color", "green");
    $("button").css({
        "color" : "red",
        "font-size" : "2rem",
        "font-family": "'Courier New', Courier, monospace",

    });
}, 5000)

setTimeout(function() {
    $("a").text("Google").css("font-size","2rem");
    $("a").attr("href", "http://www.google.com");
},7000)

$("button").click(function (){
    $("h1").css("color", "purple");
})

//to add the event key to the h1
// $("input").on("keydown", function (e){
//     $("h1").text(e.key);
// })

$("input").on("keydown", function(e){
    $("h1").text($("input").val());
})

