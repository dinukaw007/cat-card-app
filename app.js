/*
|--------------------------------------------------------------------------
| Load Configurations and Imput Arguments
|--------------------------------------------------------------------------
|
*/
require('dotenv').config();


/*
|--------------------------------------------------------------------------
| Import Required Modules
|--------------------------------------------------------------------------
|
*/

const sharp = require('sharp');
const catGeneratorService = require('./cat_generator_service');



/**
* Combine Cat Image to one image
* arraybuffer
* @param first_cat_image - First cat image 
*
* arraybuffer 
* @param second_cat_image - Second catimage
*
* number 
* @param width - width of the image
*
* number
* @param height - height of the image
*
* arraybuffer object
* @return arraybuffer|null
*/
async function bind(first_cat_image, second_cat_image, width, height) {
    if (first_cat_image !== null && second_cat_image !== null) {
        
        const blankImage = await sharp({
            create: {
                width: width * 2,
                height: height,
                channels: 4,
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            }
        }).toFormat('jpeg').toBuffer();

        const firstBind = await sharp(blankImage)
            .composite([{ input: first_cat_image, gravity: 'southwest' }])
            .toFormat('jpeg').toBuffer();

        const secondBind = await sharp(firstBind)
            .composite([{ input: second_cat_image, gravity: 'southeast' }])
            .toFormat('jpeg').toBuffer();

        return secondBind;
    }
}


/**
* Save Image file to diractory
* arraybuffer
* @param file - First cat image 
*
* string 
* @param file_name - Second catimage
*
* 
* @return null
*/
async function save(file, file_name) {
    sharp(file)
        .toFile(file_name, (err, info) => {
            console.log("The file was saved!");
        });
}



//main method
async function run(params) {
    const {
        greeting = 'Hello',
        who = 'You',
        width = 400,
        height = 500,
        color = 'Pink',
        size = 100,
    } = params

    const catGenerator = new catGeneratorService(greeting,width, height, color, size);
    const cat1 = await catGenerator.generate_new_cat()

    catGenerator.set_greeting(who);
    const cat2 = await catGenerator.generate_new_cat()

    if(cat1 && cat2){
        const bindCat = await bind(cat1, cat2, width, height)

        save(bindCat, 'cat-card.jpg')
    }    
}

let argv = require('minimist')(process.argv.slice(2));
run(argv);




