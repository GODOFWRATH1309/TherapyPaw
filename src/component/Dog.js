import React, { Component } from "react";
import DogList from "./DogList";


export class Dog extends Component {
    dogs = [
        {
            source: {
                id: "golden retriever",
                name: "Jhonny",
            },
            author: "Golden retriever ",
            title: "Megan",
            description:
                "Goldens are one of the best family pets to have, they are the lowest ranking barkers. So, no complaints from the neighbors about the noise level. They are one of the freshest smelling dogs as they do not suffer from bad breath, which is a common problem among dogs usually. They have been given an especially soft mouth that helps them to even hold a raw egg without breaking it, perfect to slightly hold the hunt in their mouth.",
            urlToImage:
                "https://th.bing.com/th/id/OIP.-XYeFswvtJZihDG8W1glgQHaEo?w=276&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "Golden retriever",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "Labrador Retriever black",
                name: "Mia",
            },
            author: "Labrador Retriever black ",
            title: "Mia",
            description:
                "It will not be wrong to say that Labrador retriever is one of the most loved breeds around the world. You would have been a part of the life journey of this adorable pooch in Marley and Me.There is no escaping the coy eyes and the innocent look of this breed. This is one of the most intelligent breed.The breed is easily trainable and makes a perfect family dog. Our aim here will be to help you understand them better and make it a lifetime experience for you.This is a big but extremely friendly dog, it at times may not be kind to strangers though. Labrador Retrievers have come to known as Lab fondly over time.It is one of the most common options for a breed around the world when you are considering keeping a pet. They are extremely fond of children and love to make people around them happy. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.iuFxI6nCSlDtWrMY7WlO0wHaE7?w=240&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "Labrador Retriever black",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "golden retriever",
                name: "Jhonny",
            },
            author: "Golden retriever ",
            title: "Jhonny",
            description:
                "Goldens are one of the best family pets to have, they are the lowest ranking barkers. So, no complaints from the neighbors about the noise level. They are one of the freshest smelling dogs as they do not suffer from bad breath, which is a common problem among dogs usually. They have been given an especially soft mouth that helps them to even hold a raw egg without breaking it, perfect to slightly hold the hunt in their mouth.",
            urlToImage:
                "https://th.bing.com/th/id/OIP.p2MvDlWJWQo-4fQ5n_ivwQHaE8?w=296&h=197&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "Golden retriever",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },

