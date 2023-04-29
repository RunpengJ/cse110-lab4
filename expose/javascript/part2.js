function discountPrices(prices, discount) {
    const discounted = [];
    // var finalPrice = 0;
    const length = prices.length;

    for (var i = 0; i < prices.length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        // finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(discountedPrice);
    }

    // console.log(i);
    // console.log(discountedPrice);
    console.log(length);
    return discounted;
}

console.log(discountPrices([100, 200, 300], 0.5));

let student = {
    name: 'Sarah',
    major: 'computer science',
    'Grad Year': '2022',
    greeting: function() {
        console.log('hello');
    },
    'favorite teacher': {
        name: 'thomas powell',
        course: 'cse110'
    },
    courseLoad: ['cse10', 'cse134', 'vis41']
};

console.log(student.courseLoad[0]);


alert('2'>1);