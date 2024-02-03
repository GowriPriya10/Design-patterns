
/**
 * Builder pattern allows you build complex objects step-by-step
 */
const Builder = (product) => {
    switch(product) {
        case 'chair' :
            return (type) => {
                // these can be broken into multiple steps like addLegs, addColor, addType etc.,
                return {
                    name: 'chair',
                    type,
                    legs: 4,
                    color: 'brown'
                }
            }
    } 
}

const officeChair = Builder('chair')('office');
const homeChair = Builder('chair')('home');
console.log(officeChair);
console.log(homeChair);
