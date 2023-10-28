"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const Prisma_1 = require("../../../prisma/Prisma");
const newProductss = [
    {
        "categoriID": 88,
        "name": "Full-shirt",
        "price": 123,
        "size": "L",
        "descriptions": "Elevate your style game with our Classic Full Shirt, the epitome of timeless fashion. Crafted with meticulous attention to detail, this shirt is a versatile masterpiece that seamlessly blends sophistication and comfort.The shirt boasts a tailored fit that flatters any body type, ensuring you look sharp and confident in any setting. Its premium cotton fabric guarantees unmatched breathability and softness against your skin, making it the perfect choice for both formal occasions and casual outings.The design is understated yet elegant, featuring a classic button-down front, a crisp collar, and long sleeves with adjustable cuffs. This shirt effortlessly transitions from boardroom meetings to weekend brunches, making it a must-have in every wardrobe.Available in an array of colors and sizes, the Classic Full Shirt offers endless styling possibilities. Pair it with tailored trousers for a polished office look or roll up the sleeves and wear it untucked with jeans for a relaxed, on-trend vibe.Invest in timeless style with our Classic Full Shirt, where comfort meets sophistication, and versatility meets elegance.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/8cqX2R4b/8cb5d531-1578-4284-8391-d3df7e10f055-removebg-preview.png"
    },
    {
        "categoriID": 88,
        "name": "Full-shirt",
        "price": 123,
        "size": "L",
        "descriptions": "Elevate your style game with our Classic Full Shirt, the epitome of timeless fashion. Crafted with meticulous attention to detail, this shirt is a versatile masterpiece that seamlessly blends sophistication and comfort.The shirt boasts a tailored fit that flatters any body type, ensuring you look sharp and confident in any setting. Its premium cotton fabric guarantees unmatched breathability and softness against your skin, making it the perfect choice for both formal occasions and casual outings.The design is understated yet elegant, featuring a classic button-down front, a crisp collar, and long sleeves with adjustable cuffs. This shirt effortlessly transitions from boardroom meetings to weekend brunches, making it a must-have in every wardrobe.Available in an array of colors and sizes, the Classic Full Shirt offers endless styling possibilities. Pair it with tailored trousers for a polished office look or roll up the sleeves and wear it untucked with jeans for a relaxed, on-trend vibe.Invest in timeless style with our Classic Full Shirt, where comfort meets sophistication, and versatility meets elegance.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/qgVQbkBb/8cb5ddb3-967b-4200-a145-e0f24810733d-removebg-preview.png"
    },
    {
        "categoriID": 88,
        "name": "Full-shirt",
        "price": 123,
        "size": "L",
        "descriptions": "Elevate your style game with our Classic Full Shirt, the epitome of timeless fashion. Crafted with meticulous attention to detail, this shirt is a versatile masterpiece that seamlessly blends sophistication and comfort.The shirt boasts a tailored fit that flatters any body type, ensuring you look sharp and confident in any setting. Its premium cotton fabric guarantees unmatched breathability and softness against your skin, making it the perfect choice for both formal occasions and casual outings.The design is understated yet elegant, featuring a classic button-down front, a crisp collar, and long sleeves with adjustable cuffs. This shirt effortlessly transitions from boardroom meetings to weekend brunches, making it a must-have in every wardrobe.Available in an array of colors and sizes, the Classic Full Shirt offers endless styling possibilities. Pair it with tailored trousers for a polished office look or roll up the sleeves and wear it untucked with jeans for a relaxed, on-trend vibe.Invest in timeless style with our Classic Full Shirt, where comfort meets sophistication, and versatility meets elegance.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/Pf8g4J2M/31ea9712-1bbd-4f89-9ddd-753f3d265d5b-removebg-preview.png"
    },
    {
        "categoriID": 88,
        "name": "Full-shirt",
        "price": 123,
        "size": "L",
        "descriptions": "Elevate your style game with our Classic Full Shirt, the epitome of timeless fashion. Crafted with meticulous attention to detail, this shirt is a versatile masterpiece that seamlessly blends sophistication and comfort.The shirt boasts a tailored fit that flatters any body type, ensuring you look sharp and confident in any setting. Its premium cotton fabric guarantees unmatched breathability and softness against your skin, making it the perfect choice for both formal occasions and casual outings.The design is understated yet elegant, featuring a classic button-down front, a crisp collar, and long sleeves with adjustable cuffs. This shirt effortlessly transitions from boardroom meetings to weekend brunches, making it a must-have in every wardrobe.Available in an array of colors and sizes, the Classic Full Shirt offers endless styling possibilities. Pair it with tailored trousers for a polished office look or roll up the sleeves and wear it untucked with jeans for a relaxed, on-trend vibe.Invest in timeless style with our Classic Full Shirt, where comfort meets sophistication, and versatility meets elegance.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/ZqRgy5Wp/56d79afd-12ff-4281-838d-2fb75e63ed11-removebg-preview.png"
    },
    {
        "categoriID": 88,
        "name": "Full-shirt",
        "price": 123,
        "size": "L",
        "descriptions": "Elevate your style game with our Classic Full Shirt, the epitome of timeless fashion. Crafted with meticulous attention to detail, this shirt is a versatile masterpiece that seamlessly blends sophistication and comfort.The shirt boasts a tailored fit that flatters any body type, ensuring you look sharp and confident in any setting. Its premium cotton fabric guarantees unmatched breathability and softness against your skin, making it the perfect choice for both formal occasions and casual outings.The design is understated yet elegant, featuring a classic button-down front, a crisp collar, and long sleeves with adjustable cuffs. This shirt effortlessly transitions from boardroom meetings to weekend brunches, making it a must-have in every wardrobe.Available in an array of colors and sizes, the Classic Full Shirt offers endless styling possibilities. Pair it with tailored trousers for a polished office look or roll up the sleeves and wear it untucked with jeans for a relaxed, on-trend vibe.Invest in timeless style with our Classic Full Shirt, where comfort meets sophistication, and versatility meets elegance.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/SNdD7pFr/69cf32b0-7716-4a3d-a467-a7387b92d129-removebg-preview.png"
    },
    {
        "categoriID": 88,
        "name": "Full-shirt",
        "price": 123,
        "size": "L",
        "descriptions": "Elevate your style game with our Classic Full Shirt, the epitome of timeless fashion. Crafted with meticulous attention to detail, this shirt is a versatile masterpiece that seamlessly blends sophistication and comfort.The shirt boasts a tailored fit that flatters any body type, ensuring you look sharp and confident in any setting. Its premium cotton fabric guarantees unmatched breathability and softness against your skin, making it the perfect choice for both formal occasions and casual outings.The design is understated yet elegant, featuring a classic button-down front, a crisp collar, and long sleeves with adjustable cuffs. This shirt effortlessly transitions from boardroom meetings to weekend brunches, making it a must-have in every wardrobe.Available in an array of colors and sizes, the Classic Full Shirt offers endless styling possibilities. Pair it with tailored trousers for a polished office look or roll up the sleeves and wear it untucked with jeans for a relaxed, on-trend vibe.Invest in timeless style with our Classic Full Shirt, where comfort meets sophistication, and versatility meets elegance.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/Hsn7RG83/71d2f1fa-51a9-4449-a714-b366c424b692-removebg-preview.png"
    },
    {
        "categoriID": 88,
        "name": "Full-shirt",
        "price": 123,
        "size": "L",
        "descriptions": "Elevate your style game with our Classic Full Shirt, the epitome of timeless fashion. Crafted with meticulous attention to detail, this shirt is a versatile masterpiece that seamlessly blends sophistication and comfort.The shirt boasts a tailored fit that flatters any body type, ensuring you look sharp and confident in any setting. Its premium cotton fabric guarantees unmatched breathability and softness against your skin, making it the perfect choice for both formal occasions and casual outings.The design is understated yet elegant, featuring a classic button-down front, a crisp collar, and long sleeves with adjustable cuffs. This shirt effortlessly transitions from boardroom meetings to weekend brunches, making it a must-have in every wardrobe.Available in an array of colors and sizes, the Classic Full Shirt offers endless styling possibilities. Pair it with tailored trousers for a polished office look or roll up the sleeves and wear it untucked with jeans for a relaxed, on-trend vibe.Invest in timeless style with our Classic Full Shirt, where comfort meets sophistication, and versatility meets elegance.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/1zGgwsbR/95c5c7fb-dea1-4b56-8fc5-86aa03b48057-removebg-preview.png"
    },
    {
        "categoriID": 88,
        "name": "Full-shirt",
        "price": 123,
        "size": "L",
        "descriptions": "Elevate your style game with our Classic Full Shirt, the epitome of timeless fashion. Crafted with meticulous attention to detail, this shirt is a versatile masterpiece that seamlessly blends sophistication and comfort.The shirt boasts a tailored fit that flatters any body type, ensuring you look sharp and confident in any setting. Its premium cotton fabric guarantees unmatched breathability and softness against your skin, making it the perfect choice for both formal occasions and casual outings.The design is understated yet elegant, featuring a classic button-down front, a crisp collar, and long sleeves with adjustable cuffs. This shirt effortlessly transitions from boardroom meetings to weekend brunches, making it a must-have in every wardrobe.Available in an array of colors and sizes, the Classic Full Shirt offers endless styling possibilities. Pair it with tailored trousers for a polished office look or roll up the sleeves and wear it untucked with jeans for a relaxed, on-trend vibe.Invest in timeless style with our Classic Full Shirt, where comfort meets sophistication, and versatility meets elegance.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/L5bh2XgD/286605f6-0cce-4800-8923-8b3ef8ac8d4d-removebg-preview.png"
    },
    {
        "categoriID": 88,
        "name": "Full-shirt",
        "price": 123,
        "size": "L",
        "descriptions": "Elevate your style game with our Classic Full Shirt, the epitome of timeless fashion. Crafted with meticulous attention to detail, this shirt is a versatile masterpiece that seamlessly blends sophistication and comfort.The shirt boasts a tailored fit that flatters any body type, ensuring you look sharp and confident in any setting. Its premium cotton fabric guarantees unmatched breathability and softness against your skin, making it the perfect choice for both formal occasions and casual outings.The design is understated yet elegant, featuring a classic button-down front, a crisp collar, and long sleeves with adjustable cuffs. This shirt effortlessly transitions from boardroom meetings to weekend brunches, making it a must-have in every wardrobe.Available in an array of colors and sizes, the Classic Full Shirt offers endless styling possibilities. Pair it with tailored trousers for a polished office look or roll up the sleeves and wear it untucked with jeans for a relaxed, on-trend vibe.Invest in timeless style with our Classic Full Shirt, where comfort meets sophistication, and versatility meets elegance.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/gkL23GZ9/b1fc67c2-cd48-4be0-b445-e4831ed69255-removebg-preview.png"
    },
    {
        "categoriID": 88,
        "name": "Full-shirt",
        "price": 123,
        "size": "L",
        "descriptions": "Elevate your style game with our Classic Full Shirt, the epitome of timeless fashion. Crafted with meticulous attention to detail, this shirt is a versatile masterpiece that seamlessly blends sophistication and comfort.The shirt boasts a tailored fit that flatters any body type, ensuring you look sharp and confident in any setting. Its premium cotton fabric guarantees unmatched breathability and softness against your skin, making it the perfect choice for both formal occasions and casual outings.The design is understated yet elegant, featuring a classic button-down front, a crisp collar, and long sleeves with adjustable cuffs. This shirt effortlessly transitions from boardroom meetings to weekend brunches, making it a must-have in every wardrobe.Available in an array of colors and sizes, the Classic Full Shirt offers endless styling possibilities. Pair it with tailored trousers for a polished office look or roll up the sleeves and wear it untucked with jeans for a relaxed, on-trend vibe.Invest in timeless style with our Classic Full Shirt, where comfort meets sophistication, and versatility meets elegance.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/qRZpCFBM/d0fde7ff-40d9-4880-b7c4-9a5fb999c1b8-removebg-preview.png"
    },
    {
        "categoriID": 88,
        "name": "Full-shirt",
        "price": 123,
        "size": "L",
        "descriptions": "Elevate your style game with our Classic Full Shirt, the epitome of timeless fashion. Crafted with meticulous attention to detail, this shirt is a versatile masterpiece that seamlessly blends sophistication and comfort.The shirt boasts a tailored fit that flatters any body type, ensuring you look sharp and confident in any setting. Its premium cotton fabric guarantees unmatched breathability and softness against your skin, making it the perfect choice for both formal occasions and casual outings.The design is understated yet elegant, featuring a classic button-down front, a crisp collar, and long sleeves with adjustable cuffs. This shirt effortlessly transitions from boardroom meetings to weekend brunches, making it a must-have in every wardrobe.Available in an array of colors and sizes, the Classic Full Shirt offers endless styling possibilities. Pair it with tailored trousers for a polished office look or roll up the sleeves and wear it untucked with jeans for a relaxed, on-trend vibe.Invest in timeless style with our Classic Full Shirt, where comfort meets sophistication, and versatility meets elegance.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/cLN0YwWY/ed39499e-632a-4cea-8531-57335757940e-removebg-preview.png"
    }, {
        "categoriID": 77,
        "name": "Jens-pant",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Jeans typically feature a sturdy, woven fabric known as denim, which can come in various colors and washes. They are often characterized by their classic design, including pockets, belt loops, and a zipper or button fly. Jeans come in various styles, such as straight-leg, bootcut, skinny, and more, catering to different fashion preferences.Jeans have become a staple in many wardrobes worldwide due to their comfort and timeless appeal. They can be dressed up with a nice shirt and shoes for a semi-casual look or dressed down with a t-shirt and sneakers for a more relaxed outfit. The versatility and durability of jeans have made them a popular choice for everyday wear.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/wB7JmCg7/blue-heren-jeans-11530970217jxhyzydkjx-removebg-preview.png"
    }, {
        "categoriID": 77,
        "name": "Jens-pant",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Jeans typically feature a sturdy, woven fabric known as denim, which can come in various colors and washes. They are often characterized by their classic design, including pockets, belt loops, and a zipper or button fly. Jeans come in various styles, such as straight-leg, bootcut, skinny, and more, catering to different fashion preferences.Jeans have become a staple in many wardrobes worldwide due to their comfort and timeless appeal. They can be dressed up with a nice shirt and shoes for a semi-casual look or dressed down with a t-shirt and sneakers for a more relaxed outfit. The versatility and durability of jeans have made them a popular choice for everyday wear.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/qqXCr0XZ/images-removebg-preview.png"
    }, {
        "categoriID": 77,
        "name": "Jens-pant",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Jeans typically feature a sturdy, woven fabric known as denim, which can come in various colors and washes. They are often characterized by their classic design, including pockets, belt loops, and a zipper or button fly. Jeans come in various styles, such as straight-leg, bootcut, skinny, and more, catering to different fashion preferences.Jeans have become a staple in many wardrobes worldwide due to their comfort and timeless appeal. They can be dressed up with a nice shirt and shoes for a semi-casual look or dressed down with a t-shirt and sneakers for a more relaxed outfit. The versatility and durability of jeans have made them a popular choice for everyday wear.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/HLqJ7j6h/Men-Jeans-PNG-Pic-removebg-preview.png"
    }, {
        "categoriID": 77,
        "name": "Jens-pant",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Jeans typically feature a sturdy, woven fabric known as denim, which can come in various colors and washes. They are often characterized by their classic design, including pockets, belt loops, and a zipper or button fly. Jeans come in various styles, such as straight-leg, bootcut, skinny, and more, catering to different fashion preferences.Jeans have become a staple in many wardrobes worldwide due to their comfort and timeless appeal. They can be dressed up with a nice shirt and shoes for a semi-casual look or dressed down with a t-shirt and sneakers for a more relaxed outfit. The versatility and durability of jeans have made them a popular choice for everyday wear.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/HkKnfV1k/png-clipart-jeans-slim-fit-pants-fashion-denim-jeans-fashion-black-removebg-preview.png"
    }, {
        "categoriID": 77,
        "name": "Jens-pant",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Jeans typically feature a sturdy, woven fabric known as denim, which can come in various colors and washes. They are often characterized by their classic design, including pockets, belt loops, and a zipper or button fly. Jeans come in various styles, such as straight-leg, bootcut, skinny, and more, catering to different fashion preferences.Jeans have become a staple in many wardrobes worldwide due to their comfort and timeless appeal. They can be dressed up with a nice shirt and shoes for a semi-casual look or dressed down with a t-shirt and sneakers for a more relaxed outfit. The versatility and durability of jeans have made them a popular choice for everyday wear.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/L5H8zPLN/png-clipart-jeans-t-shirt-clothing-denim-sweater-women-s-jeans-blue-womens-jeans-removebg-preview.png"
    }, {
        "categoriID": 77,
        "name": "Jens-pant",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Jeans typically feature a sturdy, woven fabric known as denim, which can come in various colors and washes. They are often characterized by their classic design, including pockets, belt loops, and a zipper or button fly. Jeans come in various styles, such as straight-leg, bootcut, skinny, and more, catering to different fashion preferences.Jeans have become a staple in many wardrobes worldwide due to their comfort and timeless appeal. They can be dressed up with a nice shirt and shoes for a semi-casual look or dressed down with a t-shirt and sneakers for a more relaxed outfit. The versatility and durability of jeans have made them a popular choice for everyday wear.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/ryQ8BKS2/png-clipart-nudie-jeans-denim-slim-fit-pants-levi-strauss-co-jeans-removebg-preview.png"
    }, {
        "categoriID": 77,
        "name": "Jens-pant",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Jeans typically feature a sturdy, woven fabric known as denim, which can come in various colors and washes. They are often characterized by their classic design, including pockets, belt loops, and a zipper or button fly. Jeans come in various styles, such as straight-leg, bootcut, skinny, and more, catering to different fashion preferences.Jeans have become a staple in many wardrobes worldwide due to their comfort and timeless appeal. They can be dressed up with a nice shirt and shoes for a semi-casual look or dressed down with a t-shirt and sneakers for a more relaxed outfit. The versatility and durability of jeans have made them a popular choice for everyday wear.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/BvT3M6qy/png-transparent-jeans-denim-waist-woman-jeans-blue-denim-jeans-thumbnail-removebg-preview.png"
    }, {
        "categoriID": 77,
        "name": "Jens-pant",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Jeans typically feature a sturdy, woven fabric known as denim, which can come in various colors and washes. They are often characterized by their classic design, including pockets, belt loops, and a zipper or button fly. Jeans come in various styles, such as straight-leg, bootcut, skinny, and more, catering to different fashion preferences.Jeans have become a staple in many wardrobes worldwide due to their comfort and timeless appeal. They can be dressed up with a nice shirt and shoes for a semi-casual look or dressed down with a t-shirt and sneakers for a more relaxed outfit. The versatility and durability of jeans have made them a popular choice for everyday wear.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/C5t9FThk/png-transparent-jeans-slim-fit-pants-clothing-denim-black-jeans-zipper-fashion-shoe-thumbnail-remove.png"
    }, {
        "categoriID": 77,
        "name": "Jens-pant",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Jeans typically feature a sturdy, woven fabric known as denim, which can come in various colors and washes. They are often characterized by their classic design, including pockets, belt loops, and a zipper or button fly. Jeans come in various styles, such as straight-leg, bootcut, skinny, and more, catering to different fashion preferences.Jeans have become a staple in many wardrobes worldwide due to their comfort and timeless appeal. They can be dressed up with a nice shirt and shoes for a semi-casual look or dressed down with a t-shirt and sneakers for a more relaxed outfit. The versatility and durability of jeans have made them a popular choice for everyday wear.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/3rbsjpXN/png-transparent-jeans-trousers-denim-undergarment-jeans-blue-taobao-shoe-thumbnail-removebg-preview.png"
    }, {
        "categoriID": 77,
        "name": "Jens-pant",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Jeans typically feature a sturdy, woven fabric known as denim, which can come in various colors and washes. They are often characterized by their classic design, including pockets, belt loops, and a zipper or button fly. Jeans come in various styles, such as straight-leg, bootcut, skinny, and more, catering to different fashion preferences.Jeans have become a staple in many wardrobes worldwide due to their comfort and timeless appeal. They can be dressed up with a nice shirt and shoes for a semi-casual look or dressed down with a t-shirt and sneakers for a more relaxed outfit. The versatility and durability of jeans have made them a popular choice for everyday wear.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/SKq3QGhT/pngtree-jeans-material-trend-stitching-png-image-4001817-removebg-preview.png"
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/28D6DPtn/92b7325a-2006-4b36-87e1-2378b14c6d99-removebg-preview.png       "
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/Vk5cQgzj/354edd9e-6357-4779-8efa-7b7b53c9efff-removebg-preview.png"
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/QNbLFwtQ/3704c683-a1df-4fc8-b38e-50b78e7e6119-removebg-preview.png"
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/GpYVdSVs/74348edc-562a-4073-b4d4-069fe105c0f7-removebg-preview.png"
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/RFLYnJMS/383740304-175936008878708-6881092139272603136-n-removebg-preview.png"
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/BvxYdPPT/384999914-178178355321140-1014810065809916693-n-removebg-preview.png"
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/152vXrp0/385050180-178178408654468-6173654693096715951-n-removebg-preview.png"
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/sf0cH40F/385050502-178178475321128-1176514974593810454-n-removebg-preview.png"
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/ZRnN61mW/385381528-178178058654503-5945880866256462840-n-removebg-preview.png"
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/KcKq2WTc/385389280-178178435321132-3373786468731700765-n-removebg-preview.png"
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/vmHhS2Ms/385430070-178177948654514-2419137283726903370-n-removebg-preview.png"
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/C5DsfWCj/ae49bdaa-466a-44af-8b18-eb914d72c1af-removebg-preview.png"
    }, {
        "categoriID": 66,
        "name": "Joursey",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "It seems like you might be referring to jersey, which is a type of clothing, typically a shirt, made from a knit fabric and often associated with sports. Jerseys are commonly worn by athletes in various sports, such as soccer, basketball, football, and hockey, as part of their team uniforms. These garments are known for their durability, breathability, and ability to wick moisture away from the body, making them ideal for physical activities.In addition to sports jerseys, there are also casual jerseys, which are more relaxed and comfortable shirts made from similar materials but not necessarily associated with a particular sports team. Casual jerseys are often worn for everyday comfort and style.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/gJLvffTf/f73151b2-0d75-464d-a565-2d17c6587894-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/4yng1Q24/380821008-176334598838849-931504531355855100-n-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/L61d6XrW/382463850-176334882172154-8057094931649590305-n-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/t4b9KWYk/382481442-176334955505480-228226397277003387-n-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/pT3HqnwD/382486554-176334825505493-8213406551279867350-n-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/Y0QJRDfH/382486570-176335078838801-2955825752542649758-n-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/CMbtWtky/382489335-176334885505487-5425265109136017456-n-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/4x2F6Tkc/382489882-176334495505526-5261889090327759782-n-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/nzb22FdX/382491850-176335128838796-1953380487372584984-n-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/mkVSTQT9/382503320-176335155505460-7909359765476631520-n-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/gcKsyP30/382707599-176335028838806-2271237961268864877-n-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/V689M76M/382807537-176334982172144-6825826084538051346-n-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/vHg1Yr8d/382812765-176334575505518-8482428313602243268-n-removebg-preview.png"
    }, {
        "categoriID": 55,
        "name": "Panjabi",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The Bangladeshi Panjabi, a garment steeped in cultural richness and elegance, is the quintessential attire for men during weddings and joyous celebrations. This traditional ensemble captures the essence of heritage and refinement, making it a symbol of distinction on special occasionsAt its core, the Panjabi consists of a knee-length tunic-style shirt, often adorned with intricate embroidery, ornate patterns, or exquisite embellishments. The fabric choice varies, ranging from sumptuous silks to luxurious cotton, showcasing a harmonious blend of comfort and style. The Panjabi's neckline and cuffs are usually intricately detailed, adding a touch of grandeur to the overall look.Completing the ensemble are the matching or contrasting trousers, tailored to perfection to ensure both comfort and a regal appearance. The trousers can vary in style, with some opting for the timeless elegance of pajama-style bottoms, while others may choose churidar pants for a more contemporary twist.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/G2g2r2Z2/383975826-176334928838816-7361515683847142314-n-removebg-preview.png"
    }, {
        "categoriID": 99,
        "name": "Salwar",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The salwar is characterized by its loose and comfortable fit, often gathered at the waist and tapering down to the ankles. It is typically paired with a kameez that can vary in length and design, and the combination provides both modesty and freedom of movement. Salwar kameez outfits are worn for various occasions, from casual everyday wear to formal events, depending on the design, fabric, and embellishments.Salwar kameez is a versatile and popular choice of clothing in South Asian countries like India, Pakistan, Bangladesh, and others. The style and design of the salwar kameez can vary greatly across different regions and cultures, making it a diverse and culturally significant garment in the region.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/SRY68w4y/1e3f2310-e50a-45d3-a3e2-f4f13fa38f29-removebg-preview.png "
    }, {
        "categoriID": 99,
        "name": "Salwar",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The salwar is characterized by its loose and comfortable fit, often gathered at the waist and tapering down to the ankles. It is typically paired with a kameez that can vary in length and design, and the combination provides both modesty and freedom of movement. Salwar kameez outfits are worn for various occasions, from casual everyday wear to formal events, depending on the design, fabric, and embellishments.Salwar kameez is a versatile and popular choice of clothing in South Asian countries like India, Pakistan, Bangladesh, and others. The style and design of the salwar kameez can vary greatly across different regions and cultures, making it a diverse and culturally significant garment in the region.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/vZtNc6X0/6cc15176-ad31-4af9-95b8-7d77e8613332-removebg-preview.png"
    }, {
        "categoriID": 99,
        "name": "Salwar",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The salwar is characterized by its loose and comfortable fit, often gathered at the waist and tapering down to the ankles. It is typically paired with a kameez that can vary in length and design, and the combination provides both modesty and freedom of movement. Salwar kameez outfits are worn for various occasions, from casual everyday wear to formal events, depending on the design, fabric, and embellishments.Salwar kameez is a versatile and popular choice of clothing in South Asian countries like India, Pakistan, Bangladesh, and others. The style and design of the salwar kameez can vary greatly across different regions and cultures, making it a diverse and culturally significant garment in the region.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/CKvr4T3D/82b53f69-81db-4c67-b9f8-424e85b24fb7-removebg-preview.png"
    }, {
        "categoriID": 99,
        "name": "Salwar",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The salwar is characterized by its loose and comfortable fit, often gathered at the waist and tapering down to the ankles. It is typically paired with a kameez that can vary in length and design, and the combination provides both modesty and freedom of movement. Salwar kameez outfits are worn for various occasions, from casual everyday wear to formal events, depending on the design, fabric, and embellishments.Salwar kameez is a versatile and popular choice of clothing in South Asian countries like India, Pakistan, Bangladesh, and others. The style and design of the salwar kameez can vary greatly across different regions and cultures, making it a diverse and culturally significant garment in the region.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/DyVj6cMC/87ed0be8-28d7-4e97-9c00-c7ecb835e9b0-removebg-preview.png"
    }, {
        "categoriID": 99,
        "name": "Salwar",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The salwar is characterized by its loose and comfortable fit, often gathered at the waist and tapering down to the ankles. It is typically paired with a kameez that can vary in length and design, and the combination provides both modesty and freedom of movement. Salwar kameez outfits are worn for various occasions, from casual everyday wear to formal events, depending on the design, fabric, and embellishments.Salwar kameez is a versatile and popular choice of clothing in South Asian countries like India, Pakistan, Bangladesh, and others. The style and design of the salwar kameez can vary greatly across different regions and cultures, making it a diverse and culturally significant garment in the region.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/d1k6m7mP/3142c2ac-4e16-4cfb-a383-1e9287fb3df0-removebg-preview.png"
    }, {
        "categoriID": 99,
        "name": "Salwar",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The salwar is characterized by its loose and comfortable fit, often gathered at the waist and tapering down to the ankles. It is typically paired with a kameez that can vary in length and design, and the combination provides both modesty and freedom of movement. Salwar kameez outfits are worn for various occasions, from casual everyday wear to formal events, depending on the design, fabric, and embellishments.Salwar kameez is a versatile and popular choice of clothing in South Asian countries like India, Pakistan, Bangladesh, and others. The style and design of the salwar kameez can vary greatly across different regions and cultures, making it a diverse and culturally significant garment in the region.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/nLMGpsWj/a9e60ba1-c522-4ff0-9715-98ab33f0be73-removebg-preview.png"
    }, {
        "categoriID": 99,
        "name": "Salwar",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The salwar is characterized by its loose and comfortable fit, often gathered at the waist and tapering down to the ankles. It is typically paired with a kameez that can vary in length and design, and the combination provides both modesty and freedom of movement. Salwar kameez outfits are worn for various occasions, from casual everyday wear to formal events, depending on the design, fabric, and embellishments.Salwar kameez is a versatile and popular choice of clothing in South Asian countries like India, Pakistan, Bangladesh, and others. The style and design of the salwar kameez can vary greatly across different regions and cultures, making it a diverse and culturally significant garment in the region.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/T1jrCnKS/bdc43393-02a2-47d0-afc9-d480fec6dcee-removebg-preview.png"
    }, {
        "categoriID": 99,
        "name": "Salwar",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The salwar is characterized by its loose and comfortable fit, often gathered at the waist and tapering down to the ankles. It is typically paired with a kameez that can vary in length and design, and the combination provides both modesty and freedom of movement. Salwar kameez outfits are worn for various occasions, from casual everyday wear to formal events, depending on the design, fabric, and embellishments.Salwar kameez is a versatile and popular choice of clothing in South Asian countries like India, Pakistan, Bangladesh, and others. The style and design of the salwar kameez can vary greatly across different regions and cultures, making it a diverse and culturally significant garment in the region.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/1zNVvDTH/f5358d8a-6dea-464b-9f70-57610d95d636-removebg-preview.png"
    }, {
        "categoriID": 99,
        "name": "Salwar",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The salwar is characterized by its loose and comfortable fit, often gathered at the waist and tapering down to the ankles. It is typically paired with a kameez that can vary in length and design, and the combination provides both modesty and freedom of movement. Salwar kameez outfits are worn for various occasions, from casual everyday wear to formal events, depending on the design, fabric, and embellishments.Salwar kameez is a versatile and popular choice of clothing in South Asian countries like India, Pakistan, Bangladesh, and others. The style and design of the salwar kameez can vary greatly across different regions and cultures, making it a diverse and culturally significant garment in the region.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/wvpMFZDq/feeb9b95-7b6a-4bf8-a0f2-9261e3a6c5a8-removebg-preview.png"
    }, {
        "categoriID": 44,
        "name": "Shari",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The sari, a timeless and elegant garment, is not merely clothing; it is a canvas of cultural artistry and individual expression. This emblematic attire, cherished by Bangladeshi women and women across South Asia, consists of a gracefully draped length of fabric that seamlessly combines tradition with contemporary styleA sari's charm lies in its versatility, ranging from 5 to 9 meters of fabric, allowing for endless creativity in its draping. With each fold and pleat, a story unfolds, as the sari showcases intricate patterns, vibrant colors, and rich textures, mirroring the diverse tapestry of the region's heritage.Worn on both everyday occasions and momentous events, the sari is a symbol of grace and dignity. It captures the essence of femininity, as it celebrates individuality and cultural pride with every ensemble. This quintessential piece of South Asian fashion weaves history, artistry, and modernity into a single, awe-inspiring garment, making it truly unique in the world of fashion.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/SRY68w4y/1e3f2310-e50a-45d3-a3e2-f4f13fa38f29-removebg-preview.png"
    }, {
        "categoriID": 44,
        "name": "Shari",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The sari, a timeless and elegant garment, is not merely clothing; it is a canvas of cultural artistry and individual expression. This emblematic attire, cherished by Bangladeshi women and women across South Asia, consists of a gracefully draped length of fabric that seamlessly combines tradition with contemporary styleA sari's charm lies in its versatility, ranging from 5 to 9 meters of fabric, allowing for endless creativity in its draping. With each fold and pleat, a story unfolds, as the sari showcases intricate patterns, vibrant colors, and rich textures, mirroring the diverse tapestry of the region's heritage.Worn on both everyday occasions and momentous events, the sari is a symbol of grace and dignity. It captures the essence of femininity, as it celebrates individuality and cultural pride with every ensemble. This quintessential piece of South Asian fashion weaves history, artistry, and modernity into a single, awe-inspiring garment, making it truly unique in the world of fashion.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/vZtNc6X0/6cc15176-ad31-4af9-95b8-7d77e8613332-removebg-preview.png"
    }, {
        "categoriID": 44,
        "name": "Shari",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The sari, a timeless and elegant garment, is not merely clothing; it is a canvas of cultural artistry and individual expression. This emblematic attire, cherished by Bangladeshi women and women across South Asia, consists of a gracefully draped length of fabric that seamlessly combines tradition with contemporary styleA sari's charm lies in its versatility, ranging from 5 to 9 meters of fabric, allowing for endless creativity in its draping. With each fold and pleat, a story unfolds, as the sari showcases intricate patterns, vibrant colors, and rich textures, mirroring the diverse tapestry of the region's heritage.Worn on both everyday occasions and momentous events, the sari is a symbol of grace and dignity. It captures the essence of femininity, as it celebrates individuality and cultural pride with every ensemble. This quintessential piece of South Asian fashion weaves history, artistry, and modernity into a single, awe-inspiring garment, making it truly unique in the world of fashion.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/CKvr4T3D/82b53f69-81db-4c67-b9f8-424e85b24fb7-removebg-preview.png"
    }, {
        "categoriID": 44,
        "name": "Shari",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The sari, a timeless and elegant garment, is not merely clothing; it is a canvas of cultural artistry and individual expression. This emblematic attire, cherished by Bangladeshi women and women across South Asia, consists of a gracefully draped length of fabric that seamlessly combines tradition with contemporary styleA sari's charm lies in its versatility, ranging from 5 to 9 meters of fabric, allowing for endless creativity in its draping. With each fold and pleat, a story unfolds, as the sari showcases intricate patterns, vibrant colors, and rich textures, mirroring the diverse tapestry of the region's heritage.Worn on both everyday occasions and momentous events, the sari is a symbol of grace and dignity. It captures the essence of femininity, as it celebrates individuality and cultural pride with every ensemble. This quintessential piece of South Asian fashion weaves history, artistry, and modernity into a single, awe-inspiring garment, making it truly unique in the world of fashion.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/DyVj6cMC/87ed0be8-28d7-4e97-9c00-c7ecb835e9b0-removebg-preview.png"
    }, {
        "categoriID": 44,
        "name": "Shari",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The sari, a timeless and elegant garment, is not merely clothing; it is a canvas of cultural artistry and individual expression. This emblematic attire, cherished by Bangladeshi women and women across South Asia, consists of a gracefully draped length of fabric that seamlessly combines tradition with contemporary styleA sari's charm lies in its versatility, ranging from 5 to 9 meters of fabric, allowing for endless creativity in its draping. With each fold and pleat, a story unfolds, as the sari showcases intricate patterns, vibrant colors, and rich textures, mirroring the diverse tapestry of the region's heritage.Worn on both everyday occasions and momentous events, the sari is a symbol of grace and dignity. It captures the essence of femininity, as it celebrates individuality and cultural pride with every ensemble. This quintessential piece of South Asian fashion weaves history, artistry, and modernity into a single, awe-inspiring garment, making it truly unique in the world of fashion.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/d1k6m7mP/3142c2ac-4e16-4cfb-a383-1e9287fb3df0-removebg-preview.png"
    }, {
        "categoriID": 44,
        "name": "Shari",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The sari, a timeless and elegant garment, is not merely clothing; it is a canvas of cultural artistry and individual expression. This emblematic attire, cherished by Bangladeshi women and women across South Asia, consists of a gracefully draped length of fabric that seamlessly combines tradition with contemporary styleA sari's charm lies in its versatility, ranging from 5 to 9 meters of fabric, allowing for endless creativity in its draping. With each fold and pleat, a story unfolds, as the sari showcases intricate patterns, vibrant colors, and rich textures, mirroring the diverse tapestry of the region's heritage.Worn on both everyday occasions and momentous events, the sari is a symbol of grace and dignity. It captures the essence of femininity, as it celebrates individuality and cultural pride with every ensemble. This quintessential piece of South Asian fashion weaves history, artistry, and modernity into a single, awe-inspiring garment, making it truly unique in the world of fashion.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/nLMGpsWj/a9e60ba1-c522-4ff0-9715-98ab33f0be73-removebg-preview.png"
    }, {
        "categoriID": 44,
        "name": "Shari",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The sari, a timeless and elegant garment, is not merely clothing; it is a canvas of cultural artistry and individual expression. This emblematic attire, cherished by Bangladeshi women and women across South Asia, consists of a gracefully draped length of fabric that seamlessly combines tradition with contemporary styleA sari's charm lies in its versatility, ranging from 5 to 9 meters of fabric, allowing for endless creativity in its draping. With each fold and pleat, a story unfolds, as the sari showcases intricate patterns, vibrant colors, and rich textures, mirroring the diverse tapestry of the region's heritage.Worn on both everyday occasions and momentous events, the sari is a symbol of grace and dignity. It captures the essence of femininity, as it celebrates individuality and cultural pride with every ensemble. This quintessential piece of South Asian fashion weaves history, artistry, and modernity into a single, awe-inspiring garment, making it truly unique in the world of fashion.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/T1jrCnKS/bdc43393-02a2-47d0-afc9-d480fec6dcee-removebg-preview.png"
    }, {
        "categoriID": 44,
        "name": "Shari",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The sari, a timeless and elegant garment, is not merely clothing; it is a canvas of cultural artistry and individual expression. This emblematic attire, cherished by Bangladeshi women and women across South Asia, consists of a gracefully draped length of fabric that seamlessly combines tradition with contemporary styleA sari's charm lies in its versatility, ranging from 5 to 9 meters of fabric, allowing for endless creativity in its draping. With each fold and pleat, a story unfolds, as the sari showcases intricate patterns, vibrant colors, and rich textures, mirroring the diverse tapestry of the region's heritage.Worn on both everyday occasions and momentous events, the sari is a symbol of grace and dignity. It captures the essence of femininity, as it celebrates individuality and cultural pride with every ensemble. This quintessential piece of South Asian fashion weaves history, artistry, and modernity into a single, awe-inspiring garment, making it truly unique in the world of fashion.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/1zNVvDTH/f5358d8a-6dea-464b-9f70-57610d95d636-removebg-preview.png"
    }, {
        "categoriID": 44,
        "name": "Shari",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "The sari, a timeless and elegant garment, is not merely clothing; it is a canvas of cultural artistry and individual expression. This emblematic attire, cherished by Bangladeshi women and women across South Asia, consists of a gracefully draped length of fabric that seamlessly combines tradition with contemporary styleA sari's charm lies in its versatility, ranging from 5 to 9 meters of fabric, allowing for endless creativity in its draping. With each fold and pleat, a story unfolds, as the sari showcases intricate patterns, vibrant colors, and rich textures, mirroring the diverse tapestry of the region's heritage.Worn on both everyday occasions and momentous events, the sari is a symbol of grace and dignity. It captures the essence of femininity, as it celebrates individuality and cultural pride with every ensemble. This quintessential piece of South Asian fashion weaves history, artistry, and modernity into a single, awe-inspiring garment, making it truly unique in the world of fashion.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/wvpMFZDq/feeb9b95-7b6a-4bf8-a0f2-9261e3a6c5a8-removebg-preview.png"
    }, {
        "categoriID": 33,
        "name": "Shoe",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Shoes are essential footwear designed to protect and provide comfort to your feet while also making a fashion statement. They come in various styles, including sneakers, boots, sandals, and more, each tailored for specific activities or occasions. Shoes can be made from a variety of materials such as leather, canvas, or synthetic fabrics, and they often feature various designs, colors, and embellishments to suit individual preferences and trends. Choosing the right pair of shoes can enhance both your style and comfort, making them a crucial part of your everyday wardrobe.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/W3jvKJSr/08a53d14-ef8f-4500-a8b5-16cc11152d1c-removebg-preview.png"
    }, {
        "categoriID": 33,
        "name": "Shoe",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Shoes are essential footwear designed to protect and provide comfort to your feet while also making a fashion statement. They come in various styles, including sneakers, boots, sandals, and more, each tailored for specific activities or occasions. Shoes can be made from a variety of materials such as leather, canvas, or synthetic fabrics, and they often feature various designs, colors, and embellishments to suit individual preferences and trends. Choosing the right pair of shoes can enhance both your style and comfort, making them a crucial part of your everyday wardrobe.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/Lskdz8Rs/8a8cff2a-995b-4eb0-bdcb-004dff81acb5-removebg-preview.png"
    }, {
        "categoriID": 33,
        "name": "Shoe",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Shoes are essential footwear designed to protect and provide comfort to your feet while also making a fashion statement. They come in various styles, including sneakers, boots, sandals, and more, each tailored for specific activities or occasions. Shoes can be made from a variety of materials such as leather, canvas, or synthetic fabrics, and they often feature various designs, colors, and embellishments to suit individual preferences and trends. Choosing the right pair of shoes can enhance both your style and comfort, making them a crucial part of your everyday wardrobe.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/KjHCZK70/11bcfc41-4b1a-4d2d-a5bc-8e3b1833139c-removebg-preview.png"
    }, {
        "categoriID": 33,
        "name": "Shoe",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Shoes are essential footwear designed to protect and provide comfort to your feet while also making a fashion statement. They come in various styles, including sneakers, boots, sandals, and more, each tailored for specific activities or occasions. Shoes can be made from a variety of materials such as leather, canvas, or synthetic fabrics, and they often feature various designs, colors, and embellishments to suit individual preferences and trends. Choosing the right pair of shoes can enhance both your style and comfort, making them a crucial part of your everyday wardrobe.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/mkt66LxC/ab5b3c9b-59f6-4e26-847d-86a9ee0ce59e-removebg-preview.png"
    }, {
        "categoriID": 33,
        "name": "Shoe",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Shoes are essential footwear designed to protect and provide comfort to your feet while also making a fashion statement. They come in various styles, including sneakers, boots, sandals, and more, each tailored for specific activities or occasions. Shoes can be made from a variety of materials such as leather, canvas, or synthetic fabrics, and they often feature various designs, colors, and embellishments to suit individual preferences and trends. Choosing the right pair of shoes can enhance both your style and comfort, making them a crucial part of your everyday wardrobe.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/zXHcCGF1/bbece8cf-822c-420f-b796-5ad2d0b5d129-removebg-preview.png"
    }, {
        "categoriID": 33,
        "name": "Shoe",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Shoes are essential footwear designed to protect and provide comfort to your feet while also making a fashion statement. They come in various styles, including sneakers, boots, sandals, and more, each tailored for specific activities or occasions. Shoes can be made from a variety of materials such as leather, canvas, or synthetic fabrics, and they often feature various designs, colors, and embellishments to suit individual preferences and trends. Choosing the right pair of shoes can enhance both your style and comfort, making them a crucial part of your everyday wardrobe.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/k5qYPF3n/c31839e8-539b-47f3-a71c-6928868c396e-removebg-preview.png"
    }, {
        "categoriID": 33,
        "name": "Shoe",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Shoes are essential footwear designed to protect and provide comfort to your feet while also making a fashion statement. They come in various styles, including sneakers, boots, sandals, and more, each tailored for specific activities or occasions. Shoes can be made from a variety of materials such as leather, canvas, or synthetic fabrics, and they often feature various designs, colors, and embellishments to suit individual preferences and trends. Choosing the right pair of shoes can enhance both your style and comfort, making them a crucial part of your everyday wardrobe.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/mZPsnRym/d554a15f-c0d2-4a0d-92c1-4040734145cf-removebg-preview.png"
    }, {
        "categoriID": 33,
        "name": "Shoe",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Shoes are essential footwear designed to protect and provide comfort to your feet while also making a fashion statement. They come in various styles, including sneakers, boots, sandals, and more, each tailored for specific activities or occasions. Shoes can be made from a variety of materials such as leather, canvas, or synthetic fabrics, and they often feature various designs, colors, and embellishments to suit individual preferences and trends. Choosing the right pair of shoes can enhance both your style and comfort, making them a crucial part of your everyday wardrobe.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/JzLCtXVF/d95329d2-af48-4f02-8ac4-6f66650b3072-removebg-preview.png"
    }, {
        "categoriID": 33,
        "name": "Shoe",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Shoes are essential footwear designed to protect and provide comfort to your feet while also making a fashion statement. They come in various styles, including sneakers, boots, sandals, and more, each tailored for specific activities or occasions. Shoes can be made from a variety of materials such as leather, canvas, or synthetic fabrics, and they often feature various designs, colors, and embellishments to suit individual preferences and trends. Choosing the right pair of shoes can enhance both your style and comfort, making them a crucial part of your everyday wardrobe.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/tJx84qry/e163bc9f-3bac-4ee6-9333-b76ee91d63ab-removebg-preview.png"
    }, {
        "categoriID": 33,
        "name": "Shoe",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Shoes are essential footwear designed to protect and provide comfort to your feet while also making a fashion statement. They come in various styles, including sneakers, boots, sandals, and more, each tailored for specific activities or occasions. Shoes can be made from a variety of materials such as leather, canvas, or synthetic fabrics, and they often feature various designs, colors, and embellishments to suit individual preferences and trends. Choosing the right pair of shoes can enhance both your style and comfort, making them a crucial part of your everyday wardrobe.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/c1nzYJmG/fdd68e1c-4f12-4fbc-8506-c25aa472d4af-removebg-preview.png"
    }, {
        "categoriID": 22,
        "name": "Sunglass",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Black sunglasses are a stylish and versatile accessory designed to protect your eyes from harsh sunlight and harmful UV rays. They feature dark, opaque black frames and lenses, providing a classic and timeless look that complements various outfits and occasions. Black sunglasses are popular for their ability to add a touch of sophistication and mystery to your appearance while offering essential eye protection. Whether you're going for a casual, elegant, or edgy look, black sunglasses are a go-to choice for many fashion enthusiasts.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/d0s72zF8/1b7996f9-7827-4bae-a19e-84c3d546c9c1-removebg-preview.png"
    }, {
        "categoriID": 22,
        "name": "Sunglass",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Black sunglasses are a stylish and versatile accessory designed to protect your eyes from harsh sunlight and harmful UV rays. They feature dark, opaque black frames and lenses, providing a classic and timeless look that complements various outfits and occasions. Black sunglasses are popular for their ability to add a touch of sophistication and mystery to your appearance while offering essential eye protection. Whether you're going for a casual, elegant, or edgy look, black sunglasses are a go-to choice for many fashion enthusiasts.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/YqFd4ytr/1f001f1b-37ee-457d-8c38-5e7d54cc07c6-removebg-preview.png"
    }, {
        "categoriID": 22,
        "name": "Sunglass",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Black sunglasses are a stylish and versatile accessory designed to protect your eyes from harsh sunlight and harmful UV rays. They feature dark, opaque black frames and lenses, providing a classic and timeless look that complements various outfits and occasions. Black sunglasses are popular for their ability to add a touch of sophistication and mystery to your appearance while offering essential eye protection. Whether you're going for a casual, elegant, or edgy look, black sunglasses are a go-to choice for many fashion enthusiasts.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/XY0Q9cvw/2e35699d-6fea-4a02-806c-4866caa1e1ba-removebg-preview.png       "
    }, {
        "categoriID": 22,
        "name": "Sunglass",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Black sunglasses are a stylish and versatile accessory designed to protect your eyes from harsh sunlight and harmful UV rays. They feature dark, opaque black frames and lenses, providing a classic and timeless look that complements various outfits and occasions. Black sunglasses are popular for their ability to add a touch of sophistication and mystery to your appearance while offering essential eye protection. Whether you're going for a casual, elegant, or edgy look, black sunglasses are a go-to choice for many fashion enthusiasts.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/GpXK0WxQ/9ea934f3-9b6f-4023-acce-1bd4625ff9ff-removebg-preview.png"
    }, {
        "categoriID": 22,
        "name": "Sunglass",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Black sunglasses are a stylish and versatile accessory designed to protect your eyes from harsh sunlight and harmful UV rays. They feature dark, opaque black frames and lenses, providing a classic and timeless look that complements various outfits and occasions. Black sunglasses are popular for their ability to add a touch of sophistication and mystery to your appearance while offering essential eye protection. Whether you're going for a casual, elegant, or edgy look, black sunglasses are a go-to choice for many fashion enthusiasts.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/66k0NLnD/922b5572-f1d1-4d17-884f-324725d8d55d-removebg-preview.png"
    }, {
        "categoriID": 22,
        "name": "Sunglass",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Black sunglasses are a stylish and versatile accessory designed to protect your eyes from harsh sunlight and harmful UV rays. They feature dark, opaque black frames and lenses, providing a classic and timeless look that complements various outfits and occasions. Black sunglasses are popular for their ability to add a touch of sophistication and mystery to your appearance while offering essential eye protection. Whether you're going for a casual, elegant, or edgy look, black sunglasses are a go-to choice for many fashion enthusiasts.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/MpDbRCNS/1714aaab-87a7-4c22-8911-8fece582567e-removebg-preview.png"
    }, {
        "categoriID": 22,
        "name": "Sunglass",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Black sunglasses are a stylish and versatile accessory designed to protect your eyes from harsh sunlight and harmful UV rays. They feature dark, opaque black frames and lenses, providing a classic and timeless look that complements various outfits and occasions. Black sunglasses are popular for their ability to add a touch of sophistication and mystery to your appearance while offering essential eye protection. Whether you're going for a casual, elegant, or edgy look, black sunglasses are a go-to choice for many fashion enthusiasts.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/cHVQ00gQ/b9c82062-fbb1-4f45-95d3-085cd578984f-removebg-preview.png"
    }, {
        "categoriID": 22,
        "name": "Sunglass",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Black sunglasses are a stylish and versatile accessory designed to protect your eyes from harsh sunlight and harmful UV rays. They feature dark, opaque black frames and lenses, providing a classic and timeless look that complements various outfits and occasions. Black sunglasses are popular for their ability to add a touch of sophistication and mystery to your appearance while offering essential eye protection. Whether you're going for a casual, elegant, or edgy look, black sunglasses are a go-to choice for many fashion enthusiasts.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/DfXr5JH5/c0728f6d-27f7-4eb9-b4c1-d1580d06dc16-removebg-preview.png"
    }, {
        "categoriID": 22,
        "name": "Sunglass",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Black sunglasses are a stylish and versatile accessory designed to protect your eyes from harsh sunlight and harmful UV rays. They feature dark, opaque black frames and lenses, providing a classic and timeless look that complements various outfits and occasions. Black sunglasses are popular for their ability to add a touch of sophistication and mystery to your appearance while offering essential eye protection. Whether you're going for a casual, elegant, or edgy look, black sunglasses are a go-to choice for many fashion enthusiasts.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/FFyf7j2t/c778c59a-e6aa-4bd4-9366-7842d355f811-removebg-preview.png"
    }, {
        "categoriID": 22,
        "name": "Sunglass",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Black sunglasses are a stylish and versatile accessory designed to protect your eyes from harsh sunlight and harmful UV rays. They feature dark, opaque black frames and lenses, providing a classic and timeless look that complements various outfits and occasions. Black sunglasses are popular for their ability to add a touch of sophistication and mystery to your appearance while offering essential eye protection. Whether you're going for a casual, elegant, or edgy look, black sunglasses are a go-to choice for many fashion enthusiasts.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/W1HzQSJZ/c809e12e-cee6-4852-a184-b12decdefbdd-removebg-preview.png"
    }, {
        "categoriID": 22,
        "name": "Sunglass",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Black sunglasses are a stylish and versatile accessory designed to protect your eyes from harsh sunlight and harmful UV rays. They feature dark, opaque black frames and lenses, providing a classic and timeless look that complements various outfits and occasions. Black sunglasses are popular for their ability to add a touch of sophistication and mystery to your appearance while offering essential eye protection. Whether you're going for a casual, elegant, or edgy look, black sunglasses are a go-to choice for many fashion enthusiasts.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/ncVLrN47/da669bb0-057e-40cb-aabb-00ea5f27c2c0-removebg-preview.png"
    }, {
        "categoriID": 22,
        "name": "Sunglass",
        "price": 123,
        "size": "L , M and XL",
        "descriptions": "Black sunglasses are a stylish and versatile accessory designed to protect your eyes from harsh sunlight and harmful UV rays. They feature dark, opaque black frames and lenses, providing a classic and timeless look that complements various outfits and occasions. Black sunglasses are popular for their ability to add a touch of sophistication and mystery to your appearance while offering essential eye protection. Whether you're going for a casual, elegant, or edgy look, black sunglasses are a go-to choice for many fashion enthusiasts.",
        "SellerId": 2,
        "oldPrice": 150,
        "quantity": 25,
        "brand": "No brand",
        "picture": "https://i.postimg.cc/G21LCf34/ebf62616-806b-480a-82bf-c6a75b691f66-removebg-preview.png"
    }
];
const createProduct = (productinfo) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(productinfo, 'from service');
    const result = yield Prisma_1.prisma.product.create({
        data: productinfo
    });
    return result;
});
const getAllProduct = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, searchText = "", price = 'asc', range = 1000 } = options;
    console.log(options);
    const skipping = (parseInt(page) - 1) * 10;
    const result = yield Prisma_1.prisma.product.findMany({
        skip: skipping,
        take: 10,
        include: {
            category: true,
            author: true,
            review: true,
        },
        where: {
            price: {
                lt: parseInt(range)
            },
            OR: [
                {
                    name: {
                        contains: searchText,
                        mode: 'insensitive'
                    }
                },
                {
                    author: {
                        name: {
                            contains: searchText,
                            mode: 'insensitive'
                        },
                        country: {
                            contains: searchText,
                            mode: 'insensitive'
                        },
                        email: {
                            contains: searchText,
                            mode: 'insensitive'
                        }
                    }
                },
                {
                    category: {
                        name: {
                            contains: searchText,
                            mode: 'insensitive'
                        }
                    }
                }, {
                    descriptions: {
                        contains: searchText,
                        mode: 'insensitive'
                    }
                },
                {
                    brand: {
                        contains: searchText,
                        mode: 'insensitive'
                    }
                }
            ],
        },
        orderBy: {
            price: price
        }
    });
    const total = yield Prisma_1.prisma.product.count();
    return {
        result,
        total
    };
});
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.product.findUnique({
        include: {
            category: true,
            author: true
        },
        where: {
            id
        }
    });
    return result;
});
const getProdutBySeller = (email, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, searchText = "", sortBy = 'asc' } = options;
    const skipping = (parseInt(page) - 1) * 10;
    const result = yield Prisma_1.prisma.product.findMany({
        skip: skipping,
        take: 10,
        where: {
            author: {
                email: email
            },
            AND: [
                {
                    OR: [
                        {
                            name: {
                                contains: searchText,
                                mode: 'insensitive'
                            },
                            descriptions: {
                                contains: searchText,
                                mode: 'insensitive'
                            },
                            brand: {
                                contains: searchText,
                                mode: 'insensitive'
                            }
                        }
                    ]
                }
            ]
        },
        orderBy: {
            createdAt: sortBy
        }
    });
    const total = yield Prisma_1.prisma.product.count();
    return {
        total, result
    };
});
const getTwoPoductOfEachCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield Prisma_1.prisma.category.findMany();
    // const products = await prisma.product.findMany();
    // console.log(product,'product')
    // let products = []
    // for(const category of categories){
    //     const twoProducts = await prisma.product.findMany(
    //       );
    //       console.log(twoProducts,'hoice')
    // }
    // console.log(products)
    // return products;
    let features = [];
    for (const category of categories) {
        const product = yield Prisma_1.prisma.product.findMany({
            where: {
                categoriID: category === null || category === void 0 ? void 0 : category.id
            },
            take: 2,
            orderBy: {
                createdAt: 'desc'
            }
        });
        features.push(...product);
    }
    return features;
});
const getAllByCategory = (id, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, searchText = "", sortBy = 'asc' } = options;
    const skipping = (parseInt(page) - 1) * 10;
    const result = yield Prisma_1.prisma.product.findMany({
        take: 10,
        skip: skipping,
        include: {
            category: true,
            author: true,
        },
        where: {
            categoriID: id,
            AND: [
                {
                    OR: [
                        {
                            brand: {
                                contains: searchText,
                                mode: 'insensitive'
                            },
                            descriptions: {
                                contains: searchText,
                                mode: 'insensitive'
                            },
                            author: {
                                name: {
                                    contains: searchText,
                                    mode: 'insensitive'
                                }
                            },
                            name: {
                                contains: searchText,
                                mode: 'insensitive'
                            }
                        }
                    ]
                }
            ]
        },
        orderBy: {
            createdAt: sortBy
        }
    });
    const total = yield Prisma_1.prisma.product.count();
    return { total, result };
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id, 'hoceni');
    const result = yield Prisma_1.prisma.product.delete({
        where: {
            id
        }
    });
    return result;
});
const updateProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.product.update({
        where: {
            id
        },
        data
    });
    return result;
});
exports.productService = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    getProdutBySeller,
    getAllByCategory,
    deleteProduct,
    updateProduct,
    getTwoPoductOfEachCategory,
};