        {
            source: {
                id: "Labrador Retriever white",
                name: "Sunny",
            },
            author: "Labrador Retriever white ",
            title: "Ban",
            description:
                "The Labrador Retriever is a very active breed and loves to please their family members. They adapt wonderfully to the cold environment but do well in summer as well.This is a very versatile breed, if you live near any water body then this breed will love to play in water. They were bred to retrieve nets from the ice cold water of the Labrador Sea and they have retained their penchant for the cold water.The labs adapts well to the apartment life as well but remember that he or she will need a lot of exercise. They love to run, if you have a lab at home then you will be well aversed to how fast he or she gains weight.Then this may a result of lack of exercise. They are sprinters in their rights if you remember.  ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.SHiEXvt8iOAbQtqNNEzfDQHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "Labrador Retriever white",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "Labrador Retriever black",
                name: "Evanka",
            },
            author: "Labrador Retriever black ",
            title: "Evanka",
            description:
                "It will not be wrong to say that Labrador retriever is one of the most loved breeds around the world. You would have been a part of the life journey of this adorable pooch in Marley and Me.There is no escaping the coy eyes and the innocent look of this breed. This is one of the most intelligent breed.The breed is easily trainable and makes a perfect family dog. Our aim here will be to help you understand them better and make it a lifetime experience for you.This is a big but extremely friendly dog, it at times may not be kind to strangers though. Labrador Retrievers have come to known as Lab fondly over time.It is one of the most common options for a breed around the world when you are considering keeping a pet. They are extremely fond of children and love to make people around them happy. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.GAFbZZAZXoj1M1p-RGUlCgHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "Labrador Retriever black",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "Labrador Retriever white",
                name: "Sunny",
            },
            author: "Labrador Retriever white ",
            title: "Sunny",
            description:
                "The Labrador Retriever is a very active breed and loves to please their family members. They adapt wonderfully to the cold environment but do well in summer as well.This is a very versatile breed, if you live near any water body then this breed will love to play in water. They were bred to retrieve nets from the ice cold water of the Labrador Sea and they have retained their penchant for the cold water.The labs adapts well to the apartment life as well but remember that he or she will need a lot of exercise. They love to run, if you have a lab at home then you will be well aversed to how fast he or she gains weight.Then this may a result of lack of exercise. They are sprinters in their rights if you remember. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.0IWUmi4aoLgTQ2z6gkbEYgHaJ4?w=148&h=196&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "Labrador Retriever white",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },

        {
            source: {
                id: "Labrador Retriever white",
                name: "Sunny",
            },
            author: "Labrador Retriever white ",
            title: "Escanor",
            description:
                "The Labrador Retriever is a very active breed and loves to please their family members. They adapt wonderfully to the cold environment but do well in summer as well.This is a very versatile breed, if you live near any water body then this breed will love to play in water. They were bred to retrieve nets from the ice cold water of the Labrador Sea and they have retained their penchant for the cold water.The labs adapts well to the apartment life as well but remember that he or she will need a lot of exercise. They love to run, if you have a lab at home then you will be well aversed to how fast he or she gains weight.Then this may a result of lack of exercise. They are sprinters in their rights if you remember. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.vJrW4TLmHJsUoU0HNzecuQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "Labrador Retriever white",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },

        {
            source: {
                id: "german shepherd",
                name: "Alex",
            },
            author: "German shepherd ",
            title: "Alex",
            description:
                "The German Shepherd needs regular and heavy exercise. This is a working dog so the exercise requirement is high. They love to play and it is one of best breeds for interactive games and exercises whether in the park or within your apartment. They can adapt to all kind of weather but severe heat can be a dampening. Though it can survive cold temperature and snow with ease because of its double layered coat.We have mentioned it many times that German Shepherd is a versatile dog and why should we not. They are not only intelligent but can be easily adapt to different lifestyles. A very athletic dog this does best with a yard but they can adapt to apartment living as well. The only thing you have to keep in mind is that they have to be exercised regularly. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.Rjrfqnn1H5KtCBgjS6YqiAHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "german shepherd",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "pug",
                name: "Mila",
            },
            author: "Pug ",
            title: "Mila",
            description:
                "pugs are the jesters of the canine world. Loving, intelligent and naughty, the pug makes for a great first-time dog. They do very well with children and other animals alike, especially if socialized from a young age. They’re gluttons for love and easy to groom, always ready with an antic that will make you laugh. It’s no wonder that they continue to be amongst the most popular breeds, many centuries after they first came into existence.Pugs are homely dogs, happy to be indoors and catch several loud, snoring snoozes as long as they are walked often. Don’t expect your pug to be a hunter or a retriever; these dogs are lap sitters, entertainers and snoozers! They do really well in homes with small children as well as other animals, especially if socialised at a young age. They make great first-time pets, although they struggle in extremes of hot or cold temperatures. They’re not great outdoor dogs because of this, so make sure you consider a pug companion only if you like an indoor dog. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.cEUMV1BeFcCp9BR6zTJlSgHaFV?w=248&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "pug",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "german shepherd",
                name: "Alex",
            },
            author: "German shepherd ",
            title: "Naruto",
            description:
                "The German Shepherd needs regular and heavy exercise. This is a working dog so the exercise requirement is high. They love to play and it is one of best breeds for interactive games and exercises whether in the park or within your apartment. They can adapt to all kind of weather but severe heat can be a dampening. Though it can survive cold temperature and snow with ease because of its double layered coat.We have mentioned it many times that German Shepherd is a versatile dog and why should we not. They are not only intelligent but can be easily adapt to different lifestyles. A very athletic dog this does best with a yard but they can adapt to apartment living as well. The only thing you have to keep in mind is that they have to be exercised regularly.  ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.iwJe03s9XBpOuzsjdmzPhgHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "german shepherd",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "Labrador Retriever black",
                name: "Mia",
            },
            author: "Labrador Retriever black ",
            title: "Meliodas",
            description:
                " It will not be wrong to say that Labrador retriever is one of the most loved breeds around the world. You would have been a part of the life journey of this adorable pooch in Marley and Me.There is no escaping the coy eyes and the innocent look of this breed. This is one of the most intelligent breed.The breed is easily trainable and makes a perfect family dog. Our aim here will be to help you understand them better and make it a lifetime experience for you.This is a big but extremely friendly dog, it at times may not be kind to strangers though. Labrador Retrievers have come to known as Lab fondly over time.It is one of the most common options for a breed around the world when you are considering keeping a pet. They are extremely fond of children and love to make people around them happy.",
            urlToImage:
                "https://th.bing.com/th/id/OIP.oaWPwkUUmzIMMvtEqwSFAgHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "Labrador Retriever black",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },

        {
            source: {
                id: "pug",
                name: "Mila",
            },
            author: "Pug ",
            title: "Goku",
            description:
                " pugs are the jesters of the canine world. Loving, intelligent and naughty, the pug makes for a great first-time dog. They do very well with children and other animals alike, especially if socialized from a young age. They’re gluttons for love and easy to groom, always ready with an antic that will make you laugh. It’s no wonder that they continue to be amongst the most popular breeds, many centuries after they first came into existence.Pugs are homely dogs, happy to be indoors and catch several loud, snoring snoozes as long as they are walked often. Don’t expect your pug to be a hunter or a retriever; these dogs are lap sitters, entertainers and snoozers! They do really well in homes with small children as well as other animals, especially if socialised at a young age. They make great first-time pets, although they struggle in extremes of hot or cold temperatures. They’re not great outdoor dogs because of this, so make sure you consider a pug companion only if you like an indoor Dog. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.y2dR1yEH4CmcuiniE3S2rwHaFf?w=229&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "pug",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },

        {
            source: {
                id: "pomerian white",
                name: "Akira",
            },
            author: "Pomerian white ",
            title: "Akira",
            description:
                "Pomeranians are very adaptable and will be happy in an apartment as well as a house with a yard. Poms love company and don’t do very well as outdoor dogs, bereft of the company of humans. However small your house, ensure that your Pom gets frequent short walks and plenty of playtime. They’re very intelligent, so they get easily bored and destructive thereafter. If you have small kids, ensure that all play between them and the Pom is supervised. Young children can unintentionally harm this breed, because they’re just so tiny and delicate. Poms don’t do very well in either very hot or very cold climates, so make sure you keep them adequately warm in the winter and cool in the summer. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.kwn3S2y1IZHAKhRaOKJiJgHaFI?w=281&h=195&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "pomerian white",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "shiba inu",
                name: "Abella",
            },
            author: "Shiba inu ",
            title: "Abella",
            description:
                "The Shiba Inu is known for having an independent spirit. They can be headstrong, and some can even be domineering. They are often reserved with strangers and may be aggressive with unknown dogs or other pets. These traits make them a better choice for a household with experienced dog people rather than first time pet parents. Early training and socialisation are very important, and this should continue into adulthood. In saying that, they can make exceedingly loyal and affectionate companions for the right family. Energetic and lively, they will thrive on lots play and a good run around in a fenced space in combination with daily walks. The Shiba Inu is said to be quite good with children but is better suited to a household with older children who can treat them gently. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.4WLev8CNMlKcLNStiaAE9QHaF7?w=266&h=213&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "shiba inu",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "pomerian white",
                name: "Akira",
            },
            author: "Pomerian white ",
            title: "Killua",
            description:
                "Pomeranians are very adaptable and will be happy in an apartment as well as a house with a yard. Poms love company and don’t do very well as outdoor dogs, bereft of the company of humans. However small your house, ensure that your Pom gets frequent short walks and plenty of playtime. They’re very intelligent, so they get easily bored and destructive thereafter. If you have small kids, ensure that all play between them and the Pom is supervised. Young children can unintentionally harm this breed, because they’re just so tiny and delicate. Poms don’t do very well in either very hot or very cold climates, so make sure you keep them adequately warm in the winter and cool in the summer. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.g6cT-t2ewO2k4uotuIORrgHaFK?w=256&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "pomerian white",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "german shepherd",
                name: "Alex",
            },
            author: "German shepherd ",
            title: "Light",
            description:
                "The German Shepherd needs regular and heavy exercise. This is a working dog so the exercise requirement is high. They love to play and it is one of best breeds for interactive games and exercises whether in the park or within your apartment. They can adapt to all kind of weather but severe heat can be a dampening. Though it can survive cold temperature and snow with ease because of its double layered coat.We have mentioned it many times that German Shepherd is a versatile dog and why should we not. They are not only intelligent but can be easily adapt to different lifestyles. A very athletic dog this does best with a yard but they can adapt to apartment living as well. The only thing you have to keep in mind is that they have to be exercised regularly.  ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.aKN8DtSuovRn8GRyGmvhjwHaE8?w=296&h=197&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "german shepherd",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "pomerian white",
                name: "Akira",
            },
            author: "Pomerian white ",
            title: "Jojo",
            description:
                "Pomeranians are very adaptable and will be happy in an apartment as well as a house with a yard. Poms love company and don’t do very well as outdoor dogs, bereft of the company of humans. However small your house, ensure that your Pom gets frequent short walks and plenty of playtime. They’re very intelligent, so they get easily bored and destructive thereafter. If you have small kids, ensure that all play between them and the Pom is supervised. Young children can unintentionally harm this breed, because they’re just so tiny and delicate. Poms don’t do very well in either very hot or very cold climates, so make sure you keep them adequately warm in the winter and cool in the summer. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.0G80ZI7fQ3aIvZCkL-1quQHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "pomerian white",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },

        {
            source: {
                id: "shiba inu",
                name: "Luffy",
            },
            author: "Shiba inu ",
            title: "Luffy",
            description:
                "The Shiba Inu is known for having an independent spirit. They can be headstrong, and some can even be domineering. They are often reserved with strangers and may be aggressive with unknown dogs or other pets. These traits make them a better choice for a household with experienced dog people rather than first time pet parents. Early training and socialisation are very important, and this should continue into adulthood. In saying that, they can make exceedingly loyal and affectionate companions for the right family. Energetic and lively, they will thrive on lots play and a good run around in a fenced space in combination with daily walks. The Shiba Inu is said to be quite good with children but is better suited to a household with older children who can treat them gently. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.n--go37G6AA9rR7y58NnEgHaD0?w=348&h=179&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "shiba inu",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "yorkie terrier",
                name: "Riley",
            },
            author: "Yorkie terrier ",
            title: "Riley",
            description:
                "Yorkies are perfect dogs for apartment living. They are an active breed, but don’t necessarily need a large yard to work off their energy. A brisk walk in the park or a half hour of playtime will suffice. Yorkies are quite sensitive to cold and don’t do well in very cold climates. They thrive in warmer places, and do well to stay indoors more than they do outdoors. While they are yappy and will alert you to any unusual sounds and intruders, their small size doesn’t make them great guard dogs or watchdogs. Yorkies are big on love and companionship and will not do well as outdoor dogs at all. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.cUHME6lfw-MYP8pVHlcP-QHaDi?w=316&h=167&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "yorkie terrier",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "pug",
                name: "Kakashi",
            },
            author: "Pug ",
            title: "Saitama",
            description:
                "pugs are the jesters of the canine world. Loving, intelligent and naughty, the pug makes for a great first-time dog. They do very well with children and other animals alike, especially if socialized from a young age. They’re gluttons for love and easy to groom, always ready with an antic that will make you laugh. It’s no wonder that they continue to be amongst the most popular breeds, many centuries after they first came into existence.Pugs are homely dogs, happy to be indoors and catch several loud, snoring snoozes as long as they are walked often. Don’t expect your pug to be a hunter or a retriever; these dogs are lap sitters, entertainers and snoozers! They do really well in homes with small children as well as other animals, especially if socialised at a young age. They make great first-time pets, although they struggle in extremes of hot or cold temperatures. They’re not great outdoor dogs because of this, so make sure you consider a pug companion only if you like an indoor dog.  ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.QSunO4HRciRPS585lufcEQHaE8?w=284&h=189&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "pug",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "shiba inu",
                name: "Abella",
            },
            author: "Shiba inu ",
            title: "Edward",
            description:
                "The Shiba Inu is known for having an independent spirit. They can be headstrong, and some can even be domineering. They are often reserved with strangers and may be aggressive with unknown dogs or other pets. These traits make them a better choice for a household with experienced dog people rather than first time pet parents. Early training and socialisation are very important, and this should continue into adulthood. In saying that, they can make exceedingly loyal and affectionate companions for the right family. Energetic and lively, they will thrive on lots play and a good run around in a fenced space in combination with daily walks. The Shiba Inu is said to be quite good with children but is better suited to a household with older children who can treat them gently. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.Hs18SKa8K9IwAJsHPG742AHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "shiba inu",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "siberian husk",
                name: "Daniel",
            },
            author: "Siberian husk ",
            title: "Daniel",
            description:
                "The Siberian Husky can make the perfect pet for families with children, provided the adults are experienced dog people and not first-time dog families. Huskies are affectionate and even protective towards children and don’t have a tendency to be moody around them.However, as in the case of all dogs, early socialisation with young children and other animals helps them cope more easily. Huskies are essentially a pack breed, so they tend to do very well with other animals in the house as well.Smaller animals like hamsters, guinea pigs and birds might be in danger though, because Huskies were bred to hunt in snow covered mountains where food was scarce. A much smaller animal may be seen as prey rather than family! Huskies were not bred to spend hours in confined places.They need plenty of time in the outdoors and do very well in houses with large yards, provided the yard is firmly fenced off from the road. They were also bred to bear extreme cold, so they don’t tend to do well in warm climates. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.2yU0R_xrEIkStbNA-bSaigHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "siberian husk",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "collie",
                name: "Muffin",
            },
            author: "Collie ",
            title: "Muffin",
            description:
                "Collies do not do well in an apartment as they are extremely active and need large spaces such as farms or gardens to train, work and expend his energy. Border Collies do best when they have a job and their herding and nipping instinct is directed in the right direction.   For a family that can provide ample training and challenging tasks along with work to a Border Collie will definitely be able to enjoy the intelligent and tractable nature that makes them so easy to train. Right socialisation with children and other pets will have to begin from early age to help the pup adapt to their living conditions. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.p1hleTuPsQfPpEAdL4xeAAHaE8?w=241&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "collie",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "siberian husk",
                name: "Daniel",
            },
            author: "Siberian husk ",
            title: "Tanjiro",
            description:
                "The Siberian Husky can make the perfect pet for families with children, provided the adults are experienced dog people and not first-time dog families. Huskies are affectionate and even protective towards children and don’t have a tendency to be moody around them.However, as in the case of all dogs, early socialisation with young children and other animals helps them cope more easily. Huskies are essentially a pack breed, so they tend to do very well with other animals in the house as well.Smaller animals like hamsters, guinea pigs and birds might be in danger though, because Huskies were bred to hunt in snow covered mountains where food was scarce. A much smaller animal may be seen as prey rather than family! Huskies were not bred to spend hours in confined places.They need plenty of time in the outdoors and do very well in houses with large yards, provided the yard is firmly fenced off from the road. They were also bred to bear extreme cold, so they don’t tend to do well in warm climates. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.Cd7n4WasdwDqm2gokdr7nAHaNK?w=186&h=331&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "siberian husk",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },

        {
            source: {
                id: "yorkie terrier",
                name: "Komi",
            },
            author: "Yorkie terrier ",
            title: "Komi",
            description:
                "Yorkies are perfect dogs for apartment living. They are an active breed, but don’t necessarily need a large yard to work off their energy. A brisk walk in the park or a half hour of playtime will suffice. Yorkies are quite sensitive to cold and don’t do well in very cold climates. They thrive in warmer places, and do well to stay indoors more than they do outdoors. While they are yappy and will alert you to any unusual sounds and intruders, their small size doesn’t make them great guard dogs or watchdogs. Yorkies are big on love and companionship and will not do well as outdoor dogs at all. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.AsF92Uh-uAcwcuF2V3e8mQHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "yorkie terrier",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "poodle",
                name: "Jasmine",
            },
            author: "Poodle ",
            title: "Midoriya",
            description:
                "The standard Poodle is an active breed and will need its share of walks and run to retain its health. Though, you have to remember that they are pretty inactive indoors. They are adaptable to apartment and condominium as well. The small yard will be more than enough for this breed.Poodles are excellent companions for all children; they have an even temperament and are not known to snap. All said it is advisable to socialize the children with the pet early to ensure that there are not any unpleasant circumstances later in life with the children.They are good with other pets in the house provided you acclimatize them with each other early. If you are introducing another pet to the family a little later then they might take time to accept a newcomer into the family and at times can even need special training for the same purpose. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.OUxPPZ8wrzYZVubzOr7UPAHaGy?w=216&h=198&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "poodle",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "yorkie terrier",
                name: "Riley",
            },
            author: "Yorkie terrier ",
            title: "Iruma",
            description:
                "Yorkies are perfect dogs for apartment living. They are an active breed, but don’t necessarily need a large yard to work off their energy. A brisk walk in the park or a half hour of playtime will suffice. Yorkies are quite sensitive to cold and don’t do well in very cold climates. They thrive in warmer places, and do well to stay indoors more than they do outdoors. While they are yappy and will alert you to any unusual sounds and intruders, their small size doesn’t make them great guard dogs or watchdogs. Yorkies are big on love and companionship and will not do well as outdoor dogs at all. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.73oo5UWAyfSj4EObGWHpjAHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "yorkie terrier",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "poodle",
                name: "Jasmine",
            },
            author: "Poodle ",
            title: "Jasmine",
            description:
                "The standard Poodle is an active breed and will need its share of walks and run to retain its health. Though, you have to remember that they are pretty inactive indoors. They are adaptable to apartment and condominium as well. The small yard will be more than enough for this breed.Poodles are excellent companions for all children; they have an even temperament and are not known to snap. All said it is advisable to socialize the children with the pet early to ensure that there are not any unpleasant circumstances later in life with the children.They are good with other pets in the house provided you acclimatize them with each other early. If you are introducing another pet to the family a little later then they might take time to accept a newcomer into the family and at times can even need special training for the same purpose. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.CWwg25JwsMivsCAuio_XdAHaJ4?w=156&h=207&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "poodle",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "siberian husk",
                name: "Daniel",
            },
            author: "Siberian husk ",
            title: "Natsu",
            description:
                "The Siberian Husky can make the perfect pet for families with children, provided the adults are experienced dog people and not first-time dog families. Huskies are affectionate and even protective towards children and don’t have a tendency to be moody around them.However, as in the case of all dogs, early socialisation with young children and other animals helps them cope more easily. Huskies are essentially a pack breed, so they tend to do very well with other animals in the house as well.Smaller animals like hamsters, guinea pigs and birds might be in danger though, because Huskies were bred to hunt in snow covered mountains where food was scarce. A much smaller animal may be seen as prey rather than family! Huskies were not bred to spend hours in confined places.They need plenty of time in the outdoors and do very well in houses with large yards, provided the yard is firmly fenced off from the road. They were also bred to bear extreme cold, so they don’t tend to do well in warm climates. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.id8sA5-kp9lz2I5HdxNPAAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "siberian husk",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "poodle",
                name: "Jasmine",
            },
            author: "Poodle ",
            title: "Kanna",
            description:
                "The standard Poodle is an active breed and will need its share of walks and run to retain its health. Though, you have to remember that they are pretty inactive indoors. They are adaptable to apartment and condominium as well. The small yard will be more than enough for this breed.Poodles are excellent companions for all children; they have an even temperament and are not known to snap. All said it is advisable to socialize the children with the pet early to ensure that there are not any unpleasant circumstances later in life with the children.They are good with other pets in the house provided you acclimatize them with each other early. If you are introducing another pet to the family a little later then they might take time to accept a newcomer into the family and at times can even need special training for the same purpose. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.5x7ZI32A5duaqheneIKcMwHaHZ?w=195&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "poodle",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },

        {
            source: {
                id: "Dachshund",
                name: "Pluto",
            },
            author: "Dachshund ",
            title: "Pikachu",
            description:
                "Daschund is perfect for the apartment style of living. These dogs fare well indoors and are quiet happy without a yard as well. Though almost every dog loves a house with a yard with the space. You should not be fooled by the size of a Daschund. These dogs have exceptional stamina and are super active dogs. They need to be walked on a daily basis.",
            urlToImage:
                "https://th.bing.com/th/id/OIP.czz-zZO3tta-cN6NGJdHpgHaE8?w=303&h=202&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "Dachshund",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },

        {
            source: {
                id: "collie",
                name: "Muffin",
            },
            author: "Collie ",
            title: "Kratos",
            description:
                "Collies do not do well in an apartment as they are extremely active and need large spaces such as farms or gardens to train, work and expend his energy. Border Collies do best when they have a job and their herding and nipping instinct is directed in the right direction.   For a family that can provide ample training and challenging tasks along with work to a Border Collie will definitely be able to enjoy the intelligent and tractable nature that makes them so easy to train. Right socialisation with children and other pets will have to begin from early age to help the pup adapt to their living conditions. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.9WEMLWCfOoX-KDJkf-RTjAHaJ4?w=121&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "collie",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "collie",
                name: "Muffin",
            },
            author: "Collie ",
            title: "Nagatoro",
            description:
                "Collies do not do well in an apartment as they are extremely active and need large spaces such as farms or gardens to train, work and expend his energy. Border Collies do best when they have a job and their herding and nipping instinct is directed in the right direction.   For a family that can provide ample training and challenging tasks along with work to a Border Collie will definitely be able to enjoy the intelligent and tractable nature that makes them so easy to train. Right socialisation with children and other pets will have to begin from early age to help the pup adapt to their living conditions. ",
            urlToImage:
                "https://th.bing.com/th/id/OIP.SIigcRqSCgkAvpp6wPDfPQHaG5?w=202&h=188&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "collie",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "Dachshund",
                name: "Pluto",
            },
            author: "Dachshund ",
            title: "Pluto",
            description:
                "Daschund is perfect for the apartment style of living. These dogs fare well indoors and are quiet happy without a yard as well. Though almost every dog loves a house with a yard with the space. You should not be fooled by the size of a Daschund. These dogs have exceptional stamina and are super active dogs. They need to be walked on a daily basis.",
            urlToImage:
                "https://th.bing.com/th/id/OIP.HXcMbujW3eCw5tIMSRsHBwHaHK?w=192&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "Dachshund",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },

        {
            source: {
                id: "golden retriever",
                name: "Jhonny",
            },
            author: "Golden retriever ",
            title: "Cory",
            description:
                "Goldens are one of the best family pets to have, they are the lowest ranking barkers. So, no complaints from the neighbors about the noise level. They are one of the freshest smelling dogs as they do not suffer from bad breath, which is a common problem among dogs usually. They have been given an especially soft mouth that helps them to even hold a raw egg without breaking it, perfect to slightly hold the hunt in their mouth.",
            urlToImage: "https://th.bing.com/th/id/OIP.YMxazgtBFUsr8TnXzB2C5QHaEo?",
            breed: "Golden retriever",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
        {
            source: {
                id: "Dachshund",
                name: "Pluto",
            },
            author: "Dachshund ",
            title: "Jin Mori",
            description:
                "Daschund is perfect for the apartment style of living. These dogs fare well indoors and are quiet happy without a yard as well. Though almost every dog loves a house with a yard with the space. You should not be fooled by the size of a Daschund. These dogs have exceptional stamina and are super active dogs. They need to be walked on a daily basis.",
            urlToImage:
                "https://th.bing.com/th/id/OIP.uTrYooyDGbvggB2mqdGctwHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            breed: "Dachshund",
            content:
                " ncludes a Pixel 6 or 6 Pro phone (with an upgrade in two years), an exte… [+1151 chars]",
        },
    ];

    constructor() {
        super();
        console.log("this is a constuctor");
        this.state = {
            dogs: this.dogs,
            loading: false,
            pageSize: 6 ,
        };
    }

    render() {
        return (
            <>
                <div className="container my-3">
                    <div className="container " style={{textAllign :"center"}}>
                        <h2>List of dogs</h2>
                    </div>
                    <div className="row">
                        {this.state.dogs.map((element) => {
                            return (
                                <>
                                 <div className="col-md-4 " key={element.title}>
                                    <DogList
                                        title={element.title}
                                        description={element.description.slice(0, 429)}
                                        urlToImage={element.urlToImage}
                                        height="300"
                                        width="300"
                                        author={element.author}
                                    />
                                    
                                 </div>
                                 
                                </>
                            );
                        })}
                    </div>
                </div>
                <footer
                    _ngcontent-serverapp-c52=""
                    className="container-fluid bg-dark my-0 py-3 text-light"
                >
                    <p _ngcontent-serverapp-c52="" className="mb-0 text-center">
                        Copyright © 2020-2021 TherapyPaw.com
                    </p>
                </footer>
            </>
        );
    }
}

export default Dog;
