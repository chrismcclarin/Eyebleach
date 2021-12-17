//variables
const dogURL = "https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1";
const catURL = "https://cat-fact.herokuapp.com/facts/random";
const catPicURL = "https://aws.random.cat/meow";
const dogPicURL = "https://random.dog/woof.json";

//listeners
$('html').on('click', randURL);

//functions
function randURL(rng){
    $('video').remove();
    let rngNum = Math.floor(Math.random() * 101)
    if (rngNum >=50){
        $.ajax(dogURL).then(function(dogFact){
            $('div').html(`<p>${dogFact.text}</p>`);
        });
        $.ajax(dogPicURL).then(function(dogPic){
            let picURL = dogPic.url
            if (picURL.slice(-3) === "mp4"){
                $('main').html(`<video autoplay muted loop>
                <source src="${dogPic.url}" type="video/mp4">
              </video>`)
                
            } else {
                $('body').css(`background-image`, `url("${dogPic.url}")`);
            }
        });
    } else if (rngNum < 50){
        $.ajax(catURL).then(function(catFact){
            $('div').html(`<p>${catFact.text}</p>`);
        });
        $.ajax(catPicURL).then(function(catPic){
            $('body').css(`background-image`, `url("${catPic.file}")`);
        });
    }
}
